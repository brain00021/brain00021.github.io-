$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'left',
        'navigationTooltips': ['topfullview', 'recent-project', 'profile', 'contect-me'],
        anchors: ['topfullview', 'recent-project', 'profile', 'contect-me'],
        scrollOverflow: true,
        sectionsColor: ['#000000', '#ffffff', 'whitesmoke', '#D0B1AF'],
        'onLeave': function(index, nextIndex, direction) {
            if (index == 1 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
                console.log("移除");
            } else if (index == 2 && direction == 'up') {
                $('.section').eq(index - 2).removeClass('moveUp').addClass('moveDown');
                console.log("移除2");
            }

            $('#staticImg').toggleClass('active', (index == 1 && direction == 'down') || (index == 2 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 2);
            $('#staticImg').toggleClass('moveUp', index == 2 && direction == 'up');
        }
    });
});

$(funciton(){
        var urlPath = 'index';
    var urlHref = location.href;

    // 如果是手機端訪問首頁， 跳至行動手機版網頁
    var arrUrl_webgolds = ['index', 'post']; // 緩存頁面做跳轉，除特殊情况首頁/
    for (i in arrUrl_webgolds) {
        if (arrUrl_webgolds[i] == urlPath) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //使用javascript回傳使用者瀏覽裝置的版本
                $('#pixie,#staticImg').remove();
            } else {}
        }
    }
});
