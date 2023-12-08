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
  let str = "vacio";
  if (typeof original !== "string" && typeof modified !== "string") {
    return str;
  }
  if (typeof original !== "string" && typeof modified === "string") {
    return modified[0];
  }
  if (typeof original === "string" && typeof modified !== "string") {
    return str;
  }
  
  if (!original && modified) {
    return modified[0];
  }
  
  if (!original && !modified) {
    return str;
  }
  if (original === "" && modified) {
    return modified[0];
  }
  
  if (!modified) {
    return str;
  }
  if (original === modified) {
    return str;
  }

  if (original.length > modified.length) {
    let diff = original.split("").find((c) => !modified.includes(c));
    str = diff;
  }
  //find retorna el primer elemento que cumpla la condición dentro del callback
  if (original.length < modified.length) {
    let diff = modified.split("").find((c) => !original.includes(c));
    str = diff;
  }
  if (original.length === modified.length) {
    let diff = modified.split("").find((c) => !original.includes(c));
    str = diff;
  }
  console.log(`modificado: ${str}`);
  return str;
}

//console.log(findNaughtyStep(original, modified)); // 'e'
console.log(1, findNaughtyStep("abcd", "abcde")); // 'e'
console.log(2, findNaughtyStep("", "abcd"));
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
console.log(13, findNaughtyStep("abcd", "abmcde")); // 'm'
