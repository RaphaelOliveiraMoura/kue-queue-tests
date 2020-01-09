const sleep = require('../utils/sleep');

class Pdf {
  constructor() {
    this.name = 'pdf_job';
  }

  async run(params) {
    console.log(`-> Pdf job startd ...`);
    await sleep(1000);
    console.log('<- Pdf job finish...');
  }
}

module.exports = new Pdf();
