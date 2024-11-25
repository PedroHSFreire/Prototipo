import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslizamentoComponent } from './deslizamento.component';

describe('DeslizamentoComponent', () => {
  let component: DeslizamentoComponent;
  let fixture: ComponentFixture<DeslizamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeslizamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslizamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
