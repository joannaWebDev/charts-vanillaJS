// @elementId {string}
// @data      {array}  [{seriesTitle: string, dataPoints: array}}

/* drawBarChart('', 
    [
      {seriesTitle: 'Mandated APIs',dataPoints:  [69, 88, 217, 48, 1111, 4, 827],},
      {seriesTitle: 'Identity', dataPoints: [7, 12, 19, 10, 122, 4, 133]},
      '',//unit empty array if you dont't want any signes such as % 
      {
        //customedOptions:
        legend: {
          right: 20,
          width: 50,
        },
      }
    ); */

function drawBarChart(elementId, data,unit,customOptions) {
  var dom = document.getElementById(elementId);
  var myChart = echarts.init(dom);
  var option;
  var series = [];
  var legend = [];
  for (var i in data) {
      var title = data[i].seriesTitle;
      var dataPoints = data[i].dataPoints;
      series.push(getSeries(title, dataPoints, unit));
      legend.push(title);
  }
  const colors = [
      '#1b014c',
      '#ffd23f',
      '#4d03d8',
      '#cbbaed',
      '#360298',
      '#bf9e2f',
      '#bbbbbb',
  ];
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow',
        // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    textStyle: {
      fontFamily: 'Roboto',
      color: '#000',
    },
    color: colors.slice(0, series.length),//so we get the first 2 colors
    legend: {
      data: legend,
      //align:'center',
      left: 'right',
      itemWidth:14,//squared boxes
      //itemHeight:14, which makes the perfect squares
      align:'right',//boxes alignment
      itemGap: 10,
      //orient:'vertical',
      padding: 10 / 5,
      textStyle: {
        fontFamily: 'Roboto',
        color: '#000',
      },
    },
    grid: {
      top:70,
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      //min:0, // THIS PUTS X-AXIS FROM 0 TO 100
      //max:100,
      name: 'Percentual of\nProduct Category',
      nameTextStyle: {
        fontWeight: 'bold',
        //lineHeight: 12,
        align: 'right',
        verticalAlign: 'top',
        padding:5,
      },
      nameLocation: 'start',//MOVES X AXIS LEGEND TO THE LEFT
      nameGap: 5, //MOVES X AXIS LEGEND cloaser or further in horizontal
      min:0,
      max:500,
      /* axisLabel: {
        formatter: '{value} %',//FIXME not showing on website, but in playground
        margin: 14,
      }, */
    },
    yAxis: {
      type: 'category',
      name: 'Region',
      nameTextStyle: {
        fontWeight: 'bold',
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: [
        'US & Canada',
        'UK',
        'Middle East & Africa',
        'Latin America',
        'Europe & Scandinavia',
        'Eastern Europe & Russia',
        'Asia Pacific',
      ],
    },
    series: series,
  };
  
  myChart.setOption({...option,...customOptions});
}

function getSeries(name, data, unit) {
  return {
    name: name,
    type: 'bar',
    barWidth: 20,
    barMinHeight: 35,
    stack: 'total',
    label: {
      show: true,
      color: '#fff',
      fontSize: 10,
      formatter: '{c}'+ unit,
    },
    emphasis: {
      focus: 'series',
    },
    data: data,
  };
}