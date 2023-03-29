install:
	npm ci

publish: 
	npm publish --dry-run

lint:
	npx eslint .	

fix:
	npx eslint . --fix


help:
	node bin/gendiff.js -h


gendiff: 
	node bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json 

yaml:
	node bin/gendiff.js ./__fixtures__/file1.yaml ./__fixtures__/file2.yml

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8

