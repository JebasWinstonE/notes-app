import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector: "[funFor]"
})
export default class ForDirective {

    constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef) {
        viewRef.createEmbeddedView(tempRef)
        setTimeout(() => {
            console.log(tempRef.elementRef);
            console.log(viewRef);
        }, 1000)
    }
}