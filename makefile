# build image using dockerfile
build-image:
	docker image build .t jamelclarke/medical-record-search:tag

#
tag-image:
	docker tag jamelclarke/medical-record-search:tag jamelclarke/medical-record-search:tag-release

#
push-image:
	docker push jamelclarke/medical-record-search:tag-release

# create container using image created by dockerfile
run-image:
	docker run --name medical-record-search -p 3000:3000 -d jamelclarke/medical-record-search:latest

# create an image and start the containers using compose.yaml
up-dev:
	docker compose up --build -d

# stop development containers
down-dev:
	docker compose down