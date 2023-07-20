import React, { Component} from 'react';


class Registration extends Component {
    constructor(props) {
    super(props);
    this.state = {
      Fname:'',
      Lname:''
    }
    
    
     }

   handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }



  render() {
    return (
      <>
       <form>
        <label for="Fname">First Name:</label><br />
        <input type="text" id="Fname" name="Fname" value={this.state.Fname} onChange={(e)=>{this.handleChange(e)}} /> {this.state.Fname}<br />
        <label for="Lname">Last Name:</label><br />
        <input type="text" id="Lname" name="Lname" value={this.state.Lname} onChange={(e)=>{this.handleChange(e)}} /> {this.state.Lname}<br /><br />
        <button>Submit</button>
       </form>
     </>
    )

  }
}

export default Registration;