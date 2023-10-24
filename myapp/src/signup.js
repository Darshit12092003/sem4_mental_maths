import React, { useState } from 'react'
import Navbar from './Nav';
import axios from 'axios';
function Signup() {
    const [name, setname] = useState("");
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

   
    const process = async(e)=>{
        e.preventDefault()
    try{
        await axios.post("http://localhost:5000/data",{name,email,password})
        alert("user ")
        alert("data saved")
        setname("")
        setemail("")
        setpassword("")
    }
    catch{
        console.log("error has been occured")
    }
}
    
    return (
        <div>
            <header style={{ 'backgroundColor': 'aqua' }}>
                <h1>Mental Math Trainer</h1>
                <p>Practice your mental math skills with fun challenges!</p>
            </header>
            <div class="container">
                <Navbar />
                <br /><br />
                <div>
                    <form className="form-data" onSubmit={process}>
                            <legend><b>Sign Up Form:</b></legend>
                            <table align='center' cellPadding='20px' style={{'border' : '2px black solid'}}>
                                <tr>
                                    <td><label>Name:</label></td>
                                    <td><input type="text" name="fname" onChange={(e)=>setname(e.target.value)} /><br /></td>
                                </tr>
                                <tr>
                                    <td><label>Email Id:</label></td>
                                    <td><input type="email" name="eid" onChange={(e)=>setemail(e.target.value)} required /><br /></td>
                                </tr>
                                <tr>
                                    <td><label>Password :</label></td>
                                    <td><input type="password" name="pass"  required onChange={(e)=>setpassword(e.target.value)} /><br /></td>
                                </tr>
                                <tr>
                                    <td><button type="submit">Submit</button> <br /></td>
                                </tr>
                            </table>
                    </form>
                </div>
            </div>
            <footer>
                <p>&copy; 2023 Mental Math Trainer</p>
            </footer>
        </div>
    )
}
export default Signup