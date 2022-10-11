const dogs = [
    { name: 'Snickers', age: 2 }, 
    { name: 'hugo', age: 8 }
];
const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated(=삽입)
console.log('Hello I am %s', 'ball-sona');

// Styled
console.log('%c  I am 24 years old..', 
    'font-size:50px; color:red; border:2px solid black'
);

// warning!
console.warn('THIS IS WARNING');

// Error :|
console.error('THIS IS ERROR');

// Info
console.info('THIS IS INFO');

// Testing
// The console.assert() method writes an error message to the console if the assertion is false. 
// If the assertion is true, nothing happens.
console.assert(1 === 2, 'THIS IS TRUE');
console.assert(1 === 2, 'THIS IS FALSE');
console.assert(p.classList.contains('class'),'wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(document.body);
console.dir(document.body);

// Grouping together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}, age : ${dog.age}`);
    console.log('oh daeback');
    console.groupEnd(`${dog.name}`);
})

// counting
for(let i=0;i<5;i++){
    console.count('Sona');
}
console.countReset() //count 초기화

// timing
console.time('Fetching data');
fetch('')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//table
console.table(dogs);