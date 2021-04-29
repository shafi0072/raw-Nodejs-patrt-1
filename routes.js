// title routes
// dependences

const {sampleHandler} = require('./handlers/routeHandler/sampleHandlers')
const {about} = require('./handlers/routeHandler/aboutHanler')
const routes = {
    'sample': sampleHandler,
    'about': about
}

module.exports = routes;