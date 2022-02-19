
export let optionVisitors = {
    chart: {
      height: 335,
      type: 'area',
      zoom: {
          enabled: false
      },
      toolbar: {
        show: false
      },
      events: {
        mounted: function(ctx, config) {
          const highest1 = ctx.getHighestValueInSeries(0);
          const highest2 = ctx.getHighestValueInSeries(1);
          ctx.addPointAnnotation({
            x: new Date(ctx.w.globals.seriesX[0][ctx.w.globals.series[0].indexOf(highest1)]).getTime(),
            y: highest1,
            label: {
              style: {
                cssClass: 'd-none'
              }
            },
            customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#1b55e2" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5
            }
          })
          ctx.addPointAnnotation({
            x: new Date(ctx.w.globals.seriesX[1][ctx.w.globals.series[1].indexOf(highest2)]).getTime(),
            y: highest2,
            label: {
              style: {
                cssClass: 'd-none'
              }
            },
            customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#e7515a" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5
            }
          })
        },
      }
    },
    colors: ['#1b55e2', '#e7515a'],
    dataLabels: {
        enabled: false
    },
    markers: {
      discrete: [{
      seriesIndex: 0,
      dataPointIndex: 7,
      fillColor: '#fff',
      strokeColor: '#fff',
      size: 5
    }, {
      seriesIndex: 2,
      dataPointIndex: 11,
      fillColor: '#000',
      strokeColor: '#000',
      size: 4
    }]
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 2,
        lineCap: 'square'
    },
    series: [{
        name: 'Visits',
        data: [1620, 1620, 1520, 1720, 1520, 1720, 1920, 1620, 1520, 1720, 1420, 1720]
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: true
      },
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
            fontSize: '12px',
            fontFamily: 'Nunito, sans-serif',
            cssClass: 'apexcharts-xaxis-title',
        },
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      labels: {
        formatter: function(value, index) {
          return (value / 10000) + 'K'
        },
        offsetX: -22,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Nunito, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    },
    grid: {
      borderColor: '#243256',
      strokeDashArray: 5,
      xaxis: {
          lines: {
              show: false
          }
      },   
      yaxis: {
          lines: {
              show: false,
          }
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 20,
        left: 15
      }, 
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -50,
      fontSize: '16px',
      fontFamily: 'Nunito, sans-serif',
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },    
      itemMargin: {
        horizontal: 0,
        vertical: 20
      }
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
    fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .28,
            opacityTo: .05,
            stops: [45, 100]
        }
    },
    responsive: [{
      breakpoint: 575,
      options: {
        legend: {
            offsetY: -30,
        },
      },
    }]
  }

   /*
        ======================================
            Visitor Statistics | Options
        ======================================
    */
    
    // Total Revenue

   export let totalRevenue = {
      chart: {
        id: 'total-revenue',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      series: [{
        data: [12, 14, 5, 47, 32, 44, 14, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
  }
  
  // Total Orders

 export let totalOrders = {
      chart: {
          id: 'total-orders1',
          type: 'line',
          height: 80,
          sparkline: {
              enabled: true
          }
      },
      series: [{
          data: [25, 9, 36, 22, 14, 25, 59, 41, 16, 5]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#5c1ac3'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }

      ]
  }

  // Total Visits

  export let totalVisistors = {
      chart: {
        id: 'total-visits',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      series: [{
        data: [2, 14, 5, 17, 32, 14, 14, 55, 41, 9]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e7515a'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
  }
  
  // Paid Visits

 export let totalConversations = {
      chart: {
          id: 'total-conversations',
          type: 'line',
          height: 80,
          sparkline: {
              enabled: true
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }

      ]
  }
  
  // Paid Visits

 export let paidUniqueVisits = {
      chart: {
          id: 'unique-visits',
          group: 'sparks2',
          type: 'line',
          height: 410,
          sparkline: {
              enabled: true
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }

      ]
  }

  // unique visitors | options

 export let uniqueVisitorsOptions1 = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        }
    },
    colors: ['#5c1ac3', '#ffbb44'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'  
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 10,
            height: 10,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8
          }
    },
    grid: {
      borderColor: '#191e3a',
    },
    stroke: {
        show: true,
        // width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Direct',
        data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
    }, {
        name: 'Organic',
        data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    tooltip: {
      theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
  }

  // Reporting Doghnut Chart

 export let salesByCategory = {
    chart: {
        type: 'donut',
        width: 380
    },
    colors: ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'],
    dataLabels: {
      enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
          width: 10,
          height: 10,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 8
        }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '29px',
              fontFamily: 'Nunito, sans-serif',
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '26px',
              fontFamily: 'Nunito, sans-serif',
              color: '#bfc9d4',
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              color: '#888ea8',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce( function(a, b) {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    stroke: {
      show: true,
      width: 25,
      colors: '#0e1726'
    },
    series: [985, 737, 270],
    labels: ['Apparel', 'Electronic', 'Others'],
    responsive: [{
        breakpoint: 1599,
        options: {
            chart: {
                width: '350px',
                height: '400px'
            },
            legend: {
                position: 'bottom'
            }
        },
        breakpoint: 1439,
        options: {
            chart: {
                width: '250px',
                height: '390px'
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                }
              }
            }
        },
    }]
}

  // Total Visits

 export let totalUsers = {
      chart: {
        id: 'total-users',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      series: [{
        data: [12, 14, 5, 47, 32, 44, 14, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
  }

  export let pageChanger = (pageParams) => {
    switch(pageParams){
      case 1 :
        return 1;
      case 2 :
        return 2;
      case 3 :
        return 3;
      case 4 :
        return 4;
      case 5 :
        return 5;
      case 6 :
        return 6;
      case 7 :
        return 7;
      case 8 :
        return 8;
      case 9 :
        return 9;
      case 10 :
        return 10;
      default:
        return 1;
    }
  }