pipeline {
    agent any

    parameters {
        string(name: 'directoryName', defaultValue: 'newdir', description: 'Nekoja deskripcija za Jenkinsfile')
        string(name: 'fileName', defaultValue: 'newfile.txt', description: 'Isto')
    }

    stages {
        stage('Kreiraj dir') {
            steps {
                script {
                    dir("${params.directoryName}") {
                    }
                }
            }
        }

        stage('Kreiranje na file i editiranje vo fajlot') {
            steps {
                script {
                    writeFile file: "${params.directoryName}/${params.fileName}", text: 'Random string'
                }
            }
        }

        stage('Promena na dozvoli') {
            steps {
                script {
                    sh "chmod +x ${params.directoryName}/${params.fileName}"
                }
            }
        }

        stage('Copy na file na dr lokacija') {
            steps {
                script {
                    sh "cp ${params.directoryName}/${params.fileName} /pateka/do/destinacija/"
                }
            }
        }

        stage('Printanje na raboti od file') {
            steps {
                script {
                    sh "cat /pateka/do/destinacija/${params.fileName}"
                }
            }
        }
    }
}