import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class MyEffect {
    constructor(private actions$: Actions) {
    }
}
