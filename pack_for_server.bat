@echo off
title Portfolio Deployment Packer
cls

echo ==========================================
echo       PREPARING PRODUCTION BUILD
echo ==========================================
echo.
echo Step 1: Running Sync to ensure latest data...
call npm run sync-repos

echo.
echo Step 2: Building optimized website...
call npm run build

echo.
echo Step 3: Organizing files for upload...
if exist READY_TO_DEPLOY rd /s /q READY_TO_DEPLOY
mkdir READY_TO_DEPLOY
xcopy /e /y dist READY_TO_DEPLOY > nul

echo.
echo ==========================================
echo       ✅ BUILD SUCCESSFUL!
echo ==========================================
echo.
echo Your website is ready! 
echo 1. Open the "READY_TO_DEPLOY" folder.
echo 2. Zip all files INSIDE that folder.
echo 3. Upload them to your server.
echo.
pause
