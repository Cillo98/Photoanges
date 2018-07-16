
function start() {
    // get the window and document objects
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];
        
    // this is how the width (x) and height (y) of the screen are found
    //    x = w.innerWidth  || e.clientWidth  || g.clientWidth,
    //    y = w.innerHeight || e.clientHeight || g.clientHeight;
    
    
    // add an event listener to the whole window
    window.addEventListener('resize', function(event){
        var y = w.innerHeight || e.clientHeight || g.clientHeight;
        
        var galleryHeight = y - 80;     // the menu is 80px high
        
        document.getElementById("imgMenu").style.height = galleryHeight+"px";
    });
};

