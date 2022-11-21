pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage("Clone repository"){
            steps {
                git 'https://github.com/ActuaryEmma/gallery'
            }
        }
        
        stage("Build"){
            steps {
                echo "Building application number ${BUILD_NUMBER} ID ${BUILD_ID}"
                sh 'npm install'
            }
        }
        
        stage('Test'){
            steps {
                echo 'Testing the application'
                sh 'npm test'
            }
        }
        // stage ('Node Server'){
        //     steps {
        //         sh 'node server'
        //     }
        // }
        
        stage("Deploy to Heroku"){
            steps {
                withCredentials ([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                     sh "git push  https://${HEROKU_CREDENTIALS}@git.heroku.com/enigmatic-stream-66111.git master"
                }
            }
        }
        
    }
    post {
        success {
            slackSend color: "good", message: "Success build for ${BUILD_ID}.
            Heroku link : https://enigmatic-stream-66111.herokuapp.com/
            GitHub link : https://github.com/ActuaryEmma/gallery"
        }
         failure {
            slackSend color: "danger", message: "Build for ${BUILD_ID} failed"
        }
    }
}