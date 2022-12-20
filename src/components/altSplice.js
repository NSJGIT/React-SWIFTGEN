 
 function altSplice(arrayf,indexa) {
if (indexa<1) {return arrayf;}
arrayf=Array.from(arrayf);
let indext=indexa-1;

let tempA1=arrayf.slice(0,indext);
let tempA2=arrayf.slice(indexa);
return tempA1.concat(tempA2);};
        export default altSplice;