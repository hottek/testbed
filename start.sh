#!/bin/bash

sudo docker-compose up -d
sudo docker-compose -f ./juice-shop/docker-compose.yml up -d
sudo docker-compose -f ./firing-range/docker-compose.yml up -d
sudo docker-compose -f ./openui5-testbed/docker-compose.yml up -d
