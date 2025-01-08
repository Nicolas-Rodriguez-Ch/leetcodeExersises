// function subtractProductAndSum(n: number): number {
//     let number : string = n.toString();
//     let product: number = 1;
//     let sum: number = 0;
//     for (let i = 0; i < number.length; i++) {
//        sum += parseInt(number[i]);
//        product *= parseInt(number[i]);
//     }
//     return product - sum;
// };

function subtractProductAndSum(n: number): number {
    let number : string[] = n.toString().split('');
    let product: number = 1;
    let sum: number = 0;
    number.map((element) =>{
        product *= parseInt(element);
        sum += parseInt(element);
    });
    return product - sum;
};

console.log(subtractProductAndSum(234));
