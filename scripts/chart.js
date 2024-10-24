(function () {
  const data = [
    { month: "Jan", count: 650 },
    { month: "Feb", count: 950 },
    { month: "Mar", count: 790 },
    { month: "Apr", count: 420 },
    { month: "May", count: 1000 },
    { month: "Jun", count: 590 },
    { month: "Jul", count: 850 },
    { month: "Aug", count: 380 },
    { month: "Sep", count: 850 },
    { month: "Oct", count: 630 },
    { month: "Nov", count: 900 },
    { month: "Dec", count: 600 },
  ];

  new Chart(document.getElementById("myChart"), {
    type: "bar",
    options: {
      responsive: true, // Makes the chart responsive
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: { grid: { display: true, borderDash: [50, 50] } },
        y: { grid: { display: true, borderDash: [50, 50] }, beginAtZero: true },
      },
    },
    data: {
      labels: data.map((row) => row.month),
      datasets: [
        {
          backgroundColor: "#8576ff",
          label: "Events",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
