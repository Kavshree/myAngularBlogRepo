import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'customer',
    template:  `<div>Customer: {{id}}</div>`
})

export class CustomerComponent{
    id;
    constructor(private _activeRoute: ActivatedRoute) {
        
    }
    ngOnInit() {
        this._activeRoute.params.subscribe(v => {
            this.id = v.id;
        })
    }
}