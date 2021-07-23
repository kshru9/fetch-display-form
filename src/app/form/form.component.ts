import { Component, OnInit } from '@angular/core';
import { VALUES } from '../all-values';
import { Value } from '../value';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = "Your Form";
  values = VALUES;
  // values = {
  //   "sources" : [
  //     {
  //       "default" : [
  //         {
  //           "medicare_demographic" : [
  //             "name",
  //             "id",
  //             "county"
  //           ]
  //         }
  //       ]
  //     }, 

  //     {
  //       "source2" : [
  //         {
  //           "table2" : [
  //             "col1",
  //             "col2",
  //             "col3"
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }


  // selectedValue? : Value;
  // onSelect(value: Value): void {
  //   this.selectedValue = value;
  // }

  selectedSource? : string;
  onSelectSource(value: string): void {
    this.selectedSource = value;
  }

  selectedDatabase? : string;
  onSelectDatabase(value: string): void {
    this.selectedDatabase = value;
  }
  
  selectedColumns? : string;
  onSelectColumns(value: string): void {
    this.selectedColumns = value;
  }
}
