function getScoreChartOption(scores){
    if(scores === null || scores == undefined) return {}
    let option = getBaseScoreOption();
    let data = []
    scores.map(score=> {
        if(score.score !== 0)
        data.push({
            value: score.score,
            name: score.role.rusName
        })
    })
    option.series[0].data = data;
    return option
}


function getBaseScoreOption(){

    return{
        // backgroundColor: '#2c343c',
        title: {
          text: 'Результаты теста',
          left: 'center',
          top: 20,
          textStyle: {
            // color: '#ccc'
          }
        },  
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Роль',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [],
            roseType: 'radius',
            label: {
            //   color: 'rgba(255, 255, 255, 0.3)' //LABEL COLOR
            },
            labelLine: {
              lineStyle: {
                // color: 'rgba(255, 255, 255, 0.3)' //LINE COLOR
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              // color: '#c23531',
              shadowBlur: 200,
            //   shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
}


export {getScoreChartOption, getBaseScoreOption}