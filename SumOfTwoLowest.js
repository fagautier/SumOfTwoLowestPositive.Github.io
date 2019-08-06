function sumTwoSmallestNumbers(numbers) {  
 let aux = numbers.sort(function (a, b) {
        return a - b;
    });
    return aux[0] + aux[1];
}
