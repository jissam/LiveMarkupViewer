FROM node:alpine3.17

# Copie des fichiers package.json et package-lock.json du répertoire local dans l'image Docker
COPY package.json package-lock.json ./

# Copie de tout le contenu du répertoire local dans l'image Docker
COPY . .

#RUN npx sequelize-cli db:migrate
# Installation des dépendances de l'application Node.js
RUN npm install

# Définition de l'environnement d'hôte et de port
ENV HOST=0.0.0.0
ENV PORT=8098

# Exposition du port 8098
EXPOSE 8098

# Commande par défaut pour démarrer l'application
CMD ["npm", "run", "start"]
