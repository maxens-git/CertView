import { Component } from '@angular/core';
import { Header } from "./header/header";
import { StatsPanel } from "./stats-panel/stats-panel";
import { CertificatsList } from "./certificats-list/certificats-list";

@Component({
  selector: 'app-root',
  imports: [
    Header,
    StatsPanel,
    CertificatsList
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'cert-view';
}