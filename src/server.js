const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const path = require('path');

const init = async () => {
    const server = Hapi.server({
        host: process.env.NODE_ENV ==='production' ? '0.0.0.0' : 'localhost',
        port: 5000,
        routes: {
            cors: {
                origin: ['*'],
            },
            files: {
                relativeTo: path.join(__dirname, 'static'),
            }
        },
        
    });


    await server.register([
        {
            plugin: require('@hapi/inert'),
        },
        {
            plugin: require('@hapi/vision'),
        }
    ])

    server.route(routes);

    
    server.views({
        engines: {
            hbs: require('handlebars'),
        },
        path: path.join(__dirname, 'views'),
        layout: 'layout',
    })


    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (error)=>{
    console.log(error);
    process.exit(1);
})

init();