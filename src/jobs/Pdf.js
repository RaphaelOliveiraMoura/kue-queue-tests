const sleep = require('../utils/sleep');

class Pdf {
  constructor() {
    this.name = 'pdf_job';
  }

  async run(params) {
    console.log(
      `-> Pdf job startd with params ${JSON.stringify(params, null, 2)} ...`
    );
    await sleep(2000);
    console.log('<- Pdf job finish...');
  }
}

module.exports = new Pdf();
