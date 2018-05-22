rm -rf dist-npm
rm -rf build
rm -rf tmp

npm run build:esm
node node_modules/.bin/ngc -p ./tsconfig-build.json
node node_modules/.bin/rollup build/product-view.js -o dist-npm/product-view.js -f umd --name "product-view"

rsync -a --exclude=*.js build/ dist-npm
cp src/package.json dist-npm/package.json
