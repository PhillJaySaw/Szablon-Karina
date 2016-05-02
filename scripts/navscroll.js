$(document).ready(function(){

  $('nav li a').click(function(evn){
    evn.preventDefault();
    $(window).scrollTo(this.hash, this.hash);
  });

});
