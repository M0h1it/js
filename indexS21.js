// console.log("namaste");
// setTimeout(function (){
//     console.log("hello world");
// },5000)

// console.log("Season 2");

// const cart = ["shoes"," pants", "kurta"];

api.createorder(cart,function(){

    api.proceedTopayment(function(){

        api.showorderSummary(function(){
            console.log("order placed successfully")
        })

    })

})


//promimses
// const cart = ["shoes"," pants", "kurta"];

// const promise = createorder(cart);

// promise.then(function(){
//     return proceedTopayment();
// }).then(function(){
//     return showorderSummary();
// }).then(function(){
//     console.log("order placed successfully")
// }).catch(function(){
//     console.log("some error occured")
// })

const GITHUM_API = "https://api.github.com/users";

const user = fetch(GITHUM_API);

console.log(user);



