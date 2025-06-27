# Build da imagem
build:
	docker-compose build

# Subir o projeto
up:
	docker-compose up

# Subir em background
up-detached:
	docker-compose up -d

# Parar os containers
down:
	docker-compose down

# Instalar dependências
install:
	docker-compose run --rm nextjs-app npm install

# Abrir terminal no container
sh:
	docker-compose exec nextjs-app sh
