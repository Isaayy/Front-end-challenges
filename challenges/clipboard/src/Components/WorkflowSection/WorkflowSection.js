import React from 'react';

import Heading from '../Heading/Heading';
import Description from '../Description/Description';

import '../../GlobalStyle.css';
import './WorkflowSection.css';

import iconBlacklist from '../../images/icon-blacklist.svg';
import iconText from '../../images/icon-text.svg';
import iconPreview from '../../images/icon-preview.svg';

import logoGoogle from '../../images/logo-google.png';
import logoIBM from '../../images/logo-ibm.png';
import logoMicrosoft from '../../images/logo-microsoft.png';
import logoHp from '../../images/logo-hp.png';
import logoVg from '../../images/logo-vector-graphics.png';

const WorkflowSection = () => {
  return (
    <section className="workflow">
      <Heading>Supercharge your workflow</Heading>
      <Description margin="true" width="65rem">
        We’ve got the tools to boost your productivity.
      </Description>
      <div className="workflow__features">
        <div className="workflow__feature">
          <img src={iconBlacklist} alt="blacklist" />
          <h3 className="subheading">Create blacklists</h3>
          <p className="desc">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>
        <div className="workflow__feature">
          <img src={iconText} alt="text" />
          <h3 className="subheading">Plain text snippets</h3>
          <p className="desc">Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        <div className="workflow__feature">
          <img src={iconPreview} alt="preview" />
          <h3 className="subheading">Sneak preview</h3>
          <p className="desc">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>
      <div className="workflow__corporations">
        <img src={logoGoogle} alt="google" />
        <img src={logoIBM} alt="ibm" />
        <img src={logoMicrosoft} alt="microsoft" />
        <img src={logoHp} alt="hp" />
        <img src={logoVg} alt="logo-vector-graphics" />
      </div>
    </section>
  );
};

export default WorkflowSection;
