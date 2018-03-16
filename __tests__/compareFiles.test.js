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
test('third test of compare INI files', () => {
  const currentIniFile = '__tests__/__fixtures__/files/firstIni.ini';
  const changedIniFile = '__tests__/__fixtures__/files/secondIni.ini';
  const correctTestAnswer = fs.readFileSync('__tests__/__fixtures__/files/testAnswer.txt').toString();
  return expect(compareJsonFiles(currentIniFile, changedIniFile)).toBe(correctTestAnswer);
});
test('fourth test of compare JSON tree files', () => {
  const currentJsonTree = '__tests__/__fixtures__/files/treeFirstJson.json';
  const changedJsonTree = '__tests__/__fixtures__/files/treeSecondJson.json';
  const correctTestAnswer = fs.readFileSync('__tests__/__fixtures__/files/testAnswerTree.txt').toString();
  return expect(compareJsonFiles(currentJsonTree, changedJsonTree)).toBe(correctTestAnswer);
});
