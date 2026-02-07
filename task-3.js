/*function signature/sample */
function finalScore (omr) {
         
         if(typeof omr === 'object' && !Array.isArray(omr)){
            let total = 0;
            for(const value of Object.values(omr)){
                total = total + value;
            }
            if(total === 100){
                const score = omr.right - omr.wrong * 0.5;
                const final = Math.round(score);
                return final;
                }
                else{
                return 'Invalid';
                }
            
         }
         else{
            return 'Invalid';
         }
 }
         
         


const final = finalScore(["Raj"]);
console.log (final);