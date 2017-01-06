#!/bin/bash
cd ~/Documents/DineTrack
python scripts/getMenu.py
git add .
git commit -m "Daily Menu Update"
git push origin master