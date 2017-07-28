// By using while

let x1 = 1;
let x2 = 1;

let n = parseInt(prompt('Enter the number(loop):'));

let i = x1+x2;
while (i < n){
    var suma = x1+x2;
    x1=x2;
    x2=suma;
    i++;
}
document.write(suma);
document.write('<br>');



//Recursion
let m = parseInt(prompt('Enter the number(recursion):'));
function fibonacci(m) {
    if(m > 1){
        m = fibonacci(m - 1) + fibonacci(m - 2);
    }else {
        m = m;
    }
    return m;
}
document.write(fibonacci(m));
document.write('<br>');



//Array
let number = parseInt(prompt('Enter the number(array):'));
function fibonacci(n) {
    let numb = [1, 1];

    for (var i = 2; i < n; i++) {
        numb[i] = numb[i-1]+ numb[i-2];
    }
    return numb[n-1];
}
document.write(fibonacci(number));


