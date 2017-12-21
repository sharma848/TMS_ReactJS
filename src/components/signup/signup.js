import React, {Component} from 'react';
import { connect } from 'react-redux';

import language from '../../constants/app_constants';
import { registerUser } from '../../actions/index';

class signUpComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            address: '',
            email: '',
            errorMessage: ''
        }
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
    }

    onFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onUserNameChange(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onAddressChange(e) {
        this.setState({
            address: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    submitSignup() {
        if( this.state.firstName === '' || 
            this.state.lastName === '' || 
            this.state.userName === '' ||
            this.state.password === '' ||
            this.state.address === '' ||
            this.state.email === ''
            ) {
            this.setState({
                errorMessage: 'All fields are mandatory'
            });
        } else if(this.state.password.length < 6) {
            this.setState({
                errorMessage: 'Password should be of 6 character long'
            });
        } else {
            this.setState({
                errorMessage: ''
            });           
            console.log(this.state);    
            this.props.registerUser(this.state);
        }     
    }

    render() {
        return (
            <div className="signup-section">
                <div className="header-text">
                    <span>{language.SignupData.signupHeader}</span>
                </div>
                <div className="form-group">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="firstname" 
                            value={this.state.firstName}
                            onChange={this.onFirstNameChange}
                            placeholder={language.SignupData.firstnamePlaceholder} 
                            required
                            />
                    </div>
                <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="lastname" 
                            value={this.state.lastName}
                            onChange={this.onLastNameChange}
                            placeholder={language.SignupData.lastnamePlaceholder} 
                            required
                            />
                    </div>
                    <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="username" 
                            value={this.state.userName}
                            onChange={this.onUserNameChange}
                            placeholder={language.SignupData.usernamePlaceholder} 
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
                            placeholder={language.SignupData.passwordPlaceholder} 
                            required
                            />
                    </div>
                    <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="address" 
                            value={this.state.address}
                            onChange={this.onAddressChange}
                            placeholder={language.SignupData.addressPlaceholder} 
                            required
                            />
                    </div>
                    <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            placeholder={language.SignupData.emailPlaceholder} 
                            required
                            />
                    </div>
                <div className="form-group top-margin-15">
                        <button 
                            type="button" 
                            className="signup-btn btn"
                            onClick={this.submitSignup}
                            >{language.SignupData.signupText}</button>
                    </div>
                <div className="error-message">
                    <span>{this.state.errorMessage}</span>
                </div>
            </div>
        );
    }
}

export default connect(null, { registerUser: registerUser })(signUpComponent);