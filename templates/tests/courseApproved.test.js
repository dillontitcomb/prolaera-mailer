import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import CourseApproved from '../../components/courseApproved/courseApproved';
import courseApprovedBuilder from '../courseApprovedBuilder';

Enzyme.configure({ adapter: new Adapter() });

describe('buildHeader image resizing tests', () => {
  it('writes CourseApproved html file to courseApprovedTest.html', async () => {
    const courseApprovedEmail = await courseApprovedBuilder('https://assets.prolaera.com/prolaeraLogo_fullText.png');
    const saved = await writeFile(courseApprovedEmail);
    expect(saved).toEqual(true);
  });
});

describe('CourseApproved component', () => {
  it('creates and checks snapshot of CourseApproved component html', async () => {
    const approvedHtml = renderer.create(
      <CourseApproved courseName={'Test Course'} buttonLink={'www.testLink.com'} userEmail={'test@email.com'} />
    );
    const approvedJson = approvedHtml.toJSON();
    expect(approvedJson).toMatchSnapshot();
  });
  it('checks default CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved />);
    expect(
      wrapper.contains(
        <p>
          Prolaera Training Course has been reviewed and approved by an admin at your firm and is now in the
          marketplace!
        </p>
      )
    ).toBe(true);
  });
  it('checks custom course name in CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved courseName={'Test Course'} />);
    expect(
      wrapper.contains(
        <p>Test Course has been reviewed and approved by an admin at your firm and is now in the marketplace!</p>
      )
    ).toBe(true);
  });
  it('checks custom button link in CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved buttonLink={'https://www.testLink.com'} />);
    expect(
      wrapper.contains(
        <a
          href="https://www.testLink.com/jane@doe.com"
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
      )
    ).toBe(true);
  });
  it('checks custom user email in CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved userEmail={'test@email.com'} />);
    expect(
      wrapper.contains(
        <a
          href="www.google.com/test@email.com"
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
      )
    ).toBe(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/courseApprovedTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
