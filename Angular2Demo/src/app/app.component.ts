import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    imagePath: string = 'images/logo.jpg';

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    isDisabled: boolean = false;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = false;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };

        return classes;
    }
    onClick(): void{
        console.log("button clicked");
    }
}