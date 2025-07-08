import { Component, Output, EventEmitter } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-certificat',
  imports: [
    FormsModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
    PanelModule
  ],
  templateUrl: './add-certificat.html',
  styleUrl: './add-certificat.scss'
})
export class AddCertificat {
  form = {
    domain: '',
    publicKey: '',
    privateKey: ''
  };
  @Output() certificatAdded = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  onFileSelect(event: any, target: 'publicKey' | 'privateKey') {
    const file = event.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.form[target] = reader.result as string;
    };
    reader.readAsText(file);
  }

  submit() {
    const { domain, privateKey, publicKey } = this.form;

    if (!domain || !privateKey || !publicKey) {
      return;
    }

    this.http.post('/api/certificats', { domain, privateKey, publicKey }).subscribe({
      next: () => {
        this.form = { domain: '', publicKey: '', privateKey: '' };
        this.certificatAdded.emit();
      },
    });
  }
}
