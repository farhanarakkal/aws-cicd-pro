# AWS CI/CD Deployment Project (EC2 + CodeDeploy + CodeBuild + CodePipeline)

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline on AWS for deploying
a Node.js web application to an Amazon EC2 instance using:

-   Amazon VPC (Custom Networking)
-   Amazon EC2
-   AWS IAM (Roles & Policies)
-   AWS CodeBuild
-   AWS CodeDeploy
-   AWS CodePipeline
-   AWS CodeStar Connections (GitHub Integration)

The goal of this project is to simulate a real-world DevOps pipeline
suitable for entry-level Cloud Engineer roles.

------------------------------------------------------------------------

## 🏗️ Architecture Overview

1.  Developer pushes code to GitHub repository.
2.  AWS CodePipeline detects changes using CodeStar Connection.
3.  CodeBuild builds the application.
4.  CodeDeploy deploys the application to EC2 instance.
5.  Application runs on port 3000 and is accessible via EC2 Public IP.

------------------------------------------------------------------------

## 🌐 Network Configuration

### VPC

-   Name: provpc
-   CIDR Block: 10.0.0.0/16

### Subnet

-   Name: propublicsubnet
-   CIDR: 10.0.1.0/24
-   Auto-assign Public IP: Enabled

### Internet Gateway

-   Name: proigw
-   Attached to provpc

### Route Table

-   Name: proroutetable
-   Route: 0.0.0.0/0 → proigw
-   Associated with propublicsubnet

------------------------------------------------------------------------

## 💻 EC2 Configuration

### Instance

-   Name: proec2
-   AMI: Amazon Linux 2
-   Instance Type: t2.micro
-   Key Pair: prokey

### Security Group Rules

  Type         Port   Source
  ------------ ------ -----------
  SSH          22     My IP
  HTTP         80     0.0.0.0/0
  Custom TCP   3000   0.0.0.0/0

------------------------------------------------------------------------

## 🔐 IAM Roles

### EC2 Role (proec2role)

Policies: - AmazonEC2RoleforAWSCodeDeploy - AmazonSSMManagedInstanceCore

### CodeBuild Role (procodebuildrole)

Policy: - AWSCodeBuildAdminAccess

### CodeDeploy Role (procodedeployrole)

Policy: - AWSCodeDeployRole

------------------------------------------------------------------------

## 🔄 CI/CD Services Setup

### AWS CodeStar Connection

-   Name: pro-github-connection
-   Provider: GitHub
-   Repository: aws-cicd-pro

### CodeBuild

-   Project Name: procodebuild
-   Runtime: Amazon Linux 2
-   Environment: Managed Image
-   Buildspec: buildspec.yml

### CodeDeploy

-   Application Name: proapplication
-   Deployment Group: prodeploymentgroup
-   Deployment Type: In-place
-   Environment: EC2/On-premises

### CodePipeline

-   Pipeline Name: propipeline
-   Source: GitHub (CodeStar Connection)
-   Build: CodeBuild
-   Deploy: CodeDeploy

------------------------------------------------------------------------

## 📂 Project Repository Structure

    aws-cicd-pro/
    │
    ├── app.js
    ├── package.json
    ├── buildspec.yml
    ├── appspec.yml
    └── scripts/
        ├── install_dependencies.sh
        └── start_server.sh

------------------------------------------------------------------------

## 🚀 Application Deployment Flow

1.  Push code to GitHub main branch.
2.  CodePipeline triggers automatically.
3.  CodeBuild installs dependencies and builds app.
4.  CodeDeploy transfers application to EC2.
5.  Deployment scripts install Node.js dependencies and start server.
6.  Application becomes accessible via:

```{=html}
<!-- -->
```
    http://<EC2-PUBLIC-IP>:3000

------------------------------------------------------------------------

## 🧪 Testing

-   Modify app.js
-   Push changes to GitHub
-   Observe automatic pipeline execution
-   Confirm updated changes reflect on EC2 public IP

------------------------------------------------------------------------

## 🧹 Cleanup Steps (Avoid AWS Charges)

1.  Delete CodePipeline
2.  Delete CodeBuild Project
3.  Delete CodeDeploy Application & Deployment Group
4.  Terminate EC2 Instance
5.  Delete Security Groups (if unused)
6.  Delete Subnet
7.  Delete Route Table
8.  Detach & Delete Internet Gateway
9.  Delete VPC
10. Delete IAM Roles (if not reused)

------------------------------------------------------------------------

## 🎯 Skills Demonstrated

-   AWS Networking (VPC, Subnet, IGW, Route Tables)
-   IAM Role Configuration
-   CI/CD Pipeline Architecture
-   GitHub Integration using CodeStar Connections
-   Infrastructure Security Best Practices
-   Deployment Automation

------------------------------------------------------------------------

## 📈 Future Improvements

-   Add Load Balancer (ALB)
-   Implement Auto Scaling Group
-   Add CloudWatch Monitoring
-   Add HTTPS with ACM + ALB
-   Use Docker & ECS instead of EC2
-   Implement Blue/Green Deployments

------------------------------------------------------------------------

## 👨‍💻 Author

This project was built as part of Cloud Engineer portfolio preparation
to demonstrate hands-on AWS CI/CD implementation experience.
