import {Component, AfterViewInit} from '@angular/core';
import {ScrollSpyService} from "ng2-scrollspy/dist/index";

@Component({
  selector: 'home_component',
  styleUrls: ['./home.component.css'],
  template: require('./home.component.html')
})
export class HomeComponent  implements AfterViewInit {
  private kittyStill = false;

  private kittyPosTop = -200;
  private kittyPosLeft = 0;
  private grassPos = -2000;
  private grassOpacity = 0;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      //console.log('ScrollSpy::test: ', e);
      if(e ){
        let scrollTop = e.srcElement.scrollingElement.scrollTop;
        console.log(scrollTop);

        if(scrollTop > 20) {
          this.kittyPosTop = scrollTop + Math.floor(scrollTop/2);
          this.kittyPosLeft = scrollTop - Math.floor(scrollTop/2);
        }
        if (scrollTop < 20) {
          this.kittyPosTop = -200;
          this.kittyPosLeft = 0;
        }

        if(scrollTop >= 500) {
          this.grassPos = 0;
          this.grassOpacity = 1;
        }
        if(scrollTop >= 900) {
          this.kittyPosTop =1700;
          this.kittyPosLeft = 500;
          this.kittyStill = true;
        }
        else {
          this.kittyStill = false;
          this.grassOpacity = 0;
          this.grassPos = -2000;
        }

      }
    });
  }
}
