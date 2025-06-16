#!/bin/bash

# Login to ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.<region>.amazonaws.com

# Build the image
docker build -t chat-app .

# Tag the image
docker tag chat-app:latest <aws-account-id>.dkr.ecr.<region>.amazonaws.com/chat-app:latest

# Push the image
docker push <aws-account-id>.dkr.ecr.<region>.amazonaws.com/chat-app:latest 