$(document).ready(function() {
    $('#menu li').click(function(){
        $(this).find('a').addClass('meun-hover').parent().siblings('li').find('a').removeClass('meun-hover');
    });
    // 判斷式
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
