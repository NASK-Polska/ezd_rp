$(function(){
  $('.accordion-toggle').click(function(e){
    e.preventDefault();

    $(this).toggleClass('opened').next('.accordion-content').slideToggle('fast');
  });
});
