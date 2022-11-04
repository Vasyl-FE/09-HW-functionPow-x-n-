const num = +prompt('Enter the number you want to multiply (power) below:');
const multiplier = +prompt('Enter the multiplier:');

alert(pow(num, multiplier));


function pow(x,n) {
    return x ** n;
}