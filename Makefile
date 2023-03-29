install:
	npm ci

publish: 
	npm publish --dry-run

lint:
	npx eslint .	

fix:
	npx eslint . --fix

gendiff:
	node bin/gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8

