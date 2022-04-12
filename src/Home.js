import React from "react"
import './HomeStyles.css';
import styles from './HomeStyles.module.css'

function Home(props) {

    const productstyles ={
        color:'green',
        backgroundColor:'yellow',
        fontSize : '25'
    }


   // console.log(props.studentMark)
    // const[social, science,maths,physics] = props.studentMarks; //destructuring

    // const {name,age} = props.studentDetails;

return (
    <div>
        <h2>HOME Component</h2>
        <h2 className='clr-blue'>Product Details</h2>
        <section style={{color:"red"}}>This is  a section tag </section>

        <div style={productstyles}>This is division tag</div>
    <article className={styles.itemcss}>
        this is module css
    </article>

       {/* <h3>My name is {props.name} and my age is {props.age}</h3>
        <h2>Marks: {props.studentMarks[1]}</h2>
        <h2>Name : {props.studentDetails.name}</h2>
        <h2>Age : {props.studentDetails.age}</h2>


        <h2>Marks for social : {social}</h2>
        <h2>Marks for science : {science}</h2>

        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>*/}

    </div>
)
}

export default Home