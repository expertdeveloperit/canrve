import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/login.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    // console.log(this.state);
  }

  handleSubmit(event) {
    var apiBaseUrl = "http://18.222.204.56";
    var payload = {
      "name":this.state.name,
      "email":this.state.email,
      "password":this.state.password
      }
      // console.log(payload,);
      axios.post(apiBaseUrl+'/auth/userregister', payload, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error){
          console.log(error);
        });
      event.preventDefault();
  }
  render() {
    return (
      <div className="login-wrap">
        <div className="card">
          <div className="card-header text-center">
            <h3>Sign Up</h3>
            <hr/>
            <p>Sign up for Canrve account</p>
          </div>
          <div className="card-body">
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="form-group login-form-group">
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} required className="form-control form-control-lg" placeholder="Full Name" />
                </div>
                <div className="form-group login-form-group">
                    <input required name="email" className="form-control form-control-lg" onChange={this.handleChange} type="email" aria-describedby="emailHelp" placeholder="Email Address" />
                </div>
                <div className="form-group login-form-group">
                <input required name="password" className="form-control form-control-lg" onChange={this.handleChange} type="password" placeholder="Password" />
                </div>
                <div className="form-group login-form-group">
                <input required name="confirm" className="form-control form-control-lg" onChange={this.handleChange} type="password" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
            </form>
          </div>
          <div className="card-footer text-muted">
            <p className="message">Have an account with us? <Link to="/login">Log In</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;