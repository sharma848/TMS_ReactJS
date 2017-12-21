import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import language from '../../../constants/app_constants';

class AssignedToMeComponent extends Component {
    render() {
        return(
            <div className="assigned-to-me-section">
                <div className="tickets-header">
                    {language.ticketsDashboard.assignedToMeText}
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

export default AssignedToMeComponent;