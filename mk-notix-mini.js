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
// >>>>>>>>>>>>>>>>>>>> DIALOGS <<<<<<<<<<<<<<<<<<<<<<<<
$(function(){var nStyle = document.createElement('style');nStyle.type = 'text/css';nStyle.innerHTML = '.cssClass { color: #F00; }';document.getElementsByTagName('head')[0].appendChild(nStyle);nStyle.innerHTML = '#notifications{z-index: 1000;position: fixed;height:auto;width:250px;left:10;top:0;}.rnHolder{position: relative;width: 100%;padding: 0;font-family: "Tahoma", sans-serif;font-size: 100%;text-align: center;background-color: #fff;margin-top:0.41em;padding: 0.1em;border-bottom: 2px rgb(101,171,67) solid;box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);left: 10;display: none;}.rnHolder a{position: absolute;left: 0.4em;top: 0em;color: #999;font-size: 14px;cursor: pointer;font-family: "Arial Black";transition: 0.5s}.rnHolder a:hover{color: #333}.rnHolder p{cursor: default}';var notifications = document.createElement('div');notifications.id = 'notifications';document.getElementsByTagName('body')[0].appendChild(notifications);})function makeid(){var text = "";var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for( var i=0; i < 5; i++ )text += possible.charAt(Math.floor(Math.random() * possible.length));return text;}function returnN(message,color,duration){var rnHolder = document.createElement('div');rnName = makeid();rnHolder.id = rnName;rnHolder.className = 'rnHolder';document.getElementById('notifications').appendChild(rnHolder);var target = document.getElementById(rnName);var rnText = document.createElement('p');var rnClose = document.createElement('a');rnClose.innerHTML = 'x';$(rnClose).on('click', function(){$(this).closest('div').slideUp(200);})target.appendChild(rnClose);rnText.innerHTML = message;rnText.style.color = color;target.appendChild(rnText);$(target).fadeIn(500);setTimeout(function(){$(target).slideUp(200);}, duration);}