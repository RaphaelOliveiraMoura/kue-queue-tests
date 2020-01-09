const queue = require('./lib/Queue');

const Mail = require('./jobs/Mail');
const Pdf = require('./jobs/Pdf');

queue.processQueue();

queue.add(Mail.name, { email: 'teste1@gmail.com', to: 'sendto@gmail.com' });
queue.add(Mail.name, { email: 'invalid', to: 'sendto@gmail.com' });
queue.add(Mail.name, { email: 'teste3@gmail.com', to: 'sendto@gmail.com' });

queue.add(Pdf.name, { data: 'pdf1' });
queue.add(Pdf.name, { data: 'pdf2' });
queue.add(Pdf.name, { data: 'pdf3' }, { priority: 'high' });
queue.add(Pdf.name, { data: 'pdf4' });
