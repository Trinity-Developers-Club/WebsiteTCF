$(document).ready(function () {
    var zindex = 10;

    $(".toggle-info").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).parent().parent().hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
            // a card is already in view

            $("#event").addClass("extra-height");


            if (isShowing) {
                // this card was showing - reset the grid
                $(this).parent().parent().removeClass("show");
                $("div.cards").removeClass("showing");
                $("#event").removeClass("extra-height");
            } else {
                // this card isn't showing - get in with it
                $("#event").addClass("extra-height");
                $(this).parent().parent()
                    .css({ zIndex: zindex })
                    .addClass("show");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            $("#event").addClass("extra-height");
            $(this).parent().parent()
                .css({ zIndex: zindex })
                .addClass("show");

            zindex++;
        }

    });
});