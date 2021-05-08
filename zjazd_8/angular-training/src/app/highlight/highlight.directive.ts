import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[wsb-highlight]'
})

export class HighlightDirective implements OnInit {


    /*
     * @Input() color: string = 'yellow'; // This is possible but then the variable name and value (color="green") needs to be added in the html tag
     */
    @Input('wsb-highlight') color: string;

    constructor(public elementRef: ElementRef) {}

    public ngOnInit(): void {
        this.elementRef.nativeElement.style.background = this.color || "yellow";
        this.elementRef.nativeElement.style.fontWeight = 'bold';
    }

}
