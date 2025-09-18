var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://harrymas21_db_user:s7lGBLloZnoYze8H@nebula-cluster.4fdmaok.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://harrymas21_db_user:s7lGBLloZnoYze8H@nebula-cluster.4fdmaok.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://harrymas21_db_user:s7lGBLloZnoYze8H@nebula-cluster.4fdmaok.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;