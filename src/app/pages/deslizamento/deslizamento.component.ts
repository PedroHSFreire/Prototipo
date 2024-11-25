import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deslizamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deslizamento.component.html',
  styleUrl: './deslizamento.component.scss',
})
export class DeslizamentoComponent {
  constructor(private router: Router) {}

  isMenuOpen: boolean = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isRotated: boolean = false;

  toggleRotation(): void {
    this.isRotated = !this.isRotated;
  }
  navegarParaLogin() {
    this.router.navigate(['/login']);
  }
  navegarParaQueimadas() {
    this.router.navigate(['/queimadas']);
  }
  navegarParaQualidadeDoAr() {
    this.router.navigate(['/QualidadeDoAr']);
  }
  navegarParaDeslizamento() {
    this.router.navigate(['/Deslizamento']);
  }
}
