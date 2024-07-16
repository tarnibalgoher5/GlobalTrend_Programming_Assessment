// Write a function that takes a string input representing 
//a simple arithmetic expression (only addition and subtraction) 
//and returns the result.

function calculate(expr) {
    const tokens = expr.split(/(\+|-)/); // splitting the operators and numbers 

    let result = parseFloat(tokens[0]);
    for (let i =1; i<tokens.length; i += 2) {
        const operator = tokens[i];
        const value = parseFloat(tokens[i + 1]);
        if (operator === "+"){
            result += value;
        }
        else if (operator === "-"){
            result -= value;
        } 
        else {
            console.log("ENTER A VALID OPERATOR");
        }
    }
    return result;
  }

  let expr1 = "2+9-3";
  let expr2 = "6-1+4";
  
  console.log(calculate(expr1)); 
  console.log(calculate(expr2));
  

