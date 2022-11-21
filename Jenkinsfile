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
                sh 'npm install'
            }
        }
        
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
        
      
        
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
            // echo "sucess"
            slackSend color: "red", message: "sessessful"
        }
    }
}