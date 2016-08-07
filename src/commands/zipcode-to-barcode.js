/**
 * Created by amber on 16-8-6.
 */

let {zipcodeToBarcode} = require('../core/zipcode-to-barcode');

module.exports=function(zipcode) {
    let barcode=zipcodeToBarcode(zipcode);
    if(barcode.startsWith(`Invalid zipcode`)){
        return {
            error:'Please give me a input',
        }
    }else{
        return {
            text:barcode,
            reset:true
        }
    }
};

