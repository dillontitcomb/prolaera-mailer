import fs from 'fs';

async function writeFile(emailHtml, htmlFileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/../templates/tests/testHtml/${htmlFileName}`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}

export default writeFile;
