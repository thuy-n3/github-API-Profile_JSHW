
var htmlStr_login = '<div>'
    htmlStr_login +=   '<h3>Please Log In</h3>'
    htmlStr_login +=   '<h5>Email</h5>'
    htmlStr_login +=   '<input type="text">'
    htmlStr_login +=   '<h5>Password</h5>'
    htmlStr_login +=   '<input type="password">'
    htmlStr_login += '</div>'


var htmlStr_welcome = "<div>"
    htmlStr_welcome =   "<h1>Heyooo Welcome to my site!!</h1>"
    htmlStr_welcome = "</div"

// ----------Routing: Listen to the window object's 'hashchange' ----------

window.addEventListener("hashchange", function(){
    var topLevelContainer_el = document.querySelector('#bodyContainer')
    console.log(window.location.hash)
    
    if ( window.location.hash === '#login'){
        
        topLevelContainer_el.innerHTML = htmlStr_login

    } else if (window.location.hash === '#welcome'){

        topLevelContainer_el.innerHTML = htmlStr_welcome

    } else {
        // anything else... go get a user
        var userWithHash = window.location.hash
        var userNoHash = userWithHash.slice(1)

        fetchAndShowUserProflieAndRepo(userNoHash)

    }
})

        

