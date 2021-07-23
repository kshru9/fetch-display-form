import { Component, OnInit } from '@angular/core';
import { SOURCES, DATABASES } from '../all-values';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = "Your Form";
  sources = SOURCES;
  databases= DATABASES;
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

  selectedFilters? : string[];
  onSelectFilters(value? : string[]): void {
    // this.selectedFilters = value.split(",");
    this.selectedFilters = value;
    console.log(this.selectedFilters);
  }

  selectedLimit? : string;
  onSelectLimit(value: string): void {
    this.selectedLimit = value;
    console.log(this.selectedLimit);
  }

  ans: any
  onSubmit(): void{
    this.ans = {
      "source": this.selectedSource,
      "db": this.selectedDatabase,
      "columns": this.selectedColumns,
      "filters": this.selectedFilters,
      "limit": this.selectedLimit
    };

    console.log(this.ans);
  }
  
}
