const numbers = [45, 65, 85, 95, 64];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

const products = [

    {id : 1, name : 'xioami phone', price : 19000},
    {id : 2, name : 'iphone phone', price : 59000},
    {id : 3, name : 'Mac book Air', price : 29000},
    {id : 4, name : 'lenevo yoga', price : 59000},
    {id : 5, name : 'Dell laptop', price : 39000},
    {id : 6, name : 'Walton phone', price : 65000},
    {id : 7, name : 'samsung phone', price : 80000},
    {id : 8, name : 'vivo phone', price : 50000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products , 'laptop');
console.log(result);

