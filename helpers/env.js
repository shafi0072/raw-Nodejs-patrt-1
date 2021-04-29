// title : environments

// module scaffolding
const environment = {}

environment.staging = {
    port: 3000,
    envName : 'staging'
};
environment.production = {
    port: 5000,
    envName : 'production'
};

// determine pass
const currentEnvironment = typeof(proccess.env.NODE_ENV) === 'string' ? proccess.env.NODE_ENV : 'staging';

// exporting corresponding object 

const environmentToExport = typeof(environment[currentEnvironment]) === 'object' ? environment[currentEnvironment] : environment.staging;

module.exports = environmentToExport;
