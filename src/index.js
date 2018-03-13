import program from 'commander';
import compareJsonFiles from './compareJsonFiles';

const prog = () => {
  program
    .version('0.0.1')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(compareJsonFiles(firstConfig, secondConfig)))
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};

export default prog;
