function updateProductValue(product,price,isIncrease){
  
    const ProductInputId =document.getElementById(product+"-number");
    let getProductValue = ProductInputId.value;

    
    if(isIncrease==true){
        getProductValue=parseInt(getProductValue) + 1;
       
    }else if(getProductValue>0){
        getProductValue=parseInt(getProductValue)-1;
        
    }
    ProductInputId.value=getProductValue;
    //update price 
   const TotaolPriceId=document.getElementById(product+"-price");
  
   TotaolPriceId.innerText = getProductValue * price;
   //update subtotal
   
   calculateProductValue();

}

function getInputvalue(product){
    const  productInput=document.getElementById(product+"-number");
    const productNumber=parseInt(productInput.value);
    return productNumber;
}

function calculateProductValue(){
    const phoneTotal=getInputvalue('phone') *1219;
    const caseTotal=getInputvalue('case') * 59;
    const subTotal=phoneTotal + caseTotal;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("total-tax").innerText = tax;
    document.getElementById("total-amount").innerText = totalPrice;
}



document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductValue("phone",1219,true);

})
document.getElementById("phone-minus").addEventListener("click",function(){
    updateProductValue("phone",1219,false);

})
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductValue("case",59,true);

})
document.getElementById("case-minus").addEventListener("click",function(){
    updateProductValue("case",59,false);

})