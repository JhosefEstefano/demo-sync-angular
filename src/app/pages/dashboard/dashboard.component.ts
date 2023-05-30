import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = true;
  public onCreated(args: any) {
       this.sidebar.element.style.visibility = '';
  }
  closeClick(): void {
      this.sidebar.hide();
  };

  toggleClick():void{
    this.sidebar.show();
  }
}