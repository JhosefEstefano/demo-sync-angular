import { Component, ViewChild } from '@angular/core';
import { RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { QueryBuilderComponent, RuleChangeEventArgs, RuleModel } from '@syncfusion/ej2-angular-querybuilder';
import { hardwareData } from './data-source';

@Component({
  selector: 'app-builder-query',
  templateUrl: './builder-query.component.html',
  styleUrls: ['./builder-query.component.scss']
})
export class BuilderQueryComponent {
  public data!: Object[];
  public importRules!: RuleModel;
  @ViewChild('querybuilder') qryBldrObj!: QueryBuilderComponent;
  @ViewChild('dialog') Dialog!: DialogComponent;
  public animationSettings: Object = { effect: 'Zoom',  duration: 400 };
  public showCloseIcon: Boolean = true;
  public hidden: Boolean = false;
  public width: string = '70%';
  public height: string = '80%';
  public promptHeader: string = 'Querybuilder Rule';
  ngOnInit(): void {
      this.data = hardwareData;
      this.importRules = {
      'condition': 'or',
      'rules': [{
          'label': 'Category',
          'field': 'Category',
          'type': 'string',
          'operator': 'equal',
          'value': 'Laptop'
      }]
  };
  }
   getSql(): void {
      this.Dialog.content = this.qryBldrObj.getSqlFromRules(this.qryBldrObj.getRules());
      this.Dialog.show();
  }
   getJson(): void {
       this.Dialog.content =  '<pre>' + JSON.stringify({ condition: this.qryBldrObj.rule.condition, rules: this.qryBldrObj.rule.rules }, null, 4) + '</pre>';
      this.Dialog.show();
  }
}