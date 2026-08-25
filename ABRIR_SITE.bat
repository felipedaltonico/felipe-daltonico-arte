@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo Atualizando o portfolio...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0ATUALIZAR_PORTFOLIO.ps1"
if errorlevel 1 (
  echo.
  echo Nao foi possivel atualizar o portfolio.
  pause
  exit /b 1
)
echo Abrindo o site...
start "" "%~dp0index.html"
