import React from 'react'


class Loginpage extends React.Component
{

    constructor(){
        super();
       this.state= {
            fname:'',
            lname:'',
            email:'',
            password:'',
            confpassword:'',

        }
        this.fnameChangeHandler=this.fnameChangeHandler.bind(this);
        this.lnameChangeHandler=this.lnameChangeHandler.bind(this);
        this.emailChangeHandler=this.emailChangeHandler.bind(this);
        this.passwordChangeHandler=this.passwordChangeHandler.bind(this);
        this.confpasswordChangeHandler=this.confpasswordChangeHandler.bind(this);
        this.clickHandler=this.clickHandler.bind(this);
        this.clickHandlerReset=this.clickHandlerReset.bind(this);
        
    }

        fnameChangeHandler(event){
                console.log(event.target.value);
                let newState={...this.state};
                newState.fname=event.target.value;
                
                this.setState(newState);

            }

        lnameChangeHandler(event){
                console.log(event.target.value);
                let newState={...this.state};
                
                newState.lname=event.target.value;
                this.setState(newState);

             }

        emailChangeHandler(event){
                console.log(event.target.value);
                let newState={...this.state};
                
                newState.email=event.target.value;
                this.setState(newState);

             }

        passwordChangeHandler(event){
                console.log(event.target.value);
                let newState={...this.state};
                
                newState.password=event.target.value;
                this.setState(newState);

             }

        confpasswordChangeHandler(event){
                console.log(event.target.value);
                let newState={...this.state};
                
                newState.confpassword=event.target.value;
                this.setState(newState);

             }

        clickHandler(event){
                
                console.log( "First name is :"+ this.state.fname +"\n"+ "Last name is : " + this.state.lname +"\n"+ "Email id:" + this.state.email +"\n"+ "Password is :"+ this.state.password +"\n"+ "Confirm passowrd is:"+ this.state.confpassword)
                alert();
             }

        clickHandlerReset(event){
                
                let newerState={...this.newState};
                newerState.fname='';
                newerState.lname='';
                newerState.email='';
                newerState.password='';
                newerState.confpassword='';
                this.setState(newerState);
             }


    
    render(){
        return(
            <>
            <form align="center" >
            <label for="fname">First name:  </label> <br></br>
            <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.fnameChangeHandler}></input><br></br>
            <label for="lname">Last name:</label><br></br>
             <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.lnameChangeHandler}></input><br></br>
            <label for="email-id">Email Address:</label><br></br>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.emailChangeHandler}></input><br></br>
            <label for="password">Password:</label><br></br>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.passwordChangeHandler}></input><br></br>
            <label for="confpassword">Confirm Password:</label><br></br>
            <input type="password" id="confpassword" name="confpassword" value={this.state.confpassword} onChange={this.confpasswordChangeHandler}></input><br></br><br></br>
             <button  onClick = {this.clickHandler} >Submit </button>
             <hr></hr>
             <button onClick = {this.clickHandlerReset} >Reset </button>
            </form>
            </>
        )
    }

}

export default Loginpage;