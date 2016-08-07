let route = require('./route');
// let result = route();  //接收数据
//console.log(route);

let readline = require('readline');
function controlRoute(input) {
    let result = route();  //接收数据
    console.log(result.text);//打印数据
    if (result.rerun) {
        controlRoute(input);
    }
}
function  print () {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        sendToRoute(line);
    });
    controlRoute();
}
print();















// function rl() {
//     let rl = readline.connectInterface({
//         input: process.stdin,
//         output: process.stdout,
//         terminal: false
//     })
// }
// function rlon() {
//     rl.on('line', function (line) {
//         controlRoute(line);
//     })
// }
// module.exports={controlRoute:controlRoute,
//     rl:rl,
//     rlon:rlon};

