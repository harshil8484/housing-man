 $(document).ready(function() {
           $("#content,.body-back").delay(2000).fadeIn(500);
             $("#content,.body-back").delay(4000).fadeOut(500);
   
});
 $( ".nav-icon" ).click(function() {
       $( ".navigation-menu" ).toggleClass( "left-0" );
      });
       $( ".noti" ).click(function() {
       $( ".notification-section" ).toggleClass( "not-open" );
      });
        $( ".dropbtn" ).hover(function() {
      $("#down").removeClass("fa-angle-down").addClass("fa-angle-up");
     
      });
        $( ".dropbtn" ).mouseout(function() {
        $("#down").removeClass("fa-angle-up").addClass("fa-angle-down");
    
});
       // setInterval(function() {
       // $( ".zig" ).fadeToggle();
       // }, 500);
      
      $('.count').each(function () {
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         }, {
             duration: 1800,
             easing: 'swing',
             step: function (now) {
                 $(this).text(Math.ceil(now));
             }
         });
      });
    $(document).ready(function() {
        $('.progrees-bar').hide(3000);

    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

   
      var barChartData = {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                type: 'bar',
                  label: "Visitor",
                    data: [0, 0,0, 120, 0, 0, 0],
                    fill: false,
                    fontsize:'12px',
                    backgroundColor: 'rgba(255, 141, 2, 0.47)', 
                    hoverBackgroundColor: 'rgba(255, 141, 2, 0.72)',
                    hoverBorderColor: 'rgba(113, 179, 124, 0.02)',
                    yAxisID: 'y-axis-1'
              }, {
                  label: "Sales",
                      type:'line',
                      data: [0, 6,3, 3, 4, 3, 4],
                      fill: false,
                      borderColor: 'rgba(255, 141, 2, 0.72)',
                      backgroundColor: 'rgba(255, 141, 2, 0.72)',
                      pointBorderColor: 'rgba(255, 141, 2, 0.72)',
                      pointBackgroundColor: 'rgba(255, 141, 2, 0.72)',
                      pointHoverBackgroundColor: 'rgba(255, 141, 2, 0.72)',
                      pointHoverBorderColor: 'rgba(255, 141, 2, 0.72)',
                      yAxisID: 'y-axis-2'
            } ]
        };
        
        window.onload = function() {
            var ctx = document.getElementById("canvas-1").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                lineThickness:0,
                options: {
                maintainAspectRatio: false,
                tooltips: {
                  mode: 'label'
              },  
              elements: {
                line: {
                   
                }
            },

              scales: {
                xAxes: [{
                    display: true,
                     borderDash: [8, 4],
                    gridLines: {
                        display: false,

                    },
                    labels: {
                        show: true,
                    }
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                    gridLines:{
                        display: true,
                        drawBorder: false,
                    },
                    labels: {
                        show:true,
                        
                    }
                }, {
                    type: "linear",
                    display: false,
                    position: "right",
                    id: "y-axis-2",
                    gridLines:{
                        display: false
                    },
                    labels: {
                        show:false  ,
                        
                    }
                }]
            }
            }
            });

        };


    $(function () {

        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 10000,
            from: 2000,
            to: 6000,
            type: 'double',
            step: 1,
            prefix: "Rs",
            grid: false
        });

    });
