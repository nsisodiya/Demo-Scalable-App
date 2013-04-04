#!/bin/bash

git checkout gh-pages
git rebase master
git pull
git push origin gh-pages
git checkout master

exit 0
