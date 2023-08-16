@echo off

call ./ReactEnv/Scripts/activate.bat

cd ./backend
start cmd /k "flask run"

cd ../my-app
start cmd /k "npm start"