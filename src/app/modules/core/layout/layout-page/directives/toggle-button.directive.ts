import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appToggleButton]'
})
export class ToggleButtonDirective {

    constructor(private elementRef: ElementRef) {}

    @HostBinding('class.content-page__app-personal-cabinet-form-editor')  isShowFormAccount = false;

    @Input() set showFormAccount(value: boolean) {
        this.isShowFormAccount = value;
    }

    @Input() set showLayoutLock(value: boolean) {
        if (value) {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page main-layout-page__lock';
        }
        else {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page';
        }
    }
}
