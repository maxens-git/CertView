import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Certificate } from '../interfaces/certificats.model';

@Injectable({ providedIn: 'root' })
export class CertificatService {

  constructor(private http: HttpClient) {}

  public getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>('/api/certificats').pipe(
      map(certificats => certificats.map(cert => ({
        ...cert,
        valid: new Date(cert.expirationDate) > new Date()
      })))
    );
  }
}
