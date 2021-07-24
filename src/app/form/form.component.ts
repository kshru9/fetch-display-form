import { Component } from '@angular/core';
import { SOURCES, DATABASES, MAX_COLUMNS } from '../all-values';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  title = "Your Form";
  sources = SOURCES;
  databases= DATABASES;

  constructor ( private http: HttpClient){}

  selectedSource : string = "";
  onSelectSource(value: string): void {
    this.selectedSource = value;
    console.log(this.selectedSource);
  }

  selectedDatabase : string = "";
  onSelectDatabase(value: string): void {
    this.selectedDatabase = value;
    console.log(this.selectedDatabase);
  }


  selectedColumns : string[] = [];
  checkBoxValue: boolean[] = new Array(MAX_COLUMNS).fill(false);
  onSelectColumns(value: string, index: number): void {
    console.log(this.checkBoxValue);
    const val_ind = this.selectedColumns.indexOf(value,0);
    if (val_ind>-1 && this.checkBoxValue[index]==true){
      this.selectedColumns.splice(val_ind,1);
    }
    else if (val_ind<0 && this.checkBoxValue[index]==false){
      this.selectedColumns.push(value);
    }
    console.log(this.selectedColumns);
  }

  selectedFilters : string = "";
  onSelectFilters(value : string): void {
    this.selectedFilters = value;
    console.log(this.selectedFilters);
  }

  selectedLimit : string = "";
  onSelectLimit(value : string): void {
    this.selectedLimit = value;
    console.log(this.selectedLimit);
  }

  // ans: any
  // onSubmit(): void{
  //   this.ans = {
  //     "source": this.selectedSource,
  //     "db": this.selectedDatabase,
  //     "columns": this.selectedColumns,
  //     "filters": this.selectedFilters,
  //     "limit": this.selectedLimit
  //   };
    
  //   console.log(this.ans);
  // }
  
  filters? : string[];
  submitForm(): void {
    // var formData: any = new FormData();
    // formData.append("source", this.selectedSource);
    // formData.append("db", this.selectedDatabase);
    // formData.append("columns", this.selectedColumns);
    // formData.append("filters", this.selectedFilters);
    // formData.append("limit", this.selectedLimit);
    
    // console.log(formData.value);
    
    console.log(this.selectedSource);
    console.log(this.selectedDatabase);
    console.log(this.selectedColumns);
    console.log(this.selectedFilters);
    console.log(this.selectedLimit);
    
    this.filters = this.selectedFilters?.split(",");

    console.log(this.filters);

    let json = {
      "source" : this.selectedSource,
      "db": this.selectedDatabase,
      "columns": this.selectedColumns,
      "filters": this.filters,
      "limit": this.selectedLimit
    };
    
    console.log(json);
    
    
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT");
    
    this.http.post('http://localhost:8081/api/save', json, {headers: headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      )
      
    alert("Your response is recorded. Wait for 5 mins to get response.");
    
  }
    
}
