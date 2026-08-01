import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { FloatingWhatsapp } from "./components/floating-whatsapp/floating-whatsapp";
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, FloatingWhatsapp, RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('coach-akram');
}
