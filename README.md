# MooQrCode

MooQrCode is a mootools plugin that allow you to create qrcode.
It is based on QR Code Generator for JavaScript by http://www.d-project.com/

<a href='https://pledgie.com/campaigns/26669'><img alt='Click here to lend your support to: MooQrCode and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/26669.png?skin_name=chrome' border='0' ></a>

Now look at an <a href='http://neilime.github.com/MooQRCode/exemple.html'>example</a>

# How to use

(Fast & Easy)

1. First, include required js files (Mootools & MooQrCode)
    
    <script type="text/javascript" src="mootools.core.js"></script>
	<script type="text/javascript" src="mooqrcode.min.js"></script>

2. Then create a container for the QRCode

	<div id="QR_black"></div>

3. Let the script do the job 

	#JS
	document.id(window).addEvent('domready',function(){				
		document.id('QR_black').qrCode({'width':50,'height':50,'value':'This is an encrypted value'});
	});

4. That's all !

# Class: MooQrCode

## Syntax

```js
var oQrCode = new MooQRCode([options]);
```

## Arguments

1. options: (*object*, optional) The options object

### Options:

- value : (*string*, defaults to `null`) The value to be encrypted into QRCode.
- typeNumber: (*int*, defaults to `-1`) 1 to 10, if typeNumber < 1, it will be calculate automatically, else higher the type number, more data can be stored.
- correctLevel: (*int*, defaults to `2`) error Correct Level :
  - M: 0
  - L: 1
  - H: 2
  - Q: 3
- width: (*int*, defaults to `256`) QR Code width.
- height: (*int*, defaults to `256`) QR Code height.
- render: (*string*, defaults to `canvas`) rendering mode, canvas or table.
- color: (*string*, defaults to `#000000`) QR Code color.
- backgroundColor: (*string*, defaults to `#FFFFFF`) QR Code background color.
- container: (*HTMLElement*, *string*, defaults to `null`) Qr Code container element.

## Events:

- onQrCodeReady: Will fire when the QR Code is ready (after rendrering)
