// 1) Create a simple form that on submit display confirmation message and according to user action it will either stop submission from proceeding or it will continue form submission.
// Make your own custom event “timeout” that fires after 30 seconds if the user hasn’t entered any data.
let form = document.getElementById("myForm");
let usr = document.getElementById("nameInput");
let subtn = document.getElementById("submit")
form.addEventListener("submit", function (e) {
    if(usr.value.trim() === ""){
        alert("You Must Add your Name Before You Sumit")
    }else {
        alert("Form submitted successfully!");
    }
})

form.addEventListener("timeout", function () {
    if (usr.value.trim() === "") {
        usr.disabled = true
        subtn.disabled = true    
    }
})
let timeout = new Event("timeout")
setTimeout(function () {
    form.dispatchEvent(timeout)
    alert("TimeOut!")
}, 30000)

//2)
// 1
function createCounter() {
    let i = 0;
    return function () {
    i++;
    return i;
}
}
let increase1 = createCounter(); 
let increase2 = createCounter();

console.log(increase1()); // 1  store i value then increment by every console.log
console.log(increase1()); // 2
console.log(increase1()); // 3

console.log(increase2()); // 1
console.log(increase2()); // 2
console.log(increase2()); // 3

console.log("====================================")
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
        }, 0)
    }  // output 5  i declared by var which store in window object , the console print value of i after the loop end 
console.log("====================================")
var a = 10  
function foo(){
    console.log(a)  
}  
foo()  // decleared by var output 10
console.log("====================================")
var a = 10  
function foo(){
    var a = 20 
    console.log(a)  
} 
a = 30  
foo()  // 20 look at its local scope where it declared
console.log("====================================")
function outerFunc() { 
    let a = 10;  
    function innerFunc() { 
        console.log(a);
    }  
        return innerFunc;  
}
let innerFunc = outerFunc(); 
innerFunc()  // 10
// closure 
console.log("====================================")
var a = 10 
function foo(){ 
    console.log(a)  
}  
function bar() { 
    var a = 20 
    foo()  
}
bar() // 10 look where it declared not where it called

console.log("====================================")

