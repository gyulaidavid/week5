// function hundred() {
//     for (let i = 1; i<=100; i += 1) {
//     console.log(i);
//     }
//     return "lofasz"
// }
//   console.log(hundred());

//100-ig kiírja
    for (let i = 1; i<=100; i += 1) {
    console.log(i);
    }
 //100-ig kiírja VÉGE

//minden párost kiír


    for (let i = 1; i<=100; i+=1){
      if (i % 2 === 0) {
        console.log(i)
      } 
    }
   
    

// console.log("-------- Masik megoldas --------")

    for (let i = 1; i<=100; i+=2)
    console.log(i)
//minden párost kiír VÉGE

//5-el osztható

// for (let i = 1; i<=100; i+=1){
//           if (i % 5 === 0) {
//             console.log(i)
//           } 
//         }


//5-el osztható vége



//azok a számok, amikben van 1-es


    // for (let i = 1; i<=100; i+=1){
       
    //     if (i.toString().includes(1)) {
    //       console.log(i);
    //     }
    // }
    //     // console.log(i.toString());




//EZ A JÓ!!!!!!!

    let oneIn = []
for (let i = 1; i<=100; i+=1) {
  if (i.toString().substring(0,1) === "1" || i.toString().substring(1,2) === "1") {
    console.log(i);
        oneIn.push(i)
  }
}
console.log(oneIn);
   
      


// // //   let valami = 24;
// // //   let hund = valami.toString();
// // //   console.log(valami)
// // //   console.log(hund)


// // //azok a számok, amikben van 1-es VÉGE

// // //Minden második betűből új string készül
// //  function stringValue (str, n){
// //     let result = ""
// //    for (let i = 1; i<str.lenght; i+=2){ 
// //         if (str) {

// //         }
// //     }

// //  }

// let szamok = [2, 4, 13, 4, 6, 42]

// let paratlanSzamok = 0;
// for(i=0; i<szamok.length; i++){
//   paratlanSzamok += szamok[i] % 2 === 1 ? 1 : 0
// }

// for (let szam of szamok) {

// }


// let languages ={
//   "Java" : 10, 
//   "Ruby" : 80, 
//   "Python" : 65
// }

// console.log(myLanguages);

https://stackoverflow.com/questions/68158413/how-can-i-remove-every-nth-character-from-a-string-in-javascript
function myLanguages(result) {
   for (let i; i<result.length; i++){
    // let curr = result[i]
    let next = result[i.substring()]
    
    if(next === i){

    }

  }
}

let str="pacalospalacsinta"
function removeTwoChar (str) {
for(let i = 0; i<str.length; i++) {
   // let splitString = i.split("");
    if (splitString.substring(i % 2 === 0, -1 )) {


    }

}
 }


 const str = "You s$eem t%o be =very [happy? thes+e day$s!";

 function removeChar(str, n) {
 
   // Create an array from the string
   const arr = str.split('');
 
   // Iterate over the array
   // We make sure to create a separate variable for the
   // array length so that we can decrement when the
   // condition is met
   for (let i = 0, l = arr.length; i < l; i++) {
 
     // We want to match the index of the character to `n`
     // We use modulo here to check the remainder,
     // but we don't want to eliminate the character at index 0
     if (i > 0 && i % 2 === 0) {
 
       // When the condition is met, splice out the element
       // and decrement the length value
       arr.splice(i, 1);
       l--;
     }
   }
 
   // Return a joined-up array
   return arr.join('');
 }
 
 console.log(removeChar(str, 2));