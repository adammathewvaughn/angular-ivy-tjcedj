import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabledata',
  template: `<h2>{{name}}</h2>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TableDataComponent  {
  @Input() name: string;
}
