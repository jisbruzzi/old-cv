$(document).ready(()=>{

    let vector = $('<svg version="1.1" \
     baseProfile="full"\
     width="10" height="10"\
     xmlns="http://www.w3.org/2000/svg">\
  <line x1="0" y1="50%" x2="100%" y2="50%"\
      stroke-width="2px" stroke="blue"/>\
</svg>')

//$("#conContenido h1").append(vector)
    $("#conContenido h1").wrap("<span class='titleSpan'></span>")
    $(".titleSpan").append(vector)
    //$(".titleSpan").prepend(vector)

})

