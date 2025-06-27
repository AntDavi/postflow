# Etapa base
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Exposição da porta
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]
