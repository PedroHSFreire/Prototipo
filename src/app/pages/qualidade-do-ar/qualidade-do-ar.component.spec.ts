import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualidadeDoArComponent } from './qualidade-do-ar.component';

describe('QualidadeDoArComponent', () => {
  let component: QualidadeDoArComponent;
  let fixture: ComponentFixture<QualidadeDoArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualidadeDoArComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualidadeDoArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
