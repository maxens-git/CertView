import { Component, Input, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  imports: [
    DialogModule
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() title: string = '';

  protected visible = false;

  public open() {
    this.visible = true;
  }

  public close() {
    this.visible = false;
  }

  protected onHide() {
    this.visible = false;
  }
}
