# MooQrCode

MooQrCode is a mootools plugin that allow you to create qrcode.
It is based on QR Code Generator for JavaScript by http://www.d-project.com/

![Screenshot](https://github.com/neilime/MooQRCode/raw/master/logo.png)

Now look at an <a href='http://neilime.github.com/MooQRCode/exemple.html'>example</a>

How to use
----------
(Fast & Easy)

//First, include required js files (Mootools & MooQrCode)
    
    <script type="text/javascript" src="mootools.core.js"></script>
	<script type="text/javascript" src="mooqrcode.min.js"></script>

//Then create a container for the QRCode

	<div id="QR_black"></div>

//Let the script do the job 

	#JS
	document.id(window).addEvent('domready',function(){				
		document.id('QR_black').qrCode({'width':50,'height':50,'value':'This is an encrypted value'});
	});

//That's all !

Class: MooQrCode
-----------------

### Syntax

	#JS
	var oQrCode = new MooQRCode([options]);

### Arguments

1. options: (*object*, optional) The options object

### Options:

- value : (*string*, defaults to `null`) The value to be encrypted into QRCode.
- typeNumber: (*int*, defaults to `-1`) 1 to 10, if typeNumber < 1, it will be calculate automatically, else higher the type number, more data can be stored.
- correctLevel: (*string*, defaults to `H`) error Correct Level L, M, Q, H.
- width: (*int*, defaults to `256`) QR Code width.
- height: (*int*, defaults to `256`) QR Code height.
- render: (*string*, defaults to `canvas`) rendering mode, canvas or table.
- color: (*string*, defaults to `#000000`) QR Code color.
- backgroundColor: (*string*, defaults to `#FFFFFF`) QR Code background color.
- container: (*HTMLElement*, *string*, defaults to `null`) Qr Code container element.

### Events:

- onQrCodeReady: Will fire when the QR Code is ready (after rendrering)