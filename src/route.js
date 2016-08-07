let gotoMainPage = require('./commands/goto-main-page');
//console.log(gotoMainPage);
const defaultMapping = {'*': gotoMainPage};
let mapping = defaultMapping;
//console.log(mapping);
function route(input) {
    let command = mapping[input] || mapping['*'];
 //console.log(command);
    let result = command(input);
    // console.log(result);
    if (result.newMapping) {
        mapping = result.newMapping;
        return {
            text: result.text
        }
    }
    if (result.error) {
        return {
            text: result.text
        }
    }
    if (result.reset) {
        let mapping = defaultMapping;
        return {
            text: result.text,
            return :true
        }
    }
    return {
        text: response.text
    }
}
// let ab =route();
//console.log(ab);

module.exports = route;
