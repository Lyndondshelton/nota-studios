#!/bin/bash

: 'NOTA Studios Installer v0.1.0
=============================================
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀
⠀⡆⠒⢲⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⠿⠿⠿⠿⣿⣷⣦⡀⠀⠀⠀
⠀⡇⠀⡞⠀⠀⠀⠀⠀⠈⡟⠁⠀⠀⢀⣴⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣧⡀⠀
⠸⠃⠸⠟⠀⠀⠀⠀⢀⣤⡿⠀⠀⢀⣾⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⢸⣿⠃⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇
⠀⠀⠀⠀⠀⠀⠀⠐⡒⠒⠀⠀⠀⣹⣏⣀⣴⣿⣿⡄⠀⠀⠀⠀⠀⣴⣶⣶⣄⣐⣼⣿
⠀⠀⠀⠀⠀⠀⠀⣠⣵⡀⠀⠀⠀⢽⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⠃
⠀⠀⠀⠀⠀⠀⠀⠛⠉⠀⠀⠀⠀⠨⣿⣟⣿⣿⣿⣿⡧⠀⠀⠀⢸⣿⣿⣿⣟⣿⡟⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠄⠀⠀⢳⣿⣿⣿⣿⣿⣿⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⣿⣿⣿⣿⣿⣿⠁⠀⠀⣿⣿⣿⣿⣿⣿⠇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡿⠟⠀⠀⠀⠈⠻⠿⣿⣿⠿⠀⠀⠀⢸⣿⣿⣿⣿⠯⠀⠀
⠀⠀⣀⠤⠤⠠⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀
⢠⠋⠀⠀⠀⠀⠀⠈⠳⡀⠀⠀⢀⣀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⡀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢰⠉⠈⡆⠀⣀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠻⠤⣀⠀⠀⠀⠀⠀⢻⡀⠀⢑⡻⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠓⠤⣀⡀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
=============================================
Source: https://emojicombos.com/music-ascii-art

Known Bug:
- permission denied while trying to connect to the docker API at unix:///var/run/docker.sock

Solution:
- Run ./install.sh as Admin / sudo
'

# [0] Variables / Constants
FRONTEND_DIR="./frontend"
BACKEND_DIR="./backend"
VERSION=0.1.0

echo "Starting NOTA Studios Installer v${VERSION}..."

# [1] Create .env.frontend file (if necessary) ...
echo "Creating .env.frontend file ..."

if [[ -e "${FRONTEND_DIR}/.env.frontend" ]]; then
    echo "(.env.frontend) file found! Skipping this step."
else
    if [[ -e "${FRONTEND_DIR}/.env.example" ]]; then
        echo "Creating (.env.frontend) from (.env.example) to (.env.fronted)..."
        cp -v "${FRONTEND_DIR}/.env.example" "${FRONTEND_DIR}/.env.frontend"
        echo "File created successfully!"
    else 
        echo "Error: (.env.example) file missing. Stopping installation 👎."
        exit 1
    fi
fi



# [2] Create .env.backend file (if necessary) ...
echo "Creating .env.backend file ..."

if [[ -e "${BACKEND_DIR}/.env.backend" ]]; then
    echo "(.env.backend) file found! Skipping this step."
else
    if [[ -e "${BACKEND_DIR}/.env.example" ]]; then
        echo "Creating (.env.backend) from (.env.example) to (.env.backend)..."
        cp -v "${BACKEND_DIR}/.env.example" "${BACKEND_DIR}/.env.backend"
        echo "File created successfully!"
    else 
        echo "Error: (.env.example) file missing. Stopping installation 👎."
        exit 1
    fi
fi


# [3] Build Docker container ...

echo "Building Docker container from images ..."
docker compose up --build -d


# Done ...
echo "Build completed successfully! Let's get cracking' 😎👍."
exit 0