const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const path = require('path');

const init = async()=>{

    const server = Hapi.server({
        port: 9000,
        host: "localhost",
        routes: {
            cors: {
                origin: ['*'],
            },
            files: {
                relativeTo: path.join(__dirname, 'static'),
            }
        },

    })


    server.route(routes);

    await server.register([
        {
            plugin: require('@hapi/inert'),
        },
        {
            plugin: require('@hapi/vision'),
        }
    ]);

    server.views({
        engines: {
            hbs: require('handlebars'),
        },
        path: path.join(__dirname, 'views'),
        layout: 'layout',
    })

    await server.start();
    console.log(`Server starts at ${server.info.uri}`);
}

process.on('unhandledRejection', (error)=>{
    console.log(error);
    process.exit(1);
})


init();