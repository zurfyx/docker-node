# Docker setup - Node.js + MongoDB

# Prerequisites

[Docker](https://docs.docker.com/engine/installation/)

```
sudo apt-get install apt-transport-https ca-certificates
curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add 
sudo add-apt-repository "deb https://apt.dockerproject.org/repo/ ubuntu-$(lsb_release -cs) main"
sudo apt-get update
sudo apt-get -y install docker-engine
```

[Docker-compose](https://docs.docker.com/compose/install/)

```
curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

# Getting started

## Using NPM

Prerequisites:

- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/)

```
npm install
npm start
```

## Using Docker

```
docker-compose up
```

# Development

## NPM

There's no specific development build for NPM.

## Docker

There's a tiny modification in the mongodb docker behaviour (just for the sake of showing a 
different config file)

```
docker-compose -f docker-compose.dev.yml up
```

Adding / removing NPM Packages or Dockerfile modification will require a new build:

```
docker-compose build
docker-compose up
```

Testing:

```
docker-compose run web /bin/bash -c 'npm test'
```

# References

- [Docker docs](https://docs.docker.com/)
- [Docker releases](https://github.com/docker/docker/releases)
- [Intro to Docker](http://jdlm.info/ds-docker-demo/)
- [From dev to prod with nodejs](https://sloppy.io/from-dev-to-prod-with-nodejs-and-hackathon-starter-using-docker-compose-part-1/)
- [including docker files to dockerize hackathon-starter](https://github.com/sahat/hackathon-starter/pull/496/files)
- [Lessons from Building a Node App in Docker](http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html)
- [Docker: Remote all images and containers](https://techoverflow.net/blog/2013/10/22/docker-remove-all-images-and-containers/)