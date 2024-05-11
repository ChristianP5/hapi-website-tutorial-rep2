const {
    getRootHandler, get404Handler, getRedirectHandler,
    getStaticHandler, getDownloadHandler, postHomeHandler
} = require('./handlers');
const path = require('path');

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: getRootHandler,
    },
    {
        path: '/redirect',
        method: 'GET',
        handler: getRedirectHandler,
    },
    {
        path: '/static',
        method: 'GET',
        handler: getStaticHandler,
    },
    {
        path: '/download',
        method: 'GET',
        handler: getDownloadHandler,
    },
    {
        path: '/{any*}',
        method: 'GET',
        handler: get404Handler,
    },
    {
        path: '/css/style.css',
        method: 'GET',
        handler: (request, h)=>{
            return h.file('./css/style.css');
        },
    },
    {
        path: '/home',
        method: 'POST',
        handler: postHomeHandler,
    },
]

module.exports = routes;