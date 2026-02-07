/*function signature/sample */
function gonoVote(array) {
    if(Array.isArray(array)){
       let isTrue = 0;
       let isFalse = 0;

       for(const arr of array){
            if(arr === 'ha'){
            isTrue++;
            }
            else if(arr === 'na'){
            isFalse++;
            }
        }
    if(isTrue > isFalse){
        return true;
    }
    else if (isTrue === isFalse){
        return 'equal';
    }
    else{
        return false;
    }
    }
    else{
        return "Invalid";
    }
          
}
const result = gonoVote(["ha", "na", "ha", "na"]);
console.log (result);
