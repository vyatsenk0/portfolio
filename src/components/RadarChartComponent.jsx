import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      value: "Front-End",
      A: 95,
      fullMark: 100,
    },
    {
      value: "Back-End",
      A: 90,
      fullMark: 100,
    },
    {
      value: "Databases",
      A: 90,
      fullMark: 100,
    },
    {
      value: "Version Control",
      A: 90,
      fullMark: 100,
    },
    {
      value: "C/C++/Python",
      A: 75,
      fullMark: 100,
    },
  ];
  
  const RadarChartComponent = () => {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="value" />
          <PolarRadiusAxis />
          <Radar
            name="Soft Skills"
            dataKey="A"
            stroke="#f7e9fdb6"
            fill="#ab5916cc"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  };
  
  export default RadarChartComponent;
  