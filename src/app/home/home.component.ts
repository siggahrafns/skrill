import {Component, AfterViewInit} from '@angular/core';
import {ScrollSpyService} from "ng2-scrollspy/dist/index";

@Component({
  selector: 'home_component',
  styleUrls: ['./home.component.css'],
  template: require('./home.component.html')
})
export class HomeComponent  implements AfterViewInit {
  private pos = -200;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      //console.log('ScrollSpy::test: ', e);
      if(e ){
        let scrollTop = e.srcElement.scrollingElement.scrollTop;
        if(scrollTop > 20) {
          this.pos = scrollTop*2;
        }
        else {
          this.pos = -200;
        }

      }
    });
  }
}
