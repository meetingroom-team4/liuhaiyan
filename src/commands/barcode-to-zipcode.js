/**
 * Created by amber on 16-8-7.
 */

let {barcodeToZipcode} = require('../core/barcode-to-zipcode');

module.exports=function(barcode){
   let zipcode =barcodeToZipcode(barcode);
    if(zipcode.startsWith('Invalid barcode')){
        return {
            error:'Please give me a input',
        }
    }else{
        return {
            text:zipcode,
            reset:true
        }
    }
};