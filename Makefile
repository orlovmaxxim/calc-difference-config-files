install:
		npm install
start:
		npm run babel-node -- src/bin/differ-calc.js
startgen:
		npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/files/firstJson.json __tests__/__fixtures__/files/secondJson.json
publish:
		npm publish
lint:
		npm run eslint .
test:
		npm test
test-watch:
		npm run test:watch