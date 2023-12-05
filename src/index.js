import { of, from, fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

const observable = fromEvent(document, 'keydown').pipe(
    map((event) => {
        return event.code === 'Space' ? event.code : null;
    })
    // map((event) => event.code),
    // filter((code) => code === "Space")
);

const subscription = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('completed');
    }
});

console.log('hello');