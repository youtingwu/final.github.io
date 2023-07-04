    var count=0;
        var inc=0;
        var margin=0;
        var  slider=document.getElementsByClassName("slider-width")[0];
        var itemdisplay=0;
        var ite=1
        
        if (screen.width > 990) {
            itemdisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
            
            margin=itemdisplay*5;
    }
    if ( screen.width>700 &&screen.width < 990) {
        itemdisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");}
    
    if ( screen.width>280 &&screen.width < 700) {
            itemdisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
        margin=itemdisplay*20;
        }
            
        var item=document.getElementsByClassName("item");
        var itemleft=item.length % itemdisplay;
        console.log(inc !== itemslide+itemleft);
    var itemslide=Math.floor(item.length/itemdisplay)-1;
    for(let i=0;i<item.length;i++){
        item[i].style.width=(screen.width/itemdisplay)-margin+"px";
    }
    function next(){
        if (inc !== itemslide+itemleft) {
            if (inc===itemslide) {
                inc=inc+itemleft;
                count=count-(screen.width/itemdisplay)*itemleft;
            }
            else{
                inc ++;
                count=count-screen.width;   
           }
          } 
          slider.style.left=count+"px"
    }
    function prev(){
        if (inc !== 0) {
            if (inc==itemleft) {
                inc=inc-itemleft;
                count=count+(screen.width/itemdisplay)*itemleft;
            }
            else{
                inc --;
                count=count+screen.width;
                }
                }
                slider.style.left=count+"px"
    }
    