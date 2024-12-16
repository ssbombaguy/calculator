import classes from "../modules/Calculator.module.scss";
import { useState} from 'react'
const Calculator = () =>{
    const [number, setNumber] = useState("")
    const [value, setValue] = useState(0)
    const [isEqual, setIsEqual] = useState(false)
    let numb
    let val
    const numbHandler = (i) =>{
        setNumber(number+i)
    }
    const delHandler = () =>{

    }
    const plusHandler = () =>{
        numb = Number(number)
        val = value + numb
        setValue(val)
        console.log(value)
        setNumber("")
    }
    const multiplyHandler = () =>{

    }
    const devideHandler = () =>{

    }
    const minusHandler = () =>{

    }
    const dotHandler =()=>{

    }
    const  equalHandler = () =>{
        setIsEqual(true)
    }

    return(
        <div className={classes["calculator-wrapper"]}>
            <div className={classes["calculator-output-wrapper"]}>
                {isEqual && <h2>{value}</h2>}<h2>{number}</h2>
            </div>
            <div className={classes["calculator-btns-wrapper"]}>
                <div className={classes["calculator-main-btn-wrapper"]}>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(7)}}>7</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(8)}}>8</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(9)}}>9</button>
                    <button className={classes["calculator-btn-del"]} onClick={delHandler}>DEL</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(4)}}>4</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(5)}}>5</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(6)}}>6</button>
                    <button className={classes["calculator-btn"]} onClick={plusHandler}>+</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(1)}}>1</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(2)}}>2</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(3)}}>3</button>
                    <button className={classes["calculator-btn"]} onClick={minusHandler}>-</button>
                    <button className={classes["calculator-btn"]} onClick={dotHandler}>.</button>
                    <button className={classes["calculator-btn"]} onClick={() =>{numbHandler(0)}}>0</button>
                    <button className={classes["calculator-btn"]} onClick={devideHandler}>/</button>
                    <button className={classes["calculator-btn"]} onClick={multiplyHandler}>X</button>
                </div>
                <div className={classes["last-btns-wrapper"]}>
                    <button className={classes["calculator-btn-reset"]} onClick={delHandler}>RESET</button>
                    <button className={classes["calculator-btn-equal"]} onClick={equalHandler}>=</button>
                </div>

            </div>


        </div>

    )
}

export default Calculator