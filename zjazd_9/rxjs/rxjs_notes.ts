
// RxJS
// https://rxjs.dev/
// https://rxviz.com/
// https://www.learnrxjs.io/
//
//  https://rxjs.dev/api/webSocket/WebSocketSubject
//  https://rxjs.dev/api/webSocket/webSocket
//
//  // STACKBLITZ
 import {
  ReplaySubject,
  BehaviorSubject,
  Subject,
  of,
  from,
  interval,
  concat,
  fromEvent,
  merge
} from 'rxjs';
import { map, tap, filter, take } from 'rxjs/operators';

const mySub = new ReplaySubject(2);
mySub.next('Zoo');
mySub.next('Bar');
mySub.next('Foo');
const subscription = mySub.subscribe(console.log);
subscription.unsubscribe();

// const mySub = new BehaviorSubject(77);
// mySub.next('Zoo');
// mySub.next('Bar');
// const subscription = mySub.subscribe(console.log);
// subscription.unsubscribe();

// const mySub = new Subject();

// mySub.next('Zoo');

// const subscription = mySub.subscribe(console.log);

// mySub.next('Bar');

// subscription.unsubscribe();

// mySub.next('Foo');

// const audiButton = document.querySelector('#audi');
// const mercedesButton = document.querySelector('#mercedes');
// const bmwButton = document.querySelector('#bmw');

// const audiButtonClick = fromEvent(audiButton, 'click');
// const mercedesButtonClick = fromEvent(mercedesButton, 'click');
// const bmwButtonClick = fromEvent(bmwButton, 'click');

// merge(audiButtonClick, mercedesButtonClick, bmwButtonClick).pipe(
//   map(event => event.target.innerText)
// ).subscribe(console.log);

// const evenNumbers = interval(500).pipe(
//   filter(num => num % 2 === 0),
//   take(4)
// );

// const oddNumbers = interval(500).pipe(
//   filter(num => num % 2 !== 0),
//   take(4)
// );

// concat(evenNumbers, oddNumbers).subscribe(console.log);

// interval(1000).pipe(
//   take(7),
//   tap(console.log)
// ).subscribe({
//   next: () => console.log('NEXT'),
//   complete: () => console.log('COMPLETE')
// });

// const array = [10, 20, 30, 60, 120, 240, 480];

// const numbers = from(array);

// numbers.pipe(
//   filter(num => num > 50),
//   map(num => num * 3),
//   tap(num => {
//     console.warn('WSZYSTKO DZIAŁA', num);
//   }),
//   map(num => num + 100),
//   filter(num => num < 1000)
// ).subscribe(console.log);
