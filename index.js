import secrets from './.secrets/secrets.js'
import express from 'express';
import chalk from 'chalk';
import http from 'http';
import ip from 'ip';

const log = console.log;

const app = express();
const port = secrets.PORT;

const ipAddr = ip.address();

http.createServer(app).listen(port, () => {
  log('\n' + chalk.yellow('Starting up http-server, avaliable at:'));
  log(chalk.green('  Local: ') + chalk.red('http://') + chalk.blue(`localhost:${port}/`));
  log(chalk.green('  Network: ') + chalk.red('http://') + chalk.blue(`${ipAddr}:${port}/`));
});

app.use('/', express.static('./public'))