install:
	npm ci

publish: 
	npm publish --dry-run

lint:
	npx eslint .	

fix:
	npx eslint . --fix


gendiff:
	node bin/gendiff.js -h

run: 
	node bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json

yml:
	node bin/gendiff.js ./__fixtures__/file1.yml ./__fixtures__/file2.yml
yaml: 
	node bin/gendiff.js ./__fixtures__/file1.yaml ./__fixtures__/file2.yaml


test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8

