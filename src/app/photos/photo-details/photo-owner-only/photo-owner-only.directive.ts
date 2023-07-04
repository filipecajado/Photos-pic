import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { Photo } from "../../photo/photo";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector :'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective {

    @Input() ownedPhoto!: Photo ;

    constructor(
        private element: ElementRef<any>,
        private render: Renderer2,
        private userService: UserService) {}

    ngOnInit() : void {
        this.userService
            .getUser()
            .subscribe(user => {
                 if(!user || user.id != this.ownedPhoto.userId) {
                    this.render.setStyle(this.element.nativeElement, 'display', 'none');
                }
            });
    }
}
