import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qualidade-do-ar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualidade-do-ar.component.html',
  styleUrl: './qualidade-do-ar.component.scss',
})
export class QualidadeDoArComponent {
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
