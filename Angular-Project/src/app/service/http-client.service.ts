import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class Employee {
    constructor(
        public empId : string,
        public name : string,
        public designation : string,
        public salary : string
    ){}
}

@Injectable({
    providedIn : 'root'
})
export class HttpClientService{
    constructor(private httpClient : HttpClient){}
    getEmployees()
    {
        return this.httpClient.get<Employee[]>('http://localhost:8080/api/employees/allemployees');
    }
}