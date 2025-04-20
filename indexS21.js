// console.log("namaste");
// setTimeout(function (){
//     console.log("hello world");
// },5000)

// console.log("Season 2");

const cart = ["shoes"," pants", "kurta"];

api.createorder(cart,function(){

    api.proceedTopayment(function(){

        api.showorderSummary(function(){
            console.log("order placed successfully")
        })

    })
    
})