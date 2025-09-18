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
}