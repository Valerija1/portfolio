$(document).ready(() => {

  const content = [ "I am Creative.", "I Love to Develop.", "Let's build something awesome!"]; 
    
  function typeText(text, i, fnCallback) {
    
    if (i < (text.length)) {
      //Add next character to em
      $("#quote").html(text.substring(0, i+1) +'<em aria-hidden="true"></em>');

      //Call function again for next character
      setTimeout(() => {
        typeText(text, i + 1, fnCallback)
      }, 100);
    };
    //One element of array finished, call callback fn after timeout.
    else if (typeof fnCallback == 'function') {
      
      setTimeout(fnCallback, 700);
    };
  }
  //Start a typeText animation for a text in the content array
   function startAnimation(i) {
    //If content array empty, start animation again
    if (typeof content[i] == 'undefined') {
	    
	    setTimeout(() => {
	    startAnimation(0);
       }, 3000);
     };
    console.log(content[i]); 
    //Check content array, start animation.
    if (i < content[i].length) {

        typeText(content[i], 0, () => {
	       startAnimation(i + 1);
	    })
	 };
   }
  
  startAnimation(0);

})
