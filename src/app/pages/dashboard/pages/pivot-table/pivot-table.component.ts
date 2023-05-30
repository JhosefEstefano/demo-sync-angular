import { Component, ViewChild } from '@angular/core';
import {
  IDataOptions, PivotViewComponent, FieldListService, CalculatedFieldService, NumberFormattingService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, IDataSet, GroupingBarService, GroupingBarSettings
} from '@syncfusion/ej2-angular-pivotview';
import { DataService } from '../services/data.service';
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { Data } from '../models/data';
// import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.scss'],
  providers: [GroupingBarService],
})
export class PivotTableComponent {
  public width: string = "800";
  public dataSourceSettings!: IDataOptions;

    constructor(private _service: DataService) {}


  ngOnInit(): void {
    this._service.getData().subscribe((res) => {
            // const data = new DataManager({
            //   json: res,
            //   // tslint:disable-next-line:new-parens
            //   adaptor: new JsonAdaptor(),
            // });
      
            this.loadTable(res);
      
            // this.displayOption = { view: 'Both' } as DisplayOption;
      
    })

      this.width = "100%";

  }

  private loadTable(data: any[])
  {
    this.dataSourceSettings = {
      dataSource: data,
      expandAll: false,
      allowLabelFilter: true,
      allowValueFilter: true,
      enableSorting: true,
      columns: [{ name: 'Serie' }, { name: 'NoFactura' }],
      values: [{ name: 'CantidadVenta' }, { name: 'Total' }],
      rows: [{ name: 'CodigoBodega' }, { name: 'Bodega' }],
      // formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: []
  };    
  }
}

// export class PivotTableComponent {
//   @ViewChild('pivotview', {static: false}) pivotGridObj!: PivotViewComponent;
//   public toolbarOptions!: ToolbarItems[];
//   // public displayOption!: DisplayOption;
//   public dataSourceSettings!: IDataOptions;
//   public groupingSettings!: GroupingBarSettings;
//   public pivotData: IDataSet[] = [];
//   width: any;
//   data!: DataManager;
//   constructor(private _service: DataService) {}

//   ngOnInit(): void {
//     this._service.getData().subscribe((res) => {
//       this.data = new DataManager({
//         json: res,
//         // tslint:disable-next-line:new-parens
//         adaptor: new JsonAdaptor(),
//       });

//       this.loadTable();

//       // this.displayOption = { view: 'Both' } as DisplayOption;

//     })}


//     loadTable(){
      
//       this.toolbarOptions = [ 'Save', 'SaveAs', 'Rename', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'] as ToolbarItems[];

//       this.dataSourceSettings = {
//         dataSource: this.data,
//         type: 'JSON',
//         // expandAll: false,
//         enableSorting: true,
//         allowLabelFilter: true,
//         allowValueFilter: true,
//         columns: [
//           { name: 'Bodega', caption: 'Warehouse' },
//           { name: 'Producto', caption: 'Product' }
//         ],
//         rows: [
//           { name: 'Cliente', caption: 'Customer' }
//         ],
//         values: [
//           { name: 'CantidadVenta', caption: 'Quantity' },
//           { name: 'Total', caption: 'Total' }
//         ],
//         filters: [
//           // { name: 'Fecha', caption: 'Date' },
//           // { name: 'Vendedor', caption: 'Salesperson' }
//         ],
//         // showSubTotals: true,
//         // showColumnGrandTotals: true,
//         // showRowGrandTotals: true
//       };
    
//     this.groupingSettings = {
//       showFieldsPanel: true
//   } as GroupingBarSettings;
//     this.width = '100%';
//     }
  
//   saveReport(args: any) {
//     let reports = [];
//     let isSaved: boolean = false;
//     if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//         reports = JSON.parse(localStorage['pivotviewReports']);
//     }
//     if (args.report && args.reportName && args.reportName !== '') {
//         reports.map(function (item: any): any {
//             if (args.reportName === item.reportName) {
//                 item.report = args.report; isSaved = true;
//             }
//         });
//         if (!isSaved) {
//             reports.push(args);
//         }
//         localStorage['pivotviewReports'] = JSON.stringify(reports);
//     }
// }

// fetchReport(args: any) {
//   let reportCollection: string[] = [];
//   let reeportList: string[] = [];
//   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//       reportCollection = JSON.parse(localStorage['pivotviewReports']);
//   }
//   reportCollection.map(function (item: any): void { reeportList.push(item.reportName); });
//   args.reportName = reeportList;
// }
// // loadReport(args: any) {
// //   let reportCollection: string[] = [];
// //   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
// //       reportCollection = JSON.parse(localStorage['pivotviewReports']);
// //   }
// //   reportCollection.map(function (item: any): void {
// //       if (args.reportName === item.reportName) {
// //           args.report = item.report;
// //       }
// //   });
// //   if (args.report) {
// //       this.pivotGridObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
// //   }
// // }
// removeReport(args: any) {
//   let reportCollection: any[] = [];
//   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//       reportCollection = JSON.parse(localStorage['pivotviewReports']);
//   }
//   for (let i: number = 0; i < reportCollection.length; i++) {
//       if (reportCollection[i].reportName === args.reportName) {
//           reportCollection.splice(i, 1);
//       }
//   }
//   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//       localStorage['pivotviewReports'] = JSON.stringify(reportCollection);
//   }
// }
// renameReport(args: any) {
//   let reportCollection: string[] = [];
//   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//       reportCollection = JSON.parse(localStorage['pivotviewReports']);
//   }
//   reportCollection.map(function (item: any): any { if (args.reportName === item.reportName) { item.reportName = args.rename; } });
//   if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
//       localStorage['pivotviewReports'] = JSON.stringify(reportCollection);
//   }
// }
// // newReport() {
// //   this.pivotGridObj.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
// // }

// }

const DATA = () =>  [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];
