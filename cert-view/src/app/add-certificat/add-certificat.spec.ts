import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertificat } from './add-certificat';

describe('AddCertificat', () => {
  let component: AddCertificat;
  let fixture: ComponentFixture<AddCertificat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCertificat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCertificat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
