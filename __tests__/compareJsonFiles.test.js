import fs from 'fs';
import compareJsonFiles from '../src/compareJsonFiles';

test('first test of compare JSON files', () => {
  const currentJsonFile = '__tests__/__fixtures__/files/firstJson.json';
  const changedJsonFile = '__tests__/__fixtures__/files/secondJson.json';
  const correctTestAnswer = fs.readFileSync('__tests__/__fixtures__/files/testAnswer.txt').toString();
  return expect(compareJsonFiles(currentJsonFile, changedJsonFile)).toBe(correctTestAnswer);
});
