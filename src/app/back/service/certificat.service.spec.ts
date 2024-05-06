import { TestBed } from '@angular/core/testing';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Certificat } from '../models/certificat';
import { CertificatService } from './certificat.service';

describe('CertificatService', () => {
  let service: CertificatService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CertificatService]
    });
    service = TestBed.inject(CertificatService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve all certificats', () => {
    const dummyCertificats: Certificat[] = [
      // Créez des objets de Certificat factices pour les tester
    ];

    service.getAll().subscribe(certificats => {
      expect(certificats.length).toBe(dummyCertificats.length);
      expect(certificats).toEqual(dummyCertificats);
    });

    const request = httpMock.expectOne(`${service.getApiUrl()}/retrieveallCertificat`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCertificats);
  });

  
});

