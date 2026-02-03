cd ~
cd discovery_piscine
cd cell00
mkdir ex04
cd ex04
touch argv.sh
code argv.sh
#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"
  do
    echo "$arg"
  done
fi

chmod +x argv.sh
./argv.sh
./argv.sh 42
./argv.sh Hello World ! 42

