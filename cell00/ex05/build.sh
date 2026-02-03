cd ~
cd discovery_piscine
cd cell00
mkdir ex05
cd ex05
touch build.sh
code build.sh
#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"
  do
    mkdir "ex$arg"
  done
fi


chmod +x build.sh
./build.sh
./build.sh 00
./build.sh 01 02 03 04
ls
