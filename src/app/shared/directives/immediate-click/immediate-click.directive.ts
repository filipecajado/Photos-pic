import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatformDetectorService) {}

        ngOnInit(): void {    
            this.platFormDetector.isPlatformBrowser() &&
            this.element.nativeElement.click();

    }
}