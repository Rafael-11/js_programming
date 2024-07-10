for (let i = 0; i < 5; i++) {
    // i: 0, 1, 2, 3, 4
    console.log("Wooden Spoon");
  }
  
  console.log("------------------------------------------");
  
  for (let i = 5; i <= 15; i++) {
    console.log(i);
  }
  
  console.log("------------------------------------------");
  
  for (let i = 0; i < 7; i++) {
      console.log('Hello CYDEO');
      console.log('Hello Programmers');
  }
  
  console.log("------------------------------------------");
  
  for (let i = 1; i < 6; i++) {
      console.log(i);
      if(i==3){
          break; // exits the current loop
      }
  }
  
  
  console.log("------------------------------------------");
  
  for (let i = 1; i < 11; i++) {
      if(i === 3 || i === 7){
          continue; // skips
      }
      console.log(i);
  }