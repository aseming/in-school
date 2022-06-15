$(function () {
    var dataList = [
        {
            title:'学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号',
            value:'201139106'
        },
        {
            title:'姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名',
            value:'某某'
        },
        {
            title:'班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级',
            value:''
        },
        {
            title:'学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院',
            value:'软件学院'
        },
        {
            title:'专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业',
            value:''
        },
        {
            title:'申请批次',
            value:'离校申请'
        },
        {
            title:'申请类型',
            value:'2011391069'
        },
        {
            title:'前往地址',
            value:'2011391069'
        }, 
        {
            title:'计划离校校门',
            value:'2011391069'
        },
        {
            title:'实际离校校门',
            value:'2011391069'
        },
        {
            title:'离校时间',
            value:'2011391069'
        }
    ];

    var time = getDate();

    // 时间
    $('.time').text(time);
    $('.leavetime').text(time);

    // $('.model').css('display','none');

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
        $('.r11').text($('#leavetime').val());
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