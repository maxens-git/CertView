export interface Certificate {
  id: number;
  domain: string;
  valid: boolean;
  expirationDate: string;
  issuedDate: string;
  authority: string;
  type: string;
  keySize: number;
  algorithm: string;
  lastRenewalDate: string | null;
}