$(document).ready(function(){     
    $(window).scroll(function() { 
        var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.  
        // console.log(position);
    });  

    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos < 700) {
            $('#btn0').css('color', '#000');
            $('#btn1').css('color', '#fff');
            $('#btn2').css('color', '#fff');
            $('#btn3').css('color', '#fff');
            $('#btn4').css('color', '#fff');
        }else if(scroll_pos < 1700) { 
            $('#btn1').css('color', '#000');
            $('#btn0').css('color', '#fff');
            $('#btn2').css('color', '#fff');
            $('#btn3').css('color', '#fff');
            $('#btn4').css('color', '#fff');
        }else if(scroll_pos < 2600) { 
            $('#btn2').css('color', '#000');
            $('#btn0').css('color', '#fff');
            $('#btn1').css('color', '#fff');
            $('#btn3').css('color', '#fff');
            $('#btn4').css('color', '#fff');
        }else if(scroll_pos < 3600) { 
            $('#btn3').css('color', '#000');
            $('#btn0').css('color', '#fff');
            $('#btn1').css('color', '#fff');
            $('#btn2').css('color', '#fff');
            $('#btn4').css('color', '#fff');
        }else if(scroll_pos > 3600) { 
            $('#btn4').css('color', '#000');
            $('#btn0').css('color', '#fff');
            $('#btn1').css('color', '#fff');
            $('#btn2').css('color', '#fff');
            $('#btn3').css('color', '#fff');
        }
    });
});
