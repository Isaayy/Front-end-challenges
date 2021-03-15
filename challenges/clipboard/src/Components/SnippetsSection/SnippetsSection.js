import React from 'react';

import imageComputer from '../../images/image-computer.png';
import Heading from '../Heading/Heading';
import Description from '../Description/Description';

import '../../GlobalStyle.css';
import './SnippetsSection.css';

const SnippetsSection = () => {
  return (
    <section className="snippets">
      <Heading>Keep track of your snippets</Heading>
      <Description margin="true" width="65rem">
        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
      </Description>
      <div className="snippets__wrapper">
        <img src={imageComputer} alt="computer" />
        <div className="snippets__snippets">
          <div className="snippets__snippet">
            <h3 className="snippets__subheading">Quick Search</h3>
            <Description width="40rem">Easily search your snippets by content, category, web address, application, and more.</Description>
          </div>
          <div className="snippets__snippet">
            <h3 className="snippets__subheading">iCloud Sync</h3>
            <Description width="40rem">Instantly saves and syncs snippets across all your devices.</Description>
          </div>
          <div className="snippets__snippet">
            <h3 className="snippets__subheading">Complete History</h3>
            <Description width="40rem">Retrieve any snippets from the first moment you started using the app.</Description>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnippetsSection;
