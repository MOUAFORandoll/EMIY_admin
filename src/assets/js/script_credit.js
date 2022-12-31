//************************* équivalent javascript *******************

 
	
	//*************javascript function mb_strlen équivalent
function mb_strlen(str) {
    var len = 0;
    for(var i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1;
    } 
    return len;
}

//*************javascript function strpos équivalent

function strpos (haystack, needle, offset) {
  //  discuss at: http://locutus.io/php/strpos/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Daniel Esteban
  //   example 1: strpos('Kevin van Zonneveld', 'e', 5)
  //   returns 1: 14

  var i = (haystack + '')
    .indexOf(needle, (offset || 0))
  return i === -1 ? false : i
}

function isGsm7bit( text){
	var gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅå?_FG?O??ST?ÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";
	var textlen = mb_strlen(text);
	for (i = 0;i < textlen; i++){
	    if ((strpos(gsm7bitChars, text[i])==false) && (text[i]!="\\")){
			return false;
		} //strpos not     able to detect \ in string
	}
	return true;
}

function getNumberOfSMSsegments(text, MaxSegments = 6){
	/*
	http://en.wikipedia.org/wiki/SMS

	Larger content (concatenated SMS, multipart or segmented SMS, or "long SMS") can be sent using multiple messages, 
	in which case each message will start with a user data header (UDH) containing segmentation information. 
	Since UDH is part of the payload, the number of available characters per segment is lower: 
	153 for 7-bit encoding, 
	134 for 8-bit encoding and 
	67 for 16-bit encoding. 
	The receiving handset is then responsible for reassembling the message and presenting it to the user as one long message. 
	While the standard theoretically permits up to 255 segments,[35] 6 to 8 segment messages are the practical maximum, 
	and long messages are often billed as equivalent to multiple SMS messages. See concatenated SMS for more information. 
	Some providers have offered length-oriented pricing schemes for messages, however, the phenomenon is disappearing.
	*/
	var TotalSegment=0;
	var textlen = mb_strlen(text);
	var ngel = 0;
		ngel = getGsm7bitExtensionLength( text );  
		textlen = textlen + ngel;
	if(textlen == 0) return false; //I can see most mobile devices will not allow you to send empty sms, with this check we make sure we don't allow empty SMS

	if(isGsm7bit(text)){ //7-bit
	    var SingleMax=160;
	    var ConcatMax=153;
	}else{ //UCS-2 Encoding (16-bit)
	    var SingleMax=70;
	    var ConcatMax=67;
	}

	if(textlen <= SingleMax){
	    TotalSegment = 1;
	}else{
	    TotalSegment = Math.ceil(textlen / ConcatMax);
	}

	if(TotalSegment > MaxSegments) return false; //SMS is very big.
		return TotalSegment;
}

function getNonGsm7bit( text){
	var gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅå?_FG?O??ST?ÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";
	var textlen = mb_strlen(text); 
	var nonGsm = [];
	for (i = 0;i < textlen; i++){
	    if ((strpos(gsm7bitChars, text[i])==false) && (text[i]!="\\")){
			nonGsm.push(text[i]);
		} //strpos not     able to detect \ in string
	}
	return nonGsm;
}

function getGsm7bitExtensionLength( text){
	var gsm7bitExtensionChars = "^\\{}[~]|€";
	var textlen = mb_strlen(text); 
	var number = 0;
	for (i = 0;i < textlen; i++){
	    if ((strpos(gsm7bitExtensionChars, text[i]) != false)){
			//*********we get the number of occurence in the string given
			number = number + 1; 
		} 
		 
	}
	return number;
}
 
function numberOfOccurence(str, ch)
{
	ch2 = ch.split(str);
	occurence = ch2.length-1;
	return occurence;
}
