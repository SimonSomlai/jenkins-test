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
        echo 'Deploying....'
      }
    }
  }
}