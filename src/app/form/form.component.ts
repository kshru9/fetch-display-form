import { Component } from '@angular/core';
import { SOURCES, MAX_COLUMNS, TABLES } from '../all-values';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  constructor ( private http: HttpClient){
    this.getDbList();
  }

  sources: string[] = [];
  tables: string[] = [];
  columns: string[] = [];

  saveUrl: string = "http://localhost:8081/api/save";
  getDbsUrl: string = "http://localhost:8081/api/getdbs";
  getTablesUrl: string = "http://localhost:8081/api/gettables/";
  getColumnsUrl: string = "http://localhost:8081/api/getcolumns";

  reset(){
    this.selectedColumns = [];
    this.selectedTable = "";
    this.selectedFilters = "";
    this.selectedLimit = "";
    this.selectedSource = "";
    this.checkBoxValue.fill(false);
  }
  
  resetDb(){
    this.selectedColumns = [];
    this.selectedTable = "";
    this.selectedFilters = "";
    this.selectedLimit = "";
    this.checkBoxValue.fill(false);
  }

  selectedSource : string = "";
  onSelectSource(value: string): void {
    this.reset();
    this.selectedSource = value;
    this.getTablesList();
    console.log(this.selectedSource);
  }

  selectedTable : string = "";
  onSelectTable(value: string): void {
    this.resetDb();
    this.selectedTable = value;
    this.getColumnsList();
    console.log(this.selectedTable);
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

  getDbList(): void {
    this.http.get<string[]>(this.getDbsUrl).subscribe(
        (data) => {
            console.log(data, "data");
            this.sources = data
        },
        (error) => console.log(error),
    );
  }

  getTablesList(): void {
    this.http.get<string[]>(this.getTablesUrl+this.selectedSource).subscribe(
      (data) => {
        console.log(data);
        this.tables = data
      },
      (error) => console.log(error),
    )
  }

  getColumnsList(): void {
    let json = {
      "db": this.selectedSource,
      "table": this.selectedTable
    };

    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
    .set('Content-Type', 'application/json');

    this.http.post<string[]>(this.getColumnsUrl, json, {headers: headers}).subscribe(
      (response) => {
        console.log(response);
        this.columns = response;
      },
      (error) => console.log(error),
    )
  }
  
  filters : string[] = [];
  response: string = "";
  submitForm(): void {
    
    // console.log(this.selectedSource);
    // console.log(this.selectedTable);
    // console.log(this.selectedColumns);
    // console.log(this.selectedFilters);
    // console.log(this.selectedLimit);
    
    this.filters = this.selectedFilters.split(",");

    // console.log(this.filters);

    let json = {
      "source" : this.selectedSource,
      "db": this.selectedTable,
      "columns": this.selectedColumns,
      "filters": this.filters,
      "limit": this.selectedLimit
    };
    
    console.log(json);
    
    
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
    .set('Content-Type', 'application/json');
    
    this.http.post(this.saveUrl, json, {headers: headers, responseType: 'text'}).subscribe(
      (response) => {
        console.log(response);
        this.response = response;
      },
      (error) => {
        console.log(error);
        this.response = "Error";
      }
      )    
  }
    
}
