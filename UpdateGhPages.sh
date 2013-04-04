#!/bin/bash

git checkout gh-pages
git pull
git merge -s subtree master
git push origin gh-pages
git checkout master

exit 0
