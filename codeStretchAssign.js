// ==> arrayMult

function arrayMult (array, multiplier) {
	let product = [];
  	for ( let i = 0; i < array.length; i++ ) {
    	let index = array[i];
      	product.push(index * multiplier);
    }
    
  return product;
}


console.log(arrayMult([1, 2, 3], 2));//[2, 4, 6]
console.log(arrayMult([2], 9));//[18]
console.log(arrayMult([3, 4], 2));//[6, 8]


// ==> arrayToObject

function arrayToObject (array) {
	const object = {};
  
  	for ( let i = 0; i < array.length; i+=2 ) {
      const key = array[i];
      const value = array[i + 1];
      object[key] = value;
     
    }
  return object;
}


console.log(arrayToObject(['a', 1, 'b', 2]));//{ a: 1, b: 2}
console.log(arrayToObject(['a', 1, 'b', 2, 'c', 'd']));//{ a: 1, b: 2, c: 'd'}


// ==> keyCount

function keyCount (obj) {
  let count = 0;
  
  for ( let key in obj ) {
    count++;
  }
  return count;
}

console.log(keyCount({foo: 'bar', bazz: 'quq'}));//2
console.log(keyCount({a: 1, b: 2, c: 'x'}));//3


// ==> vendingMachine

const vendingMachine = {
  inventory: {
    snickers: {
      description: "Peanuts, Caramel, Chocolate, and Nougat.",
      quantity: "5"
    },
    milkyWay: {
      description: "Caramel, Nougat, covered in chocolate.",
      quantity: "7"
    },
    butterfinger: {
      description: "Crisp peanut butter core covered in a chocolately coating.",
      quantity: "2"
    },
    salad: {
      description: "Delicious and healthy, sometimes referred to as 'rabbit food'.",
      quantity: "15"
    }
  }
}

console.log(vendingMachine.inventory);//should display whatever snacks you chose


// ==> groupGrades

function groupGrades (array) {
  const object = {};
  let numberOfA = 0;
  let numberOfB = 0;
  let numberOfC = 0;
  let numberOfD = 0;
  let numberOfF = 0;
  
  for ( let i = 0; i < array.length; i++ ) {
    let grade = array[i];
        
    if ( grade >= 90 ) {
      let num = 'a';
      numberOfA++;
      object[num] = numberOfA;
    }
    else if ( grade >= 80 ) {
      let num = 'b';
      numberOfB++;
      object[num] = numberOfB;
    }
    else if ( grade >= 70 ) {
      let num = 'c';
      numberOfC++;
      object[num] = numberOfC;
    }
    else if ( grade >= 65 ) {
      let num = 'd';
      numberOfD++;
      object[num] = numberOfD;
    }
    else {
      let num = 'f';
      numberOfF++;
      object[num] = numberOfF;
    }

  }
  return object;
}

console.log(groupGrades([ 95, 90, 82, 60]));//{ a: 2, b: 1, f: 1}
console.log(groupGrades([ 95, 90, 82, 60, 66, 73]));//{ a: 2, b: 1, f: 1, d: 1, c: 1}


// ==> numbersAndStrings

function numbersAndStrings (array) {
  const object = {
    numbers: [],
    strings: [] };
  let nums = [];
  let str = [];
  
  for ( let i = 0; i < array.length; i++) {
    
    let idx = array[i];
    
    if ( typeof idx !== 'string' ) {
     nums.push(idx);
    } else str.push(idx);
    
    object.numbers = nums;
    object.strings = str;
  }
  return object;
}

console.log(numbersAndStrings(
  [1, "one", 2, "two", 3, "cat"]));//{ numbers: [1, 2, 3], strings: ["one", "two", "cat"] }

console.log(numbersAndStrings(
  [5, 6, 'a', 'b', 9]));//{ numbers: [5, 6, 9], strings: ['a', 'b'] }


// ==> canDrive

let p1 = {
  age: 16,
  name: 'Adam',
  favoriteColor: 'green'
};

let output = canDrive(p1);

function canDrive ( person ) {
  if ( person.age > 15 ) {
    return true;
  } else return false;
}

console.log(output); //true
console.log(canDrive({ foo: 'bar', age: 15}));//false


// ==> cat says meow

const cat = {
  name: 'Luna',
  color: 'Black',
  breed: 'Bombay',
  sound: function() {
  console.log('meow');
  }
}

cat.sound();//logs 'meow'