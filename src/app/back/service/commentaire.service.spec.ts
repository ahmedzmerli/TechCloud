import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentaireService } from './commentaire.service';
import { Commentaire } from '../models/commentaire';

describe('CommentaireService', () => {
  let service: CommentaireService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentaireService]
    });
    service = TestBed.inject(CommentaireService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve all Commentaire', () => {
    const dummyCommentaires: Commentaire[] = [
      // Créez des objets de Certificat factices pour les tester
    ];

    service.getAll().subscribe(commentaires => {
      expect(commentaires.length).toBe(dummyCommentaires.length);
      expect(commentaires).toEqual(dummyCommentaires);
    });

    const request = httpMock.expectOne(`${service.getApiUrl()}/retrieveallCommentaire`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCommentaires);
  });

  
});
