
//working code to load full page info with no search box


//Your profile: https://api.github.com/users/<username>
//Your repos: https://api.github.com/users/<username>/repos


// var url: https://api.github.com/users/thuy-n3
 


console.log($)
console.log("Hello World")

var makeProfileURL =  function(usr){
    var keyParam = "access_token=" + apiKey
    return "https://api.github.com/users/" + usr + "?" + keyParam
}

var makeRepoURL = function(usr){
    var keyParam = "access_token=" + apiKey
    return "https://api.github.com/users/"+  usr  +"/repos" + "?" + keyParam
} 

var profileContainer = document.querySelector('.profileContainer')
var repoContainer = document.querySelector('.repoContainer')

var fetchAndShowUserProflieAndRepo = function(someUser){

    // Promise Making (i.e. fetch data and promise to return later)
    var gitProfilePromise = $.getJSON( makeProfileURL( someUser ) )
    var gitRepoPromise = $.getJSON( makeRepoURL( someUser ) )

    // Promise handling (...when data is received from promise THEN run the function inside .then() )
    gitProfilePromise.then(showGitData)
    gitRepoPromise.then(showRepoData)
}


//------------Profile-------------------------------------

var showGitData = function(receivedData) {
    console.log(receivedData)

    console.log(receivedData.name)


    var profileInfoHTMLString = ""

    profileInfoHTMLString += '<div class="profileName">' 
    profileInfoHTMLString +=    '<img class="profilePic" src="' + receivedData.avatar_url + '">'
    profileInfoHTMLString +=    '<h1>' + receivedData.name + '<h1>'
    profileInfoHTMLString +=    '<h3>' + receivedData.login + '<h3>'
    profileInfoHTMLString += '</div>' 

    profileInfoHTMLString += '<div class="profileDetails">' 
    profileInfoHTMLString +=    '<p>' + receivedData.location + '</p>' 
    profileInfoHTMLString +=    '<p>' + receivedData.email + '</p>'
    profileInfoHTMLString +=    '<p>' + receivedData.blog + '</p>'
    profileInfoHTMLString +=    '<span class="joined">Joined on</span>' + '<p>' +receivedData.created_at + '<p>'
    profileInfoHTMLString += '</div>' //need to fix "joined" styling

    profileInfoHTMLString += '<div class="followersDetails align-children">' 
    profileInfoHTMLString +=    '<div class="followerStats">' + '<h3>3</h3>' + '<span class=followerTitle>followers</span>' + '</div>'
    profileInfoHTMLString +=    '<div class="followerStats">' + '<h3>3</h3>' + '<span class=followerTitle>starred</span>' + '</div>'
    profileInfoHTMLString +=    '<div class="followerStats">' + '<h3>3</h3>' + '<span class=followerTitle>following</span>' + '</div>'
    profileInfoHTMLString += '</div>' //need to insert working link


    profileContainer.innerHTML = profileInfoHTMLString

}



//------------Repo Data------------------------------------


var showRepoData = function(receivedRepoData) {
    console.log(receivedRepoData)

    var repoDataArr = receivedRepoData

    var repoIntoHTML = ""

    for (var i = 0; i < repoDataArr.length; i++) {
        console.log(repoDataArr[i].name)

        repoIntoHTML += '<div class="repoListingBox">'
        repoIntoHTML +=     '<h2 class="repoName">' + repoDataArr[i].name + '</h2>'
        repoIntoHTML +=     '<span class="octicon octicon-git-branch"></span>'
        repoIntoHTML +=     '<span class="octicon octicon-star"></span>'
        repoIntoHTML +=     '<p class="repoDate">' + repoDataArr[i].created_at + '</p>'
        repoIntoHTML += '</div>'
        repoIntoHTML += '<hr/>'


    }


    repoContainer.innerHTML = repoIntoHTML

}


//------------Profile Search on Keypress -------------------------------

var searchInput_el = document.querySelector(".searchInput") //selecting the search box

console.log(searchInput_el)


searchInput_el.addEventListener("keypress", function(evt){  

    // console.log("keypressed")
    // console.log(evt.keyCode)

    if(evt.keyCode === 13){
        console.log("enter keypressed")
        // console.log(evt.target.value)

        var baseUser = evt.target.value 

            window.location.hash = "#" + baseUser
        
        evt.target.value = "" 
    }

})

//------------Runs At Initilaization--------------------------------------

fetchAndShowUserProflieAndRepo('thuy-n3')

// ^^Shortened from :
  
  // var gitProfilePromise = $.getJSON( makeProfileURL( 'thuy-n3' ) )
  // var gitRepoPromise = $.getJSON( makeRepoURL( 'thuy-n3' ) )

  // gitProfilePromise.then(showGitData)
  // gitRepoPromise.then(showRepoData)


// ----------Routing: Listen to the window object's 'hashchange' ----------
window.addEventListener("hashchange", function(){
    var topLevelContainer_el = document.querySelector('#bodyContainer')

    var userWithHash = window.location.hash
    var userNoHash = userWithHash.slice(1) // slices the string from index-1 to the end 
    
    fetchAndShowUserProflieAndRepo(userNoHash)

        // ^^Shortened from :
              
              // var gitProfilePromise = $.getJSON( makeProfileURL( baseUser ) )
              // var gitRepoPromise = $.getJSON( makeRepoURL( baseUser ) )

              // gitProfilePromise.then(showGitData)
              // gitRepoPromise.then(showRepoData)


            // clear out the values

})

        

