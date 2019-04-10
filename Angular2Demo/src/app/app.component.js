"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imagePath = 'images/logo.jpg';
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.isDisabled = false;
        //to apply multiple styling class, we seperate them by spaces as follows.
        this.classesToApply = 'boldClass italicsClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = false;
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    //This method will be used if we want to removed or add multiple class.
    //it will done using ngClass in html.
    AppComponent.prototype.addClasses = function () {
        var classes = {
            //key value pair.
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };
    AppComponent.prototype.onClick = function () {
        console.log("button clicked");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map