import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Ayaan", "physics": 78, "chemistry": 50, "math": 91 },
  { "id": 2, "name": "Nabila", "physics": 65, "chemistry": 74, "math": 88 },
  { "id": 3, "name": "Rafi", "physics": 89, "chemistry": 92, "math": 85 },
  { "id": 4, "name": "Mahi", "physics": 56, "chemistry": 61, "math": 70 },
  { "id": 5, "name": "Tanvir", "physics": 92, "chemistry": 88, "math": 95 },
  { "id": 6, "name": "Sadia", "physics": 74, "chemistry": 79, "math": 83 },
  { "id": 7, "name": "Imran", "physics": 40, "chemistry": 67, "math": 72 },
  { "id": 8, "name": "Farhan", "physics": 90, "chemistry": 85, "math": 80 },
  { "id": 9, "name": "Nusrat", "physics": 69, "chemistry": 33, "math": 77 },
  { "id": 10, "name": "Mehedi", "physics": 88, "chemistry": 91, "math": 94 }
];

const ResultChart = () => {
    return (
        <div className='ml-10'>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;