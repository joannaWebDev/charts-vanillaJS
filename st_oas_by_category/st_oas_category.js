drawBarChart(
  'st_oas_cat',
  [
    {
//[1-US&CANADA/2-UK/3-MIDDLE EAST/4-LATIN AMERICA/5-EUROPE & SCANDINAVIA/6-EASTERN EUROPE/7-ASIA PACIFIC]
      seriesTitle: 'Mandated APIs',
      dataPoints: [69, 88, 217, 48, 1111, 4, 827],
    },
    { seriesTitle: 'Identity', 
    //
    dataPoints: [7, 12, 19, 10, 122, 4, 133] },
    {
      seriesTitle: 'Credit Services',
      dataPoints: [5, 2, 35, 8, 23, 35, 2, 274],
    },
    { seriesTitle: 'Data Services', dataPoints: [14, 3, 25, 7, 54, 0, 65] },
    { seriesTitle: 'Trading', dataPoints: [7, 0, 29, 1, 5, 0, 32] },
    { seriesTitle: 'Loyalty/rewards', dataPoints: [3, 0, 5, 1, 3, 1, 24] },
    { seriesTitle: 'Other', dataPoints: [7, 9, 33, 3, 28, 1, 116] },
  ],
  '%',//unit
  {}
);

//FIXME x-axis should be from 0 to 100? and with percentage

//data as percentages that add up to 100