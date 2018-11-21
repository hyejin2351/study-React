import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </React.Fragment>
    );
  }
}

export default App;
