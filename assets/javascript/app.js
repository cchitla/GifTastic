//activities Sep 17
    //log movie name
    // click JSON

$(document).ready(function () {
    let avatarChars = ["Aang", "Katara", "Sokka", "Zuko", "Iroh", "Toph"];

    
    function displayButtons () {
        $("#display-buttons").empty();

        for (let i = 0; i <avatarChars.length; i++) {
            let newBtn = $("<button>");
            newBtn.addClass("character");
            newBtn.attr("data-char-name", avatarChars[i]);
            newBtn.text(avatarChars[i]);
            $("#display-buttons").append(newBtn);

        }
    }

    displayButtons();
    

    $("#add-char").on("click", function(event) {
        event.preventDefault();

        let newChar = $("#new-char-input").val();
        avatarChars.push(newChar);
        
        displayButtons();
        
    })


    $(".character").on("click", function(event){
        let charName = $(this).attr("data-char-name");

        const apiKey = "yGhQanruWc9yqqX5SK0T46I5F1oxABkW";
        const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${charName}&limit=10`
    
    
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            $("#display-gifs").empty();

            let gifs = response.data;
            
            for (let i = 0; i < gifs.length; i++) {
                let newGif = $("<img>")
                newGif.attr("src", gifs[i].images.fixed_width.url);
                $("#display-gifs").append(newGif);
            }

        }, function(error){
            console.error(error);
            
        });
    })
    





})