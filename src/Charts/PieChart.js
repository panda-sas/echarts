import React from 'react';
import ReactECharts from "echarts-for-react";
import * as echarts from 'echarts';

const PieChart = () => {

 const option = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Budget Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Accounted for',
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Savings' },
          { value: 310, name: 'Travel' },
          { value: 274, name: 'Food' },
          { value: 235, name: 'Entertainment' },
          { value: 400, name: 'Investment' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  return (
    <div className='Pie'>
        <ReactECharts option = {option} 
        style={{height: "100vh", width: "100vw"}} />
    </div>
  )
}

export default PieChart;
