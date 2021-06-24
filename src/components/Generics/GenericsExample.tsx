import React from "react";

function log<T>(param: T): T {
  console.log(param);
  return param;
}

// function log(param: string): string {
//     console.log(param);
//     return param;
//   }

// function log2(param: number): number {
//     console.log(param);
//     return param;
//   }

// function log2(param: any): any {
//     console.log(param);
//     return param;
//   }

const result = log<string>("typescript tv");
const result2 = log<number>(1234); // when calling the function you can explicitly say the type you want to return

export default log;
// const GenericsExample = () => {
//   return <div></div>;
// };

// export default GenericsExample;

// generics play a key role in ts - allows you to make functions that work
// over a variety of types instead of being limited to one type
// later you can then use them with your own types

// T is a variable - a type variable short for Type but can be name anything
// You can pass in as my type variables as you want
