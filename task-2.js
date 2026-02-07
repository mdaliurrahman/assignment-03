/*function signature/sample */
function validOtp(otp) {
        if(typeof otp === 'string'){
            const length = otp.length;
            if(otp.startsWith("ph")){
                if (length > 0 && length === 8){   
                        return true;
                  }
                  else{
                    return false;
                  }

                     }
                 else{
                return false;
                }
         }
        else{
            return 'Invalid';
        }
          
}

const result = validOtp("ph-10985");
console.log(result);