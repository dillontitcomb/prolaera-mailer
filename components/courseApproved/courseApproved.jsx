import React from 'react';
import { Box, Item } from 'react-html-email';

class CourseApproved extends React.Component {
  render() {
    const { buttonLink = 'www.exampleButtonLink.com', name = '', email = '' } = this.props;

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
        <Box className={'courseApproved'} align="center" width="500px">
          <Item align="left">
            <p>{name} has been reviewed and approved by an admin at your firm and is now in the marketplace!</p>
            <div
              className="buttonContainer"
              style={{
                width: '100%',
                textAlign: 'center',
                padding: '20px 0px 20px 0px'
              }}
            >
              <a
                href={buttonLink + '/' + email}
                className="accountButton"
                style={{
                  maxWidth: '200px',
                  backgroundColor: '#68B63E',
                  padding: '14px 14px 14px 14px',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Log In
              </a>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseApproved;
