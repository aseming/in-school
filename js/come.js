$(function () {
    var time = getDate();

    // 时间
    $('.times').text(time);
    $('.leavetime').text(time);

    // 确认关闭
    $('.footer').on('click', () => { 
        $('.model').css('display','none');
    })

    // 输入
    $('.sumbit').on('click', () => {  
        // console.log("点击");
        $('.r1').text($('#stunum').val());
        $('.r2').text($('#name').val());
        $('.r3').text($('#class').val());
        $('.r4').text($('#college').val());
        $('.r5').text($('#major').val());
        $('.r6').text($('#batch').val());
        $('.r7').text($('#type').val());
        $('.r8').text($('#address').val());
        $('.r9').text($('#plan').val());
        $('.r10').text($('#actual').val());
        $('.r13').text($('#li').val());
        $('.address').text($('#address').val());
        $('.inputBox').css('display','none');
    })

    $('.back').on('click', () => { 
        $('.inputBox').css('display','block');
    })

    $('.quxiao').on('click', () => {
        $('.inputBox').css('display','none');
    })

    // 获取最新时间
    function getDate() {
       
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

        return time;
    }
})