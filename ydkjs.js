//Chapter 1

function foo(a) {
  var b = a;
  return a + b;
}
var c = 2;

//Chapter 2

function foo(a) {
  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}

foo(2); // 2 4 12

function foo(str, a) {
  eval(str); //cheating!
  console.log(a, b);
}

var b = 2;
foo("var b = 3;", 1); //1 3

function foo(str) {
  "use strict";
  eval(str);
  console.log(a); //ReferenceError: a is not defined
}

foo("var a = 2");

function foo(obj {
  with (obj) {
    a = 2;
  }
}
var o1 = {
  a: 3
};
var o2 = {
  b: 3
};

foo(o1);
console.log(o1.a);//2

foo(o2);
console.log(o2.a); //undefined
console.log(a); //2 --oops, leaked global!

//Chapter 3

function foo(a){
  var b = 2;

  //some code

  function bar() {
    //...
  }

  //more code

  var c =3;
}

bar(); //fails

console.log(a,b,c); //all 3 fail

function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
function doSomethingElse(a) {
  return a - 1;
}
 var b;

 doSomething(2); //15

 function doSomething(a) {
   function doSomethingElse(a) {
     return a - 1;
   }
   var b;

   b = a + doSomethingElse(a * 2);

   console.log(b * 3);
 }

 doSomething(2); //15

 function foo() {
   function bar(a) {
     i = 3; //changing the `i` in the enclosing scope's for-loop
     console.log(a + i);
   }
   for (var i = 0; i < 10; i++){
     bar(i * 2); //oops, infinite loop ahead!
   }
 }
 foo();

 var MyReallyCoolLibrary = {
   awesome: "stuff",
   doSomething: function() {
     //...
   },
   doAnotherThing: function() {
     //...
   }
 };

 var a = 2;

 function foo() { // <--insert this

  var a = 3;
  console.log(a); //3

 } // <-- and this
 foo(); // <-- and this
  console.log(a); //2

  var a = 2;

  (function foo() { //<-- insert this
var a = 3;
console.log (a); //3
  })(); //<-- and this
  console.log(a); //2

  setTimeout(function () {
    console.log("I waited 1 second!");
  }, 1000);

  setTimeout(function timeoutHandler() { // <-- Look, I have a name!
    console.log("I waited 1 second!");
  }, 1000);

  var a = 2;

  (function foo() {
    var a = 3;
    console.log(a); //3
  })();
  console.log(a); //2

  var a = 2;
  (function IIFE() {
    var a = 3;
    console.log(a); //3
  })();

  console.log(a); //2

  var a = 2;

  (function IIFE(global) {
    var a =3;
    console.log(a); //3
    console.log(global.a); //2
  })(window);
  console.log(a); //2

  undefined = true; //setting a land-mine for other code! avoid!

  (function IIFE(undefined) {
    var a;
    if (a === undefined) {
      console.log("Undefined is safe here!");
    }
  })();

  var a = 2;

  (function IIFE(def) {
    def(window); 
  })(function def(global) {
    var a = 3;
    console.log(a); //3
    console.log(global.a); //2
  });

  var foo = true;

  if (foo) {
    var bar = foo * 2;
    bar = something(bar);
    console.log(bar);
  }

  var foo = true;

  if (foo) {
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
  }
  console.log(bar); //ReferenceError

  function process(data) {
    //do something interesting
  }

  var someReallyBigData = { .. };
  process(someReallyBigData);

  var btn = document.getElementById("my_button");

  btn.addEventListener("click", function click(evt){
    console.log("button clicked");
  }, /*capturingPhase = */false);

  function process(data) {
    //do something interesting
  }
  //anything declared inside this block can go away after!
  {
    let someReallyBigData = { .. };
    process(someReallyBigData);
  }
  var btn = document.getElementById("my_button");

  btn.addEventListener("click", function click(evt){
    console.log("button clicked");
  }, /*capturingPhase =*/false);

  