import React, { useState } from  'react';

const UserForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [submitDone, setsubmitDone] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setsubmitDone(true);
    }

    const message = () => {
        if(!submitDone) {
            return "Please type all your data";
        } else{
            return "¡thank you for entering your data!";
        }
    }
    
    return(
        <div className='container mt-5'>
        <form onSubmit={ createUser }>
            <div className='mb-2 form-control'>
                <label>First Name: </label>  <br/>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Last Name: </label> <br/>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Email Address: </label> <br/>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Password: </label> <br/>
                <input type="password" id="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Confirm Password: </label> <br/>
                <input type="password" id="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" className="btn btn-success" value="Create User" />
            <div>{message()}</div>
        </form>
        <div className='mt-5'>
            <h2>Your Form Data: </h2>
            <p>First Name: <span className='text-danger'>{firstname}</span> </p>
            <p>Last Name: <span className='text-danger'>{lastname}</span></p>
            <p>Email: <span className='text-danger'>{email}</span></p>
            <p>Password: <span className='text-danger'>{password}</span></p>
            <p>Confirm Password: <span className='text-danger'>{confirmpassword}</span></p>
        </div>
        </div>
    );
};
    
export default UserForm;