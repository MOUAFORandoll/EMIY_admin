
//************************* équivalent javascript *******************



 

export class SmsScript {
  

	

	//*************javascript function mb_strlen équivalent

  mb_strlen(str) {

    var len = 0;

    for(var i = 0; i < str.length; i++) {

        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1;

    } 

    return len;

}



//*************javascript function strpos équivalent



  strpos (haystack, needle, offset) {

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



  isGsm7bit( text){

	// eslint-disable-next-line no-useless-escape
	var gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅå?_FG?O??ST?ÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";

	var textlen =   this.mb_strlen(text);

	for (let i = 0;i < textlen; i++){

	    if (( this.strpos(gsm7bitChars, text[i])==false) && (text[i]!="\\")){

			return false;

		} //strpos not     able to detect \ in string

	}

	return true;

}



  getNumberOfSMSsegments(text, MaxSegments = 6){

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

	var textlen =  this.mb_strlen(text);

	var ngel = 0;

		ngel =  this.getGsm7bitExtensionLength( text );  

		textlen = textlen + ngel;

	if(textlen == 0) return false; //I can see most mobile devices will not allow you to send empty sms, with this check we make sure we don't allow empty SMS


console.log(this.isGsm7bit(text))
	if( this.isGsm7bit(text)){ //7-bit

	    var SingleMax=160;

	    var ConcatMax=153;

	}else{ //UCS-2 Encoding (16-bit)

	      SingleMax=70;

	      ConcatMax=67;

	}



	if(textlen <= SingleMax){

	    TotalSegment = 1;

	}else{

	    TotalSegment = Math.ceil(textlen / ConcatMax);

	}



	if(TotalSegment > MaxSegments) return false; //SMS is very big.

		return TotalSegment;

}



  getNonGsm7bit( text){

	// eslint-disable-next-line no-useless-escape
	var gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅå?_FG?O??ST?ÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";

	var textlen = this. mb_strlen(text); 

	var nonGsm = [];

	for (let i = 0;i < textlen; i++){

	    if (( this.strpos(gsm7bitChars, text[i])==false) && (text[i]!="\\")){

			nonGsm.push(text[i]);

		} //strpos not     able to detect \ in string

	}

      console.log(nonGsm)
	return nonGsm;

}



  getGsm7bitExtensionLength( text){

	var gsm7bitExtensionChars = "^\\{}[~]|€";

	var textlen = this.mb_strlen(text); 

	var number = 0;

	for (let i = 0;i < textlen; i++){

	    if (( this.strpos(gsm7bitExtensionChars, text[i]) != false)){

			//*********we get the number of occurence in the string given

			number = number + 1; 

		} 

		 

	}

	return number;

}

 

  numberOfOccurence(str, ch)

{

let	ch2 = ch.split(str);

let	occurence = ch2.length-1;

	return occurence;

}
  
  
  

  
  correctVerifMessage = (data) => {
    
	// eslint-disable-next-line no-useless-escape
	var gsm7bitChars = `
«%&‘(!){|}~[\\]^ê,$ÊăâĂÂ!«#&':"-{'""}~;<=>?’@-¡£€¥§¿ÄÅÆÇÈÉÑÖØÜßàäåæèéìñòöøùÜ€ÀÔô`;
 
var textlen = data.length // this. mb_strlen(data); 

	var finalSms = '';
	var finalSmsList = []; 
      for (let i = 0; i < textlen; i++){
        var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

data.replace(regex, ''); 
        
        if ((this.strpos(gsm7bitChars, data[i]) == false) && (data[i] != "\\") && (data[i] != "`"&& (data[i] != "€"))) {
      
console.log('a')
          finalSmsList.push(data[i]);
        } else { 
      
console.log('b')
      
            finalSmsList.push('?');
        }
	}
      for (let i = 0; i < finalSmsList.length; i++) {
           
        
          finalSms = finalSms.concat( finalSmsList[i]);

          
      }
      
   
    return finalSms;

    
  };
  
}