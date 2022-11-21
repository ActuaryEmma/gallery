var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: 'mongodb+srv://Emma:Emma@cluster1.qtrdxow.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://Emma:Emma@cluster1.qtrdxow.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://Emma:Emma@cluster1.qtrdxow.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;

