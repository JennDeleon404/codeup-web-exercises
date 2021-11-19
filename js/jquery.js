"use strict"

alert($('h1').html());


$(document).ready(function() {
    // alert("Done loading DOM");
    // $('.codeup').css({"border-color": "red",
    //     "border-width":"1px",
    //     "border-style":"solid"
    // });
    $('#whatever').css('color','purple');
    $('h1, p, li').css('background-color', 'lightblue');
    $('#planets').css({
        fontSize: "20px",
        color: "red"
    });
});



