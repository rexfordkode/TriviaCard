$(document).ready(() =>{
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(600);
    });
    
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
        $('.frown').show();
    });
    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('slow');
         $('.frown').show();
    });
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('slow');
         $('.frown').show();
    });
    
    $('.correct-answer').on('click', () => {
         $('.correct-text').fadeOut('slow');
         $('.frown').hide();
         $('.smiley').show();

         $('.wrong-answer-one').fadeOut('slow');
          $('.wrong-answer-two').fadeOut('slow');
          $('.wrong-answer-three').fadeOut('slow');
         
    });
    
    });