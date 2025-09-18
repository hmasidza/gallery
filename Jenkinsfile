pipeline{
    agent any
    tools{
        nodejs "node24"
    }
    stages{
        stage("Clone Repository"){
            steps{
                git branch: "master", url: "https://github.com/hmasidza/gallery"
            }
        }
        stage("Install Dependencies"){
            steps{
                sh "npm install"
            }
        }
         stage("Run Tests") {
            steps {
                sh "npm test"
            }
        }
        stage("Deploy To Render"){
            steps{
                sh 'curl -X POST "https://api.render.com/deploy/srv-d35rd7fdiees738igqk0?key=pzQUssQMJak"'
            }
        }
    }
    post {
        failure {
            script {
                retry(3) {
                    waitUntil {
                        try {
                            emailext(
                                to: 'harry.masidza@student.moringaschool.com',
                                subject: "[CI] ${env.JOB_NAME} – Build #${env.BUILD_NUMBER} FAILED",
                                body: """
                                Greetings,<br><br>
                                Build has <b>FAILED</b>.<br><br>
                                • <b>Job Name:</b> ${env.JOB_NAME}<br>
                                • <b>Build Number:</b> #${env.BUILD_NUMBER}<br>
                                • <b>Branch:</b> ${env.GIT_BRANCH ?: 'master'}<br>
                                • <b>Build URL:</b> <a href="${env.BUILD_URL}">View Build</a><br><br>
                                """,
                                mimeType: 'text/html'
                            )
                            echo "Failure email sent successfully!"
                            return true
                        } catch (Exception e) {
                            echo "Email attempt failed: ${e.getMessage()}. Retrying in 10 seconds..."
                            sleep(10)
                            return false
                        }
                    }
                }
            }
        }
        always {
            echo "Build completed with status: ${currentBuild.currentResult}"
        }
    }
}