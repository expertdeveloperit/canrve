import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};
        this.state = {password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {}

    handleSubmit(event) {}

    render() {
        return (
            <div className="login-wrap">
                <div className="card">
                    <div className="card-header text-center">
                        <h3>Log In</h3>
                        <hr/>
                        <p>Login into your Canrve account</p>
                    </div>
                    <div className="card-body">
                        <form className="login-form">
                            <div className="form-group login-form-group">
                                <input required className="form-control form-control-lg" type="email" aria-describedby="emailHelp" placeholder="Email Address" />
                            </div>
                            <div className="form-group login-form-group">
                            <input required className="form-control form-control-lg" type="password" placeholder="Password" />
                            <p className="help-block text-right">
                                <Link to="#">Forgot password?</Link>
                            </p>
                            </div>
                            <div className="form-group">
                            <div className="login-checkbox">
                                <label className="icheck-label">
                                <div className="icheck">
                                    <input className="icheck" type="checkbox" />
                                    <ins className="iCheck-helper"></ins>
                                    <span className="icheck-title">Keep me logged in</span>
                                </div>
                                </label>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Log In</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        <p className="message">Don't have account with us? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;