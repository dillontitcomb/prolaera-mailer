import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import EventInfo from '../../components/registration/eventInfo';
import completeRegistration from '../../templates/tests/completeRegistration';
import registrationEmail from '../registrationBuilder';
describe('registration Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns registration subHeader email html', async () => {
    const emailHtml = await registrationEmail(completeRegistration, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await registrationEmail(completeRegistration, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await registrationEmail(completeRegistration, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
  });

  it('successfully parses completeRegistration JSON data', async () => {
    const email = await registrationEmail(completeRegistration, logoUrl);
    const eventInfo = renderer.create(<EventInfo courseName={completeRegistration.course_name} />);
    let eventInfoString = JSON.stringify(eventInfo.toJSON());
    let containsCourseName = eventInfoString.includes('ASC 606 Update Training');
    expect(containsCourseName).toEqual(true);
  });

  it('creates snapshot with JSON data passed in', async () => {
    const email = await registrationEmail(completeRegistration, logoUrl);
    const emailHtml = await writeFile(email);
    expect(emailHtml).toMatchSnapshot();
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/eventTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
