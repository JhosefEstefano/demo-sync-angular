import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Data } from '../models/data';
import { DataService } from '../services/data.service';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import {
  FilterService,
  ToolbarItems,
  ToolbarService,
  GridComponent,
  GroupService,
  PageService,
  SortService,
  VirtualScrollService,
  ExcelExportService,
  PdfExportService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss'],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    VirtualScrollService,
    ToolbarService,
    ExcelExportService,
    PdfExportService,
  ],
})
export class GridsComponent implements OnInit {
  public toolbarOptions!: ToolbarItems[];
  @ViewChild('grid') grid!: GridComponent;

  data: Data[] = [];

  public pageSettings!: PageSettingsModel;

  constructor(private _service: DataService) {}

  ngOnInit(): void {
    this.toolbarOptions = ['PdfExport', 'ExcelExport'];

    this.pageSettings = {
      pageSize: 20,
    };

    this._service.getData().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  async toolbarClick(args: ClickEventArgs): Promise<void> {
    if (args.item.id === 'Grid_pdfexport') {
      await this.grid.showSpinner();
      await this.grid.pdfExport({});
    } else if (args.item.id === 'Grid_excelexport') {
      await this.grid.showSpinner();
      await this.grid.excelExport();
    }
  }

  pdfExportComplete(): void {
    this.grid.hideSpinner();
  }
  excelExportComplete(): void {
    this.grid.hideSpinner();
  }

  // customizeCell(args: QueryCellInfoEventArgs) {
  //   // if (args.column!.field === 'Total') {
  //   //   if (args.data[args.column.field].value <= 30) {
  //   //     args.cell!.classList.add('below-30');
  //   //   } else if (
  //   //     args.data[args.column!.field] > 30 &&
  //   //     args.data[args.column!.field] < 80
  //   //   ) {
  //   //     args.cell!.classList.add('below-80');
  //   //   } else {
  //   //     args.cell!.classList.add('above-80');
  //   //   }
  //   // }
  // }
}
