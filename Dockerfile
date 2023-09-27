# Basis-Image
FROM node:16-alpine

# Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm ci

# Kopiere den Rest des Projekts
COPY . .

# Erstelle das Produktions-Build
RUN npm run build

# Exponiere den Port, auf dem der Server laufen wird
EXPOSE 3000

# Starte den Server
CMD ["npm", "start"]
