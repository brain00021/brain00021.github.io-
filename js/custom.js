
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
            verticalCentered: true,
            css3: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['home', 'recent-project', 'banner', 'resume', 'contect-me'],
            anchors: ['home', 'recent-project', 'banner', 'resume', 'contect-me'],
            autoScrolling:false,
            scrollHorizontally: true,
            scrollBar: true,
            scrollOverflow:false,
            sectionsColor: ['#000000', '#000', '#000', '#000'],
            onLeave: function(origin, destination, direction){
              if(destination.index == 1 || destination.index == 2 || destination.index == 3 ){ 
                    // $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
                    $('#menu').addClass('navbar-header-active');
                } else if (origin && origin.index == 1) {
                    // $('.section').eq(index - 2).removeClass('moveUp').addClass('moveDown');  
                    $('#menu').removeClass('navbar-header-active');
                }
              //after leaving section 2
              if (destination.index == 1) {
                    TweenMax.staggerTo(".profile-nav", 1, { scale: 1, opacity:1, delay: 1, ease: Elastic.easeOut, force3D: true }, 0.2);
                } 
              if (destination.index == 3) {
                    TweenMax.staggerTo(".c100", 2, { scale: 1, opacity: 1, delay:1, ease: Elastic.easeOut, force3D: true }, 0.2);
                }
            }
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
