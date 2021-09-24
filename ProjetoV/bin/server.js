/* eslint-disable no-console */
const app = require('../src/app');

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizaPort(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
