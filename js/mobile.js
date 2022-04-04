$(function(){
   
    // 모바일 토글 버튼
    $('#mobile-toggle-btn').click(function(){
        
        $('#GNB').toggleClass('on'); 
        
    })

    
});

$(function(){
    $('#GNB .m-gnb-up-btn').click(function(e){
       e.preventDefault();
        $(this)
        .next()
        .toggleClass('on');

        $('.m-gnb-up-btn  img')   
        .toggleClass('on')
    })
})