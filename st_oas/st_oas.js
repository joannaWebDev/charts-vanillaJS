drawBarChart(
  'st_oas',
  [
    {
      seriesTitle: 'Number of platforms without OAS',
      dataPoints: [5, 18, 31, 6, 307, 3, 49],
    },
    {
      seriesTitle: 'Number of platforms with OAS',
      dataPoints: [12, 3, 12, 13, 72, '', 28],
    },
  ],
  '',//unit empty array if you dont't want any signes such as % 
  {
    //customedOptions:
    legend: {
      right: 20,
      width: 50,
      align:'right',//boxes alignment
      itemWidth:14,//squared boxes
    },
  }
);


//FIXME x-axis legend different label