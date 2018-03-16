install:
		npm install
start:
		npm run babel-node -- src/bin/differ-calc.js
startgen:
		npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/files/treeFirstJson.json __tests__/__fixtures__/files/treeSecondJson.json
startgen-yaml:
		npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/files/firstYaml.yml __tests__/__fixtures__/files/secondYaml.yml
publish:
		npm publish
lint:
		npm run eslint .
test:
		npm test
test-watch:
		npm run test:watch