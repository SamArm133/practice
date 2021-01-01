
var app = new Vue({
  el: '#title',
  data: {
    message: 'Hello!'
  }
})

//FORMULARIO 

const valu = new Vue({
	el: '#formu',
	data: {
		errors: [],
		name: null,
		password: null
	},
	methods: {
		checkForm: function (enlace) {
			if ( this.name && this.password ) {
				return true;
			}
			this.errors = [];

			if (!this.name) {
				this.errors.push('The name is required.');
			}
			if (!this.password) {
				this.errors.push('El password is required.');
			}

			enlace.preventDefault();
		}
	}
});

// others codes
var inputs = documnet.getElementById('can').className('inputsuccess');

	if(inputs >= 0) {
		inputs.alert('inputErrors')
	}else {
		inputs.alert('inputsuccess')
	};

// other obj
	class Car = {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}

		age() {
			let date= new Date();
			return date.getFullYear() - this.yaer;
		}
	}

	let myCar = new car("BMW", 2016);
		console.log("my car is"  + "myCar.age() "  + "esta mas viego.")
		console.log("y vamos a ir a comprar")


// these codes are a test


		var numeros = [10,3,3,4,45,6,7,7,777,]


	if(numeros[8] >= 50) {
		console.log("mayor")
	}
	else{
		console.log("lo siento")
	}

let title = "Samuel";
 	document.getElementById("titulo").innerHTML = title;

/*CALLBACK*/

function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);

/*test*/

function checksPassword(password){
var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
if(!pattern.test(password)) {
$(".spassword_error").show();
}
else
{
$(".spassword_error").hide();
}
}

// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 10 = 20

function showTable(number) {
  /*number = 10*/

  for (var i = 0; i < 10; i++) {
    var resultado = number * (i + 1)

    console.log(number + ' x ' + (i + 1) + ' = ' + resultado)
  }

}

/*showTable(3)
showTable(5)
*/

var multiplicador = 5;



var multiplicador2 = 1;
var resultado = null
var result = ''
var test

function problema() {
  var result2 = multiplicador + test

  console.log(result2)
}

problema()

const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

var persona = {
  nombre: ['Bob', 'Smith'],
  edad: 32,
  genero: 'masculino',
  intereses: ['música', 'esquí'],
  bio: function () {
    alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  saludo: function() {
    alert('Hola, Soy '+ this.nombre[0] + '. ');
  }
};

var name = prompt("what is your name");
var yearsOld = parseInt(prompt("how old are you"));
 console.log("Hi " + name + " how many years Old " + yearsOld)


function cambiarTitulo() {

//Obtenemos el valor del input
var titulo=document.getElementById('newtitulo').value; <-- Notese el .value

//Aplicamos el valor de la variable titulo
document.getElementById('principal').innerHTML=titulo;

}

class Car {
	constructor(horsepower){
		this.horsepower = horsepower;
		this.doors = 4;
	}
}

class SportsCar extends Car {
constructor(horsepower, turbo) {
	super(horsepower);
	this.turbo = "yes";
 }
}

let SportsCarValue = new SportsCar(500)
console.log(SportsCarValue)

let prices = [10, 25, 40];
console.log("initial prices:");
console.log(prices);

var halve = function(val) {
	return 0.5*val;
}

var reduce = function(arr) {
	for(var i = 0; i< arr.length; i++)
	{
		console.log(halve(arr[i]))
	}
}

console.log("reduced prices:");
reduce(prices);

// DAY 4 IN HACK RANK

function Person(initialAge){
    // Add some more code to run some checks on initialAge
  if (initialAge > 0) {
      this.age = initialAge
      console.log(initialAge)
  } else {
      this.age = 0
      console.log("Age is not valid, setting age to 0.")
  }
    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
        if(this.age < 13) {
            console.log("You are young.")
        }
        else if(this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.")
        }
        else {
            console.log("You are old.")
        }

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
         this.age++
   };
}

Person(4)
Person(-1)

class Coordinates {
  constructor(latitude, longitude) {
    this.x = latitude
    this.y = longitude
  }
}

function createInstance(coordinate) { 
	return coordinate.x * coordinate.y 
}

var i = 0
var instances = []

while(i < 6) {
	var coord = new Coordinates(i, 10)
  var result = createInstance(coord)

  if (result > 20) {
    console.log("HIGH: " + result)
  } else {
    console.log("LOW: " + result)
  }
  
  instances.push(coord)
  i++
}

console.log(i)
// console.log(instances)


// Hello world in C++

cout<<"Hello, World!" << "hi"; //more popular
printf("Hello, world!");


let array = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];
let primos = [];
let noprimos = [];
let j=1;
for(let i= 0;i<array.length;i++){
    if(i % 2 ==0){
        impares.push(array[i]);
    }
    else{
        pares.push(array[i]);
    }
    
      for (j; j < array.length; j++) {

      if (primo(array[j])) {
         primos.push(array[j]);
      }else{
         noprimos.push(array[j]);
      }
  
}

}

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

console.log("Los numeros pares son " + pares);
console.log("Los numeros impares son " + impares);
console.log("Los numeros primos son " + primos);
console.log("Los numeros NO primos son " + noprimos);
Ampliar

 //code super genial
    var result = [];
    
    
    for(var y = 0;y < 4; y++) {
        var sum = 0
        
        for(var x = 0;x < 4; x++) {
            sum += arr[y][x + 0]
            sum += arr[y][x + 1]
            sum += arr[y][x + 2]
            sum += arr[y + 1][x + 1]
            sum += arr[y + 2][x + 0]
            sum += arr[y + 2][x + 1]
            sum += arr[y + 2][x + 2]
            
            result.push(sum) 
            sum = 0
        }
        
    }
    var max = Math.max.apply(null, result)
    console.log(max); 
}

// array in reverse

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    const reverse = arr.reverse();
    
    var all = reverse.join(" ")
    
    console.log(all)
    
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = readLine();
        const area = PI * Math.pow(r, 2);
    // Print the area of the circle:
    console.log(area)
    // Print the perimeter of the circle:
    console.log(2 * PI * r);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// tests switch

function getGrade(score) {
    let grade;
    // Write your code here
    switch(true){
        case score > 25 && score <=30 :
            grade = "A";
            break;
        case score > 20 && score <=25 :
            grade = "B";
            break;
        case score > 15 && score <=20 :
            grade = "C";
            break;
        case score > 10 && score <=15 :
            grade = "D";
            break;
        case score > 5 && score <=10 :
            grade = "E";
            break;
        case score > 0 && score <=5 :
            grade = "F";
            break;    
    }
    return grade;
}

// else if

function getGrade(score) {
    let grade;
    // Write your code here
    if(25 < score && score <= 30) {
        grade = 'A'
    } else if(20 < score && score <= 25) {
        grade = 'B'
    } else if (15 < score && score <= 20) {
        grade = 'C'
    } else if (10 < score && score <= 15) {
        grade = 'D'
    } else if(5 < score && score <= 10) {
        grade = 'E'
    } else {
        grade = 'F'
    }
    return grade;
}

// EXAM DIFFICULT

var test = function(input) {

  var S = input

  for (var i = 1; i < S.length; i++) {
    var word = S[i]
    var even = [];
    var odd = [];

    for (var x = 0; x < word.length; x++) {
      var char = word.charAt(x)

      if (x % 2 === 0 && char !== "2") {
        even.push(char)
      }

      if (x % 2 === 1 && char !== "2") {
        odd.push(char)
      }

    }

    console.log(even.join("") + " " + odd.join(""))

  }

}

test(["2", "Hacker", "Rank"])

// day eight dictionary and maps 


function processData(input) {
    //Enter your code here
    var data = input.split('\n')
    var N = parseInt(data[0])
    var phonebook = {}
    
    for (var x = 0; x < N; x++) {
        var line = data[x + 1].split(' ')
        phonebook[line[0]] = line[1]
    }
    
    for(var S = N+1;S < data.length; S++) {
        var conta = (phonebook[data[S]])
        
        if(conta !== undefined) {
            console.log(data[S] + "=" +conta)
        } else {
            console.log("Not found")
        }
    }
}

// EXAMPLE TWO 

var search = [
	"sam",
  "edward",
  "harry"
] 

var phonebook = {
  "sam": 123456789,
  "tom": 1548721545,
  "harry": 1478126497
}

for (var i = 0; i < search.length; i++) {
	var contact = (phonebook[search[i]])
  
  if (contact === undefined) {
  	console.log("Not found")
  } else {
  	console.log(search[i] + "=" + contact)
  }
}


// Complete the factorial function.
function factorial(n) {
    if(n==1) {
        return n;
    } else {
        return n * factorial(n -1)
    }

}


// el parametro (s) tiene un cadena de 'a,d,f,g,t' 
function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case 'a,e,i,o,u' .includes(s[0]):
            letter = "A";
            break;
        case 'b,c,d,f,g' .includes(s[0]):
            letter = "B";
            break;
        case 'h,i,j,k,l' .includes(s[0]):
            letter = "C";
            break;
        case 'n,p,q,r,s,t,v,w,x,y,z' .includes(s[0]):
            letter = "D";
            break;
        default:
            return 'not fount'  
    }
    return letter;
}

var greeting = "Bienvenido";

var nombre = prompt("dinos tu nombree");

var concatenation = `${greeting} soy ${nombre} muchas gracias;`

document.write(concatenation);

// LOOP PALABRA JAVASCRIPTLOOPS ..RESUL, AAIOOJVSCRPTLPS
function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    var consonant = "";
    
    for(var i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            console.log(s[i])
        } 
    }
    
    for(var con of s) {
        if(!vowels.includes(con)) {
            console.log(con)
        }
    }
    
}

/*el parametro (nums) tiene un arreglo de cinco numeros (2,3,6,6,5) y se
    necesita que se imprima el segundo numero mayor*/

function getSecondLargest(nums) {
    // Complete the function
    var large = nums[0];
    var secondlarge = -1;
    
    for(var i = 0; i < nums.length; i ++ ) {
        if(nums[i] > large) {
            secondlarge = large;
            large = nums[i] 
        }
        
        if(nums[i] > secondlarge && nums[i] < large) {
            secondlarge = nums[i];
        }
    }
        return secondlarge;
}

  /* ejemplo de try{}.. catch(error){}
  la funcion tiene un parametro s que tiene un string
  declaro en el try ........
  */

  function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""))
    }
    
    catch(e){
        console.log(e.message);
        
        console.log(s)
    }
}

/*
    esta funcion es sobre el "throw" Error 
  Complete the isPositive function.
  If 'a' is positive, return "YES".
  If 'a' is 0, throw an Error with the message "Zero Error"
  If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a === 0) {
        throw Error('Zero Error');
    }
    if(a < 0) {
        throw Error('Negative Error')
    }
    
    return 'YES';
}

/* Este codigo es una funcion que tiene dos parametros
  y tenemos que formar un rectangulo 
*/ 

function Rectangle(a, b) {
    let obj = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a*b
    }
        
    return obj;   
}

/*este ejercisio trata de contar objetos en un arreglo  que es un
parametro y hay tres formas de hacerlo*/

//forma 1
function getCount(objects) {
    return objects.filter(
        function(arrOb) { return arrOb.x === arrOb.y}
    ).length 
}

//forma 2
function getCount(objects) {
    return objects.filter(arrOb => arrOb.x === arrOb.y).length
}

// forma 3
function getCount(objects) {
    var count = 0;
    for(var co of objects) {
        count+= (co.x == co.y)
    }
    return count;
} 
 
 // creando un clase poligono 

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
        
    perimeter() {
        return this.sides.reduce(function add(a,b) {return a+b;})
    }
}

//forma dos 

class Polygon {
        constructor(sides) {
            this.sides = sides;
        }
        
        perimeter() {
            var sum = 0;
            for(var i = 0;i< this.sides.length;i++) {
                sum = sum + this.sides[i];
            }
            return sum;
        }
    }