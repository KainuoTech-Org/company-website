#!/bin/bash
echo "--- Git Status ---" > git_log.txt
git status >> git_log.txt 2>&1
echo "--- Git Add ---" >> git_log.txt
git add . >> git_log.txt 2>&1
echo "--- Git Commit ---" >> git_log.txt
git commit -m "Feat: Update Flow Space project and images" >> git_log.txt 2>&1
echo "--- Git Push ---" >> git_log.txt
git push >> git_log.txt 2>&1
echo "Done" >> git_log.txt

