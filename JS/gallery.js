
// load images from folder specified the required gallery name (reception, wedding...)
var dirLD, dirHD;
const COLS = 4;

function loadImages() {
    
    var pars = location.search.substring(1).split("&");
    dirLD = "../media/pictures/" +pars[0]+"/"+pars[1]+ "/LD/" + pars[1];
    dirHD = "../media/pictures/" +pars[0]+"/"+pars[1]+ "/HD/" + pars[1];
    var n = pars[2];
    
    var galleryArea = document.getElementById("container");
    
    for (var col=1; col<=COLS; col++) {
        var column = document.createElement("div");
        column.className = "column";

        for (var i=col; i<=n; i+=COLS) {
            column.innerHTML += "<img onclick='enlarge("+i+")' "
                                +"src='" +dirLD+ " (" +i+ ").jpg"
                                +"' alt='error'>";
        }

        galleryArea.appendChild(column);
    }
};



function enlarge(i) {
    document.body.innerHTML +=
        "<div onclick='closeImage()' id='overlay'>" +
            "<img src='" +dirHD+ " (" +i+ ").jpg' alt='error'>" +
        "</div>";
};



function closeImage() {
    var image = document.getElementById('overlay');
    image.parentNode.removeChild(image);
    return false;
};