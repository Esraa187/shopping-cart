let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(!currentUser){
    alert("Please sign in to access the home page.");
    window.location.href = "index.html";
}


