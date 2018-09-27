#!/bin/bash

git checkout 08be3bbf527f79e684f036fddf15f5d43f2658a1 &> /dev/null # forked version
cp skin/js/eztz.min.js skin/js/eztz_old.min.js &> /dev/null
git checkout 75ff84ba663016bd2bbbd6fc5ce38e14eac81226 &> /dev/null # js updated version
sed 's/\(.\)/\1\n/g' skin/js/eztz.min.js > skin/js/eztz.min.js.v
sed 's/\(.\)/\1\n/g' skin/js/eztz_old.min.js > skin/js/eztz_old.min.js.v
echo "DIFF:"
echo "########################################"
diff skin/js/eztz.min.js.v skin/js/eztz_old.min.js.v
echo "########################################"
rm skin/js/eztz_old.min.js skin/js/eztz.min.js.v skin/js/eztz_old.min.js.v
git checkout master &> /dev/null
