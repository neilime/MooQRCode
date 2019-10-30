# MooQrCode

[![GitHub stars](https://img.shields.io/github/stars/neilime/MooQRCode)](https://github.com/neilime/MooQRCode)
[![License](https://img.shields.io/github/license/neilime/MooQRCode)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Sponsor](https://img.shields.io/badge/%E2%9D%A4-Sponsor-ff69b4)](https://github.com/sponsors/neilime) 

MooQrCode is a mootools plugin that allow you to create qrcode.
It is based on QR Code Generator for JavaScript by http://www.d-project.com/

Now look at an [example](http://neilime.github.com/MooQRCode/exemple.html).

# Helping Project

❤️ If this project helps you reduce time to develop and/or you want to help the maintainer of this project. You can [sponsor](https://github.com/sponsors/neilime) him. Thank you !

# Contributing

👍 If you wish to contribute to TwbsHelper, PRs are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# How to use

🚀 (Fast & Easy)

* First, include required js files (Mootools & MooQrCode)
```html
<script type="text/javascript" src="mootools.core.js"></script>
<script type="text/javascript" src="mooqrcode.min.js"></script>
```
* Then create a container for the QRCode
```html
<div id="QR_black"></div>
```
* Let the script do the job 
```js
document.id(window).addEvent('domready',function(){				
    document.id('QR_black').qrCode({'width':50,'height':50,'value':'This is an encrypted value'});
});
```
* That's all !

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

- onQrCodeReady: Will be fired when the QR Code is ready (after rendrering)
