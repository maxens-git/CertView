import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { StatsPanel } from "./stats-panel/stats-panel";
import { CertificatsList } from "./certificats-list/certificats-list";

@Component({
  selector: 'app-home',
  imports: [
    Header,
    StatsPanel,
    CertificatsList
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
