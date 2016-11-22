/**
 * Created by jeff on 9/19/16.
 */

/*
 menuMaker(
 id,                        // 1
 containerElement,          //
 itemWidth,                 // 30
 itemHeight,                // 30
 itemCornerRadius,          // 10
 mainWidth,                 // 80
 mainHeight,                // 40
 mainCornerRadius,          // 0
 items,                     // 7
 left,                      // 20
 top,                       // 20
 fixedTransform,            // 0
 initialAngle,              // 180
 initialScale,              // .1
 start,                     // 10
 end                        // 500

 ) {

 */



var Actions = {

    test: function (mode) {
        switch (mode) {
            case 0:
                menuClear($('.menu'))
                break;
            case 1:
                menuMaker(1, $('#testbox'), 30, 30, 10, 80, 40, 0, 7, 20, 20, 0, 180, .1, 10, 500);
                break;
            case 2:
                menuMaker(2, $('#testbox'), 80, 30, 0, 50, 50, 50, 5, 20, 20, 0, 0, .1, 10, 500);

                break;
            case 3:

                menuMaker(3, $('#testbox'), 80, 30, 10, 80, 40, 5, 5, 20, 40, 45, 180, .1, 10, 500);

                break;
            case 4:
                menuMaker(4, $('#testbox'), 80, 30, 10, 80, 40, 8, 5, 20, 50, 67, 180, .1, 10, 500);
                break;
            case 5:
                menuMaker(5, $('#testbox'), 80, 60, 10, 80, 60, 0, 5, 20, 20, 90, 0, .1, 10, 350);
                break;
        }
    },

    clearAll: function () {
        $('.menu').remove();
        // $('.buttonrules').remove();
    }

};
