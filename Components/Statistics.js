

//                 // 2-ci metod tarixi cixartmaq ucun
//     // const today=moment().format("Do MMMM,YYYY");
//     // const yesterday=moment().add(-1,"day").format("Do MMMM,YYYY");
//     // const twodays=moment().add(-2,"day").format("Do MMMM,YYYY");
//     // const threedays=moment().add(-3,"day").format("Do MMMM,YYYY");
//     // const fourdays=moment().add(-4,"day").format("Do MMMM,YYYY");
//     // const fivedays=moment().add(-5,"day").format("Do MMMM,YYYY");
//     // const sixdays=moment().add(-6,"day").format("Do MMMM,YYYY");
//   return (
//     <div >
//       <div style={{display:"flex",margin:"40px",gap:"20px"}}>
//         <p style={{display:"flex",alignItems:"center"}} ><input className='check' type="checkbox"/> <div className='created'></div>Created</p>
//         <p style={{display:"flex",alignItems:"center"}} ><input className='check' type="checkbox"/> <div className='complated'></div>Complated</p>
//         <p style={{display:"flex",alignItems:"center"}} ><input className='check' type="checkbox"/> <div className='overdue'></div>Overdue</p>
//         </div>  




//                                    {/* 2ci metod tarixi cixartmaq ucun */}
//       {/* <div style={{display:"flex",justifyContent:"space-evenly"}}>
//       <p>{sixdays}</p>
//       <p>{fivedays}</p>
//       <p>{fourdays}</p>
//       <p>{threedays}</p>
//       <p>{twodays}</p>
//       <p>{yesterday}</p>
//       <p>{today}</p>

//         </div>
//          */}





import React, { useState, useEffect } from 'react';
import "../Css/Statistics.css"
import Chart from 'react-apexcharts';
import moment from 'moment';
import StatisticBase from "../Statistic.json"

const Statistics = () => {
  const [base, setBase] = useState(StatisticBase);

  //  const date= moment(1685563199).format("MMM Do YY");  
  //  console.log(date)
  const [showCreated, setShowCreated] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showOverdue, setShowOverdue] = useState(true);

  // 1ci metod tarixi cixartmaq ucun
  const dateLabels = [];
  for (let i = 0; i < 7; i++) {
    dateLabels.push(moment().add(-i, 'day').format('Do MMMM, YYYY'));
  }
  dateLabels.reverse();
  // Moterizenin icindeki reqemleri hesablamaq
  const createdData = [base.data.created.data[1].count, base.data.created.data[2].count, base.data.created.data[3].count, base.data.created.data[4].count, base.data.created.data[5].count, base.data.created.data[6].count, base.data.created.data[7].count];
  const amountCreated = createdData.reduce((total, count) => total + count, 0);   //bu halda qoyduqda bos reqem cixir.unchecked edende 0 olmur
  const displaycreated= showCreated ? amountCreated : 0;  //checked edende reqem gelir,unchecked edende 0 gelir


  const createdComplated = [base.data.completed.data[1].count, base.data.completed.data[2].count, base.data.completed.data[3].count, base.data.completed.data[4].count, base.data.completed.data[5].count, base.data.completed.data[6].count, base.data.completed.data[7].count]
  const amountComplated = createdComplated.reduce((total, count) => total + count, 0);
  const displayComplated= showCompleted ? amountComplated : 0;



  const createdOverdue = [base.data.overdue.data[1].count, base.data.overdue.data[2].count, base.data.overdue.data[3].count, base.data.overdue.data[4].count, base.data.overdue.data[5].count, base.data.overdue.data[6].count, base.data.overdue.data[7].count]
  const amountOverdue = createdOverdue.reduce((total, count) => total + count, 0)
  const displayOverdue= showOverdue ? amountOverdue : 0;
         //Qrafiki burdan yaziriq//
  const chartData = [
    {
      name: 'Created',  //apexchartin asgiisinda crated,complated,overdue.//
      data: showCreated ? [base.data.created.data[1].count, base.data.created.data[2].count, base.data.created.data[3].count, base.data.created.data[4].count, base.data.created.data[5].count, base.data.created.data[6].count, base.data.created.data[7].count] : [],
    },
    {
      name: 'Completed',
      data: showCompleted ? [base.data.completed.data[1].count, base.data.completed.data[2].count, base.data.completed.data[3].count, base.data.completed.data[4].count, base.data.completed.data[5].count, base.data.completed.data[6].count, base.data.completed.data[7].count] : [],
    },
    {
      name: 'Overdue',
      data: showOverdue ? [base.data.overdue.data[1].count, base.data.overdue.data[2].count, base.data.overdue.data[3].count, base.data.overdue.data[4].count, base.data.overdue.data[5].count, base.data.overdue.data[6].count, base.data.overdue.data[7].count] : [],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: dateLabels,
    },
    fill: {
      opacity: 2,
      colors: ['#FFA500', '#008000', '#FF0000'],

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <div>
      <div style={{ display: "flex", margin: "40px", gap: "20px" }}>
        <p style={{ display: "flex", alignItems: "center" }} ><input className='check' type="checkbox" checked={showCreated} onChange={() => setShowCreated(!showCreated)} /> <div className='created'></div>Created <p style={{ paddingTop: "14px" }}> ({displaycreated})</p></p>
        <p style={{ display: "flex", alignItems: "center" }} ><input className='check' type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} /> <div className='complated'></div>Complated <p style={{ paddingTop: "14px" }}> ({displayComplated})</p></p>
        <p style={{ display: "flex", alignItems: "center" }} ><input className='check' type="checkbox" checked={showOverdue} onChange={() => setShowOverdue(!showOverdue)} /> <div className='overdue'></div>Overdue<p style={{ paddingTop: "14px" }}> ({displayOverdue})</p></p>
      </div>

      <Chart options={options} series={chartData} type="bar" width="100%" height={350} />
    </div>
  );
};

export default Statistics;