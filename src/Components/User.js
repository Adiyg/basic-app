import React, { Component } from 'react'

export class User extends Component {
constructor(props){
    super(props);
    this.state={
        users : [{}]
    }
    console.log("contructor")
}


//static getderivedstatefromprops

    static getDerivedStateFromProps(props, state){
        console.log("static getderivedstatefromprops")
    }

    async getUserData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        const data = await response.json();
        console.log(data);
        this.setState({users:data},function(){
            console.log(this.state.users)
        })
    }

    componentDidMount(){
        console.log("component did mount");
        this.getUserData();
       
    }

  render() {
      console.log("render executed")
    return (
      <div>
          <h2 style={{color:"purple"}}>User Data Component</h2>

            <div class="container mt-3">
            <table class="table table-striped table-hover">
                <tr className='pt-3 m-3'>
                    <th style={{color:"#BF3FBF"}}>id</th>
                    <th style={{color:"#BF3FBF"}}>name</th>
                    <th style={{color:"#BF3FBF"}}>userName</th>
                    <th style={{color:"#BF3FBF"}}>Email</th>
                </tr>
                {this.state.users.map((user)=>(
                    <tr>
                        <td className='pt-3'>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
                }
                
            </table>

            </div>
            
         
      </div>
    )
  }
}

export default User