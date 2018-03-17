import fs from 'fs';
import compareFiles from '../src';

describe('my tests', () => {
  const firstJson = '__tests__/__fixtures__/files/firstJson.json';
  const secondJson = '__tests__/__fixtures__/files/secondJson.json';
  const firstYaml = '__tests__/__fixtures__/files/firstYaml.yml';
  const secondYaml = '__tests__/__fixtures__/files/secondYaml.yml';
  const firstIni = '__tests__/__fixtures__/files/firstIni.ini';
  const secondIni = '__tests__/__fixtures__/files/secondIni.ini';
  const firstJsonTree = '__tests__/__fixtures__/files/treeFirstJson.json';
  const secondJsonTree = '__tests__/__fixtures__/files/treeSecondJson.json';
  const firstYamlTree = '__tests__/__fixtures__/files/treeFirstYaml.yml';
  const secondYamlTree = '__tests__/__fixtures__/files/treeSecondYaml.yml';
  const firstIniTree = '__tests__/__fixtures__/files/treeFirstIni.ini';
  const secondIniTree = '__tests__/__fixtures__/files/treeSecondIni.ini';

  const answerMain = fs.readFileSync('__tests__/__fixtures__/files/main/testAnswer.txt', 'utf-8').toString();
  const answerTree = fs.readFileSync('__tests__/__fixtures__/files/main/testAnswerTree.txt', 'utf-8').toString();
  const answerFlat = fs.readFileSync('__tests__/__fixtures__/files/flat/testAnswerFlat.txt', 'utf-8').toString();

  it('1 test of compare JSON files', () => {
    expect(compareFiles(firstJson, secondJson, 'main')).toBe(answerMain);
  });
  it('2 test of compare YAML files', () => {
    expect(compareFiles(firstYaml, secondYaml, 'main')).toBe(answerMain);
  });
  it('3 test of compare INI files', () => {
    expect(compareFiles(firstIni, secondIni, 'main')).toBe(answerMain);
  });
  it('4 test of compare JSON tree files', () => {
    expect(compareFiles(firstJsonTree, secondJsonTree, 'main')).toBe(answerTree);
  });
  it('5 test of compare YAML tree files', () => {
    expect(compareFiles(firstYamlTree, secondYamlTree, 'main')).toBe(answerTree);
  });
  it('6 test of compare INI tree files', () => {
    expect(compareFiles(firstIniTree, secondIniTree, 'main')).toBe(answerTree);
  });
  it('7 test of compare JSON plain', () => {
    expect(compareFiles(firstJson, secondJson, 'flat')).toBe(answerFlat);
  });
});
