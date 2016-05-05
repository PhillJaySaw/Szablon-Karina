$(document).ready(function(){

  $('ul li a').click(function(evn){
    evn.preventDefault();
    $(window).scrollTo(this.hash, this.hash, {
      offset: -80
    });
  });

});
