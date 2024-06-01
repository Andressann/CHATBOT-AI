#!/bin/bash

# Directorio donde se clonará/actualizará el repositorio
DEST_DIR="/root/CHATBOT-AI"

# URL del repositorio de Git

# Verificar si el directorio de destino existe
if [ -d "$DEST_DIR" ]; then
  # Si existe, hacer pull para actualizar el repositorio
  cd $DEST_DIR
  
  # Guardar la salida de git pull
  GIT_OUTPUT=$(sudo git pull)

  # Verificar si hubo algún cambio
  if [[ $GIT_OUTPUT != *"Already up to date."* ]]; then
    # Si hubo cambios, ejecutar docker-compose up --build
    sudo docker-compose up --build
  fi
else
  # Si no existe, clonar el repositorio
  sudo git clone $REPO_URL $DEST_DIR
fi
