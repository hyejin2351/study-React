import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name:''
        })
    }

    handleRemove = (index) => {
        const { names } = this.state;

        this.setState({
            names: names.filter((item, i) => i !== index) /* filter로 index번째를 제외한 원소만 있는 새 배열 생성 */
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}> {/* li 더블클릭하면 hnadleRemove() 메서드 실행 */}
                    {name}
                </li>
            )
        )
        
        return (
            <div>
                <input 
                onChange={this.handleChange}
                value={this.state.name}
                />
                <button 
                onClick={this.handleInsert}
                >버튼</button>
                <ul>
                {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;