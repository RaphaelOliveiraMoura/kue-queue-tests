const kue = require('kue');

const Mail = require('../jobs/Mail');
const Pdf = require('../jobs/Pdf');

const queue = kue.createQueue({
  redis: 'redis://localhost:6379'
});

const jobs = [Mail, Pdf];

class Queue {
  processQueue() {
    jobs.forEach(job =>
      queue.process(job.name, 1, async ({ data }, done) => {
        await job.run(data);
        done();
      })
    );
  }

  add(name, params) {
    queue
      .create(name, params)
      .attempts(10)
      .save();
  }
}

module.exports = new Queue();
