const {
    getRootHandler, notFoundHandler, getStaticLoginHandler,
    loginSubmissionHandler, getDownloadHandler
} = require('./handler');

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: getRootHandler,
    },
    {
        path: '/login',
        method: 'GET',
        handler: getStaticLoginHandler,
    },
    {
        path: '/home',
        method: 'POST',
        handler: loginSubmissionHandler,
    },
    {
        path: '/download',
        method: 'GET',
        handler: getDownloadHandler,
    },
    {
        path: '/{any*}',
        method: '*',
        handler: notFoundHandler,
    },
]

module.exports = routes;