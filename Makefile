install: npm install

start: 
        npx node bin/brain-games.js
        npx node bin/brain-even.js
        npx node bin/brain-calc.js
       
publish:
	npm publish --dry-run

lint:
	npx eslint .
