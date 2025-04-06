PROJECT=in-groups-of

check: test

test:
	node --test

.PHONY: clean test check compile
