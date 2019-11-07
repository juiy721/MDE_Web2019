$(function(){
  //ローディングエリアを取得
  var loading = $('#loading');
  //ローディングエリアを隠す処理
  var inHidden = function(){
    loading.fadeOut(1000); //1000msかけてフェードアウト
  };
  //1000ms後にloadingFunc開始
  setTimeout(inHidden,1000);
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});