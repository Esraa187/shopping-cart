let logoutBtn =document.getElementById("logout-btn")
logoutBtn.onclick=()=>{
    localStorage.removeItem("currentUser")
    window.location.href = "index.html";
}
