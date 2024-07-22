#!/bin/bash
#lsof -i tcp:3000
# kill -9 256602
# 👇️ Windows - delete node_modules and package-lock.json
#rd /s /q "node_modules"
#del package-lock.json
# 👇️ macOS/Linux - delete node_modules and package-lock.json
echo "DOMINIOWEBCOMMX//// Create server in root folder."
rm -rf node_modules/ && rm -f package-lock.json && npm i
echo "DOMINIOWEBCOMMX//// Ended create server in root folder."
echo "DOMINIOWEBCOMMX//// Create frontend in client folder."
cd client && rm -rf node_modules/ && rm -f package-lock.json && npm i 
echo "DOMINIOWEBCOMMX//// Ended create frontend in client folder."
echo "DOMINIOWEBCOMMX//// Run the client command"
cd .. && npm run dev
