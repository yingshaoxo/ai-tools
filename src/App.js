import React, { Component } from 'react';
import Navigation from './NavigationBlock'

class App extends Component {
  render() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: "row",
                width: '100vw',
                height: '100vh',
            }}
        >
            <Navigation></Navigation>
        </div>
    )
  }
}

export default App;
