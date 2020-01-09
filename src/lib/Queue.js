const kue = require('kue');

const Mail = require('../jobs/Mail');
const Pdf = require('../jobs/Pdf');

const PARALLEL_PROCESSES = 1;
const ATTEMPTS = 10;

const queue = kue.createQueue({
  redis: 'redis://localhost:6379'
});

const jobs = [Mail, Pdf];

class Queue {
  add(name, params, configurations = {}) {
    const { attempts, priority } = configurations;

    queue
      .create(name, params)
      .attempts(attempts || ATTEMPTS)
      .priority(priority || 'normal')
      .delay(10)
      .backoff({ type: 'exponential' })
      .save();
  }

  handleError(job, error) {
    console.log(`X -> Error in job ${job.id}`);
  }

  processQueue() {
    jobs.forEach(job =>
      queue.process(job.name, PARALLEL_PROCESSES, async (queueJob, done) => {
        try {
          await job.run(queueJob.data);
          done();
        } catch (error) {
          this.handleError(queueJob, error);
          done(error);
        }
      })
    );
  }
}

module.exports = new Queue();
