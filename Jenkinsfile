pipeline {
    agent any
    environment {

        EMAIL_BODY = 

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'legendsname2019@gmail.com'

    }
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
            steps{
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
        
        stage("Deploy to Heroku"){
            steps {
                withCredentials ([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                     sh "git push  https://${HEROKU_CREDENTIAL}@git.heroku.com/enigmatic-stream-66111.git master"
                }
            }
        }
        
    }
    post {
        success {
            slackSend color: "good", message: "Success build for ${BUILD_ID} \
            Heroku link : https://enigmatic-stream-66111.herokuapp.com/ \
            GitHub link : https://github.com/ActuaryEmma/gallery"

            mail(
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
            )
                
        }
        failure {
            slackSend color: "danger", message: "Build for ${env.BUILD_URL} failed"

            mail(
                 body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
            )
        }
    }
}