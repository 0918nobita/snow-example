import { interval } from '/web_modules/rxjs.js';
import { take } from '/web_modules/rxjs/operators.js';

const num$ = interval(1000).pipe(take(4));

num$.subscribe(x => console.log('Next: ', x));
