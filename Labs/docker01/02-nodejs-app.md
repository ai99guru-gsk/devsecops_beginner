### Dockerize Nodejs app
- Prep Work
    - su and go to root
    - apt update
    - apt install nodejs
    - nodejs -v
    - apt install npm
    - npm -v
- App Development
	- create a working folder
	- create app.js file. Refer source code in this repo
    - try node app.js and verify that app is working 
    - develop Dockerfile. Refer source code directory in this repo
    - build image
        - docker build -t nodejs-app:1.0.0 .
        - docker images
    - run the container
        - docker run -d nodejs-app -p 8080:8080 nodejs-app:1.0.0


### Push the image to dockerhub
    - Log in on https://hub.docker.com/
    - Click on Create Repository.
    - Choose a name and a description for your repository and click Create. e.g. flask-app
    - Log into the Docker Hub from the command line
        - docker login --username=yourhubusername
    - Tab image (the one with tag) for dockerhub
        - docker tag nodejs-app:1.0.0 yourhubusername/nodejs-app:1.0.0
        - docker push yourhubusername/nodejs-app:1.0.0
    - Verify in dockerhub    