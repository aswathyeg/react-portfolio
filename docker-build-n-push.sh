#!/bin/sh
# This script creates and pushes docker image to Azure Container Registry

commit_id=`git rev-parse --short HEAD`
echo "* ------------------------------------- *"
echo "* latest commit id is: $commit_id"
echo "* ------------------------------------- *"

#echo "* ------------------------------------- *"
echo "* creating docker image: papyrusacr01.azurecr.io/react-portfolio:$commit_id"
echo "* ------------------------------------- *"
docker build --platform linux/amd64 -t "papyrusacr01.azurecr.io/react-portfolio:$commit_id" .

echo "* ------------------------------------- *"
echo "* initiating login to papyrusacr01.azurecr.io for user papyrusacr01"
echo "* ------------------------------------- *"
docker login papyrusacr01.azurecr.io -u papyrusacr01

echo "* ------------------------------------- *"
echo "* pushing docker image to Azure Container Registry"
echo "* ------------------------------------- *"
docker push "papyrusacr01.azurecr.io/react-portfolio:$commit_id"

echo "* ------------------------------------- *"
echo "* completed docker push"
echo "* ------------------------------------- *"