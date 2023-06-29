/*
    ES6 arrowfunction.js
    author: George Tsang
    
    Demonstrates the syntax and usage of the arrow function (=>).

    To test this app, one should
        1. run this progam in the integrated terminal

    Framework: N/A

    npm: N/A

    References:

        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

function productA (x, y) {
    return x * y;
}
console.log(productA (4, -11));

var product = function (x, y) {                                         //  Anonymous function by removing keyword "function"
    return x * y;
}
console.log(product (-5, 9));

product = (x, y) => {return x * y;};                                    //  Arror function; remove keyword "function"; anonymous function
console.log (product(2, -23));

product = (x, y) => x * y;                                              //  Braces are not required if function contains only a single statement
console.log (product(-1, 47));

product = x => x * -4;                                                  //  Parentheses are NOT required if only one argument is needed
console.log (product(12));

product = () => -49;                                                    //  Parentheses can be used by itself if the function accepts ZERO arguments 
console.log (product());

product = _ => -50;                                                     //  Underscore represents ONE throwaway arguments that will NOT be used
console.log (product());

var weather = (c, t) => ({ city: c, temperature: t });                  //  Returns object literal expression: use parentheses to distinguish 
                                                                        //  function block vs. object
console.log(JSON.stringify((weather("Whitehorse", -51)), null, 4));

var weatherWorld = [
    { city: "New York", temperature: -52 },
    { city: "London", temperature: -53 },
    { city: "Moscow", temperature: -54 }
];

console.log( weatherWorld.map (                                         //  The map() method calls the provided function for each element in an array
    ww => ww.temperature 
));