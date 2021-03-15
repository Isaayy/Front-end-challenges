import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import SnippetsSection from './Components/SnippetsSection/SnippetsSection';
import WorkflowSection from './Components/WorkflowSection/WorkflowSection';
import Footer from './Components/Footer/Footer';

import Heading from './Components/Heading/Heading';
import Description from './Components/Description/Description';
import Button from './Components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <SnippetsSection></SnippetsSection>
          <WorkflowSection></WorkflowSection>
          <Heading>Clipboard for iOS and Mac OS</Heading>
          <Description margin="true" width="65rem">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
          </Description>
          <div className="buttons">
            <Button color="cyan">Download for iOS</Button>
            <Button color="blue">Download for Mac</Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
