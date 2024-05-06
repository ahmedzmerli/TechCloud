import { TestBed } from '@angular/core/testing';
import { ModuleformationService } from './moduleformation.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ModuleFormation } from '../models/moduleformation';



describe('ModuleformationService', () => {
  let service: ModuleformationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModuleformationService]
    });
  
    
    service = TestBed.inject(ModuleformationService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all Moduleformations', () => {
    const dummyModuleformations: ModuleFormation[] = [
      // Créez des objets de formation factices pour les tester
    ];

    service.getAll().subscribe(ModuleFormations => {
      expect(ModuleFormations.length).toBe(dummyModuleformations.length);
      expect(ModuleFormations).toEqual(dummyModuleformations);
    });

    const request = httpMock.expectOne(`${service.getApiUrl()}/retrieveallModuleFormation`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyModuleformations);
  });

  
});
