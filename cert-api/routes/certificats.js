const express = require('express');
const router = express.Router();
const db = require('../db');
const forge = require('node-forge');
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM certificats');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des certificats' });
  }
});

router.get('/:id', (req, res) => {
  const certId = parseInt(req.params.id, 10);
  const certificat = { id: certId, domaine: 'example.com', valide: true };

  res.json(certificat);
});

router.post('/', async (req, res) => {
  const { domain, publicKey, privateKey } = req.body;

  if (!domain || !publicKey || !privateKey) {
    return res.status(400).json({ error: 'Champs manquants.' });
  }

  if (!publicKey.includes('BEGIN CERTIFICATE') || !privateKey.includes('BEGIN PRIVATE KEY')) {
    return res.status(400).json({ error: 'Certificat ou clé invalide.' });
  }

  const dirPath = path.join(__dirname, '..', 'certificats');
  const crtPath = path.join(dirPath, `${domain}.crt`);
  const keyPath = path.join(dirPath, `${domain}.key`);

  try {
    const isValidDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
    if (!isValidDomain) {
      return res.status(400).json({ error: 'Invalid domain name.' });
    }

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    if (fs.existsSync(crtPath) || fs.existsSync(keyPath)) {
      return res.status(409).json({ error: 'Certificate for this domain already exists.' });
    }

    fs.writeFileSync(crtPath, publicKey);
    fs.writeFileSync(keyPath, privateKey);

    const pki = forge.pki;
    const cert = pki.certificateFromPem(publicKey);
    const parsedAlgorithm = cert.signatureOid;
    const parsedIssuedDate = cert.validity.notBefore;
    const parsedExpirationDate = cert.validity.notAfter;

    const parsedAuthority = cert.issuer.attributes.find(attr => attr.name === 'organizationalUnitName')?.value;

    const parsedKeySize = cert.publicKey.n?.bitLength?.() || null;

    await db.query(
      `INSERT INTO certificats 
        (domain, authority, algorithm, keySize, issuedDate, expirationDate, valid)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        domain,
        parsedAuthority || 'Unknown',
        parsedAlgorithm,
        parsedKeySize,
        parsedIssuedDate,
        parsedExpirationDate,
        true
      ]
    );

    res.status(201).json({ message: 'Certificate added successfully.' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
