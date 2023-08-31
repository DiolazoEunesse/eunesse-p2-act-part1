import { useState } from "react";
import H1 from "./components/H1";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  const [total, setTotal ] = useState(0);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const clickCalculate = (symbol)=> {
    switch (symbol){
      case "+":
        return setTotal(firstNumber + secondNumber);
      case "-":
        return setTotal(firstNumber - secondNumber);
      case "*":
        return setTotal(firstNumber * secondNumber);
      case "/":
        return setTotal(firstNumber / secondNumber);
      default:
        return "invalid please try again";
    }
  }
  


  return (
    <div className="card">
      <H1>React Calculator</H1>
      <H1>{total}</H1>
      <Input 
        type="number" 
        placeholder="Enter your first number" 
        onChange={(e)=>  setFirstNumber(Number(e.target.value))} 
        defaultValue={firstNumber}
      />
      <Input 
        type="number" 
        placeholder="Enter your second number" 
        onChange={(e)=>  setSecondNumber(Number(e.target.value))} 
        defaultValue={secondNumber}
      />
      <div className="buttonContainer">
        <Button onClick={()=> clickCalculate("+")}>Add</Button>
        <Button onClick={()=> clickCalculate("-")}>Subtract</Button>
      </div>
      <div className="buttonContainer">
        <Button onClick={()=> clickCalculate("*")}>Multiply</Button>
        <Button onClick={()=> clickCalculate("/")}>Divide</Button>
      </div>
    </div>
  );
}

