pipeline {
    agent any

    parameters {
        string(name: 'directoryName', defaultValue: 'newdir', description: 'Nekoja deskripcija za Jenkinsfile')
        string(name: 'fileName', defaultValue: 'newfile.txt', description: 'Isto')
    }

    stages {
        stage('Create Dir') {
            steps {
                script {
                    dir("${params.directoryName}") {
                    }
                }
            }
        }

        stage('Create file and file editing/permissions') {
            steps {
                script {
                    writeFile file: "${params.directoryName}/${params.fileName}", text: 'Random string'
                }
            }
        }

        stage('Change perm') {
            steps {
                script {
                    sh "chmod +x ${params.directoryName}/${params.fileName}"
                }
            }
        }

        stage('Copy the file onm dof location') {
            steps {
                script {
                    sh "cp ${params.directoryName}/${params.fileName} /pateka/do/destinacija/"
                }
            }
        }

        stage('Print file content') {
            steps {
                script {
                    sh "cat /pateka/do/destinacija/${params.fileName}"
                }
            }
        }
    }
}