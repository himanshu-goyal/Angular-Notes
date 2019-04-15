﻿import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'employeeTitle'
})
    //Custom pipe transform.
export class EmployeeTitlePipe implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender.toLowerCase() == 'male') {
            return "Mr." + value;
        }
        else {
            return "Miss." + value;
        }
    }
}