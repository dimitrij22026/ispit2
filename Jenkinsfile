pipeline {
    agent any

    environment {
        SLIKA_EDEN = "dimitrij118/docker_nodejs_demo"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t $SLIKA_EDEN .'
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    sh 'docker push $SLIKA_EDEN'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "ansible-playbook playbooks/deploy.yml --extra-vars 'PORT=${params.PORT} DATA_TEXT=${params.DATA_TEXT}'"
                }
            }
        }
    }
}
