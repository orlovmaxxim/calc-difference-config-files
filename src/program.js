import program from 'commander';
import compareFiles from './';

export default () => {
  program
    .version('0.1.0')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig, option) =>
      console.log(compareFiles(firstConfig, secondConfig, option.format)))
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format', 'main')
    .parse(process.argv);
};
