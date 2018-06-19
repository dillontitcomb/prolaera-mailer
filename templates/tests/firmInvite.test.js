import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import FirmInvite from '../../components/firmInvite/firmInvite';
import firmInviteBuilder from '../firmInviteBuilder';

Enzyme.configure({ adapter: new Adapter() });
const user = { email: 'test@email.com' };
const company = { company_name: 'Test CPA Firm' };

describe('create html test file', () => {
  it('it writes an html file to test.html', async () => {
    const firmInviteEmail = await firmInviteBuilder(
      'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      user,
      company
    );
    const saved = await writeFile(firmInviteEmail);
    expect(saved).toEqual(true);
  });
});

describe('Firm Invite component', () => {
  it('creates and checks snapshot of FirmInvite component html', async () => {
    let inviteHtml = renderer.create(<FirmInvite {...user} {...company} />);
    let inviteJson = inviteHtml.toJSON();
    expect(inviteJson).toMatchSnapshot();
  });

  it('checks FirmInvite custom email and company_name inputs', async () => {
    const wrapper = shallow(<FirmInvite {...user} {...company} />);
    expect(
      wrapper.contains(
        <a
          className="accountButton"
          href="https://app.prolaera.com/#/registration?email=/test@email.com"
          style={{
            backgroundColor: '#72C02C',
            color: 'white',
            maxWidth: '200px',
            padding: '14px 14px 14px 14px',
            textDecoration: 'none'
          }}
        >
          Create My Account
        </a>
      )
    ).toBe(true);
    expect(wrapper.contains(<p>You have been added to Test CPA Firm's team on Prolaera!</p>)).toBe(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/firmInviteTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
