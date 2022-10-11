    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    age = 200;

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    team[3] = 'Lux';
    // -> Edit the original array too. 
    // -> It's because team is array reference of players;

    // Copy
    const team2 = players.slice();
    team2[3] = 'Lux';

    // or create a new array and concat the old one in
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    const team4 = [...players];
    
    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    captain.age = 99;
    // -> Edit orginal 

    // how do we take a copy instead?
    const captain2 = Object.assign({},person,{age:99});

    // We will hopefully soon see the object ...spread
    const captain3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. 
    // lodash has a cloneDeep method, but you should think twice before using it.

    const sona = {
        name : 'sona',
        age : 24,
        social:{
            insta:'@ballsona',
            facebook : 'ballsona'
        }
    }
    const dev = Object.assign({},sona); // 1level deep
    // dev.social.insta = 'none';
    // console.log(sona.social.insta) // 'none'

    const dev2 = JSON.parse(JSON.stringify(sona)); // JSON -> String -> Obj 
    // dev.social.insta = 'none';
    // console.log(sona.social.insta) // '@ballsona'
