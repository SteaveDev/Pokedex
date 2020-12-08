import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPkmnBorderCard]'
})
export class BorderCardDirective {

  private GREY_COLOR = 'grey';
  private GREEN_COLOR = 'green';
  @Input('appPkmnBorderCard') borderColor: any;


  private setBorder(color: string): void{
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number): void{
    this.element.nativeElement.style.height = height + 'px';
  }

  constructor(private element: ElementRef){
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBorder(this.borderColor || this.GREEN_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder(this.GREY_COLOR);
  }


}
