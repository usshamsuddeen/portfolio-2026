@echo off
title Portfolio Server
cls

echo Starting Backend API Server (Port 8080)...
start "Backend Server" node server.js

echo Starting Portfolio Development Server...
echo Opening browser at http://localhost:3000/...
start http://localhost:3000/

:: Start the Vite development server
call npm run dev
pause
