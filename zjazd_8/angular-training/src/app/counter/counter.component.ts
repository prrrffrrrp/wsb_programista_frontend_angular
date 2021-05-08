import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'wsb-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {

    @Input() count: number = 0;

    @Output() countChange: EventEmitter<number> = new EventEmitter();

    addOne() {
        this.count += 1;

        this.countChange.emit(this.count);
    }

}
