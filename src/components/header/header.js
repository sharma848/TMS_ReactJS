import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import language from '../../constants/app_constants';

class Header extends Component {
    render() {
        return(
            <div className="header-section">
                <ul>
                    <li><Link to={'/dashboard'} className="header-link">{language.HeaderData.dashboardText}</Link></li>
                    <li><Link to={'/createdrop'} className="header-link">{language.HeaderData.regularDropText}</Link></li>
                    <li><Link to={'/signout'} className="header-link">{language.HeaderData.signoutText}</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;