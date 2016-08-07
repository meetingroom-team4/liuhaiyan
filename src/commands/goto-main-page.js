/**
 * Created by amber on 16-8-6.
 */
let commandZipcodeToBarcode = require('./goto-zipcode-to-barcode-page.js');
let commandBarcodeToZipcode = require('./goto-barcode-to-zipcode-page.js');
let commandQuit = require('./exit.js');
let commandInvalidInput = require('./invalid-input.js');

function gotoMainPage(input) {
    return {
        text: ` 1.请翻译zipcode to barcode,
                2.请翻译barcode to zipcode,
                3.请退出，
                4.请选择1～3.`,
        newMapping: {
            '1': commandZipcodeToBarcode,
            '2':commandBarcodeToZipcode,
            '3':commandQuit,
            '4':commandInvalidInput,
        }

    }
}
console.log(gotoMainPage());
module.exports = gotoMainPage;