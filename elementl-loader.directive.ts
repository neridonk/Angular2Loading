import { Directive, ElementRef, Input } from '@angular/core';
import { LoadingService } from 'services';

@Directive({
    selector: '[hasLoading]'
})
export class ElementLoaderDirective {
    public loadingnode;
    public element: HTMLElement;

    private LOADERCLASSNAME = 'loaderDirective';

    @Input()
    public loadOnInit: boolean;

    @Input()
    public set onLoading(elementName: string) {

        if (elementName == null || elementName == '')
            return;

        if (this.loadOnInit)
            this.show();

        LoadingService.getLoading(elementName).loading.subscribe(
            onLoad => {
                if (onLoad) {
                    this.show();
                    return;
                }

                if (this.element.getElementsByClassName(this.LOADERCLASSNAME).length > 0)
                    this.hide();
            }
        )
    }

    constructor(
        private _elementRef: ElementRef) {
        this.loadingnode = document.createElement('div');
        this.element = <HTMLElement>this._elementRef.nativeElement;

        this.element.style.setProperty('position', 'relative');

        this.loadingnode.innerHTML = `<div class="${this.LOADERCLASSNAME}"> <div class="progress " >  <div class="indeterminate" > </div> </div> </div>`;
    }

    private hide() {
        this.element.removeChild(this.loadingnode);
    }

    private show() {
        this.element.appendChild(this.loadingnode);
    }

}
