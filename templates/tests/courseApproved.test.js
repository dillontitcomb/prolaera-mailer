import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import CourseApproved from '../../components/courseApproved/courseApproved';
import courseApprovedBuilder from '../courseApprovedBuilder';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  email: 'test@email.com'
};
const course = {
  by: 'John Doe',
  course_id: '1234-1234-1234-1234',
  courseAudience: 'Accountants',
  delivery_method: 1,
  hours: [
    {
      credits: 1,
      subject_area: 'Tax Preparation'
    }
  ],
  level: 'Basic',
  name: 'Tax Preparation 102',
  objectives: '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>',
  prep: '<p>Read course introduction</p>',
  prerequisites: '<p>Tax Prep 101</p>',
  summary: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
};

describe('buildHeader image resizing tests', () => {
  it('writes CourseApproved html file to courseApprovedTest.html', async () => {
    const courseApprovedEmail = await courseApprovedBuilder(
      'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      user,
      course
    );
    const saved = await writeFile(courseApprovedEmail);
    expect(saved).toEqual(true);
  });
});

describe('CourseApproved component', () => {
  it('creates and checks snapshot of CourseApproved component html', async () => {
    const approvedHtml = renderer.create(<CourseApproved {...user} {...course} />);
    const approvedJson = approvedHtml.toJSON();
    expect(approvedJson).toMatchSnapshot();
  });
  it('checks default CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved {...user} {...course} />);
    expect(
      wrapper.contains(
        <p>
          Tax Preparation 102 has been reviewed and approved by an admin at your firm and is now in the marketplace!
        </p>
      )
    ).toBe(true);
  });
  it('checks custom course name in CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved {...user} {...course} name={'Test Course'} />);
    expect(
      wrapper.contains(
        <p>Test Course has been reviewed and approved by an admin at your firm and is now in the marketplace!</p>
      )
    ).toBe(true);
  });
  it('checks custom button link in CourseApproved html', async () => {
    const wrapper = shallow(<CourseApproved {...user} {...course} buttonLink={'https://www.testLink.com'} />);
    expect(
      wrapper.contains(
        <a
          href="https://www.testLink.com/test@email.com"
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
    const wrapper = shallow(<CourseApproved {...user} {...course} email={'test@email.com'} />);
    expect(
      wrapper.contains(
        <a
          href="www.exampleButtonLink.com/test@email.com"
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
