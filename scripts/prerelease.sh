#!/bin/bash

# clear and create dist folder
rm -rf ./dist/
mkdir ./dist/
mkdir ./dist/tasks/

# copy README, LICENSE, package.json and coffeelintr to dist folder
cp ./README.md ./dist/
cp ./LICENSE ./dist/
cp ./package.json ./dist/
cp ./tasks/* ./dist/tasks/

# update package.json's after build
node scripts/prepare.js
