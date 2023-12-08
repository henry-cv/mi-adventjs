console.clear();
console.info("Inicio del programa")
const giftIds = [2, 1, 3, 5, 3, 2]
//const firstRepeatedId = findFirstRepeated(giftIds)
//console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
function findFirstRepeated(gifts) {
  let ind_min=gifts.length-1, val=-1;
  if(!gifts){
    return val;
  }
  for(let i=0;i<gifts.length;i++){    
    let cont = 0, ind = 0;
    if(gifts[0] === gifts[1]){ 
      val = gifts[i];
      return val;
    }
    while(ind !== -1 && cont < 3){
      ind = gifts.indexOf(gifts[i], i+1);    
      if(ind === -1 ){
        break;
      }
      //console.log(`índice: "${ind}", valor:"${gifts[i]}", i:'${i}'`);
      cont++      
      if(cont === 2){
        if(ind >= 0 && ind < ind_min){
          ind_min = ind;
          val = gifts[ind_min];
          console.log(`counter: "${cont}"`)
          console.log(`ind_min: ${ind_min}, valor: "${val}"`)                   
        }  
      }      
    }    
  }
  console.log(`PRIMER REPETIDO: ${val}`)
  return val;
}

//findFirstRepeated(giftIds);
//findFirstRepeated([5, 1, 2, 3, 2, 5, 1]) //2
//findFirstRepeated([2, 1, 3, 5, 3, 2]) //3 , salida 2

//findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])
/*Expected:
1

Actual:
0
*/
findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]) // expected 1
//findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]) // Expected: 10
findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
