import React, { Component } from 'react'

export class ContactUs extends Component {

    //state
    state = {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        firstNameErr : "",
        lastNameErr : "",
        emailErr : "",
        passwordErr : ""
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;

        console.log(name,value)

        //setState is a method which is used to update the state
        this.setState({[name]:value})
        console.log(this.state)
    }

    validateTheForm = () =>{
        let firstNameErr,lastNameErr,emailErr,passwordErr = '';

        if(this.state.firstName.length<4){
            firstNameErr = "first Name should be more than 4 characters";
        }

        if(this.state.lastName.length<3){
            lastNameErr = "last Name should not be empty";
        }

        if(!this.state.email.includes('@')){
            emailErr = "please enter a valid email";
        }

        if(this.state.password.length<5){
            passwordErr = "Password must contain 5 characters";
        }

        //0,false,null,undefined,""

        if(firstNameErr || lastNameErr || emailErr || passwordErr){
            this.setState({firstNameErr,lastNameErr,emailErr,passwordErr});
        }else{
            this.setState({firstNameErr,lastNameErr,emailErr,passwordErr});
        }

        //firstName > 4
        //lastName > 0
        //email '@'
        //password >5
    }


    handleSubmit = (e) =>{
        e.preventDefault();

        this.validateTheForm();
    }


  render() {
    return (
      <div>
          <h2 className='mt-5' style={{color:"yellowgreen"}}>Contact Us</h2>
        <div className='container'>
        <div class="row">
            <div class="col-md-3"> </div>

            <div class="col-md-6 mt-5">
            <form>
             <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your First Name"
                  onChange={this.handleChange}
                  name="firstName"
                 />
             </div>
             <p className="text-danger">{this.state.firstNameErr}</p>

  <div class="mb-3">
    <input
     type="text"
      class="form-control"
       placeholder="Enter your Last Name"
       onChange={this.handleChange}
       name="lastName"
       />
  </div>
  <p className="text-danger">{this.state.lastNameErr}</p>

  <div class="mb-3">
    <input
     type="email"
      class="form-control"
       placeholder="Enter your Email"
       onChange={this.handleChange}
       name="email"
       />
  </div>
  <p className="text-danger">{this.state.emailErr}</p>

  <div class="mb-3">
    <input
     type="password"
      class="form-control"
       placeholder="Enter your Password"
       onChange={this.handleChange}
       name="password"
       />
  </div>
  <p className="text-danger">{this.state.passwordErr}</p>
  
  <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">
      Submit
      </button>
</form>
 </div>
        <div class ="col-md-3"></div>
        </div>
        </div>
      </div>

    )
  }
}

export default ContactUs