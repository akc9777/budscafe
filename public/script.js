$(document).ready(
    function () {

        var today = new Date();
        var hour = today.getHours();

        if (hour > 18 || hour < 6) {
            $("body").css("background-color", "#333");
            $(".nav-items").css("color", "#fff");
        } else {
            $("body").css("background-color", "#eee");
            $("body").css("background-color", "#000");

        }
    }
);