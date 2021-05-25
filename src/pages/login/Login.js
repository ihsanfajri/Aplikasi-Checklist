import React, { Component } from 'react';
import axios from 'axios';

export class Login extends Component {

    state ={
        email: '',
        password: '',
    }

    handleChange = event =>{
        this.setState({
            email: event.target.value, 
            password: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user ={
            email: this.state.email,
            password: this.state.password,
        }

        axios.post(`http://18.139.50.74:8080/login`, {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }
    render() {
        return (
            <div className="Container">
                <div className="cont-form">
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Email :</label>
                            <input type="email" placeholder="Enter Your Email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Password :</label>
                            <input type="password" placeholder="Enter Your Email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                            <a href="">Registrasi</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
