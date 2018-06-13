import React from 'react';
import { Box, Item } from 'react-html-email';

class InviteSubFooter extends React.Component {
  render() {
    const { text, subtext } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          border: '1px solid lightgray',
          padding: '20px',
          width: '500px'
        }}
      >
        <Box className={'subFooter'} align="center" width="500px">
          <Item align="left">
            <p>{text}</p>
            <p>{subtext}</p>
          </Item>
        </Box>
      </div>
    );
  }
}

export default InviteSubFooter;
