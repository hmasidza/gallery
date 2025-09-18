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
    }
}