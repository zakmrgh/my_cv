function modifPic() {
    var src = document.getElementById("photo-cv").getAttribute("src");
    if (src === "img/photo.png") {
      document
        .getElementById("photo-cv")
        .setAttribute("src", "img/photo_2.png");
    } else {
      document
        .getElementById("photo-cv")
        .setAttribute("src", "img/photo.png");
    }
  }

  $(document).mousemove(function(e){
    $('.cursor').css({left:e.pageX, top:e.pageY})
  })