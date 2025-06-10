// Write a function that divided 2 numbers
const divideTwoNums = (num1, num2) => {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    // divind the numbers num1/num2
    const result = num1 / num2;
    console.log("Result is:", result);
  } catch (error) {
    //log the error message
    console.error("Caught an error:", error.message);
  }
};

//call the function with 2 numbers
divideTwoNums(100, 0);
