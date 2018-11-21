import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000' //위에 업데이트된 password 값이 0000이어야 한다.
        });
        this.focusing.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => {this.focusing=ref}}
                    
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} //조건부 css
                    />
                    
                <button
                    onClick={this.handleButtonClick}
                >
                    검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;