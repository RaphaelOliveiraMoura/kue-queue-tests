const sleep = require('../utils/sleep');

class Mail {
  constructor() {
    this.name = 'mail_job';
  }

  async run(params) {
    console.log(`-> Mail job startd...`);

    await sleep(500);

    if (params && params.email === 'invalid') throw new Error('Email invalid');

    console.log('<- Mail job finish...');
  }
}

module.exports = new Mail();
