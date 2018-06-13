import React from 'react';
import { Box, Item } from 'react-html-email';

class FirmInvite extends React.Component {
  render() {
    const {
      companyName = 'Generic CPA Firm',
      buttonLink = 'https://app.prolaera.com/#/registration?email=',
      userEmail = 'firm@invite.com'
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          border: '1px solid lightgray',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px'
        }}
      >
        <Box className={'firmInvitation'} align="center" width="500px">
          <Item align="left">
            <p>You have been added to {companyName}'s team on Prolaera!</p>
          </Item>
          <Item align="left">
            <p>Your account is waiting for you and there are only a couple quick steps to complete.</p>
            <ol>
              <li>Click the button below to register your account</li>
              <li>On the registration page simply enter a password for your new account and click "Register".</li>
            </ol>
            <p>That's it! You're ready to explore the new tools and resources you have access to.</p>
            <div
              className="buttonContainer"
              style={{
                width: '100%',
                textAlign: 'center',
                padding: '20px 0px 20px 0px'
              }}
            >
              <a
                href={buttonLink + '/' + userEmail}
                className="accountButton"
                style={{
                  maxWidth: '200px',
                  backgroundColor: '#68B63E',
                  padding: '14px 14px 14px 14px',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Create My Account
              </a>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default FirmInvite;
