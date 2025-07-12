import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CertificatService } from '../../../shared/services/CertificatesService';
import { Certificate } from '../../../shared/interfaces/certificats.model';

@Component({
  selector: 'app-stats-panel',
  imports: [
    CardModule,
    PanelModule
  ],
  templateUrl: './stats-panel.html',
  styleUrl: './stats-panel.scss'
})
export class StatsPanel {

  certificateCount: number = 0;
  validCertificateCount: number = 0;
  expiredCertificateCount: number = 0;

  protected certificats: Certificate[] = [];

  constructor(private certificatService: CertificatService) {}

  ngOnInit(): void {
    this.loadCertificats();
    this.updateInformations();
  }

  protected loadCertificats() {
    this.certificatService.getCertificates().subscribe({
      next: (certs) => this.certificats = certs,
      error: () => console.error('Failed to load certificates')
    });
  }

  protected updateInformations() {
    this.certificateCount = this.certificats.length;
    this.validCertificateCount = this.certificats.filter(c => c.valid).length;
    this.expiredCertificateCount = this.certificateCount - this.validCertificateCount;
  }
}
