
document.addEventListener('DOMContentLoaded', function(event) {
  
  var content = [ "I am Creative.", "I Love to Develop.", "Let's build something awesome!"]; 
    
  // keeps calling itself until the text is finished
  function typeText(text, i, fnCallback) {
    
    if (i < (text.length)) {
      // add next character to em
      document.querySelector("#quote").innerHTML = text.substring(0, i+1) +'<em aria-hidden="true"></em>';

      //call function again for next character
      setTimeout(function() {
        typeText(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typeText animation for a text in the content array
   function startAnimation(i) {
    //if content array empty, start animation again
    if (typeof content[i] == 'undefined'){
	    setTimeout(function() {
	    startAnimation(0);
       }, 3000);
     }
    console.log(content[i]); 
    //check content array
    if (i < content[i].length) {

        typeText(content[i], 0, function(){
	       startAnimation(i + 1);
	    });
	 }
   }
  
  startAnimation(0);
});
