# Docker-Compose-Template
An example how to use Docker Compose

React client runs on port 3000, Flask on 5001 and Express on 5002. When you send a request, the result will be printed on the console.

In the folder Documentation is a [short introduction about Docker](/Documentation/Introduction-to-Docker.md)

## how to start

to build the containers

```
docker-compose build
```

to start the containers

```
docker-compose up
```

to take down the containers

```
docker-compose down
```