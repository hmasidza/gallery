pipeline{
    agent any
    stages{
        stage("Clone Repository"){
            steps{
                git branch: 'master', url: 'https://github.com/hmasidza/gallery'
            }
        }
    }
}