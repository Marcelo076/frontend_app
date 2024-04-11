# Usar uma imagem base com Node.js
FROM node:20.12.1

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 8080

# Definir o comando para iniciar a aplicação
CMD npm install && npm run dev
