import React, {useState} from 'react'

function State(){

    const[fname, stateFname]=useState('');
    const[lname, stateLname]=useState('');
    const[email, stateEmail]=useState('');
    const[password, statePassword]=useState('');
    const[confirmpassword, stateConfirmPassword]=useState('');
    


function fnameChangeHandler(event){
    console.log(event.target.value);
        stateFname(event.target.value);
}

function lnameChangeHandler(event){
    console.log(event.target.value);
    stateLname(event.target.value);
}

function emailChangeHandler(event){
    console.log(event.target.value);
    stateEmail(event.target.value);
}

function passwordChangeHandler(event){
    console.log(event.target.value);
    statePassword(event.target.value); 
}

function confirmpasswordChangeHandler(event){
    console.log(event.target.value);
    stateConfirmPassword(event.target.value);
}

function clickHandler(event){
    event.preventDefault();
    console.log( "First name is :"+ fname +"\n"+ "Last name is : " + lname +"\n"+ "Email id:" + email +"\n"+ "Password is :"+ password +"\n"+ "Confirm passowrd is:"+ confirmpassword);
}

function clickHandlerReset(event){
    event.preventDefault();
    stateFname('');
    stateLname('');
    stateEmail('');
    statePassword('');
    stateConfirmPassword('');

}


return(
    
    <>
    <form align="center" >
    <label htmlFor="fname">First name:  </label> <br></br>
    <input type="text" id="fname" name="fname" value={fname} onChange={fnameChangeHandler}></input><br></br>
    <label htmlFor="lname">Last name:</label><br></br>
     <input type="text" id="lname" name="lname" value={lname} onChange={lnameChangeHandler}></input><br></br>
    <label htmlFor="email-id">Email Address:</label><br></br>
    <input type="email" id="email" name="email" value={email} onChange={emailChangeHandler}></input><br></br>
    <label htmlFor="password">Password:</label><br></br>
    <input type="password" id="password" name="password" value={password} onChange={passwordChangeHandler}></input><br></br>
    <label htmlFor="confpassword">Confirm Password:</label><br></br>
    <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={confirmpasswordChangeHandler}></input><br></br><br></br>
     <button  onClick = {clickHandler} >Submit </button>
     
     <button onClick = {clickHandlerReset}>Reset </button>
    </form>
    </>
        
    
)
}

export default State;