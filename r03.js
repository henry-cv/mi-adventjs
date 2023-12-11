/*
Tu tarea es escribir una función que identifique y devuelva el primer 
paso extra que se ha añadido o eliminado en la cadena de fabricación.
Si no hay ninguna diferencia entre las secuencias, devuelve una 
cadena vacía.

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'
*/

/*const original = 'abcd'
const modified = 'abcde'*/

const original = "stepfor";
const modified = "stepor";

function findNaughtyStep(original, modified) {
  let str = "";
    
  if (typeof original === "string" && typeof modified === "string") {
    if (original === modified) {
      return str;
    }
  
    if (original.length > modified.length) {
      let diff = original.split("").find(c => !modified.includes(c));
      str = diff;
      return str
    }    
    if (original.length < modified.length) {
      let diff = modified.split("").find(c => !original.includes(c));
      str = diff;
      return str;
    }
    if (original.length === modified.length) {
      let diff = modified.split("").find(c => !original.includes(c));
      str = diff;
      return str;
    }
    if(original === ""){
      return modified[0];
    }
    //console.log(`modificado: ${str}`);
    return str;  
  }else{
    if(original === modified){
      return str;
    }
    if(typeof original !== "string" && typeof modified === "string"){
      return modified[0];
    }
    if(typeof original === "string" && typeof modified !== "string"){
      return original[0];
    }
  }   
}

console.log(findNaughtyStep(original, modified)); // 'f'
console.log(0, findNaughtyStep("abcd", "abcd")); // ''
console.log(1, findNaughtyStep("abcd", "abcde")); // 'e'                
console.log(2, findNaughtyStep("abcd", "abd")); //c
console.log(3, findNaughtyStep("", ""));
console.log(4, findNaughtyStep("", "a"));
console.log(5, findNaughtyStep(undefined, "hola"));
console.log(6, findNaughtyStep(undefined, undefined));
console.log(7, findNaughtyStep("hola", "paco"));
console.log(8, findNaughtyStep(null, "hola"));
console.log(9, findNaughtyStep("abcd", null));
console.log(10, findNaughtyStep(null, null));
console.log(11, findNaughtyStep("abcd", undefined));
console.log(12, findNaughtyStep(1234, "abcd"));
console.log(13, findNaughtyStep("abcd", "abmcd")); // 'm'