import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Communication and Collaboration",
    value: 80,
  },
  {
    name: "Attention to Detail and Accuracy",
    value: 90,
  },
  {
    name: "Problem solving and Critical thinking",
    value: 80,
  },
  {
    name: "Time Management",
    value: 90,
  },
  {
    name: "Work independently",
    value: 80,
  },
  {
    name: "Work in a team environment",
    value: 80,
  },
];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#d7690fb5"
          fillOpacity={0.9}
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
