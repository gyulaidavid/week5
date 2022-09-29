// function hundred() {
//     for (let i = 1; i<=100; i += 1) {
//     console.log(i);
//     }
//     return "lofasz"
// }
//   console.log(hundred());

//100-ig kiírja
    // for (let i = 1; i<=100; i += 1) {
    // console.log(i);
    // }
 //100-ig kiírja VÉGE

//minden párost kiír


//     for (let i = 1; i<=100; i+=1){
//       if (i % 2 === 0) {
//         console.log(i)
//       } 
//     }
   
    

// console.log("-------- Masik megoldas --------")

//     for (let i = 1; i<=100; i+=2)
//     console.log(i)
//minden párost kiír VÉGE

//5-el osztható

// for (let i = 1; i<=100; i+=1){
//           if (i % 5 === 0) {
//             console.log(i)
//           } 
//         }


//5-el osztható vége



//azok a számok, amikben van 1-es


//     for (let i = 1; i<=100; i+=1){
//         i.toString();
//         console.log(i.toString());
//   }

// //   let valami = 24;
// //   let hund = valami.toString();
// //   console.log(valami)
// //   console.log(hund)


// //azok a számok, amikben van 1-es VÉGE

// //Minden második betűből új string készül
//  function stringValue (str, n){
//     let result = ""
//    for (let i = 1; i<str.lenght; i+=2){ 
//         if (str) {

//         }
//     }

//  }

let szamok = [2, 4, 13, 4, 6, 42]

let paratlanSzamok = 0;
for(i=0; i<szamok.length; i++){
  paratlanSzamok += szamok[i] % 2 === 1 ? 1 : 0
}

// for (let szam of szamok) {

// }