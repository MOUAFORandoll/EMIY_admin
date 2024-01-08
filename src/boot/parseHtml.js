
export class textToHtml {

  isHTML = function (str) {
    var a = document.createElement('div');
    a.innerHTML = str;

    for (var c = a.childNodes, i = c.length; i--;) {
      if (c[i].nodeType == 1) return true;
    }

    return false;
  }
  parse = (data) => {
    if (this.isHTML(data)) {
      console.log('data', data)
      var parser = new window.DOMParser();
      let parsee = parser.parseFromString(data, 'text/html').body.firstChild.innerHTML
      if (this.isHTML(parsee)) {
        console.log('ddsd')
        return this.parse(parsee);
      }
      return parsee;
    }
    else {
      return data
    }


  }
}