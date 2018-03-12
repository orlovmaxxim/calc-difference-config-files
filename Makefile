install:
		npm install
start:
		npm run babel-node -- src/bin/differ-calc.js
startgen:
		npm run babel-node -- src/bin/gendiff.js -h
publish:
		npm publish
lint:
		npm run eslint .