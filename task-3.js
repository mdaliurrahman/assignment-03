/*function signature/sample */
function finalScore (omr) {
         
         if(typeof omr === 'object' && !Array.isArray(omr)){
            let total = 0;
            for(const value of Object.values(omr)){
                total = total + value;
            }
            if(total === 100){
                const score = omr.right - omr.wrong * 0.5;
                const result = Math.round(score);
                return result;
                }
                else{
                return 'Invalid';
                }
            
         }
         else{
            return 'Invalid';
         }
 }
         
         


const result = finalScore({ right: 50, wrong: 10, skip: 40 });
console.log (result);