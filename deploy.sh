#!/bin/sh

version=$1

echo "Deploy version: ${version}"

sed -i -e 's/"version": "[[:digit:]]*.[[:digit:]]*.[[:digit:]]*"/"version": "'${version}'"/g' package.json
yarn build-package
git add . && git commit --amend -C HEAD
git tag -am ${version} ${version}
git push -f && git push --tags
npm login && npm publish

echo "Deployment finished"
