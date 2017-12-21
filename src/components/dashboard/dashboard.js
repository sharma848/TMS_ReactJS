import React, {Component} from 'react';
import AssignedToMeComponent from '../dashboard/assigned-to-me/assigned-to-me';
import CreatedByMeComponent from '../dashboard/created-by-me/created-by-me';

import Header from '../header/header';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="tickets-section">
                    <AssignedToMeComponent />
                    <CreatedByMeComponent />
                </div>
            </div>
        );
    }
}

export default Dashboard;