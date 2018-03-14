import program from 'commander';
import compareJsonFiles from './';

export default () => {
  program
    .version('0.0.2')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(compareJsonFiles(firstConfig, secondConfig)))
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
