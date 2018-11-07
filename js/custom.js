
$(document).ready(function() {
  function loadRates(){
    $.getJSON("./profile.json").done(
      function(data){
        var msg = '<h2>輸入資料</h2>';
        // Start message
        for(var i =0; i< data.events.length ; i++){
          msgTitle = '<h6 class="profile-title">'+ data.events[i].title + '<span>'+  data.events[i].date +'</span></h6>'
          msg = '<a class="profile-nav" href="'+ data.events[i].url + '" target="_blank"><div class="profile-work" style="background:url('+ data.events[i].img + ') no-repeat center center"></div>'+msgTitle+'</div></a>'
          $('.profile-collect').append('<div class="swiper-slide profile-article">' + msg + '</div>');
          $('.banner-collect').append('<div class="swiper-slide banner-nav"><img src=' + data.events[i].img + '></div>');
        }
      }
    ).fail(function(){
      msg = '<h1 style="color:#fff; text-algin:center">資料錯誤</h1>'
      $('.profile-collect ,.banner-collect').append(msg);
    });
  }
  loadRates();
  // menu 按鈕
  var navBarButton = $('.navbar-toggle-custom');
  var openBolloen = true;
  navBarButton.click(() => {
    navBarButton.toggleClass('open');
    $('.all-wrapper ,.navbar-collapse-custom').toggleClass('open');
  });
  $('.navbar-nav').find('li').find('a').click(() => {
    navBarButton.removeClass('open');
    $('.all-wrapper ,.navbar-collapse-custom').removeClass('open');
  });

  
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
              // TweenMax.staggerTo(".profile-nav", 0.5, { scale: 1, opacity:1, ease: Elastic.easeOut, force3D: true }, 0.2);
          } 
        if (destination.index == 3) {
              TweenMax.staggerTo(".c100", 0.5, { scale: 1, opacity: 1, delay:0.4, ease: Elastic.easeOut, force3D: true }, 0.2);
          }
      }
  });
    // $(window).resize(function(){
    //     var window_height = $(window).height();
    //     var h1_height= $('.subtitle').height();
    //     var h1_top = window_height /2 - h1_height ;
    //     $('.subtitle').css({
    //         'marginTop':h1_top
    //     });
    // }).resize();


});
// skill -plugin
