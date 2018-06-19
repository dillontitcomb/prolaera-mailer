import React from 'react';
import { Box, Item } from 'react-html-email';

class InviteSubHeader extends React.Component {
  render() {
    const { subText = "You've been", header = 'Added' } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '540px',
          fontFamily: 'Arial, sans-serif',
          padding: '20px 0px 20px 0px'
        }}
      >
        <Box className={'subHeader'} align="center" width="100%">
          <Item>
            <table
              id={'subHeaderTable'}
              align="center"
              style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                border: '1px solid lightgray'
              }}
            >
              <tr>
                <td>
                  <p style={{ color: 'gray', fontStyle: 'italic', marginBottom: '5px' }}>{subText}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 style={{ marginTop: '0px' }}>{header}</h2>
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default InviteSubHeader;
