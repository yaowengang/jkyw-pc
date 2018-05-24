var city = [{
    "id": 1,
    "name": "A擅长1"
}, {
    "id": 2,
    "name": "B擅长1"
}, {
    "id": 3,
    "name": "C擅长1"
}, {
    "id": 4,
    "name": "D擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "E擅长1"
}, {
    "id": 1,
    "name": "F如果现实不下，折行显示"
}, {
    "id": 1,
    "name": "G擅长1"
}, {
    "id": 1,
    "name": "H擅长1"
}, {
    "id": 1,
    "name": "I擅长1"
}, {
    "id": 1,
    "name": "J擅长1"
}, {
    "id": 1,
    "name": "K擅长1"
}, {
    "id": 1,
    "name": "L擅长1"
}, {
    "id": 1,
    "name": "M擅长1"
}, {
    "id": 1,
    "name": "O擅长1"
}, {
    "id": 1,
    "name": "P擅长1"
}, {
    "id": 1,
    "name": "Q擅长1"
}, {
    "id": 1,
    "name": "R擅长1"
}, {
    "id": 1,
    "name": "S擅长1"
}, {
    "id": 1,
    "name": "T擅长1"
}, {
    "id": 1,
    "name": "U擅长1"
}, {
    "id": 1,
    "name": "V擅长1"
}, {
    "id": 1,
    "name": "W擅长1"
}, {
    "id": 1,
    "name": "X擅长1"
}, {
    "id": 1,
    "name": "Y擅长1"
}, {
    "id": 1,
    "name": "Z擅长1"
}, {
    "id": 1,
    "name": "#擅长1"
}, {
    "id": 1,
    "name": "N擅长1"
}];
for (let index = 0; index < city.length; index++) {
    const element = city[index].name;
    if ($('.preview > span').text().indexOf(element) < 0) {
        var sort_list = "<div class='sort_list'><div class='num_name'>" + element + "</div></div>";
    } else {
        var sort_list = "<div class='sort_list'><div class='num_name choose'>" + element + "</div></div>";
    }
    $(".sort_box").append(sort_list);
};
$('.preview').on('click', 'img', function() {
    tag($(this).parent('span').text());
    $(this).parent('span').remove();

});
$('.num_name').click(function() {
    if ($('.preview span').length < 3) {
        var _thistext = $(this).text();
        if ($(this).hasClass('choose')) {
            $(this).removeClass('choose');
            $('.preview span').each(function() {
                if (_thistext == $(this).text()) {
                    $(this).remove();
                }
            });
        } else {
            $(this).addClass('choose');
            var taghtml = "<span>" + _thistext + "<img src='../images/close.png'></span>"
            $('.preview').append(taghtml);
        }
    } else {
        console.log(1111)
    }
})

function tag(e) {
    $(".num_name").each(function() {
        var _thistext = $(this).text();
        if (e == _thistext) {
            $(this).removeClass('choose')
        }
    })
}
$('.optionGroup div').click(function() {
    $(".optionGroup div").eq($(this).index()).addClass("active").siblings().removeClass("active");
    console.log($(".option"))
    $(".sort_box .option").eq($(this).index()).addClass("on").siblings().removeClass("on");
});