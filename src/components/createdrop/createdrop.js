import React, {Component} from 'react';
import language from '../../constants/app_constants';

class CreateDrop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            source: '',
            destination: '',
            startTime: '',
            endTime: ''
        };
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.onSourceChange = this.onSourceChange.bind(this);
        this.onStartTimeChange = this.onStartTimeChange.bind(this);
        this.submitCreateDropForm = this.submitCreateDropForm.bind(this);
    }
    onSourceChange(e) {
        this.setState({
           source: e.target.value
        });
    }

    onDestinationChange(e) {
        this.setState({
            destination: e.target.value
        });
    }

    onStartTimeChange(e) {
        if(e.target.value === '8:30 AM') {
            this.setState({
                startTime: e.target.value,
                endTime: '5:30 PM'
            });
        } else if(e.target.value === '11:00 AM') {
            this.setState({
                startTime: e.target.value,
                endTime: '8:00 PM'
            });
        }
        
    }

    submitCreateDropForm() {
        console.log(this.state);
        this.setState({
            source: '',
            destination: '',
            startTime:'',
            endTime: ''
        });
    }

    render() {
        return (
            <div className="signup-section">
                <div className="header-text">
                    <span>{language.CreatedropData.createdropHeader}</span>
                </div>
                <div className="form-group">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="source" 
                            value={this.state.source}
                            onChange={this.onSourceChange}
                            placeholder={language.CreatedropData.sourcePlaceholder} 
                            />
                    </div>
                <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="destination" 
                            value={this.state.destination}
                            onChange={this.onDestinationChange}
                            placeholder={language.CreatedropData.destinationPlaceholder} 
                            />
                    </div>
                <div className="form-group top-margin-15">
                        <select 
                            className="form-input" 
                            name="startTime"
                            onChange={this.onStartTimeChange}
                            >
                            <option value="" default>Select Start Time</option>
                            <option value="8:30 AM">8:30 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                        </select>
                    </div>
                <div className="form-group top-margin-15">
                        <input 
                            type="text" 
                            className="form-input" 
                            name="email" 
                            value={this.state.endTime}
                            disabled
                            />
                    </div>
                <div className="form-group top-margin-15">
                        <button 
                            type="button" 
                            className="signup-btn btn"
                            onClick={this.submitCreateDropForm}
                            >{language.CreatedropData.createdropText}</button>
                    </div>
                <div className="error-message">
                    <span></span>
                </div>
            </div>
        );
    }
}

export default CreateDrop;