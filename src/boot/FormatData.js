
// import VueCookies from 'vue-cookies'
import { ref } from 'vue';
   

export class FormatData {
  


       verifNumber = function (number) {
              let taille = number.split('').length;

              for (var i = 0; i < 100 * taille; i++) {

                  
                     if (Number.isInteger(parseInt(number[i])) || number[i] == ';' || number[i] == '.') {
                            // //console.log('pas modif', typeof parseInt(number[i]));

                     }
                     else {

                            // //console.log('modifi', 'number');


                            number = number.replace(number[i], '');

                     }
 
              }
              return  number.toString().replace(/\s+/g, '').replace(';;',';');
     
  };  

  verifTextLength = function (text, taille) {
     let final =ref('')
              let tailleT = text.split('').length;
       //console.log(tailleT,'*****************',taille)
    
       if (tailleT > taille) {
         for (var i = 0; i < taille; i++) {
           final.value += text[i];
          
         } return final.value;
       }
       else {
         return text;
       }
          
     
  };
    verifImgExist(src) {
      //console.log(src)
      const img = new Image();
      img.src = src;
      let finalImg = ref("../../assets/img/default_images1.png")
      if (img.complete) {

        //console.log('8888***')
        return src;
      } else {
        img.onload = () => {
          //console.log('sssss***')
          finalImg.value = src

        };

        img.onerror = () => {

          //console.log('errro***')
          // finalImg.value = "../../../public/assets/img/default_images1.jpg";

        };
      }
      return finalImg.value;
    

    }

    verifNumber2 = function (number) {
       const intt = ref(true);    
      
      let taille = number.split('').length;
     
              for (var i = 0; i <  taille; i++) {

                 

                     if (Number.isInteger(parseInt(number[i]))) {
                            // //console.log('pas modif', typeof parseInt(number[i]));
 intt.value = true;
                     }
                     else {

                            // //console.log('modifi', 'number');


                       intt.value = false;

                     }
 
              }
              return  intt.value;
     
       }; 
       
  verifCorrectText = function (data) {
    var reg = new RegExp('^[a-zA-ZÀ-ú0-9 ]+$'); 
       
              return reg.test(data);
     
  };
  
  verifCorrectMail = function (data) {
    //    console.log(data,String(data)
    // .toLowerCase(), /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(String(data)
    // .toLowerCase()
    // ))
       
              return String(data)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
     
       };
/*        
  verifMessage = (data) => {
    const caracteres = ref([
      
      'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
      '!',
      '«',
      '#', 
      '&',
      '`',
      '(',
      ')',
      '"*"',
      '"+"',
      ',',
      '-',
      
      
      '{',
      '|',
      '}',
      '~',
      '[',
      // '""',
      ']',
      // '^',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
     
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
       'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
      'e',
      'E',
      'a',
      'a',  
       'A',
       'A',
      '%21',
      '%22',
      '%23', 
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      '-', 
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      '%5B',
      // '%5C',
      '%5D',
      // '%5E',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
     'E',
     'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
        'a',  'a',  'a',
      'e',
      'e',
      
      'i',
      'n',
      'o',
           'o',
      'o',

      'u',
      'u',
      '%80',
      'A',
      'O',
      'o'

    ]);



















 


    caracteres.value.forEach((string, index) => {
      if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  };
 */
      
  verifMessage2 = (data) => {
    const caracteres = ref([
       'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
    '!',
      '«',
      '#',/* 
      '%', */
      '&',
      '`',
      '(',
      ')',
      '"*"',
      '"+"',
      ',',
      '-',
      
      
      '{',
      '|',
      '}',
      '~',
      '[',
      '',
      ']',
      // '"^"',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
     
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
      'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
     
      'e',
      'E',
      'a',
      'a',  
    'A',
    'A',
      '%21',
      '%22',
      '#',/* 
      '%25', */
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      
      '-', 
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      '%5B',
      // '%5C',
      '%5D',
      // '%5E',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
     '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
     'E',
     'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
        'a',  'a',  'a',
      'e',
      'e',
      
      'i',
      'n',
      'o',
           'o',
      'o',

      'u',
      'u',
      '%80',
      'A',
      'O','o'
    ]);
    // for (let i = 0; i < caracteresIso.value.length; i++) {
  //  //console.log('dsd');
    // }
    // const taille = data.split('').length;

    caracteres.value.forEach((string, index) => {
       if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  };


 /*  
  correctVerifMessage = (data) => {
    const caracteres = ref([
       'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
      '!',
      '«',
      '#',
      '&',
      '"`"',
      '"("',
      '")"',
      '"*"',
      '"+"',
      ',',
      '-',
      
      '{',
      '"|"',
      '}',
      '~',
      // '`[`',
      // '',
      // ']',
     
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '-',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
      'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
     
      'e',
      'E',
      'a',
      'a',  
      'A',
      'A',
      '%21',
      '%22',
      '#',
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      '-', 
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      // '%5B',
      // '%5D',
      
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      '-', 
      '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
      'E',
      'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
      'a',
      'a',
      'a',
      'e',
      'e',
      'i',
      'n',
      'o',
      'o',
      'o',
      'u',
      'u',
      '%80',
      'A',
      'O',
       'o'
    ]);
    //   //console.log(caracteres.value.length, caracteresIso.value.length);

    // for (var i = 0; i < caracteresIso.value.length; i++){
    //   //console.log(caracteres.value[i], caracteresIso.value[i]);
    // }
    caracteres.value.forEach((string, index) => {
       if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  }; */
  replaceAll = (str, find, replace) => {
    // //console.log(str);
    if (!str.includes('?')) {
      
      return str.replace(new RegExp(find, 'g'), replace);
    } else { return str }
  }

  verifImage = (data, type) => {
      let retour = ref(true);
     var _URL = window.URL || window.webkitURL;

      var img = new Image();
      var objectUrl = _URL.createObjectURL(data);
      
      
      img.src = objectUrl;
 //icone ,log
    if (type == 0) {
       
      
     
       img.onload = function () {
      
        _URL.revokeObjectURL(objectUrl);
        if (this.width != this.height || this.width <= 96 || this.height < 96) {
      
            retour.value= false;
        }else{
             retour.value= true;
        }
      };


    }
    //Galerie service ...
    if (type == 1) {   
      
       img.onload = function () {
       
     console.log( this.width , this.height)
        _URL.revokeObjectURL(objectUrl);
        if ( this.width < 1050 || this.height <700) {
      
             retour.value= false;
        }else{
          
             retour.value= true;
        }
      };
      

    }
    return retour.value;
  
   }

	

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
// var gsm7bitChars = `
// «%&‘(!){|}~[\\]^ê,$ÊăâĂÂ!«&':"-{'""}~;<=>?’@-¡£€¥§¿ÄÅÆÇÈÉÑÖØÜßàäåæèéìñòöøùÜ€ÀÔô`; 


	// eslint-disable-next-line no-useless-escape
	var gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅå?_FG?O??ST?ÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";


    
  
console.log(gsm7bitChars)
	// eslint-disable-next-line no-useless-escape
	var le = `êÊ£€ÈÉèé€`;
 
	// eslint-disable-next-line no-useless-escape
	var la = `ăâĂÂÄÅÆàäåæÀ`;
 
	// eslint-disable-next-line no-useless-escape
	var lo = `ÖØòöøÔô`;
	var lu = `ÜùÜ`;
  
var textlen = data.length // this. mb_strlen(data); 

	var finalSms = '';
	var finalSmsList = []; 
      for (let i = 0; i < textlen; i++){
//         var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

// data.replace(regex, ''); 
        console.log(this.strpos(le, data[i]))
       
        if ((this.strpos(le, data[i]) != false)) {
       
          // if (/[le]/.test(data[i])) {
              //  finalSmsList.push('E');
          // }
          // else {
               finalSmsList.push('e');
            
          // };
        } 
        else if ((this.strpos(la, data[i]) != false)) {
       
          finalSmsList.push('a');
        }else if ((this.strpos(lo, data[i]) != false)) {
       
          finalSmsList.push('o');
        } else  if ((this.strpos(lu, data[i]) != false)) {
       
          finalSmsList.push('u');
        }   else { 
          if ((this.strpos(gsm7bitChars, data[i]) == false) && (data[i] != "`" && (data[i] != "€"))) {
       finalSmsList.push('?');
          } else { 
            
            finalSmsList.push(data[i]);
             }
        }
	}



    
      for (let i = 0; i < finalSmsList.length; i++) {
           
        
          finalSms = finalSms.concat( finalSmsList[i]);

          
      }
      
   
    return finalSms;

    
  };
  correctVerifMessage2 = (data) => {
    
	// eslint-disable-next-line no-useless-escape
	var gsm7bitChars = `
«%&‘(!){|}~[\\]^ê,$ÊăâĂÂ!«&':"-{'""}~;<=>?’@-¡£€¥§¿ÄÅÆÇÈÉÑÖØÜßàäåæèéìñòöøùÜ€ÀÔô`;
 
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
  
};
 
 
