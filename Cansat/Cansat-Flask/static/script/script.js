window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", { 
      title: {
        text: "Adding & Updating dataPoints"
      },
      data: [
      {
        type: "spline",
        dataPoints: [
          {y:  1 },
          {y:  4 },
          {y: 18 },
          {y:  4 }	
        ]
      }
      ]
    });
}
