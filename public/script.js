$(document).ready(
    function () {

        var today = new Date();
        var hour = today.getHours();


        if (hour > 18 || hour < 6) {
            console.log('dark');
            $("body").css("background-color", "#333");
            $(".nav-items").css("color", "#fff");
        } else {
            console.log('light');
            $("body").css("background-color", "#777");
            $(".nav-items").css("color", "#000");

        }
    }
);