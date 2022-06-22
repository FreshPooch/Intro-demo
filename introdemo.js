let harryAttack = 25; 
let lordVAttack = 35; 

if(harryAttack > lordVAttack) {
  console.log(`Harry has a better attack than Lord V`); 
}
else if (lordVAttack > harryAttack) {
  console.log(`Lord V has a better attack than Harry`); 
}

else {
  console.log(`Harry and Lord V have the same attack`)
}

let harryHealth = 100; 
let harryDefense = 0; 

// Lord V attacks Harry

console.log(`Lord V attacks Harry ---> "Avra kadavra"`); 
if (harryHealth <= lordVAttack) {
  console.log(`Harry has been slain`); 
}else {
  harryHealth -= lordVAttack; 
  console.log(`Harry lost ${lordVAttack} health. He now has ${harryHealth} health`); 
}

console.log(`Harry picks up a shield`); 
harryDefense += 25; 

console.log(`Lord V attacks again. "Win Guardian Leviosa"!`); 
if(harryHealth <= lordVAttack - harryDefense) {
  console.log(`Harry has been slain`); 
} else {
  harryHealth -= (lordVAttack - harryDefense); 
  console.log(`Harry lost ${lordVAttack - harryDefense} health. He now has ${harryHealth} health`); 
}

// Townsperson gives harry a healthKit

let healthKit = 50; 

if((harryHealth + healthKit) >= 100){
  harryHealth = 100; 
} else {
  harryHealth += healthKit; 
}
console.log(`Harry received ${healthKit} health! Harry's health is now ${harryHealth}.`); 

let coinTossHeads = false; 

if (coinTossHeads !== false) {
  console.log(`The fight continues`); 
} else {
  console.log('Harry is allowed to run away'); 
}

// for (let i = 0; i<=10; i++) {
//   if(harryHealth <=0) {
//     console.log(`Harry has been slain`); 
//   } else {
//       harryHealth -= lordVAttack - harryDefense;
//       console.log(`Harry was hit. Harry's health is now ${harryHealth}`); 
//   }
  
// }
lordVAttack = 40; 

while (harryHealth > 0) {
  harryHealth -= lordVAttack - harryDefense;
  console.log(`Harry was hit. Harry's health is now ${harryHealth}`);

  if(harryHealth <= 0) {
    console.log(`Harry has been slain`); 
  }
}