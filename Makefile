PROJECT=in-groups-of

check: test

compile: build/buid.js

build:
	@mkdir -p $@

build/buid.js: build index.js
	@browserify --require ./index.js:$(PROJECT) --outfile $@

clean:
	rm -fr build

test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

.PHONY: clean test check compile
