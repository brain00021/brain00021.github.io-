
    $(document).ready(function() {
      function loadRates(){
        $.getJSON("./profile.json").done(
          function(data){
            var msg = '<h2>輸入資料</h2>';
            // Start message
            for(var i =0; i< data.events.length ; i++){
              msg = '<a class="profile-nav" href="'+ data.events[i].url + ' target="_blank""><h6 class="profile-title">'+ data.events[i].title + '<span>'+  data.events[i].date +'</span></h6><div class="profile-work" style="background:url('+ data.events[i].img + ') no-repeat center center"></div></div></a>'
              $('.profile-collect').append('<div class="col-xs-12 col-sm-4 col-md-4 profile-article">' + msg + '</div>');
            }
          }
        ).fail(function(){
          msg = '<h1 style="color:#fff; text-algin:center">資料錯誤</h1>'
          $('.profile-collect').append(msg);
        });
      }
      loadRates();
        $('#fullpage').fullpage({
            'verticalCentered': true,
            'css3': true,
            'navigation': true,
            'navigationPosition': 'left',
            'navigationTooltips': ['home', 'recent-project', 'banner', 'resume', 'contect-me'],
            anchors: ['home', 'recent-project', 'banner', 'resume', 'contect-me'],
            scrollOverflow: true,
            scrollBar: true,
            sectionsColor: ['#000000', '#000', '#000', '#000'],
            'onLeave': function (index, nextIndex, direction) {
                if (index == 1 && direction == 'down') {
                    // $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
                    $('#menu').addClass('navbar-header-active');
                } else if (index == 2 && direction == 'up') {
                    // $('.section').eq(index - 2).removeClass('moveUp').addClass('moveDown');  
                    $('#menu').removeClass('navbar-header-active');
                }

                if (nextIndex == 2) {
                    TweenMax.staggerFrom(".profile-nav", 1, { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true }, 0.2);
                } else if (nextIndex == 4) {
                    TweenMax.staggerFrom(".c100", 2, { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true }, 0.2);
                }



                // $('#staticImg').toggleClass('active', (index == 1 && direction == 'down') || (index == 2 && direction == 'up'));
                // $('#staticImg').toggleClass('moveDown', nextIndex == 2);
                // $('#staticImg').toggleClass('moveUp', index == 2 && direction == 'up');
                // if (nextIndex == 2) {
                //     $('#menu li').eq(1).find('a').addClass('meun-hover').parent().siblings('li').find('a').removeClass('meun-hover');
                // } else if (nextIndex == 3) {
                //     $('#menu li').eq(2).find('a').addClass('meun-hover').parent().siblings('li').find('a').removeClass('meun-hover');

                // } else if (nextIndex == 4) {
                //     $('#menu li').eq(3).find('a').addClass('meun-hover').parent().siblings('li').find('a').removeClass('meun-hover');
                // } else {
                //      $('#menu li').eq(0).find('a').addClass('meun-hover').parent().siblings('li').find('a').removeClass('meun-hover');
                // }
            }
        });

        // moving mouse
        $(window).mousemove(function(e) {
            var y = e.pageY;
            var x = e.pageX;
            var xmove = Math.round(x * 0.05);
            // var ymove = Math.round(y);
            // var menu = $('#menu').offset();
            // var menuhas = $('#menu').hasClass('menu-fixed');
            var $moautainIcon = $('.moautain-icon');
            // $('div.moveAble').css({'top': y});
            // 物品移動
            // $moautainIcon.css({
            //     'right': xmove * -1
            // });
            // $('#staticImg').css({
            //     'left': xmove
            // });
            // $('.subtitle').css({
            //     'right': xmove * 1
            // });

        });
        $(window).resize(function(){
            var window_height = $(window).height();
            var h1_height= $('.subtitle').height();
            var h1_top = window_height /2 - h1_height ;
            $('.subtitle').css({
                'marginTop':h1_top
            });
        }).resize();



        // GreenSock
        $('.animsition').on('animsition.inStart', function() {
             gogo();
            // console.log("執行這塊,2");
        })

        function gogo() {
            var timeLine = new TimelineLite();
            var tl = new TimelineMax();
            tl.staggerFrom(".subtitle", 0.8, {
                opacity: 0,
                y: -100,
                ease: Power2.ease
            }).staggerFrom(".time", 0.8, {
                opacity: 0,
                y: -100,
                ease: Power2.ease
            });
        }

    });

// skill -plugin


// timeLine.from(".subtitle", 1, {opacity:0,right:-500,ease: Power2.ease}).from(".time",1,{opacity:0,right:-500,ease:Power2.ease});
