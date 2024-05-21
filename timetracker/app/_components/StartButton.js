'use client';
import DropDown from "./DropDown.js";
import styles from "../_styles/startbutton.module.css";
import React,{useState} from "react";

export default function StartButton() {
    const[show,setShow]=useState(false);

    function start(){
        setShow(true);
    }

    return (
        <div className="dropdowns">
            {
                !show?<button onClick={start}>Start Tracking</button>: null
            }
            {
                show?<DropDown></DropDown>: null
            }
        </div>
    );
}