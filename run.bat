@echo off
title Portfolio Server
cls

echo Starting Portfolio Development Server...
echo Opening browser at http://localhost:3000/...
start http://localhost:3000/

:: Start the Vite development server
call npm run dev
pause
