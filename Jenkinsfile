pipeline {
  agent any
  stages {
     stage('Checkout & Installation') {
      steps {
        echo 'Checkout & Installation..'
        sh '''npm i 
        npm update'''
      }
    }
    stage('Testing') {
      steps {
        echo 'Testing..'
        sh 'npm run test'
      }
    }
    stage('Building') {
      steps {
        echo 'Building..'
        sh 'npm run build'
      }
    }
    stage('Deploying') {
      steps {
        sh 'zip -r9 app.zip build server.js'
        withCredentials([file(credentialsId: '7ab23e32-5fa0-40f7-96e6-8a4176415b67', variable: 'SECRET_FILE')]) {
          sh "scp -i ${SECRET_FILE} app.zip ec2-user@54.245.159.220"
          sh "ssh -tt ec2-user@ec2-54-245-159-220.us-west-2.compute.amazonaws.com"
          sh "unzip app.zip"
          sh "ls"
        }
      }
    }
  }
}