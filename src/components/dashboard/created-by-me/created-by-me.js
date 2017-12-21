import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import language from '../../../constants/app_constants';

class CreatedByMeComponent extends Component {
    render() {
        return(
            <div className="created-by-me-section">
                <div className="tickets-header">
                    {language.ticketsDashboard.createdByMeText}
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to={'/'} className="links">
                        HelloHelloHelloHelloHelloHelloHelloHelloHello
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/'} className="links">
                        Hello
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/'} className="links">
                        Hello
                        </Link>
                    </li>
				</ul>
            </div>
        );
    }
}
export default CreatedByMeComponent;