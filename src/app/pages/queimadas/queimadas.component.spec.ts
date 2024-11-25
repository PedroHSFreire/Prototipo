import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueimadasComponent } from './queimadas.component';

describe('QueimadasComponentComponentComponent', () => {
  let component: QueimadasComponent;
  let fixture: ComponentFixture<QueimadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueimadasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueimadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
