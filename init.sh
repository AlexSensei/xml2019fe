#!/bin/bash
#
# Initialize Laravel project for first usage.
#
# This script is following Google Shell Style standard
# https://google.github.io/styleguide/shell.xml

# STDERR log function
err() {
  echo -e "\n[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@\n" >&2
  exit 1
}

# STDOUT log function
log() {
  echo -e "\n[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@\n"
}


git pull origin master 
docker build --tag xml . 
docker rm --force xmlTest 
docker run --publish 80:3000 --detach --name xmlTest xml