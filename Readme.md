# How to deploy the project

For this version any change on the site must be done outside from the docker container, the build again the project's site by running `docker-compose up -d`.

# Testing container

You can run the container by itself by using `docker build -t node-app .` to build locally the `node-app` image. Then, you can test and check the container with `docker run -p 3000:3000 node-app` and visit the site at `localhost:3000`

# About

This project is based in the [Takuya's Homepage](https://github.com/craftzdog/craftzdog-homepage)

