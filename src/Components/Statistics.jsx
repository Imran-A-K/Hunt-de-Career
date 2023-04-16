import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import vector from "../assets/All Images/Vector.png";
import vector_1 from "../assets/All Images/Vector-1.png";
const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "A-1",
    marks: 57,
  },
  {
    name: "A-2",
    marks: 60,
  },
  {
    name: "A-3",
    marks: 60,
  },
  {
    name: "A-4",
    marks: 60,
  },
  {
    name: "A-5",
    marks: 60,
  },
  {
    name: "A-6",
    marks: 60,
  },
  {
    name: "A-7",
    marks: 60,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistics = () => {
  return (
    <div className="flex flex-col space-x-4 space-y-4 items-center justify-center mb-10">
      <div
        
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat grid grid-cols-[1fr_4fr_0.45fr]  py-[40px]"
      >
        <div>
          <div>
<img src={vector} alt="" />
          </div>
        </div>
        <div className="flex items-center">
        <h2 className="text-3xl pl-[380px] font-bold">Statistics</h2>
        </div>
        
        <div>
          <div className="-mt-[139px]">
            <img className="" src={vector_1} alt="" />
          </div>
        </div>
      </div>
      <div className="object-cover md:hidden">
        <BarChart
          width={380}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="marks"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top", fontWeight: "bold", dy: -2 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="object-cover hidden md:block">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="marks"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top", fontWeight: "bold", dy: -2 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <h2 className="font-bold pl-6 md:text-xl italic">
        Assignment Marks Comparison Chart
      </h2>
    </div>
  );
};

export default Statistics;
