const getRootHandler = (request, h)=>{
    const response = h.response({
        status: 'success',
        message: 'Welcome to root!',
    })

    response.code(200);
    return response;
}

const get404Handler = (request, h)=>{
    return `<h1>You seem to be lost!</h1>`;
}

const getRedirectHandler = (request, h)=>{
    return h.redirect('/');
}

const getStaticHandler = (request, h)=>{
    return h.file('index.html');
}

const getDownloadHandler = (request, h)=>{
    return h.file('index.html', {
        mode: 'attachment',
        filename: 'downloaded-index.html',
    })
}

const postHomeHandler = (request, h)=>{
    const { username, password } = request.payload;

    if(!username || !password){
        return h.redirect('/static');
    }else{
        return `<h1>Hello ${username}!</h1>
    <h2>Your password is ${password}.</h2>`;
    }
}

module.exports = {
    getRootHandler, get404Handler, getRedirectHandler,
    getStaticHandler, getDownloadHandler, postHomeHandler
};