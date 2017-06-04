import { CamelCasePipe } from './camel-case.pipe';
import { Component, OnChanges } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  title = 'app works!';
  phrase = 'um dia me disseram que as nuvens não eram de algodão';
  filter: any;
  
  tests = [
    'Abobrinha',
    'Melancia',
    'Jaca',
    'Caqui',
    'Abobra'
  ]

  ngOnChanges() {
    console.log(this.filter)
  }

  cons() {
    console.log(this.filter)
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  })

  testFilter() {

    if (this.filter === undefined || this.tests.length == 0 || this.filter.trim() == '') {
      return this.tests;
    }

    return this.tests.filter(v => {
      if (v.toLowerCase().indexOf(this.filter) >= 0) {
        return true;
      }
      return false;
    })




  }


}
