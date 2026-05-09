@echo off
title Portfolio Sync Engine
cls

echo ==========================================
echo       PORTFOLIO REPO SYNCHRONIZER
echo ==========================================
echo.
echo This will update your GitHub, ORCID, and Behance data.
echo This may take a few moments...
echo.

call npm run sync-repos

echo.
echo ==========================================
echo       SYNC COMPLETE!
echo ==========================================
echo.
pause
