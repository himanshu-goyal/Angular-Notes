import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple',
    template: `You Entered: {{simpleInput}}`
})

export class SimpleComponent {
   @Input() simpleInput: string;
}