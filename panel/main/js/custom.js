// ! apexChart.js ! //

// ? sale Chart
var options = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    fontFamily: "vazir",
    height: "400px",
    width: "100%",
  },
  series: [
    {
      name: "فروش در ماه های گذشته",
      data: [
        1000, 2000, 3000, 2100, 5000, 4300, 3289, 2323, 1243, 8574, 3132, 1000,
      ],
    },
  ],
  xaxis: {
    categories: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },
  dataLabels: {
    style: {
      colors: ["#008FFB"],
      fontSize: "11px",
    },
  },
  theme: {
    palette: "palette1",
    monochrome: {
      enabled: true,
      color: "#008FFB",
    },
  },
};
var saleChart = new ApexCharts(document.querySelector("#sale-chart"), options);
saleChart.render();
// ? sale Chart

// ? revanue Chart
var options = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    fontFamily: "vazir",
    height: "400px",
    width: "100%",
  },
  series: [
    {
      name: "درآمد در ماه های گذشته",
      data: [500, 700, 900, 1100, 780, 647, 1200, 960, 2500, 1000, 4000, 700],
    },
  ],
  xaxis: {
    categories: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },
  dataLabels: {
    style: {
      colors: ["#4CAF50"],
      fontSize: "11px",
    },
  },
  theme: {
    palette: "palette2",
    monochrome: {
      enabled: true,
      color: "#4CAF50",
    },
  },
};
var revanueChart = new ApexCharts(
  document.querySelector("#revanue-chart"),
  options
);
revanueChart.render();
// ? revanue Chart

// ? cost Chart
var options = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    fontFamily: "vazir",
    height: "400px",
    width: "100%",
  },
  series: [
    {
      name: "هزینه در ماه های گذشته",
      data: [100, 300, 500, 760, 1000, 746, 948, 354, 1245, 650, 1345, 647],
    },
  ],
  xaxis: {
    categories: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },
  dataLabels: {
    style: {
      colors: ["#EA3546"],
      fontSize: "11px",
    },
  },
  theme: {
    palette: "palette6",
    monochrome: {
      enabled: true,
      color: "#EA3546",
    },
  },
};
var costChart = new ApexCharts(document.querySelector("#cost-chart"), options);
costChart.render();
// ? cost Chart


var options = {
  
  series: [44, 90, 30],
  chart: {
  width:510,
  height: 370,
  type: 'pie',
},
labels: ['فروش', 'درآمد', 'هزینه'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var pieChart = new ApexCharts(document.querySelector("#pie-chart"), options);
pieChart.render();

var options = {
  series: [{
    name: "کاربر",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 370,
  width: 700,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
}
};

var chart = new ApexCharts(document.querySelector("#zoomable-chart"), options);
chart.render();
// ! apexChart.js ! //

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
});
