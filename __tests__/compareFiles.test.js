import fs from 'fs';
import compareJsonFiles from '../src';

test('first test of compare JSON files', () => {
  const currentJsonFile = '__tests__/__fixtures__/files/firstJson.json';
  const changedJsonFile = '__tests__/__fixtures__/files/secondJson.json';
  const correctTestAnswer = fs.readFileSync('__tests__/__fixtures__/files/testAnswer.txt').toString();
  return expect(compareJsonFiles(currentJsonFile, changedJsonFile)).toBe(correctTestAnswer);
});
test('second test of compare YAML files', () => {
  const currentYamlFile = '__tests__/__fixtures__/files/firstYaml.yml';
  const changedYamlFile = '__tests__/__fixtures__/files/secondYaml.yml';
  const correctTestAnswer = fs.readFileSync('__tests__/__fixtures__/files/testAnswer.txt').toString();
  return expect(compareJsonFiles(currentYamlFile, changedYamlFile)).toBe(correctTestAnswer);
});
