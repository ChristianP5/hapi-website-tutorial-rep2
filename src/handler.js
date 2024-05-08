const getRootHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'welcome to the root!',
    })

    response.code(200);
    return response;
}

const notFoundHandler = (request, h)=>{
    return "<h1>You seem to be lost.</h1>";
}

const getStaticLoginHandler = (request, h)=>{
    return h.file('index.html');
}

const loginSubmissionHandler = (request, h)=>{

    const { username, password } = request.payload;

    
    if(!username || !password){
        return h.redirect('/login');
    }else{

        const data = {
            name: username, password
        }
        return h.view('index', data);
        /*
        return `<h1>Welcome to home ${username}!</h1>
        <p>Your password is ${password}. Don't tell anyone!</p>`;
        */
    }
}

const getDownloadHandler = (request, h)=>{
    return h.file('index.html', {
        mode: "attachment",
        filename: "downloaded-index.html",
    })
}

module.exports = { getRootHandler, notFoundHandler, getStaticLoginHandler, loginSubmissionHandler, getDownloadHandler };