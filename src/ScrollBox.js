import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        /* 비 구조화 할당 문법 사용
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
        */

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return (
            <div
            style={style}
            ref={(ref) => {this.box=ref}} //scrllBox 컴포넌트안의 div를 box라 칭하고 DOM 선언해줌
            >
            <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;