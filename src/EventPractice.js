import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }

    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({ //상태 업데이트
            [e.target.name]: e.target.value //이벤트가 발생하면 타겟을 트리거하겠다.
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    handleClick = () => {
        alert(this.state.username+ ":" +this.state.message); //이전에 트리거된 정보 알림
        this.setState({ //상태 업데이트
            message: '',
            username: ''
        })
    }


    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="이름을 입력해보세요."
                    value={this.state.username} //state 초기값 반환
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요."
                    value={this.state.message} //state 초기값 반환
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;