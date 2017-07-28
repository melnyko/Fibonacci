// By using while

// let x1 = 1;
// let x2 = 1;

// let n = parseInt(prompt('Enter the number'));

// let i = x1+x2;
// while (i < n){
//     var suma = x1+x2;
//     x1=x2;
//     x2=suma;
//     i++;
// }
// document.write(suma);


//Recursion
// let n = parseInt(prompt('Enter the number:'));
// function fibonacci(n) {
//     if(n > 1){
//         n = fibonacci(n - 1) + fibonacci(n - 2);
//     }else {
//         n = n;
//     }
//     return n;
// }
// document.write(fibonacci(n));



//array
let number = parseInt(prompt('Enter the number:'));
function fibonacci(n) {
    let numb = [1, 1];

    for (var i = 2; i < n; i++) {
        numb[i] = numb[i-1]+ numb[i-2];
    }
    return numb[n-1];
}
document.write(fibonacci(number));


