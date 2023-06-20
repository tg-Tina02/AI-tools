
// 確保有載入jq//
$(document).ready(function() {
  //要發生的事情都寫在這下面


  // navbar 的漢堡動畫
  $("#navbar-toggler").click(function(){
    $("#hamburger-1").toggleClass( "hamburger-rotate-down");
    $("#hamburger-2").toggleClass( "hamburger-hidden" );
    $("#hamburger-3").toggleClass( "hamburger-rotate-up" );
  }); 


  // filter 篩選勾勾
  $(".filter-dropdown-item").click(function(){
    $(this).toggleClass( "check");
  });


  // tools 的篩選單
  $('#filter-dropdown-btn').click( function(event){
    event.stopPropagation();
    $('#filter-dropdown').toggle();
    $(this).toggleClass(" border-dark");
  });

  // 中間 nav
  $('.nav-link').click( function(event){
    $('.nav-link').removeClass("bg-Active");
    $(this).toggleClass("bg-Active");
  });

  //pagination 頁籤
  $('.page-link').click( function(event){
    $('.page-link').removeClass("bg-Active");
    $(this).toggleClass("bg-Active");
  });

  // 由新到舊 選單
  // 開起選單+加上黑框邊線
  $('#select-dropdown-btn').click( function(event){
    event.stopPropagation();
    $('#select-dropdown').toggle();
    $(this).toggleClass(" border-dark");
  });
  // 再點一下關閉
  $(document).click( function(){
    // $('#select-dropdown').hide();
    // $('#select-dropdown-btn').removeClass(" border-dark");
  });

  // 切換按鈕文字
  $('.new-to-old').click(function(e) {
    e.preventDefault();
    $('#select-dropdown').toggle();
    $('.dropdown-btnText').text($('.new-to-old').text());
  });

  $('.old-to-new').click(function(e) {
    e.preventDefault();
    $('#select-dropdown').toggle();
    $('.dropdown-btnText').text($('.old-to-new').text());
  });




  //question 手風琴
  //下方文字區(question-text)先隱藏
  $(".question-text").hide();
  
  //點 .question-item 會發生某件事
  $( ".question-item" ).click(function(event) {
    // .question-item 會添加 .border-2 跟 .border-white 的css樣式，再點一下就復原
    $(this).toggleClass( "border-2 border-white" );
    // 第二個span 會移除 .btn-icon-vertical 的css樣式，再點一下就復原
    $(this).find('span:nth-child(2)').toggleClass('btn-icon-vertical');
    // .question-text 會往下滑出現（400毫秒），再點一下就復原
    $(this).find('.question-text').slideToggle( 400 );
  });


  //Back to top
  //按下scrollToTop的事件處理
  $("#scrollToTop").click(function(){
    jQuery("html,body").animate({scrollTop:0},1000);
    });
  

});






//輪播測試
$(function () {
  slider();
});


$(window).resize(function () { //隨著螢幕縮放時
slider();
});


function slider() {

  var gNum = 0; //組數的初始值
  var dX = 0; //水平座標位置
  var divWidth = $(".slider").width(); //外層寬度
  var ulNum; //為總組數
  var liLength = $(".slider .list li").length;
  var ulWidth;
  var liWidth;
  $(".status").html(""); //要先將點點清空

    if ($(window).width() < 768) { //當螢幕<768px時 
       liWidth = divWidth; //要只秀1張
       ulNum = liLength; //組數也會只有1個
    } else {
      liWidth = divWidth / 3;//要只秀3張
      ulNum = liLength / 3;
    }

    $(".slider .list li").css("width", liWidth); //隨著上面設定而改變li寬度

    ulWidth = liWidth * liLength;  // ul的總寬度 是為li幾個所組成的

    $(".slider ul").css("width", ulWidth); // 將剛剛 ul的總寬度變數 寫入ulDOM中

    if (ulNum <= 1) { //假如組數只有1組 就不用秀左右按鈕
      // $(".dIcon.next").hide();
      // $(".dIcon.prev").hide();
    } else {
      // $(".dIcon.next").show();
      // $(".dIcon.prev").show();

      for (var i = 0; i < ulNum; i++) { //隨著有幾個組數 產生點點
          $(".status").append("<span class='dot'></span>")
      }
      $(".dot").eq(0).addClass("active"); // 將第一個點 亮起來
    }
 
      leftAnimate();

      function leftAnimate() {
        $(".slider ul").stop().animate({ "left": dX }, 700); //將ul往左移動多少px
      }

      function showDot(point) { // 隨著改變 亮點也要改變
        $(".dot").removeClass("active");
        $(".dot").eq(point).addClass("active"); 
      }
      
     $(".dot").click(function () {
       var point = $(this).index();
       dX = point * divWidth * -1;
       showDot(point);
       leftAnimate();
      });
  }
