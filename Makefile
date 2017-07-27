
build: node_modules static

static:
	node index.js

watch:
	node index.js --watch

node_modules: package.json
	npm install

.PHONY: build static watch redirects
