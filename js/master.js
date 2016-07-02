$(document).ready(function(){
  $("#fullpage").fullpage({
    sectionsColor:['#20B2AA','#FFB6C1','#20B2AA','#FFB6C1','#20B2AA'],
    anchors:['Home','About Me','Blog','GitHub','Contact Me'],
    navigation:true,
    navigationPosition:'right',
    navigationTooltips:['Home','About Me','Blog','GitHub','Contact Me'],
    showActiveTooltip:true,

    afterLoad:function(link,index){
      switch (index) {
        case 1:
          move(".item1 h2").rotate(360).end();
          move(".item1 p").set("margin-top","3%").set("opacity","1").end();
          break;
        case 2:
          move(".item2 h2").scale(0.7).end();
          move(".item2 .p1").scale(0.7).end();
          move(".item2 .p2").scale(0.7).end();
          break;
        case 3:
          move(".item3 h2").set("margin-left","5%").set("opacity","1").end();
          move(".item3 p").set('margin-left','5%').set("opacity","1").end();
          break;
        case 4:
          move(".item4 h2").set("margin-top","2%").set("opacity","1").end();
          move(".item4 p").set("margin-top","3%").set("opacity","1").end();
          break;
        case 5:
          move(".item5 h2").scale(1.5).end(function(){
            move(".item5 .p1").set("margin-left","0.8%").set("opacity","1").end(function(){
              move(".item5 .p2").set("margin-left","0.8%").set("opacity","1").end(function(){
                move(".item5 .p3").set("margin-left","0.8%").set("opacity","1").end();
              });
            });
          });
          break;
        default:
          break;
      }
    },
    onLeave:function(link,index){
      switch (index) {
        case 1:
          move(".item1 h2").rotate(-360).end();
          move(".item1 p").set("margin-top","300px").set("opacity","0").end();
          break;
        case 2:
          move(".item2 h2").scale(1).end();
          move(".item2 .p1").scale(1).end();
          move(".item2 .p2").scale(1).end();
          break;
        case 3:
          move('.item3 h2').set('margin-left','-2000px').set("opacity","0").end();
          move('.item3 p').set('margin-left','1500px').set("opacity","0").end();
          break;
        case 4:
         move(".item4 h2").set("margin-top","-80px").set("opacity","0").end();
         move(".item4 p").set("margin-top","2000px").set("opacity","0").end();
          break;
        case 5:
         move(".item5 h2").scale(1).end();
         move(".item5 .p1").set("margin-left","1500px").set("opacity","0").end();
         move(".item5 .p2").set("margin-left","1500px").set("opacity","0").end();
         move(".item5 .p3").set("margin-left","1500px").set("opacity","0").end();
          break;
        default:
          break;
      }
    },

  });
});
