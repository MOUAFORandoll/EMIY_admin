
new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'myChart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

/*
$(document).ready(function() {
  $.getScript('http://www.chartjs.org/assets/Chart.js',function(){
    
      var data = {
          labels : ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Nobembre","Decembre"],
          datasets : [
              {
                  fillColor : "rgba(220,220,220,0.5)",
                  strokeColor : "rgba(220,220,220,1)",
                  pointColor : "rgba(220,220,220,1)",
                  pointStrokeColor : "#fff",
                  data : [6,59,90,81,56,55,40]
              },
              {
                  fillColor : "rgba(151,187,205,0.5)",
                  strokeColor : "rgba(151,187,205,1)",
                  pointColor : "rgba(151,187,205,1)",
                  pointStrokeColor : "#fff",
                  data : [28,48,40,19,96,27,100]
              }
          ]
      }
  
      var options = {
          animation: true
      };
  
      //Get the context of the canvas element we want to select
      var c = $('#myChart');
      var ct = c.get(0).getContext('2d');
      var ctx = document.getElementById("myChart").getContext("2d");
  
      new Chart(ctx).Bar(data,options);
  
  })
});
*/