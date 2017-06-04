import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highLight2]'
})
export class Highlight2Directive {

  @HostListener('mouseenter') onPassar(){    
    this.backgroundColor = this.defaultColor;    
  }

   @HostListener('mouseleave') deixou(){    
    this.backgroundColor = this.hLColor;    
  }

  @HostBinding('style.backgroundColor') backgroundColor;
  

  @Input() defaultColor: string = 'white';
  @Input() hLColor: string = 'yellow';
  

  // constructor(private _elementRef: ElementRef,
  //             private _renderer: Renderer,
  //             ) { }

}
