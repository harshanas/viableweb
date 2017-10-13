
Morris.Donut({
    element: 'hero-donut',
    data: [
        {label: 'Direct', value: 25 },
        {label: 'Referrals', value: 40 },
        {label: 'Search engines', value: 25 },
        {label: 'Unique visitors', value: 10 }
    ],
    colors: ["#30a1ec", "#76bdee", "#c4dafe"],
    formatter: function (y) { return y + "%" }
});

// Morris Donut Chart
Morris.Donut({
    element: 'hero-donut2',
    data: [
        {label: 'Google', value: 25 },
        {label: 'Yahoo', value: 40 },
        {label: 'Bing', value: 25 },
        {label: 'Yandex', value: 10 }
    ],
    colors: ["#30a1ec", "#76bdee", "#c4dafe"],
    formatter: function (y) { return y + "%" }
});


// Morris Line Chart
var tax_data = [
    {"period": "2017-09", "visits": 27, "signups": 0},
    {"period": "2017-08", "visits": 33, "signups": 9},
    {"period": "2017-07", "visits": 29, "signups": 8},
    {"period": "2017-06", "visits": 46, "signups": 1},
    {"period": "2017-05", "visits": 31, "signups": 16},
    {"period": "2017-04", "visits": 25, "signups": 1},
    {"period": "2017-03", "visits": 16, "signups": 60},
    {"period": "2017-02", "visits": 25, "signups": 50}
];
Morris.Line({
    element: 'hero-graph',
    data: tax_data,
    xkey: 'period',
    xLabels: "month",
    ykeys: ['visits', 'signups'],
    labels: ['Visits', 'User signups']
});



// Morris Area Chart
Morris.Area({
    element: 'hero-area',
    data: [
        {period: '2015 Q1', Polythene: 23, Plastic: 34, Fertiliser: 47},
        {period: '2015 Q2', Polythene: 27, Plastic: 94, Fertiliser: 21},
        {period: '2015 Q3', Polythene: 49, Plastic: 69, Fertiliser: 21},
        {period: '2015 Q4', Polythene: 67, Plastic: 37, Fertiliser: 59},
        {period: '2016 Q1', Polythene: 10, Plastic: 14, Fertiliser: 23},
        {period: '2016 Q2', Polythene: 50, Plastic: 43, Fertiliser: 11},
        {period: '2016 Q3', Polythene: 40, Plastic: 35, Fertiliser: 18},
        {period: '2016 Q4', Polythene: 173, Plastic: 57, Fertiliser: 55},
        {period: '2017 Q1', Polythene: 87, Plastic: 40, Fertiliser: 28},
        {period: '2017 Q2', Polythene: 82, Plastic: 53, Fertiliser: 11}
    ],
    xkey: 'period',
    ykeys: ['Polythene', 'Plastic', 'Fertiliser'],
    labels: ['Polythene', 'Plastic', 'Fertiliser'],
    lineWidth: 2,
    hideHover: 'auto',
    lineColors: ["#81d5d9", "#a6e182", "#67bdf8"]
  });



// Build jQuery Knobs
$(".knob").knob();

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}
