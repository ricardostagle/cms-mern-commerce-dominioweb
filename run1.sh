#!/bin/bash
#lsof -i tcp:3000
# kill -9 256602
# 👇️ Windows - delete node_modules and package-lock.json
#rd /s /q "node_modules"
#del package-lock.json
# 👇️ macOS/Linux - delete node_modules and package-lock.json
rm -rf node_modules/ && rm -f package-lock.json && npm i
echo "////////////////////////////////// client"
cd client && rm -rf node_modules/ && rm -f package-lock.json && npm i 
echo "////////////////////////////////// cd.. client"
cd .. && npm run client-install
##&& npm run dev
