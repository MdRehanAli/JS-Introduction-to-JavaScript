var price = 100;

console.log(typeof price);

var price = '100';
console.log(typeof price);

var serious = false;
console.log(typeof serious);

var police;
console.log(typeof police);

var phone = {
    brand: 'Samsung',
    price: 22000,
    model: 'J38'
}
console.log(typeof phone);

var age = [24, 26, 27, 22, 30];
console.log(Array.isArray(age));



var num1 = 0.1;
var num2 = 0.2;

var sum = num1 + num2;
console.log(sum);
sum = sum.toFixed(3);
console.log(sum);
sum = parseFloat(sum);
console.log(sum);

