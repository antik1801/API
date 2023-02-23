const user = {id: 1, name: 'Gorib Aamir', job:'actor'}
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    owner: 'Alia Bhut',
    address: { 
        street: 'Kochukhet voot er goli',
        city: 'Dhaka',
        country: 'Bangladesh'
     },
    products: ['laptop', 'mic', 'monitor', 'keyBoard'],
    revenue: 450000,
    isOpen: true,
    isNew: false,
}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopobj = JSON.parse(shopJSON);
console.log(shopobj);