//activities Sep 17
    //log movie name
    // click JSON

$(document).ready(function () {
    let avatarChars = ["Aang", "Katara", "Sokka", "Zuko", "Iroh", "Toph"];

    
    function displayButtons () {
        for (let i = 0; i <avatarChars.length; i++) {
            let newBtn = $("<button>");
            newBtn.addClass("character");
            newBtn.attr("data-char-name", avatarChars[i]);
            newBtn.text(avatarChars[i]);
            $("#display-buttons").append(newBtn);

        }
    }

    displayButtons();
    

    
    







})