install:
		npm install
start:
		npm run babel-node -- src/bin/differ-calc.js
startgen:
		npm run babel-node -- src/bin/gendiff.js files/firstJson.json files/secondJson.json
publish:
		npm publish
lint:
		npm run eslint .
test:
		npm test