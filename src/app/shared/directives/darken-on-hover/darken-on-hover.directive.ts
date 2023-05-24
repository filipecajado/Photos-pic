import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    constructor(private el: ElementRef, private render: Renderer2){}

    @Input() brigthness = '70%';

    @HostListener('mouseover')
    darkenOn(){
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brigthness})`);
        
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
        
    }
}