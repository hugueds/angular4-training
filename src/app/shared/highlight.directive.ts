import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highLight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onPassar(){    
    this.backgroundColor = 'yellow';
    this.textSize = '100px';
  }

   @HostListener('mouseleave') deixou(){    
    this.backgroundColor = 'white';
    this.textSize = '10px';
  }

  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.fontSize') textSize;

  // constructor(private _elementRef: ElementRef,
  //             private _renderer: Renderer,
  //             ) { }

}
