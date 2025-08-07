import React from 'react';
import ReactECharts from 'echarts-for-react'; // React wrapper
import * as echarts from 'echarts'; // Optional


const OrderPiChart = () => {
    const  option = {
      color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#1158E2"
          },
          {
            offset: 1,
            color: "#4285F2"
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#BC1FD7",
          },
          {
            offset: 1,
            color: "#7F1DD1",
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#E8A618",
          },
          {
            offset: 1,
            color: "#EB6836",
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#D131BE",
          },
          {
            offset: 1,
            color: "#BF1575",
          }
        ]),
      ],
      
          

      
        series: [
          {
            name: "Item",
            type: "pie",
            radius: ["60%", "80%"],
            avoidLabelOverlap: false,
            itemStyle:{
              borderRadius:50,
              bordercolor:"black",
              borderwidth:5,
            },
            label:{
              show:false,
              position:"center",
            },
            emphasis:{
              label:{
                show:true,
                fontsize:20,
                fontweight:"bold",
              }
            },
            data: [
              { value: 2500, name: "vanupratap" },
              { value: 2800, name: "Raju" },
              { value: 3700, name: "Kamalesh" },
              { value: 3200, name: "Pratap" }
            ]
          }
        ]
      }
      
  return (
    <ReactECharts style={{height:140, marginTop: "1rem"}} option={option}/>
  )
}

export default OrderPiChart;