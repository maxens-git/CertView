import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-stats-panel',
  imports: [
    CardModule,
    PanelModule
  ],
  templateUrl: './stats-panel.html',
  styleUrl: './stats-panel.scss'
})
export class StatsPanel {
  certificatCount: number = 3;
}
