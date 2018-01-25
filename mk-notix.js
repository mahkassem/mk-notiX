/*
NotiX v.1.0 JQuery Plug-in - 27/04/2016
Create a cool notification for jQuery, simple to use.
How to use: simply find example below:
1. include .js to your header
2. Trigger function: returnN('message','color','duration')
Created by: Mahmoud Kassem
Email: mahmoud.ali.kassem@gmail.com
www.zbony.com
*/
$(function() {
    var typeN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAB3RJTUUH4AQbDwkj0PFKegAAAAlwSFlzAAAewgAAHsIBbtB1PgAAAARnQU1BAACxjwv8YQUAAAFYSURBVHja7dqxagJBEMZxkdR5gbR5gZRWkvZaO5uDIJK0SXF5AAtrC7G0FdKJjWIpvoBgmxQ2FlppI6jfySwEwS3udmZvZQb+IKfO3q+wUUslHR2dXFN7a+YpQXu0o8eZd/mEdNARnagjXQsKEv8DXBeHBBlZIKOQIDMLZBYCJEJjdLBADvSaqIiQJzS03PythvTeQkBe0CoDwrSiHV4hz2idA2Fa0y4vkDKaO0CY5rRTHPLuEGH6kIY8oCUDZEm7xSAVBoSpIgn5ZIR8SUK6jJCuJKTPCOkrRCEKUYhCFKIQYUiPEdKThCSMkEQSUmWEVLkhj6iBftCCEbKgMxp0plPIK/pjvPlb/dLZTiDpF2lbDwhTenbkArLxiDBtXEB8Iy4p5B4hAzTx3MAFpBApJCekjtqodVWbngsGMrV8cKchQWILJA4JknYXv7ObvmtF+eeDjk62OQPJEGhqOr30GQAAAABJRU5ErkJggg==';
    var typeX = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAB3RJTUUH4AQbDyMJZCFPhAAAAAlwSFlzAAAewgAAHsIBbtB1PgAAAARnQU1BAACxjwv8YQUAAAOlSURBVHja7Vn3axVBEP7sLXZEsYsNUVFjQUywoISAiCKKoomJhRhQLOiDiEoi0QRUYkNUrIjYEEWNJRrNmVjiL+qf5Ay7y+6er9y9vHsb5D742Ly3s/dmZmdmdy5AjBgxYsT4T5EgfiYedq1IV3CM+IXoyTHhWqFssI34UxrRJkf+vNm1YmEwhvgWYhfaDLYTm4mjXCsYFCeJPwwDOoy/+fsa1woGQSGE5z3okLoFvTue5FzXiqZDD+IN4lepNI+3iYOJ94zvvxGvulY2HTZAh5QHEVJL5VyxNMST89+Ja10rnAzDiS8gwkopWu+TaZTfq8R/RhziWnE/+MBTu8H50EKc4JOZQvwInS8sv8+14iZmQpzenqHg7hSy1T6DW4lTXRugcAEigVWpfUQckEK2gPgUuiRzqJ11bQBjjWGEqkirM6wphc4VT65Z4dKIgcTH0N5lhZrk3EKI8KowyJ/nyfnLsHfxAbGfK0P2wC63nCcz5NwO4m85r8ift8j52cY6lVcVLoyYCFGZzAp0yJgvgQ4fRf683JBJwE78d8Sx+TbkNOwzgc+QYcb8IuiTXHme5eYYMiOJr6DPHjaqNp9G8GndATss1vtkpsEOHR651I73yW2CHZ7t0gmRozfxLux703WIe5aJ0cT30KHHI3t/qE+uF8R9zLyf3ST2jNqQrT4PsoILksgNIj6HDhseHxL7JJFdjH93eGOURnBD9Bp2TJ9IIcuevg9dmtnT19I8+xTsnHtJHBGVITWwq8wbiG4wFa7ADsEzaWTHwQ5F/p0jURjBjZAHe/vLMqxpIP6CPkMyvXzYCTtseZyVa0O4EVInMXuZw6ZvhjVFxCriLjkWZpDvD5FH5k3hUi6N4AbIvBuxIcW59pTEKth3N/7dklw8mBsfboDMhqkx4NolxEpiuRyD9unnDcfx7jyBqIJdwn7YCc6N0eSAa49C37f+QORAEEwnfoKdj1VdMYIbnlbYlaQ6xPqDhhN4LA+x9oDPgR+Ik7I1hBsec4u5ISoIsd7cER6D7giDbwDmgcp6NGRjxEqIpPOMB5WGfMYy4l6IPoTH+SHXr4NdjrnIFIV5ACe4/1Q+l403coCLsO9hdyAaukCog94JFVb8GpSbIj4Et+eBZfL36mC/cmW9Ar/VV/8KMJsi9kYn7I4vanbC7mmUIS1BDWmCfRvtLvSkXvUICL4q1MK+W7mm0uU4krcCacHVprkbGMO/z+1DZVgDYsSIESNGpPgLghiH8ul3sG8AAAAASUVORK5CYII=';
    var nStyle = document.createElement('style');
    nStyle.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(nStyle);
    nStyle.innerHTML = '.notificationsx{z-index: 10001;position: absolute;height:auto;width:360px;max-width:100vw;left:0.41em;top:0;}' +
        '.rnHolder{position: relative;width: 100%;font-size:15px;text-align: center;background-color: #fff;margin-top:0.41em;padding: 0.1em;border: 1px #e7e7e7 solid;box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);display: none;}' +
        '.rnHolder a{position: absolute;right: 0.4em;top: 0;color: #999;font-size:15px;cursor: pointer;transition: 0.5s}' +
        '.rnHolder a:hover{color: #333}' +
        '.rnHolder p{cursor: default;text-align:left;padding:7px 20px 0 45px;direction:ltr;font-weight: 300;font-size:15px}' +
        '.rnIconN{position:absolute;left:10px;top:50%;margin-top:-12.5px;width: 25px;height: 25px;background: url(' + typeN + ') no-repeat center center;background-size:25px 25px;}' +
        '.rnIconX{position:absolute;left:10px;top:50%;margin-top:-12.5px;width: 25px;height: 25px;background: url(' + typeX + ') no-repeat center center;background-size:25px 25px;}' +
        '.cBlocker{position:fixed;z-index: 1001!important;top:0;height:100vh;width:100vw;background-color:rgba(255,255,255,0.8);display:none;}' +
        '.cHolder{width:100%;max-width:600px;min-width:300px;background-color:#fff;box-shadow:0 4px 15px 0 rgba(0,0,0,0.19);padding:1em 0.5em;position:absolute;left:50%;-webkit-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);top:50%}' +
        '.cHolder p{font-size:15px;padding:0 1em; margin-bottom:1em;font-weight:400;text-align:left;}' +
        '.cOk{cursor:pointer;padding: 4px 16px;box-shadow: 0 0 5px 0 rgba(0,0,0,0.067)inset;vertical-align:middle;' +
        'background-color:green;color:#fff;border-radius:1px;text-align:center;transition:0.3s;margin-right:1em;float:right;font-weight:400;font-size:15px;}' +
        '.cOk:hover {background-color:darkgreen;color:#fff;box-shadow: 0 -1px 1px 1px rgba(0,0,0,0.3)inset}' +
        '.cOk:active {background-color:darkgreen;color:#fff;box-shadow: 0 1px 1px 1px rgba(0,0,0,0.3)inset}' +
        '.cNo{cursor:pointer;padding: 4px 16px;vertical-align:middle;' +
        'background-color:#fff;color:green;border:1px #fff solid;border-bottom:2px #fff' +
        'solid;border-radius:1px;text-align:center;margin-right:1em;float:right;font-weight:400;font-size:15px;}' +
        '.cNo:hover {border:1px #e7e7e7 solid;border-bottom:2px #e7e7e7 solid;}' +
        '.cNo:active {background-color:#f1f1f1;border:1px #e7e7e7 solid;border-top:2px #e7e7e7 solid;border-bottom:1px #e7e7e7 solid;}';
    var notifications = document.createElement('div');
    notifications.className = 'notificationsx';
    var cBlocker = document.createElement('div');
    cBlocker.className = 'cBlocker';
    var holder = document.getElementsByTagName('html')[0];
    holder.appendChild(notifications);
    holder.appendChild(cBlocker);
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function returnN(message, color, duration) {
    var rnHolder = document.createElement('div');
    rnName = makeid();
    rnHolder.id = rnName;
    rnHolder.className = 'rnHolder';
    document.getElementsByClassName('notificationsx')[0].appendChild(rnHolder);
    var target = document.getElementById(rnName);
    var rnText = document.createElement('p');
    var rnIcon = document.createElement('div');
    rnIcon.className = "rnIconN";
    var rnClose = document.createElement('a');
    rnClose.innerHTML = 'x';
    $(rnClose).on('click', function() {
        $(this).closest('div').slideUp(200);
    })
    target.appendChild(rnClose);
    rnText.innerHTML = message;
    rnText.style.color = color;
    rnText.appendChild(rnIcon);
    target.appendChild(rnText);
    $(target).slideDown(200)
    setTimeout(function() {
        $(target).slideUp(200);
    }, duration);
}

function alertX(message) {
    var rnHolder = document.createElement('div');
    rnName = makeid();
    rnHolder.id = rnName;
    rnHolder.className = 'rnHolder';
    document.getElementsByClassName('notificationsx')[0].appendChild(rnHolder);
    var target = document.getElementById(rnName);
    var rnText = document.createElement('p');
    var rnIcon = document.createElement('div');
    rnIcon.className = "rnIconX";
    var rnClose = document.createElement('a');
    rnClose.innerHTML = 'x';
    $(rnClose).on('click', function() {
        $(this).closest('div').slideUp(200);
    })
    target.appendChild(rnClose);
    rnText.innerHTML = message;
    rnText.style.color = 'red';
    rnText.appendChild(rnIcon);
    target.appendChild(rnText);
    $(target).slideDown(200)
}

function informX(message) {
    var cHolder = document.createElement('div');
    cName = makeid();
    cHolder.id = cName;
    cHolder.className = 'cHolder';
    document.getElementsByClassName('cBlocker')[0].appendChild(cHolder);
    var target = document.getElementById(cName);
    var cText = document.createElement('p');
    var cOk = document.createElement('div');
    cOk.className = "cOk";
    cOk.innerHTML = 'Close';
    $(cOk).on('click', function() {
        $(this).closest('.cHolder').fadeOut(500);
        $('.cBlocker').fadeOut(500);
    })
    cText.innerHTML = message;
    cText.style.color = '#888';
    target.appendChild(cText);
    target.appendChild(cOk);
    $(target).fadeIn(500);
    $('.cBlocker').fadeIn(500);
}

function confirmX(message, url, ok, cancel) {
    var cHolder = document.createElement('div');
    cName = makeid();
    cHolder.id = cName;
    cHolder.className = 'cHolder';
    document.getElementsByClassName('cBlocker')[0].appendChild(cHolder);
    var target = document.getElementById(cName);
    var cText = document.createElement('p');
    var cOk = document.createElement('a');
    cOk.className = "cOk";
    cOk.innerHTML = ok;
    $(cOk).on('click', function() {
        $(this).closest('.cHolder').fadeOut(500);
        $('.cBlocker').fadeOut(500);
        window.open(url, '_self');
    })
    var cNo = document.createElement('a');
    cNo.className = "cNo";
    cNo.innerHTML = cancel;
    $(cNo).on('click', function() {
        $(this).closest('.cHolder').fadeOut(500);
        $('.cBlocker').fadeOut(500);
    })
    cText.innerHTML = message;
    cText.style.color = '#888';
    target.appendChild(cText);
    target.appendChild(cNo);
    target.appendChild(cOk);
    $(target).fadeIn(500);
    $('.cBlocker').fadeIn(500);
}

function functionX(message, func, ok, cancel) {
    var cHolder = document.createElement('div');
    cName = makeid();
    cHolder.id = cName;
    cHolder.className = 'cHolder';
    document.getElementsByClassName('cBlocker')[0].appendChild(cHolder);
    var target = document.getElementById(cName);
    var cText = document.createElement('p');
    var cOk = document.createElement('a');
    cOk.className = "cOk";
    cOk.innerHTML = ok;
    $(cOk).attr('onclick', func);
    $(cOk).on('click', function() {
        $(this).closest('.cHolder').fadeOut(500);
        $('.cBlocker').fadeOut(500);
    })
    var cNo = document.createElement('a');
    cNo.className = "cNo";
    cNo.innerHTML = cancel;
    $(cNo).on('click', function() {
        $(this).closest('.cHolder').fadeOut(500);
        $('.cBlocker').fadeOut(500);
    })
    cText.innerHTML = message;
    cText.style.color = '#888';
    target.appendChild(cText);
    target.appendChild(cNo);
    target.appendChild(cOk);
    $(target).fadeIn(500);
    $('.cBlocker').fadeIn(500);
}

function toDiv(id, speed, alarm) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, speed);
    if (alarm == 0) {} else {
        $("#" + id).css({
            'transition': '0.3s'
        });
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 250px 0px rgba(255,0,0,0.2)'
                , 'color': 'red'
            })
        }, speed);
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 0px 0px rgba(255,0,0,0.2)'
                , 'color': '#666'
            })
        }, speed * 1.5);
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 250px 0px rgba(255,0,0,0.2)'
                , 'color': 'red'
            })
        }, speed * 2);
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 0px 0px rgba(255,0,0,0.2)'
                , 'color': '#666'
            })
        }, speed * 2.5);
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 250px 0px rgba(255,0,0,0.2)'
                , 'color': 'red'
            })
        }, speed * 3);
        setTimeout(function() {
            $("#" + id).css({
                'box-shadow': '0px 0px 0px 0px rgba(255,0,0,0.2)'
                , 'color': '#666'
            })
        }, speed * 3.5);
    }
}
