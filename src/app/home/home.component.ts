import {Component, AfterViewInit} from '@angular/core';
import {ScrollSpyService} from "ng2-scrollspy/dist/index";

@Component({
  selector: 'home_component',
  styleUrls: ['./home.component.css'],
  template: require('./home.component.html')
})
export class HomeComponent  implements AfterViewInit {
  private startTransition: boolean = false;
  private secondTransition: boolean = false;

  private moveLeft = false;

  private kittyStill = false;
  private kittyPosTop = 40;
  private kittyPosLeft = 200;
  private kittyOpacity = 0;

  private grassPos = -2000;
  private grassOpacity = 0;

  private welcomePosLeft = -50;
  private welcomeOpacity = 0;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {
    let that = this;
    setTimeout(function() {
      that.startTransition = true;
      setTimeout(function() {
        console.log('hallo')
        that.secondTransition = true;
      }, 2500);
    }, 1000);



    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      if(e ){
        /*let scrollTop = e.srcElement.scrollingElement.scrollTop;
        console.log(scrollTop);

        if(scrollTop > 53 && scrollTop <= 300) {
          this.kittyPosTop = scrollTop + Math.floor(scrollTop/2);
          this.kittyPosLeft += 1;
          this.kittyOpacity = 1;
        }
        if (scrollTop <= 53) {
          this.kittyPosTop = 40;
          this.kittyPosLeft = 200;
          this.kittyOpacity = 0;
        }
        if (scrollTop >= 300) {
          this.kittyPosTop  = scrollTop + Math.floor(scrollTop/2);
          this.kittyPosLeft = scrollTop - Math.floor(scrollTop/3);
        }

        if(scrollTop >= 500) {
          this.grassPos = 0;
          this.grassOpacity = 1;
        }
        if(scrollTop >= 900) {
          this.moveLeft = true;
          this.kittyPosTop =1700;
          this.kittyPosLeft = 9000;
          this.kittyStill = true;
          this.welcomePosLeft = 50;
          this.welcomeOpacity = 1;

        }
        else {
          this.moveLeft = false;
          this.kittyStill = false;
          this.grassOpacity = 0;
          this.grassPos = -2000;
          this.welcomePosLeft = -50;
          this.welcomeOpacity = 0;
        }*/
      }
    });
  }
}
