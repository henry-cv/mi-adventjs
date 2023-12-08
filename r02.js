/*
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función
que,dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que 
se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
                trenosa
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa' 

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/
/* const gifts = ['tren', 'oso', 'pelota'];                
const materials = 'tronesa';*/

/* const gifts = ['juego', 'puzzle']
const materials = 'jlepuz' */

const gifts = ['libro', 'ps5']
const materials = 'psli'
function manufacture(gifts, materials) {
  const giftList =[];
  gifts.forEach(gift=>{
    let word = Array.from(new Set(gift)).join("");
    console.log(word);    
    let include = word.split("").every(w => materials.includes(w));    
    console.log("includes all: ",include)
    if(include){
      giftList.push(gift);
    }
  });
  return giftList;
}
const giftsList = manufacture(gifts, materials);
console.info(giftsList);
//Completado con éxito