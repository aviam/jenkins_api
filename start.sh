#!/bin/bash
export BASEPATH="http://admin:EshkolTheBest1!@34.77.114.184:8080"
export USERNAME="admin"
export PASSWORD="EshkolTheBest1!"
export APIKEY="11808fbe573148b11ff73e8a4acf915802"
export MONGOCONNECTIONURI="mongodb+srv://snapglue:snapglue@cluster0-1lue3.gcp.mongodb.net/snapglue-data?retryWrites=true&w=majority"
echo "start getting job..."
node schedullers/jenkisJobsCollectors.js
