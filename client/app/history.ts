/// <reference path="../../typings/tsd.d.ts" />

import {Component, View}                from 'angular2/angular2';
import {CanReuse, ComponentInstruction} from 'angular2/router';

declare var jQuery:any;

@Component({
    selector: 'history-block'
})

@View({
    template: `
        <h1> History</h1>
        `
})

export class History implements CanReuse {

    constructor() {
        console.log("history.ts: in constructor")
    }

    canReuse(next: ComponentInstruction, prev: ComponentInstruction) {
	return true;
    }
}
