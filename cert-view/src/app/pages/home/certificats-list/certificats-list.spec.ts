import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsList } from './certificats-list';

describe('CertificatsList', () => {
  let component: CertificatsList;
  let fixture: ComponentFixture<CertificatsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
