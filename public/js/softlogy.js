
document.addEventListener("DOMContentLoaded", function () {
        // Remove pro banner on close
        var bannerClose = document.querySelector('#bannerClose');
        var proBanner = document.querySelector('#proBanner');
    
        if (bannerClose && proBanner) {
            bannerClose.addEventListener('click', function () {
                proBanner.classList.add('d-none');
            });
        }

    var chartElement_1 = document.getElementById("transactions-chart");

    if (chartElement_1) {
        var transactionsChartCanvas = chartElement_1.getContext("2d");

        var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
        gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");

        var areaData = {
            labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
            datasets: [{
                data: [42, 90, 70, 88, 15, 92, 40, 75, 60, 90, 75, 100],
                backgroundColor: gradientFill,
                borderColor: ['#f39915'],
                borderWidth: 2,
                fill: 'origin',
                label: "online"
            }]
        };

        var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            plugins: {
                filler: { propagate: false },
                legend: { display: false },
                tooltip: { enabled: true }
            },
            scales: {
                x: {
                    display: true,
                    ticks: { 
                        display: false,
                        padding:10
                     },
                    grid: {
                        display: false,
                        drawBorder: false,
                        color: 'transparent',
                        zeroLineColor: '#eeeeee'
                    }
                },
                y: {
                    display: true,
                    ticks: {
                        display: false,
                        autoSkip: false,
                        maxRotation: 0,
                        stepSize: 15,
                        min: 0,
                        max: 100,
                        padding:10
                    }
                }
            },
            elements: {
                line: { tension: 0 },
                point: { radius: 0 }
            }
        };

        new Chart(transactionsChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
        });
    }

    // Second chart
    var chartElement_2 = document.getElementById("sales-chart-a");

    if (chartElement_2) {
        var salesChartACanvas = chartElement_2.getContext("2d");

        var areaData = {
            labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
            datasets: [
                {
                    data: [30, 38, 20, 30, 25, 35, 19, 23, 19, 27],
                    backgroundColor: '#003c7c',
                    borderColor: '#003c7c',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Sales"
                },
                {
                    data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
                    backgroundColor: '#2981d7',
                    borderColor: '#2981d7',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Orders"
                },
                {
                    data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
                    backgroundColor: '#cfdced',
                    borderColor: '#cfdced',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Revenue"
                }
            ]
        };

        var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            plugins: {
                filler: { propagate: false },
                legend: { display: false },
                tooltip: { enabled: true }
            },
            scales: {
                x: {
                    display: false,
                    ticks: { display: true },
                    grid: {
                        display: false,
                        drawBorder: false,
                        color: 'transparent',
                        zeroLineColor: '#eeeeee'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: true,
                        autoSkip: false,
                        maxRotation: 0,
                        stepSize: 100,
                        min: 0,
                        max: 100
                    },
                    grid: { drawBorder: false }
                }
            },
            elements: {
                line: { tension: 0.35 },
                point: { radius: 0 }
            }
        };

        new Chart(salesChartACanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
        });
    }

    // moutnly charts
    var chartElement_3 = document.getElementById("income-chart");

    if (chartElement_3) {
        var incomeChartCanvas = chartElement_3.getContext("2d");

        var data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: 'Register User',
                    data: [80, 180, 80, 200, 140, 180, 70],
                    borderColor: '#a43cda',
                    borderWidth: 2,
                    fill: true,
                    backgroundColor: "rgba(164, 60, 218, .1)"
                },
                {
                    label: 'Premium User',
                    data: [200, 340, 200, 340, 220, 310, 190],
                    borderColor: '#00c8bf',
                    borderWidth: 2,
                    fill: true,
                    backgroundColor: 'rgba(0, 200, 191, .1)'
                }
            ]
        };

        var options = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: false,
                        lineWidth: 1,
                        color: "#f1f3f9",
                        zeroLineColor: "#f1f3f9"
                    },
                    ticks: {
                        min: 0,
                        max: 400,
                        stepSize: 100,
                        fontColor: "#001737",
                        fontSize: 11,
                        fontStyle: 400,
                        padding: 10
                    }
                }],
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        lineWidth: 1,
                        color: "#e9e9e9"
                    },
                    ticks: {
                        fontColor: "#001737",
                        fontSize: 11,
                        fontStyle: 400,
                        padding: 10
                    }
                }]
            },
            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="d-flex align-items-center mr-3">');
                text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor + '"></div>');
                text.push('<p class="mb-0">Register User</p>');
                text.push('</div>');
                text.push('<div class="d-flex align-items-center">');
                text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor + '"></div>');
                text.push('<p class="mb-0">Premium User</p>');
                text.push('</div>');
                return text.join('');
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: .35
                }
            },
            stepsize: 1,
            layout: {
                padding: {
                    top: 30,
                    bottom: -7,
                    left: 0,
                    right: 0
                }
            }
        };

        var incomeChart = new Chart(incomeChartCanvas, {
            type: 'line',
            data: data,
            options: options
        });

        var legendContainer = document.getElementById('income-chart-legend');
        if (legendContainer) {
            legendContainer.innerHTML = incomeChart.generateLegend();
        }
    }

      // CPU Chart
      var cpuChartElement = document.getElementById("cpu-chart");
      if (cpuChartElement) {
          var cpuChartCanvas = cpuChartElement.getContext("2d");
          new Chart(cpuChartCanvas, {
              type: 'bar',
              data: {
                  labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
                  datasets: [{
                      label: 'Profit',
                      data: [45, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48],
                      backgroundColor: '#dc3545'
                  }]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: true,
                  layout: {
                      padding: { left: 0, right: 0, top: 0, bottom: 0 }
                  },
                  scales: {
                      yAxes: [{
                          display: false,
                          gridLines: {
                              drawBorder: false,
                              color: '#f1f3f9',
                              zeroLineColor: '#f1f3f9'
                          },
                          ticks: {
                              display: false,
                              fontColor: "#9fa0a2",
                              padding: 0,
                              stepSize: 10,
                              min: 0,
                              max: 50
                          }
                      }],
                      xAxes: [{
                          display: false,
                          stacked: false,
                          categoryPercentage: 1,
                          ticks: {
                              display: false,
                              beginAtZero: false,
                              padding: 10,
                              fontSize: 11
                          },
                          gridLines: {
                              color: "rgba(0, 0, 0, 0)",
                              display: false
                          },
                          position: 'bottom',
                          barPercentage: 0.4
                      }]
                  },
                  legend: { display: false },
                  elements: {
                      point: { radius: 0 }
                  },
                  tooltips: {
                      backgroundColor: 'rgba(168, 60, 218, .6)'
                  }
              }
          });
      }
  
      // Memory Chart
      var memoryChartElement = document.getElementById("memory-chart");
      if (memoryChartElement) {
          var memoryChartCanvas = memoryChartElement.getContext("2d");
          new Chart(memoryChartCanvas, {
              type: 'bar',
              data: {
                  labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
                  datasets: [{
                      label: 'Profit',
                      data: [38, 35, 23, 22, 35, 23, 24, 28, 19, 33, 30, 45],
                      backgroundColor: '#00c8bf'
                  }]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: true,
                  layout: {
                      padding: { left: 0, right: 0, top: 0, bottom: 0 }
                  },
                  scales: {
                      yAxes: [{
                          display: false,
                          gridLines: {
                              drawBorder: false,
                              color: '#f1f3f9',
                              zeroLineColor: '#f1f3f9'
                          },
                          ticks: {
                              display: false,
                              fontColor: "#9fa0a2",
                              padding: 0,
                              stepSize: 10,
                              min: 0,
                              max: 50
                          }
                      }],
                      xAxes: [{
                          display: false,
                          stacked: false,
                          categoryPercentage: 1,
                          ticks: {
                              display: false,
                              beginAtZero: false,
                              padding: 10,
                              fontSize: 11
                          },
                          gridLines: {
                              color: "rgba(0, 0, 0, 0)",
                              display: false
                          },
                          position: 'bottom',
                          barPercentage: 0.4
                      }]
                  },
                  legend: { display: false },
                  elements: {
                      point: { radius: 0 }
                  },
                  tooltips: {
                      backgroundColor: 'rgba(168, 60, 218, .6)'
                  }
              }
          });
      }

          var salesChartElement = document.getElementById("sales-chart-a");
    if (salesChartElement) {
        var salesChartACanvas = salesChartElement.getContext("2d");

        var areaData = {
            labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
            datasets: [
                {
                    data: [30, 38, 20, 30, 25, 35, 19, 23, 19, 27],
                    backgroundColor: '#003c7c',
                    borderColor: '#003c7c',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Sales"
                },
                {
                    data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
                    backgroundColor: '#2981d7',
                    borderColor: '#2981d7',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Orders"
                },
                {
                    data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
                    backgroundColor: '#cfdced',
                    borderColor: '#cfdced',
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Revenue"
                }
            ]
        };

        var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                filler: { propagate: false }
            },
            scales: {
                x: {
                    display: false,
                    ticks: { display: true },
                    grid: {
                        display: false,
                        drawBorder: false,
                        color: 'transparent',
                        zeroLineColor: '#eeeeee'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: true,
                        autoSkip: false,
                        maxRotation: 0,
                        stepSize: 100,
                        min: 0,
                        max: 100
                    },
                    grid: { drawBorder: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            },
            elements: {
                line: { tension: 0.35 },
                point: { radius: 0 }
            }
        };

        new Chart(salesChartACanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
        });
    }

    var salesChartBElement = document.getElementById("sales-chart-b");
    if (salesChartBElement) {
        var salesChartBChartCanvas = salesChartBElement.getContext("2d");

        var salesChartBChart = new Chart(salesChartBChartCanvas, {
            type: 'bar',
            data: {
                labels: [
                    'AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 
                    'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 
                    'BA', 'BB', 'BC', 'BD'
                ],
                datasets: [{
                    label: 'Profit',
                    data: new Array(29).fill(100), // Rellenamos 29 valores con 100
                    backgroundColor: [
                        ...new Array(23).fill('#3b86d1'), // Primeros 23 barras de un color
                        ...new Array(5).fill('#b4d5f6')   // Últimos 5 de otro color
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                scales: {
                    y: {
                        display: false,
                        grid: {
                            drawBorder: false,
                            color: '#f1f3f9',
                            zeroLineColor: '#f1f3f9'
                        },
                        ticks: { display: false, stepSize: 20, min: 0, max: 100 }
                    },
                    x: {
                        display: false,
                        stacked: false,
                        categoryPercentage: 1,
                        ticks: { display: true, padding: 10, fontSize: 11 },
                        grid: { color: "rgba(0, 0, 0, 0)", display: false },
                        position: 'bottom',
                        barPercentage: 0.7
                    }
                },
                plugins: { legend: { display: false } },
                elements: { point: { radius: 0 } }
            }
        });
    }

    var salesChartCElement = document.getElementById("sales-chart-c");

    if (salesChartCElement) {
        var salesChartCCanvas = salesChartCElement.getContext("2d");

        var salesChartC = new Chart(salesChartCCanvas, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [20, 20, 60],
                    backgroundColor: ['#f39915', '#21bf06', '#a43cda'],
                    borderColor: ['#f39915', '#21bf06', '#a43cda']
                }],
                labels: ['Gross Sales', 'Purchases', 'Tax Return']
            },
            options: {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Generar una leyenda personalizada en HTML
        function generateLegend(chart) {
            var text = `<ul class="legend${chart.id}">`;
            chart.data.datasets[0].data.forEach((_, i) => {
                text += `
                    <li>
                        <span class="legend-dots" style="background-color:${chart.data.datasets[0].backgroundColor[i]}"></span>
                        ${chart.data.labels[i]}
                    </li>`;
            });
            text += `</ul>`;
            return text;
        }

        // Si necesitas insertar la leyenda en un contenedor
        var legendContainer = document.getElementById("legend-container"); // Ajusta este ID según tu HTML
        if (legendContainer) {
            legendContainer.innerHTML = generateLegend(salesChartC);
        }
    }

    var salesChartDElement = document.getElementById("sales-chart-d");

    if (salesChartDElement) {
        var salesChartDCanvas = salesChartDElement.getContext("2d");

        var salesChartD = new Chart(salesChartDCanvas, {
            type: 'bar',
            data: {
                labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
                datasets: [
                    {
                        label: 'Offline Sales',
                        data: [52, 40, 33, 45, 22, 50],
                        backgroundColor: '#a43cda'
                    },
                    {
                        label: 'Online Sales',
                        data: [22, 45, 23, 50, 15, 40],
                        backgroundColor: '#f39915'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: 0
                },
                scales: {
                    y: {
                        display: true,
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: true,
                            min: 0,
                            max: 60,
                            stepSize: 10,
                            font: {
                                size: 10
                            },
                            color: "#001737"
                        }
                    },
                    x: {
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                            color: "#001737",
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0)",
                            display: false
                        },
                        barPercentage: 0.3
                    }
                },
                plugins: {
                    legend: { display: false }
                },
                elements: {
                    point: { radius: 0 }
                }
            }
        });
    }


    var expenseChartElement = document.getElementById("expense-chart");

    if (expenseChartElement) {
        var expenseChartCanvas = expenseChartElement.getContext("2d");

        var expenseChart = new Chart(expenseChartCanvas, {
            type: 'bar',
            data: {
                labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
                datasets: [
                    {
                        label: 'Profit',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#a43cda'
                    },
                    {
                        label: 'Growth',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#e1e1e2'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: 0
                },
                scales: {
                    y: {
                        display: false,
                        stacked: true,
                        grid: {
                            drawBorder: false,
                            color: '#f1f3f9',
                            zeroLineColor: '#f1f3f9'
                        },
                        ticks: {
                            display: false,
                            color: "#9fa0a2",
                            padding: 0,
                            stepSize: 10,
                            min: 0,
                            max: 100
                        }
                    },
                    x: {
                        display: false,
                        stacked: true,
                        categoryPercentage: 1,
                        ticks: {
                            beginAtZero: false,
                            display: true,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0)",
                            display: false
                        },
                        barPercentage: 0.4
                    }
                },
                plugins: {
                    legend: { display: false }
                },
                elements: {
                    point: { radius: 0 }
                }
            }
        });
    }

    var budgetChartElement = document.getElementById("budget-chart");

    if (budgetChartElement) {
        var budgetChartCanvas = budgetChartElement.getContext("2d");

        var budgetChart = new Chart(budgetChartCanvas, {
            type: 'bar',
            data: {
                labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
                datasets: [
                    {
                        label: 'Profit',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#21bf06'
                    },
                    {
                        label: 'Growth',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#e1e1e2'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: 0
                },
                scales: {
                    y: {
                        display: false,
                        stacked: true,
                        grid: {
                            drawBorder: false,
                            color: '#f1f3f9',
                            zeroLineColor: '#f1f3f9'
                        },
                        ticks: {
                            display: false,
                            color: "#9fa0a2",
                            padding: 0,
                            stepSize: 10,
                            min: 0,
                            max: 100
                        }
                    },
                    x: {
                        display: false,
                        stacked: true,
                        categoryPercentage: 1,
                        ticks: {
                            beginAtZero: false,
                            display: true,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0)",
                            display: false
                        },
                        barPercentage: 0.4
                    }
                },
                plugins: {
                    legend: { display: false }
                },
                elements: {
                    point: { radius: 0 }
                }
            }
        });
    }

    var balanceChartElement = document.getElementById("balance-chart");

    if (balanceChartElement) {
        var balanceChartCanvas = balanceChartElement.getContext("2d");

        var balanceChart = new Chart(balanceChartCanvas, {
            type: 'bar',
            data: {
                labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
                datasets: [
                    {
                        label: 'Profit',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#dc3545'
                    },
                    {
                        label: 'Growth',
                        data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
                        backgroundColor: '#e1e1e2'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: 0
                },
                scales: {
                    y: {
                        display: false,
                        stacked: true,
                        grid: {
                            drawBorder: false,
                            color: '#f1f3f9',
                            zeroLineColor: '#f1f3f9'
                        },
                        ticks: {
                            display: false,
                            color: "#9fa0a2",
                            padding: 0,
                            stepSize: 10,
                            min: 0,
                            max: 100
                        }
                    },
                    x: {
                        display: false,
                        stacked: true,
                        categoryPercentage: 1,
                        ticks: {
                            beginAtZero: false,
                            display: true,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0)",
                            display: false
                        },
                        barPercentage: 0.4
                    }
                },
                plugins: {
                    legend: { display: false }
                },
                elements: {
                    point: { radius: 0 }
                }
            }
        });
    }
});
