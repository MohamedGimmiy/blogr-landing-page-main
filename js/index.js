
    let img1 = document.querySelector('#sec1 img');
    let img2 = document.querySelector('#sec2 img');
    let img3 = document.querySelector('#sec3 img');
    $(function(){
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
      $(this).find(".caret").toggleClass("caretup");
    });
  });


  $(function(){
  $('.links').on('click', function () {
      $(this).toggleClass('links-white');
  });
});

window.addEventListener('resize',()=>{
    let w = window.innerWidth;
    if(w <800){
        img1.classList.add('img-fluid');
        img2.classList.add('img-fluid');
        img3.classList.add('img-fluid');
    }else{
        img1.classList.remove('img-fluid');
        img2.classList.remove('img-fluid');
        img3.classList.remove('img-fluid');
    }
})