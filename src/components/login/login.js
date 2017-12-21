import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchLoginData} from '../../actions';
import language from '../../constants/app_constants';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',            
            errorMessage: '',
        }
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    componentDidMount() {
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    submitLogin() {
        if(this.state.userName === '' || this.state.password === '') {
            this.setState({
                errorMessage: 'All fields are mandatory'
            });
        } else {
            this.setState({
                errorMessage: ''
            });           
            console.log(this.state);          
            this.props.fetchLoginData(this.state.username, this.state.password);   
        }             
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-header-text">
                    <span>{language.LoginData.LoginBody}</span>
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-input" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.onUsernameChange}
                        placeholder={language.LoginData.EmailPlaceholder} 
                        required
                        />
                </div>
                <div className="form-group top-margin-15">
                    <input 
                        type="password" 
                        className="form-input" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.onPasswordChange}
                        placeholder={language.LoginData.PasswordPlaceholder} 
                        required
                        />
                </div>
                <div className="form-group top-margin-15">
                    <button 
                        type="button" 
                        className="login-btn btn"
                        onClick={this.submitLogin}
                        >{language.LoginData.LoginBtnText}</button>
                </div>
                <div className="error-message">
                    <span>{this.state.errorMessage}</span>
                </div>
                <div className="signup">
                    <span>{language.LoginData.registerText}</span><Link to={'/signup'}>{language.SignupData.signupText}</Link>
                </div>
                <div className="error-message">
                    <span>{this.state.loginData}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { loginData: state.loginData };
}

export default connect(mapStateToProps, { fetchLoginData: fetchLoginData }) (Login);