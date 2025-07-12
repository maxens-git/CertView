import { Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Certificate } from '../../../shared/interfaces/certificats.model';
import { PanelModule } from 'primeng/panel';
import { Modal } from "../../../shared/components/modal/modal";
import { AddCertificat } from "../add-certificat/add-certificat";
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CertificatService } from '../../../shared/services/CertificatesService';

@Component({
  selector: 'app-certificats-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    PanelModule,
    Modal,
    AddCertificat,
    ButtonModule,
    BadgeModule
],
  templateUrl: './certificats-list.html',
  styleUrls: ['./certificats-list.scss']
})
export class CertificatsList {
  
  @ViewChild(Modal) modal!: Modal;

  protected certificats: Certificate[] = [];

  constructor(private certificatService: CertificatService) {}
  
  ngOnInit(): void {
    this.loadCertificats();
  }

  protected loadCertificats() {
    this.certificatService.getCertificates().subscribe({
      next: (certs) => this.certificats = certs,
      error: () => console.error('Failed to load certificates')
    });
  }

  protected openModal() {
    this.modal.open();
  }

  protected closeModal() {
    this.modal.close();
  }
}
