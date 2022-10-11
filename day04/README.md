## Day4: Array Cardio Day 1

---

#### Array.prototype.sort()

```js
// Functionless
sort();

// Arrow function
sort((firstEl, secondEl) => {
  /* ... */
});

// Compare function
sort(compareFn);

// Inline compare function
sort(function compareFn(firstEl, secondEl) {
  /* ... */
});
```

- Array.sort()로 단순히 배열 정렬 가능(sorted according to each character's Unicode code point value.)
- Array.sort(compareFn) : compareFn(Specifies a function that defines the sort order)

```js
function compareFn1(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
function compareFn2(a, b) {
  return a - b;
  // 내림차순은 b-a
});
//동일한 함수임.
// array=[1,2,3,4,5] 라면 compareFn(a,b)에서 a:2,b:1 -> a:3:b:2 -> ...
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### Array.prototype.reduce()

```js
// Inline callback function
reduce(function (previousValue, currentValue) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex, array) {
  /* ... */
});
reduce(function (previousValue, currentValue, currentIndex, array) {
  /* ... */
}, initialValue);
// array = [1,2,3,4]
```

- previousValue : 이전에 호출되었던 콜백함수의 결과값. 첫 호출시 값은 array[0], but 만약 initialValue가 설정되어있다면 initialValue임.
- currentValue : 현재 element값. 첫 호출시 값은 array[1], but 만약 initialValue가 설정되어있다면 array[0]임.
- currentIndex : the index position of currentValue in the array
- array : the array to traverse.
  > To traverse an array means to access each element (item) stored in the array so that the data can be checked or used as part of a process.
  > (대강 이해하기로는..) array에 접근하기 위해 인자로 넣는 것 같음. 예를 들어 array.length
- initialValue : 처음 콜백함수 호출시 previousValue와 currentValue는 같기 떄문에(아니면 previousValue가 없다고 보거나.) 그래서 A value to which previousValue is initialized the first time the callback is called(번역하기 귀찮은..)
- Counting instances of values in an object

```js
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

#### Array.from()

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
