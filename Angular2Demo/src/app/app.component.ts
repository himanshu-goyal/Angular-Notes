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

    //to apply multiple styling class, we seperate them by spaces as follows.
    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = false;

    //This method will be used if we want to removed or add multiple class.
    //it will done using ngClass in html.
    addClasses() {
        let classes = {
            //key value pair.
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    }
    onClick(): void{
        console.log("button clicked");
    }
}