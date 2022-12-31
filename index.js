import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import ip from 'ip';

dotenv.config();

const log = console.log;

const app = express();
const port = process.env.PORT;

const ipAddr = ip.address();

app.use('/', express.static('./public'));

app.listen(port, () => {
  log('\n' + chalk.yellow('Starting up http-server, avaliable at:'));
  log(chalk.green('  Local: ') + chalk.red('http://') + chalk.blue(`localhost:${port}/`));
  log(chalk.green('  Network: ') + chalk.red('http://') + chalk.blue(`${ipAddr}:${port}/`));
});