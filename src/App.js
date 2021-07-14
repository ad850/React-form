import React from "react";
import { useState } from "react";

const App = () => {

    const [state, setstate] = useState({

        fname: "",
        lname: '',
        email: ''

    });
    const change = (event) => {


        let value = event.target.value;
        let name = event.target.name;

        setstate((prevalue) => {
            // if (name === 'fname') {

            //     return {
            //         fname: value,
            //         lname: prevalue.lname,
            //         email: prevalue.email
            //     };
            // }
            // else if (name === 'lname') {

            //     return {
            //         fname: prevalue.fname,
            //         lname: value,
            //         email: prevalue.email
            //     }
            // } else if (name === 'email') {

            //     return {
            //         fname: prevalue.fname,
            //         lname: prevalue.lname,
            //         email: value,
            //     }

            // }

            return {
                ...prevalue,

                [name]: value,

            }


        })
    }

    const onsubmit = (event) => {

        event.preventDefault();

        alert("form is submmited");
    }

    return (

        <div className="main" >

            <form onSubmit={onsubmit}>
                <div className="center">


                    <input type="text" placeholder="Enter name" onChange={change} value={state.fname} name="fname" />
                    <input type="text" placeholder="Enter sname" onChange={change} value={state.lname} name="lname" />
                    <input type="email" placeholder="Enter sname" onChange={change} value={state.email} name="email" />



                    <input type="submit"></input>

                    <div className="ans">{state.fname} {state.lname} {state.email}</div>



                </div>
            </form>
        </div>


    );

}
export default App;



