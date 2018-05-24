$(function() {
    var Initials = $('.initials');
    var LetterBox = $('#letter');
    Initials.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li>');
    initials();

    $(".initials ul li").click(function() {
        var _this = $(this);
        var LetterHtml = _this.html();
        LetterBox.html(LetterHtml).fadeIn();

        Initials.css('background', 'rgba(145,145,145,0.6)');

        setTimeout(function() {
            Initials.css('background', 'rgba(145,145,145,0.6)');
            LetterBox.fadeOut();
        }, 1000);

        var _index = _this.index()
        if (_index == 0) {
            $('html,body').animate({ scrollTop: '0px' }, 300); //点击第一个滚到顶部
        } else if (_index == 27) {
            var DefaultTop = $('#default').position().top;
            $('html,body').animate({ scrollTop: DefaultTop + 'px' }, 300); //点击最后一个滚到#号
        } else {
            var letter = _this.text();
            if ($('#' + letter).length > 0) {
                var LetterTop = $('#' + letter).position().top;
                $('html,body').animate({ scrollTop: LetterTop - 45 + 'px' }, 300);
            }
        }
    })

    var windowHeight = $(window).height();
    var InitHeight = windowHeight - 45;
    Initials.height(InitHeight);
    var LiHeight = InitHeight / 28;
    Initials.find('li').height(LiHeight);
})

function initials() { //公众号排序
    var SortList = $(".sort_list");
    var SortBox = $(".sort_box");
    SortList.sort(asc_sort).appendTo('.sort_box'); //按首字母排序
    function asc_sort(a, b) {
        return makePy($(b).find('.num_name').text().charAt(0))[0].toUpperCase() < makePy($(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
    }

    var initials = [];
    var num = 0;
    SortList.each(function(i) {
        var initial = makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
        if (initial >= 'A' && initial <= 'Z') {
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        } else {
            num++;
        }
    });
    var SortBoxOption = $(".option");
    //console.log(SortBoxOption)
    $.each(initials, function(index, value) { //添加首字母标签
        if ('A' <= value && value < 'G') {
            SortBoxOption[0].innerHTML += '<div class="sort_letter" id="' + value + '"><span>' + value + '</span></div>';
        } else if ('G' <= value && value < 'L') {
            SortBoxOption[1].innerHTML += '<div class="sort_letter" id="' + value + '"><span>' + value + '</span></div>';
        } else if ('L' <= value && value < 'Q') {
            SortBoxOption[2].innerHTML += '<div class="sort_letter" id="' + value + '"><span>' + value + '</span></div>';
        } else if ('Q' <= value && value < 'V') {
            SortBoxOption[3].innerHTML += '<div class="sort_letter" id="' + value + '"><span>' + value + '</span></div>';
        } else {
            SortBoxOption[4].innerHTML += '<div class="sort_letter" id="' + value + '"><span>' + value + '</span></div>';
        }

    });
    if (num != 0) {
        SortBoxOption[4].innerHTML += '<div class="sort_letter" id="default">#</div>';
    }

    for (var i = 0; i < SortList.length; i++) { //插入到对应的首字母后面
        var letter = makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
        switch (letter) {
            case "A":
                $('#A').append(SortList.eq(i));
                break;
            case "B":
                $('#B').append(SortList.eq(i));
                break;
            case "C":
                $('#C').append(SortList.eq(i));
                break;
            case "D":
                $('#D').append(SortList.eq(i));
                break;
            case "E":
                $('#E').append(SortList.eq(i));
                break;
            case "F":
                $('#F').append(SortList.eq(i));
                break;
            case "G":
                $('#G').append(SortList.eq(i));
                break;
            case "H":
                $('#H').append(SortList.eq(i));
                break;
            case "I":
                $('#I').append(SortList.eq(i));
                break;
            case "J":
                $('#J').append(SortList.eq(i));
                break;
            case "K":
                $('#K').append(SortList.eq(i));
                break;
            case "L":
                $('#L').append(SortList.eq(i));
                break;
            case "M":
                $('#M').append(SortList.eq(i));
                break;
            case "N":
                $('#N').append(SortList.eq(i));
                break;
            case "O":
                $('#O').append(SortList.eq(i));
                break;
            case "P":
                $('#P').append(SortList.eq(i));
                break;
            case "Q":
                $('#Q').append(SortList.eq(i));
                break;
            case "R":
                $('#R').append(SortList.eq(i));
                break;
            case "S":
                $('#S').append(SortList.eq(i));
                break;
            case "T":
                $('#T').append(SortList.eq(i));
                break;
            case "U":
                $('#U').append(SortList.eq(i));
                break;
            case "V":
                $('#V').append(SortList.eq(i));
                break;
            case "W":
                $('#W').append(SortList.eq(i));
                break;
            case "X":
                $('#X').append(SortList.eq(i));
                break;
            case "Y":
                $('#Y').append(SortList.eq(i));
                break;
            case "Z":
                $('#Z').append(SortList.eq(i));
                break;
            default:
                $('#default').append(SortList.eq(i));
                break;
        }
    };
}