pipeline {
    agent any
    parameters{
		string(name: 'DATA_TEXT', defaultValue: 'latest', description: 'Docker image version')
		string(name: 'PORT', defaultValue: 'latest', description: 'Docker image version')
    }
    stages {
        stage('Build') {
            steps { 
                sh 'docker build -t dimitrij118/docker_nodejs .'
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: ‘dockercreds’, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    sh " docker push dimitrij118/docker_nodejs"
                    sh "docker logout"
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
