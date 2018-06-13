import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import FirmInvite from '../../components/firmInvite/firmInvite';
import firmInviteBuilder from '../firmInviteBuilder';

Enzyme.configure({ adapter: new Adapter() });

describe('create html test file', () => {
  it('it writes an html file to test.html', async () => {
    const firmInviteEmail = await firmInviteBuilder('https://assets.prolaera.com/prolaeraLogo_fullText.png');
    const saved = await writeFile(firmInviteEmail);
    expect(saved).toEqual(true);
  });
});

describe('Firm Invite component', () => {
  it('creates and checks snapshot of FirmInvite component html', async () => {
    let inviteHtml = renderer.create(
      <FirmInvite companyName={'Example Firm'} buttonLink={'www.google.com'} userEmail={'jane@doe.com'} />
    );
    let inviteJson = inviteHtml.toJSON();
    expect(inviteJson).toMatchSnapshot();
  });

  it('checks default FirmInvite html', async () => {
    const wrapper = shallow(<FirmInvite />);
    expect(
      wrapper.contains(
        <a
          href="https://app.prolaera.com/#/registration?email=/firm@invite.com"
          className="accountButton"
          style="max-width:200px;background-color:#68B63E;padding:14px 14px 14px 14px;color:white;text-decoration:none"
        >
          Create My Account
        </a>
      )
    ).toBe(true);
  });

  it('checks custom company name in FirmInvite html', async () => {
    const wrapper = shallow(<FirmInvite companyName={'Example Firm'} />);
    expect(wrapper.contains(<p>You have been added to Example Firm's team on Prolaera!</p>)).toBe(true);
  });

  it('checks custom button link in FirmInvite html', async () => {
    const wrapper = shallow(<FirmInvite buttonLink={'https://www.google.com'} />);
    expect(
      wrapper.contains(
        <a href="https://www.google.com/firm@invite.com" className="button">
          Create My Account
        </a>
      )
    ).toBe(true);
  });

  it('checks custom user email in FirmInvite html', async () => {
    const wrapper = shallow(<FirmInvite userEmail={'john@doe.com'} />);
    expect(
      wrapper.contains(
        <a href="https://app.prolaera.com/#/registration?email=/john@doe.com" className="button">
          Create My Account
        </a>
      )
    ).toBe(true);
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
