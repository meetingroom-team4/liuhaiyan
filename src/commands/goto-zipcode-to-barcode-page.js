/**
 * Created by amber on 16-8-6.
 */

function  zipcodeToBarcode() {
    return {
        text:`please input zipcode:`,
        newMapping:{'*':require('./zipcode-to-barcode')}
    }


}
module.exports=zipcodeToBarcode;