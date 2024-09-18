function fibonacci(n){

    let fibserises = [0, 1];

    for(let i = 2; i < n; i++){
        fibserises[i] = fibserises[i - 1] + fibserises[i - 2];
    }
    return fibserises.slice(0, n);
}
console.log(fibonacci(8));

// the result=[0, 1, 1, 2, 3, 5, 8, 13]

function fibonacciRecursive(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
    for(let i = 0 ; i < 8 ; i++){
        console.log(fibonacciRecursive(i));
}