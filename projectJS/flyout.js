// HARDCODED FOR POC
// UL li will drive the menu items and parameters of each

//----------------------------------------------------------
function menuMaker(id, containerElement, itemWidth, itemHeight, itemCornerRadius, mainWidth, mainHeight, mainCornerRadius, items, left, top, fixedTransform, initialAngle, initialScale, start, end) {

    var $container = $(containerElement);
    var menuID = "menu_" + id;

    var delta = (end - start) / (items);
    var variableTransform = start;

    // Make the Menu containerElement
    var newMenu = document.createElement("div");
    $(newMenu).addClass("menu closed");
    $(newMenu).attr("Id", menuID);
    $(newMenu).attr("data-initialscale", initialScale);
    $(newMenu).attr("data-initialangle", initialAngle);
    $(newMenu).css({
        "top": top + "px",
        "left": left + "px"
    });



    //------------------ events --------------------

    $(newMenu).mousedown(function (event) {

        if ($(event.currentTarget).hasClass("closed")){
            $(event.currentTarget).removeClass("closed");
            console.log($(event.currentTarget));
            menuOpen(event.currentTarget, 1);
        }
        else {
            $(event.currentTarget).addClass("closed");
            console.log($(event.currentTarget));
            menuClose(event.currentTarget, 1);
        }

    });


    //------------------ end of events --------------------



    // make the choice items to go in the containerElement
    for (var item = 1; item <= items; item++) {
        var newItem = document.createElement("div");
        var itemHoffset = (mainWidth - itemWidth) / 2;
        var itemVoffset = (mainHeight - itemHeight) / 2;
        $(newItem).css({
            "height": itemHeight + "px",
            "width": itemWidth + "px",
            "top": itemVoffset + "px",
            "left": itemHoffset + "px",
            "border-radius": itemCornerRadius + "px",
            "line-height": itemHeight + "px"
        });

        variableTransform += delta;
        $(newItem).css("transform", "rotate(" + initialAngle + "deg) translate3d(" + 0 + "px, 0, 0) scale(" + initialScale + ")");

        //$(newItem).css("transform", "rotate(-" + variableTransform + "deg");


        $(newItem).attr("data-fixed", fixedTransform);
        $(newItem).attr("data-variable", variableTransform);

        $(newItem).addClass("b" + item);
        $(newItem).addClass("button item");
        $(newMenu).append(newItem);
    }

    // Make the Main Control button ..
    var main = document.createElement("div");

    $(main).css({
        "height": mainHeight + "px",
        "width": mainWidth + "px",
        "border-radius": mainCornerRadius + "px",
        "line-height": mainHeight + "px"

    });

    $(main).addClass("main");
    // $(main).addClass("button");
    $(main).text("+");
    $(newMenu).append(main);
    $container.append(newMenu);

}

//----------------------------------------------------------

function menuOpen(menuElement, speed) {

    var variableTransform;
    var fixedTransform;
    $item = $(menuElement).children(".item");
    $item.css("transition", "transform " + speed + "s cubic-bezier(0.39, 1.52, 0.46, 0.92)");
    $item.each(function () {
        fixedTransform = parseInt($(this).attr("data-fixed"));
        variableTransform = parseInt($(this).attr("data-variable"));
        $(this).css("transform", "rotate(" + fixedTransform + "deg) translate3d(" + variableTransform + "px, 0, 0) rotate(-" + fixedTransform + "deg) scale(1)");
    });

}

//----------------------------------------------------------

function menuClose(menuElement, speed) {
    var $menu = $(menuElement);
    var $item = $(menuElement).children(".item");
    var initialAngle = parseInt($menu.attr("data-initialangle"));
    var initialScale = parseFloat($menu.attr("data-initialscale"));
    $item.css("transition", "transform " + speed + "s cubic-bezier(0.875, 0.015, 0.205, 1.010)");
    $item.each(function () {
        $(this).css("transform", "rotate(" + initialAngle + "deg) translate3d(" + 0 + "px, 0, 0) scale(" + initialScale + ")");
    });
}

//----------------------------------------------------------

function menuClear(menuElement) {
    $(menuElement).remove();
}

//----------------------------------------------------------
