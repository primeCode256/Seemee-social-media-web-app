//Toggle for the drop down menu
var settingsmenu = document.querySelector(".settings-menu")
//For dark mode
var darkBtn = document.getElementById("dark-btn");
//For the toggle botton
function settingsMenuToggle()
{
   settingsmenu.classList.toggle("settings-menu-height")
}

//Changing to the darkmode
darkBtn.onclick = function()
{
    darkBtn.classList.toggle("dark-btn-on");
    // Adding the dark-theme class name
    document.body.classList.toggle("dark-theme");

}



var internetConnection = true;
var notificationAlert = true;
var messageAlert = true;
var online = document.querySelector("#online");
var bell = document.querySelector("#bell");
var bellPar = document.querySelector("#bell-pa");


if(internetConnection)
{
    online.style.background = "#41db51";
    
}

if(notificationAlert)
{
    bellPar.innerHTML = "2";
    bell.style.display = "block"
}
else
{
  
}

