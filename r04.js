/* const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus */

function decode(message) {
    let exp =/\(([a-zA-Z]+)\)$/i
    let ar = message.match(exp);
    //let ar=Array.from(message.match(exp));
    console.table(ar);
    //console.log(ar[0])
    return ar
}
/* const a = decode('hola (odnum)')
console.log(a) // hola mundo */
const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!
