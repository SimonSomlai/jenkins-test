pipeline {
  agent any
  stages {
     stage('Checkout & Installation') {
      steps {
        echo 'Building..'
        sh '''npm i 
        npm update'''
      }
    }
    stage('Testing') {
      steps {
        echo 'Testing..'
        sh '''npm run test a
              q
        '''

      }
    }
    stage('Building') {
      steps {
        echo 'Building..'
        sh 'npm run build'
      }
    }
    stage('3 - Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}