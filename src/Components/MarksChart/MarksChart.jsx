import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;


    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.Marks.physics,
            math: studentData.Marks.math,
            chemistry: studentData.Marks.chemistry
        }
        const avg = (student.physics+student.math+student.chemistry)/3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData)
    
    return (
        <div className='my-10'>
            <BarChart width={600} height={400} data={marksChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"avg"} fill='yellow'></Bar>
                <Bar dataKey={"chemistry"} fill='blue'></Bar>
                <Bar dataKey={"math"} fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;