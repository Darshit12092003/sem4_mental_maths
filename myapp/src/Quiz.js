import React from "react";
import axios from 'axios'

function Quiz() {
    const process = async(e)=>{
        e.preventDefault()
    try{
        await axios.post("http://localhost:5000/process")
    }
    catch{
        console.log("error has been occured")
    }
}
    return(
        <div>
            
        </div>
    )
}
export default Quiz;