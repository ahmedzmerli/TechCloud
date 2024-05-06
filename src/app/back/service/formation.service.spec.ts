import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormationService } from './formation.service';
import { Formation } from '../models/formation';


describe('FormationService', () => {
  let service: FormationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormationService]
    });
    service = TestBed.inject(FormationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all formations', () => {
    const dummyFormations: Formation[] = [
      // Créez des objets de formation factices pour les tester
    ];

    service.getAll().subscribe(formations => {
      expect(formations.length).toBe(dummyFormations.length);
      expect(formations).toEqual(dummyFormations);
    });

    const request = httpMock.expectOne(`${service.getApiUrl()}/retrieveallFormation`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyFormations);
  });

  
});
