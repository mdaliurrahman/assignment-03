/*function signature/sample */
function newPrice(currentPrice , discount ) {
         if(typeof currentPrice === 'number' && typeof discount === 'number'){
            if(discount > 0 && discount < 100 ){
                const discountQuentity = (currentPrice * discount) / 100;
                const afterDiscount = currentPrice - discountQuentity;
                return afterDiscount.toFixed(3);
            }
            else{
                return "Invalid";
            } 
            
        }
        else {
            return "Invalid";
         }
}

// const price = newPrice(100, 10);
// console.log(price);
