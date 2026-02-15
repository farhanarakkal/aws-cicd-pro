#!/bin/bash
cd /home/ec2-user/myapp
pkill node
nohup node app.js > output.log 2>&1 &

