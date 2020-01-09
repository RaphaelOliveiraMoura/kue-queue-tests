module.exports = time => {
  return new Promise(resolve => {
    setInterval(() => {
      resolve();
    }, time);
  });
};
