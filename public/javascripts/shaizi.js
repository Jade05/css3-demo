$(function(){
    // 省略其他
    // for cube
    var dotNum = null;
    var resultNum = null;

    var cubeClassArray = [
        'show-front',
        'show-back',
        'show-right',
        'show-left',
        'show-top',
        'show-bottom'
    ];

    var timer = setInterval(function() {
        dotNum = Math.random();
        resultNum = Math.round(dotNum * 6);
        $('#cube').attr('class', cubeClassArray[1]);
        $('#cube').attr('class', cubeClassArray[resultNum % 6]);
    }, 1000);

});