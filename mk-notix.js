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
	$(function(){
		var type = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAB3RJTUUH4AQbDwkj0PFKegAAAAlwSFlzAAAewgAAHsIBbtB1PgAAAARnQU1BAACxjwv8YQUAAAFYSURBVHja7dqxagJBEMZxkdR5gbR5gZRWkvZaO5uDIJK0SXF5AAtrC7G0FdKJjWIpvoBgmxQ2FlppI6jfySwEwS3udmZvZQb+IKfO3q+wUUslHR2dXFN7a+YpQXu0o8eZd/mEdNARnagjXQsKEv8DXBeHBBlZIKOQIDMLZBYCJEJjdLBADvSaqIiQJzS03PythvTeQkBe0CoDwrSiHV4hz2idA2Fa0y4vkDKaO0CY5rRTHPLuEGH6kIY8oCUDZEm7xSAVBoSpIgn5ZIR8SUK6jJCuJKTPCOkrRCEKUYhCFKIQYUiPEdKThCSMkEQSUmWEVLkhj6iBftCCEbKgMxp0plPIK/pjvPlb/dLZTiDpF2lbDwhTenbkArLxiDBtXEB8Iy4p5B4hAzTx3MAFpBApJCekjtqodVWbngsGMrV8cKchQWILJA4JknYXv7ObvmtF+eeDjk62OQPJEGhqOr30GQAAAABJRU5ErkJggg==";
		var nStyle = document.createElement('style');
		nStyle.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(nStyle);
		nStyle.innerHTML = '#notifications{z-index: 1000;position: fixed;height:auto;width:360px;max-width:100vw;left:10px;top:10px;}'+
						   '.rnHolder{position: relative;width: 99%;margin:0 auto;padding: 0;font-family: "Tahoma", sans-serif;font-size: 100%;text-align: center;background-color: #fff;margin-top:0.41em;padding: 0.1em;border-bottom: 2px rgb(101,171,67) solid;box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);display: none;}'+
						   '.rnHolder a{position: absolute;right: 0.4em;top: 0em;color: #999;font-size: 14px;cursor: pointer;font-family: "Arial Black";transition: 0.5s}'+
						   '.rnHolder a:hover{color: #333}'+
						   '.rnHolder p{cursor: default;text-align:left;padding-left:40px;}'+
						   '.rnIcon{position:absolute;left:10px;top:50%;margin-top:-12.5px;height:100%;width: 25px;height: 25px;background: url('+type+') no-repeat center center;background-size:25px 25px';
		var notifications = document.createElement('div');
		notifications.id = 'notifications';
		document.getElementsByTagName('html')[0].appendChild(notifications);
	})
	function makeid()
	{
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}
	function returnN(message,color,duration){
		//create element
		var rnHolder = document.createElement('div');
		rnName = makeid();
		rnHolder.id = rnName;
		rnHolder.className = 'rnHolder';
		document.getElementById('notifications').appendChild(rnHolder);
		var target = document.getElementById(rnName);
		var rnText = document.createElement('p');
		var rnIcon = document.createElement('div');
		rnIcon.className = "rnIcon";
		var rnClose = document.createElement('a');
		rnClose.innerHTML = 'x';
		$(rnClose).on('click', function(){
			$(this).closest('div').slideUp(200);
		})
		target.appendChild(rnClose);
		rnText.innerHTML = message;
		rnText.style.color = color;
		rnText.appendChild(rnIcon);
		target.appendChild(rnText);
		$(target).slideDown(200)
		setTimeout(function(){
			$(target).slideUp(200);
		}, duration);
	}