const sleep = require('../utils/sleep');

class Mail {
  constructor() {
    this.name = 'mail_job';
  }

  async run(params) {
    console.log(
      `-> Mail job startd with params ${JSON.stringify(params, null, 2)} ...`
    );
    await sleep(500);
    console.log('<- Mail job finish...');
  }
}

module.exports = new Mail();
