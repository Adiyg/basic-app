import React, { Component } from 'react'
import styles from './TableStyles.css';

export class Table extends Component {

    constructor(props){
        super(props);
        this.state={
            employees:[
                {
                    id:101,
                    name:'Diya',
                    age:24,
                    dept:'CS',
                    salary:20000
                },
                {
                    id:102,
                    name:'Harshita',
                    age:23,
                    dept:'IT',
                    salary:20000
                },
                {
                    id:103,
                    name:'Ram',
                    age:20,
                    dept:'EC',
                    salary:10000
                },
                {
                    id:104,
                    name:'Raj',
                    age:21,
                    dept:'ME',
                    salary:30000
                }
            ]
        }
    }

    tableData(){
        return this.state.employees.map((employee, index) =>{
            const {id,name,age,dept, salary} =employee
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{dept}</td>
                    <td>{salary}</td>
                </tr>
            )
        })
    }

    tableHeader(){
        let header = Object.keys(this.state.employees[0])
        return header.map((key,index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

  render() {
    return (
      <div>
          <h1 id='title'>Dynamic Table</h1>
          <div className='mt-5'>
          <table id='employees'>
              <tbody>
                  <tr>{this.tableHeader()}</tr>
                  {this.tableData()}
                  </tbody>
          </table>
          </div>
      </div>
    )
  }
}

export default Table