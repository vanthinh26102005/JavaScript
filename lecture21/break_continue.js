// Jump statement: "break", break out of a loop anytime

// break out of "for" loop
for(let i = 0; i < 3; i++) {
    console.log('"for" loop should print out only once!')
    break
  }
  // "for" loop should print out only once!
  
  // break out of "while" loop
  while(true) {
    console.log('"while" loop should print out only once!')
    break
  }
  // "while" loop should print out only once!

  
  // Jump statement: continue, continue the loop from the beginning

// continue in "for" loop
for(let i = 0; i < 3; i++) {
    if(i != 1) continue
    console.log('current i:', i)
  }
  // current i: 1
  
  // continue in "while" loop
  let counter = 0
  while(counter < 3) {
    counter++
    if(counter != 1) {
      continue
    }
    console.log('current counter:', counter)
  }
  // current counter: 1