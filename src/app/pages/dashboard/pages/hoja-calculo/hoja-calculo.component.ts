import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent,BeforeSaveEventArgs  } from '@syncfusion/ej2-angular-spreadsheet';
import { Data } from '../models/data';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-hoja-calculo',
  templateUrl: './hoja-calculo.component.html',
  styleUrls: ['./hoja-calculo.component.scss']
})
export class HojaCalculoComponent {
  data: Data[] = [];
    @ViewChild('spreadsheet')  spreadsheetObj!: SpreadsheetComponent;

    constructor(private _service: DataService) {}

    ngOnInit(): void {
      this._service.getData().subscribe((res) => {
        this.data = res;
        console.log(res);
      });

    }
      beforeSave (args: BeforeSaveEventArgs) {
        // your code snippets here'
        console.log(args);
    }
}