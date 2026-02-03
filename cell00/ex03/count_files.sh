cd ~
cd discovery_piscine
cd cell00
mkdir ex03
cd ex03
touch count_files.sh
code count_files.sh
#!/bin/bash
ls -l | grep -v '^total' | wc -l
chmod +x count_files.sh
./count_files.sh
