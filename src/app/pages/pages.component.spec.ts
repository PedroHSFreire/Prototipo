import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueimadasComponent } from './pages.component';

describe('QueimadasComponent', () => {
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
