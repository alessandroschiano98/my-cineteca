@echo off
cd /d "%~dp0"
start "" /b powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 3; Start-Process 'http://127.0.0.1:5173/?gestione'"
call npm run dev -- --port 5173 --strictPort
pause
