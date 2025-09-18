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
            emailext(
                to: 'harry.masidza@student.moringaschool.com',
                subject: "[CI] ${env.JOB_NAME} – Build #${env.BUILD_NUMBER} FAILED",
                body: """
                Greetings,<br><br>
                Build has <b>FAILED</b>.<br><br>
                • <b>Name of Job:</b> ${env.JOB_NAME}<br>
                • <b>Build Number:</b> #${env.BUILD_NUMBER}<br>
                • <b>Branch Name:</b> ${env.BRANCH_NAME ?: 'N/A'}<br>
                • <b>URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a><br><br>
                """,
                mimeType: 'text/html'
            )
        }
    }
}