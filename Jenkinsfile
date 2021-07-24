pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/mstittle/appdemo'

                // Run Maven on a Unix agent.
                sh "npm build"

            }
         
        }
    }
}
