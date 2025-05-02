import { useState } from "react";
import { Equation, Input } from "../styled/styledElements";
import { Keyboard } from "../styled/styledKeyboard";
import Sun from "/images/sun.png"
import Moon from "/images/moon.jpg"
import { Check } from "../functions/inputOnChange";

export default function Calculator({darkMode, setDarkMode}: {darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [value, setValue] = useState("");
    const [equation, setEquation] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(Check(e.target.value, value));
    }
    function handleClick(str: string){
        if(str === "AC"){
            setValue("");
            setEquation("");
            return;
        }
    }
    function getResult(){
        
    }

    return (
    <div>
        <div className="flex flex-col items-end pr-[43px]">
            <Equation>{equation}</Equation>
            <Input type="text" onChange={handleChange} value={value}/>
        </div>
        <Keyboard darkmode={`${darkMode}`}>
            <button className="key theme-changer" onClick={() => setDarkMode(!darkMode)}>
                <img src={darkMode ? Sun : Moon} alt="Theme" className={`${darkMode ? 'h-[24px]' : 'h-[18px]'}`}/>
            </button>
            <button className="key operation" onClick={() => handleClick("%")}><h1>%</h1></button>
            <button className="key operation" onClick={() => handleClick("÷")}><h1 className="bigger">÷</h1></button>
            <button className="key operation" onClick={() => handleClick("x")}><h1>X</h1></button>
            <button className="key" onClick={() => handleClick("7")}><h1>7</h1></button>
            <button className="key" onClick={() => handleClick("8")}><h1>8</h1></button>
            <button className="key" onClick={() => handleClick("9")}><h1>9</h1></button>
            <button className="key operation" onClick={() => handleClick("-")}><h1 className="bigger">−</h1></button>
            <button className="key" onClick={() => handleClick("4")}><h1>4</h1></button>
            <button className="key" onClick={() => handleClick("5")}><h1>5</h1></button>
            <button className="key" onClick={() => handleClick("6")}><h1>6</h1></button>
            <button className="key operation" onClick={() => handleClick("+")}><h1 className="bigger">+</h1></button>
            <button className="key" onClick={() => handleClick("1")}><h1>1</h1></button>
            <button className="key" onClick={() => handleClick("2")}><h1>2</h1></button>
            <button className="key" onClick={() => handleClick("3")}><h1>3</h1></button>
            <button className="result" onClick={getResult}><h1 className="bigger">=</h1></button>
            <button className="key AC" onClick={() => handleClick("AC")}><h1>AC</h1></button>
            <button className="key" onClick={() => handleClick("0")}><h1>0</h1></button>
            <button className="key" onClick={() => handleClick(".")}><h1>.</h1></button>
        </Keyboard>
    </div>
  )
}