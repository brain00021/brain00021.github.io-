

    $(document).ready(function() {
      function loadRates(){
        $.getJSON("profile.json").done(
          function(data){
            alert('test');
          }
        );
      }
      loadRates();

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
            $moautainIcon.css({
                'right': xmove * -1
            });
            $('#staticImg').css({
                'left': xmove
            });
            $('.subtitle').css({
                'right': xmove * 1
            });

        });



        // GreenSock
        $('.animsition').on('animsition.inStart', function() {
            gogo();
            console.log("執行這塊,2");
        })

        function gogo() {
            var timeLine = new TimelineLite();
            var tl = new TimelineMax();
            // var split = $(".subtitle").splitText({
            //     'type': 'lines',
            //     'animation': 'smoke',
            //     'useLite': true
            // });
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
// timeLine.from(".subtitle", 1, {opacity:0,right:-500,ease: Power2.ease}).from(".time",1,{opacity:0,right:-500,ease:Power2.ease});

