$(document).ready(function () {
    let avatarChars = ["Aang", "Katara", "Sokka", "Zuko", "Uncle Iroh", "Appa"];


    function displayButtons() {
        $("#display-buttons").empty();

        for (let i = 0; i < avatarChars.length; i++) {
            let newBtn = $("<button>");
            newBtn.attr("data-char-name", avatarChars[i]);
            newBtn.text(avatarChars[i]);
            newBtn.addClass("m-2");
            $("#display-buttons").append(newBtn);
        };
    };

    displayButtons();


    $("#add-char").on("click", function (event) {
        event.preventDefault();

        let newChar = $("#new-char-input").val();
        avatarChars.push(newChar);

        displayButtons();
        $("#new-char-input").val("");
    });

    $("#display-buttons").on("click", "button", function () {
        let charName = $(this).attr("data-char-name");
        let searchTerm = `Avatar ${charName}`
        const apiKey = "yGhQanruWc9yqqX5SK0T46I5F1oxABkW";
        const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            $("#display-gifs").empty();

            let gifs = response.data;
            console.log(gifs);


            for (let i = 0; i < gifs.length; i++) {
                let newGif = $("<img>");
                newGif.addClass("returned-gif m-2");

                newGif.attr("data-still", gifs[i].images.fixed_width_still.url);
                newGif.attr("data-play", gifs[i].images.fixed_width.url);
                newGif.attr("data-state", "still");
                
                newGif.attr("src", gifs[i].images.fixed_width_still.url);
                newGif.css("border", "2px solid black");
                $("#display-gifs").append(newGif);
            };

        }, function (error) {
            console.error(error);

        });
    })


    $("#display-gifs").on("click", ".returned-gif", function () {
        let play = $(this).attr("data-play");
        let stop = $(this).attr("data-still");

        if ($(this).attr("data-state") === "still") {
            $(this).attr("src", play);
            $(this).attr("data-state", "play");
        } else {
            $(this).attr("src", stop);
            $(this).attr("data-state", "still");
        };

    });

})