function showingKitchen1(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "K.accessories"
itemsAll.appendChild(p);


const firstKitchenPrice = document.getElementById("first-kitchen");
const firstKitchenPriceString = firstKitchenPrice.innerText;
const firstKitchenPriceNumber = parseFloat(firstKitchenPriceString);
const kitchenTotalPrice = document.getElementById("total-price");
const firstKitchenTotalPriceString = kitchenTotalPrice.innerText;
const firstKitchenTotalPriceNumber = parseFloat(firstKitchenTotalPriceString);


const firstKitchenSum = firstKitchenPriceNumber + firstKitchenTotalPriceNumber;
kitchenTotalPrice.innerText = firstKitchenSum;


document.getElementById("apply-btn").addEventListener("click", function(){



    
const discountAmount = firstKitchenSum*0.20;

const discountAmountTotal = document.getElementById("discount-price");
const discountResult = discountAmount.toFixed(2);
discountAmountTotal.innerText=discountResult;



const balanceAmount = firstKitchenSum-discountResult;


const balanceAmountTotal = document.getElementById("balance-total");
const balanceResult = balanceAmount.toFixed(2);
balanceAmountTotal.innerText=balanceResult;

    
})




}


function showingKitchen2(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "K.accessories"
itemsAll.appendChild(p);


const secondKitchenPrice = document.getElementById("second-kitchen");
const secondKitchenPriceString = secondKitchenPrice.innerText;
const secondKitchenPriceNumber = parseFloat(secondKitchenPriceString);
const kitchenTotalPrice = document.getElementById("total-price");
const secondKitchenTotalPriceString = kitchenTotalPrice.innerText;
const secondKitchenTotalPriceNumber = parseFloat(secondKitchenTotalPriceString);


const secondKitchenSum = secondKitchenPriceNumber + secondKitchenTotalPriceNumber;
kitchenTotalPrice.innerText = secondKitchenSum;





document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = secondKitchenSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = secondKitchenSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    




}

function showingKitchen3(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Home cooker"
itemsAll.appendChild(p);




const thirdKitchenPrice = document.getElementById("third-kitchen");
const thirdKitchenPriceString = thirdKitchenPrice.innerText;
const thirdKitchenPriceNumber = parseFloat(thirdKitchenPriceString);
const kitchenTotalPrice = document.getElementById("total-price");
const thirdKitchenTotalPriceString = kitchenTotalPrice.innerText;
const thirdKitchenTotalPriceNumber = parseFloat(thirdKitchenTotalPriceString);


const thirdKitchenSum = thirdKitchenPriceNumber + thirdKitchenTotalPriceNumber;
kitchenTotalPrice.innerText = thirdKitchenSum;






document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = thirdKitchenSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = thirdKitchenSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    



}

function showingSportsWear1(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Sports black cap"
itemsAll.appendChild(p);



const firstSportsPrice = document.getElementById("first-sports");
const firstSportsPriceString = firstSportsPrice.innerText;
const firstSportsPriceNumber = parseFloat(firstSportsPriceString);
const sportsTotalPrice = document.getElementById("total-price");
const firstSportsTotalPriceString = sportsTotalPrice.innerText;
const firstSportsTotalPriceNumber = parseFloat(firstSportsTotalPriceString);


const firstSportsSum = firstSportsPriceNumber + firstSportsTotalPriceNumber;
sportsTotalPrice.innerText = firstSportsSum;





document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = firstSportsSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = firstSportsSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    



}

function showingSportsWear2(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Full jersey set"
itemsAll.appendChild(p);



const secondSportsPrice = document.getElementById("second-sports");
const secondSportsPriceString = secondSportsPrice.innerText;
const secondSportsPriceNumber = parseFloat(secondSportsPriceString);
const sportsTotalPrice = document.getElementById("total-price");
const secondSportsTotalPriceString = sportsTotalPrice.innerText;
const secondSportsTotalPriceNumber = parseFloat(secondSportsTotalPriceString);


const secondSportsSum = secondSportsPriceNumber + secondSportsTotalPriceNumber;
sportsTotalPrice.innerText = secondSportsSum;







document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = secondSportsSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = secondSportsSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    


}

function showingSportsWear3(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Sports cates"
itemsAll.appendChild(p);





const thirdSportsPrice = document.getElementById("third-sports");
const thirdSportsPriceString = thirdSportsPrice.innerText;
const thirdSportsPriceNumber = parseFloat(thirdSportsPriceString);
const sportsTotalPrice = document.getElementById("total-price");
const thirdSportsTotalPriceString = sportsTotalPrice.innerText;
const thirdSportsTotalPriceNumber = parseFloat(thirdSportsTotalPriceString);


const thirdSportsSum = thirdSportsPriceNumber + thirdSportsTotalPriceNumber;
sportsTotalPrice.innerText = thirdSportsSum;






document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = thirdSportsSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = thirdSportsSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    


}

function showingFurniture1(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Single relax chair"
itemsAll.appendChild(p);


const firstFurniturePrice = document.getElementById("first-furniture");
const firstFurniturePriceString = firstFurniturePrice.innerText;
const firstFurniturePriceNumber = parseFloat(firstFurniturePriceString);
const furnitureTotalPrice = document.getElementById("total-price");
const firstFurnitureTotalPriceString = furnitureTotalPrice.innerText;
const firstFurnitureTotalPriceNumber = parseFloat(firstFurnitureTotalPriceString);


const firstFurnitureSum = firstFurniturePriceNumber + firstFurnitureTotalPriceNumber;
furnitureTotalPrice.innerText = firstFurnitureSum;





document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = firstFurnitureSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = firstFurnitureSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    



}

function showingFurniture2(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Children play"
itemsAll.appendChild(p);



const secondFurniturePrice = document.getElementById("second-furniture");
const secondFurniturePriceString = secondFurniturePrice.innerText;
const secondFurniturePriceNumber = parseFloat(secondFurniturePriceString);
const furnitureTotalPrice = document.getElementById("total-price");
const secondFurnitureTotalPriceString = furnitureTotalPrice.innerText;
const secondFurnitureTotalPriceNumber = parseFloat(secondFurnitureTotalPriceString);


const secondFurnitureSum = secondFurniturePriceNumber + secondFurnitureTotalPriceNumber;
furnitureTotalPrice.innerText = secondFurnitureSum;



document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = secondFurnitureSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = secondFurnitureSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    




}

function showingFurniture3(){

const itemsAll = document.getElementById("items-all-show");
const p = document.createElement("p");
p.innerText = "Flexible sofa"
itemsAll.appendChild(p);



const thirdFurniturePrice = document.getElementById("third-furniture");
const thirdFurniturePriceString = thirdFurniturePrice.innerText;
const thirdFurniturePriceNumber = parseFloat(thirdFurniturePriceString);
const furnitureTotalPrice = document.getElementById("total-price");
const thirdFurnitureTotalPriceString = furnitureTotalPrice.innerText;
const thirdFurnitureTotalPriceNumber = parseFloat(thirdFurnitureTotalPriceString);


const thirdFurnitureSum = thirdFurniturePriceNumber + thirdFurnitureTotalPriceNumber;
furnitureTotalPrice.innerText = thirdFurnitureSum;




document.getElementById("apply-btn").addEventListener("click", function(){



    
    const discountAmount = thirdFurnitureSum*0.20;
    
    const discountAmountTotal = document.getElementById("discount-price");
    const discountResult = discountAmount.toFixed(2);
    discountAmountTotal.innerText=discountResult;
    
    
    
    const balanceAmount = thirdFurnitureSum-discountResult;
    
    
    const balanceAmountTotal = document.getElementById("balance-total");
    const balanceResult = balanceAmount.toFixed(2);
    balanceAmountTotal.innerText=balanceResult;
    
        
    })
    
    




}



document.getElementById("input-field").addEventListener("keyup", function(event){

    const text = event.target.value;
    const applyButton = document.getElementById("apply-btn")
    const totalPrice = document.getElementById("total-price");
    if(text === "SELL200" ){
    
    applyButton.removeAttribute("disabled");
    
    }
    else{

        applyButton.setAttribute("disabled", true);
    }
   
    
    })
