import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class RestServices {
    constructor (private http: HttpClient) {}

    saveUrl: string = "http://localhost:8081/api/save";
    getDbsUrl: string = "http://localhost:8081/api/getdbs";

    onSave(json:any): string{
        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
        .set('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
        .set('Content-Type', 'application/json');
        
        let ans = "Error";
        this.http.post(this.saveUrl, json, {headers: headers, responseType: 'text'}).subscribe(
        (response) => {
            console.log(response);
            ans = response;
        },
        (error) => {
            console.log(error);
            ans = "Error";
        }
        )
        return ans;
    }

    getDbList(): string[] {
        var ans = [""];
        this.http.get<string[]>(this.getDbsUrl).subscribe(
            (data) => {
                console.log(data, "data");
                ans=data;
            },
            (error) => console.log(error),
        );
        console.log(ans, "ans");
        return ans;
    }
}