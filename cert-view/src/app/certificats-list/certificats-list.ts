import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { Certificate } from '../shared/interfaces/certificats.model';
import { PanelModule } from 'primeng/panel';
import { Modal } from "../shared/components/modal/modal";
import { AddCertificat } from "../add-certificat/add-certificat";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-certificats-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    PanelModule,
    Modal,
    AddCertificat,
    ButtonModule
],
  templateUrl: './certificats-list.html',
  styleUrls: ['./certificats-list.scss']
})
export class CertificatsList implements OnInit {
  certificats: Certificate[] = [];
  
  @ViewChild(Modal) modal!: Modal;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCertificats();
  }

  protected isValid() {
    this.certificats.forEach(certificat => {
      const currentDate = new Date();
      const expirationDate = new Date(certificat.expirationDate);

      certificat.valid = expirationDate > currentDate;
    });
  }

  protected getCertificats() {
    this.http.get<Certificate[]>('/api/certificats')
    .subscribe({
      next: (certificats) => {
        this.certificats = certificats;
        this.isValid();
      },
      error: (err) => {
        console.error('Error while loading the certificates');
      }
    });
  }

  protected openModal() {
    this.modal.open();
  }

  protected closeModal() {
    this.modal.close();
    this.getCertificats();
  }
}
