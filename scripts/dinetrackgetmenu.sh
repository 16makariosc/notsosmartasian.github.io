#!/bin/bash
cd ~/Documents/DineTrack
python scripts/getMenu.py
git add .
git commit -m "Daily Menu Update"
git push https://notsosmartasian:kayish12@github.com/notsosmartasian/notsosmartasian.github.io.git master