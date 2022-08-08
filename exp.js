export const students = [
    {
      stdNum: 123,
      fName: "Amy",
      lName: "Gate",
      city: "Washington",
      country: "United States",
    },
    {
      stdNum: 132,
      fName: "Marry",
      lName: "Sandler",
      city: "philadelphia",
      country: "United States",
    },
    {
      stdNum: 213,
      fName: "Sandra",
      lName: "Bullock",
      city: "California",
      country: "United States",
    },
    {
      stdNum: 231,
      fName: "Sara",
      lName: "Wonderman",
      city: "Texas",
      country: "United States",
    },
    {
      stdNum: 312,
      fName: "Angelina",
      lName: "Jolie",
      city: "Mississippi",
      country: "United States",
    },
    {
      stdNum: 321,
      fName: "Susan",
      lName: "Richie",
      city: "New York",
      country: "United States",
    },
  ];
  
  //============================================================================
  //============================================================================
  
  //Spread operation
  const val = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const num1 = [...val];
  
  console.log(num1);
  
  //============================================================
  
  //Rest operation
  const val2 = (...nums) => {
    console.log(nums);
  };
  
  val2(1, 2, 3, 4, 5, 6, "one", "two", "three", "four", "five");
  
  //============================================================================
  //============================================================================
  
  const lstss = [1, 2, 3, 4, 5, 6];
  
  const finder = () => {
    if (lstss.indexOf(2) === -1) return console.log("empty list");
  
    return console.log("not empty list");
  };
  
  finder();
  
  //================================
  
  const finder2 = (num) => {
    if (lstss.includes(num)) return console.log(`there is ${num} in the list`);
  
    if (num === undefined) return console.log(`Waiting for value`);
  
    return console.log(`there is no ${num} in the list`);
  };
  
  finder2();
  
  //============================================================================
  //============================================================================
  
  const string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, odit hic
  similique nulla alias commodi enim vitae mollitia distinctio, nobis
  praesentium excepturi quod illo iure accusamus repellendus perferendis ab.
  Hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, odit hic
  similique nulla alias commodi enim vitae mollitia distinctio, nobis
  praesentium excepturi quod illo iure accusamus repellendus perferendis ab.
  Hic!Lorem,`;
  
  const lsts = [100, 200, 300, 400, 500];
  
  let startOverAll = performance.now();
  
  let strH = "";
  let sum = 0;
  let sum2 = 0;
  let el = 0;
  let init = 0;
  let length = lsts.length;
  
  //============================================================================
  
  let startOne = performance.now();
  for (const lst of lsts) {
    sum += lst;
  }
  let endOne = performance.now();
  
  console.log(`It took: ${endOne - startOne} ms to execute ${sum} `);
  
  //============================================================================
  
  let startTwo = performance.now();
  for (let i = 0; i < length; i++) {
    el += lsts[i];
  }
  let endTwo = performance.now();
  
  console.log(`It took: ${endTwo - startTwo}ms to execute ${el} `);
  
  //============================================================================
  
  let startThree = performance.now();
  while (init < length) {
    sum2 += lsts[init];
    init++;
  }
  let endThree = performance.now();
  
  console.log(`It took: ${endThree - startThree}ms to execute ${sum2} `);
  
  //============================================================================
  
  //============================================================================
  
  let startFour = performance.now();
  for (const str of string) {
    console.log(str);
  }
  let endFour = performance.now();
  
  console.log(`It took: ${endFour - startFour} ms `);
  
  //============================================================================
  
  let endOverAll = performance.now();
  
  console.log(`It took: ${endOverAll - startOverAll}ms overall times to execute`);
  