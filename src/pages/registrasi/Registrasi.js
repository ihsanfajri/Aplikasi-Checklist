import axios from 'axios';
import React, { Component } from 'react'

import '../../pages/registrasi/Registrasi.css'

export class Registrasi extends Component {

    state ={
        email: '',
        password: '',
        username: '',
    }

    handleChange = event =>{
        this.setState({
            email: event.target.value, 
            password: event.target.value,
            username: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user ={
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
        }

        axios.post(`http://18.139.50.74:8080/register`, {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }

    render() {
        return (
            <div className="container">
                <div className="cont-intro">
                    <h2>Welcome back</h2>
                    <a href="#">Login</a>
                </div>
                <div className="cont-form">
                    <h2>Registrasi</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form">
                            <label>Email :</label>
                            <input type="email" placeholder="Enter Your Email" onChange={this.handleChange}/>
                        </div>
                        <div className="form">
                            <label>Password :</label>
                            <input type="password" placeholder="Enter Your Password" onChange={this.handleChange}/>
                        </div>
                        <div className="form">
                            <label>Username :</label>
                            <input type="text" placeholder="Enter Your Username" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" >Registrasi</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default Registrasi
