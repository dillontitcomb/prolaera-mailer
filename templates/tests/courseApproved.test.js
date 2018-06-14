import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import courseApprovedBuilder from '../courseApprovedBuilder';

Enzyme.configure({ adapter: new Adapter() });

describe('buildHeader image resizing tests', () => {
  it('writes CourseApproved html file to courseApprovedTest.html', async () => {
    const courseApprovedEmail = await courseApprovedBuilder('http://assets.prolaera.com/NHHCo-lg.png');
    const saved = await writeFile(courseApprovedEmail);
    expect(saved).toEqual(true);
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
