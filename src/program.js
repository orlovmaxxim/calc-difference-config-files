import program from 'commander';
import compareFiles from './';

export default () => {
  program
    .version('0.0.7')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(compareFiles(firstConfig, secondConfig)))
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
