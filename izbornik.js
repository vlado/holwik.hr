
	  function kreni() {
      var opcija = document.lista.izbor.selectedIndex;
	  var url = document.lista.izbor.options[opcija].value;
	  if ((opcija != 0) || (opcija != 8))
	  	window.location = url;  
	  }
