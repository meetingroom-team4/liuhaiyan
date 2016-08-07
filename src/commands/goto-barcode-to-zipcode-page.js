/**
 * Created by amber on 16-8-7.
 */
function barcodeToZipcode (){
    return {
        text:`please input barcode:`,
        newMapping:{'*':require('./barcode-to-zipcode')}
    }

}

module.exports=barcodeToZipcode;