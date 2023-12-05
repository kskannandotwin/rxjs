import { of, from } from "rxjs";
import { map } from "rxjs/operators";

const observable = of(1, 2, 3, 4, 5);

const subscription = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('completed');
    }
});

console.log('hello');