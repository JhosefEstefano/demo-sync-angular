import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
@Component({
  selector: 'app-layout-table',
  templateUrl: './layout-table.component.html',
  styleUrls: ['./layout-table.component.scss']
})
export class LayoutTableComponent {
  @ViewChild('default_dashboard') dashboard!: DashboardLayoutComponent;
  constructor(@Inject('sourceFiles') private sourceFiles: any) {
      sourceFiles.files = ['default-style.css'];
  }
  public count: number = 8;
  public cellSpacing: number[] = [10, 10];
  addPanel(): void {
      let panel: PanelModel[] = [{
          'id': this.count.toString(), 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
          content: '<span id="close" class="e-template-icon e-close-icon"></span><div class="text-align">' + this.count.toString() + '</div>'
      }];
      this.dashboard.addPanel(panel[0]);
      let closeIcon: any = document.getElementById(this.count.toString())!.querySelector('.e-close-icon');
      closeIcon.addEventListener('click', this.onCloseIconHandler.bind(this));
      this.count = this.count + 1;
  }
  onCloseIconHandler(event: any): void {
      if ((<HTMLElement>event.target).offsetParent) {
          this.dashboard.removePanel((<HTMLElement>event.target).offsetParent!.id);
      }
  }
 
}
