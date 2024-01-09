import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "20",
    Employer: 700,
    Employee: 240,
    TotalInterest: 240,
  },
  {
    name: "",
    Employer: 800,
    Employee: 250,
    TotalInterest: 240,
  },
  {
    name: "25",
    Employer: 1000,
    Employee: 300,
    TotalInterest: 300,
  },
  {
    name: "",
    Employer: 1050,
    Employee: 400,
    TotalInterest: 350,
  },
  {
    name: "30",
    Employer: 1200,
    Employee: 500,
    TotalInterest: 500,
  },
  {
    name: "",
    Employer: 1250,
    Employee: 600,
    TotalInterest: 600,
  },
  {
    name: "35",
    Employer: 1350,
    Employee: 700,
    TotalInterest: 700,
  },
  {
    name: "",
    Employer: 1400,
    Employee: 800,
    TotalInterest: 800,
  },
  {
    name: "40",
    Employer: 1500,
    Employee: 900,
    TotalInterest: 900,
  },
  {
    name: "",
    Employer: 1600,
    Employee: 1000,
    TotalInterest: 1000,
  },
  {
    name: "60",
    Employer: 1700,
    Employee: 1100,
    TotalInterest: 1100,
  },
  {
    name: "",
    Employer: 1750,
    Employee: 1200,
    TotalInterest: 1150,
  },
  {
    name: "65",
    Employer: 1900,
    Employee: 1250,
    TotalInterest: 1300,
  },
];
const mobileData = [
  {
    name: "20",
    Employer: 700,
    Employee: 240,
    TotalInterest: 240,
  },
  {
    name: "25",
    Employer: 1000,
    Employee: 300,
    TotalInterest: 300,
  },
  {
    name: "30",
    Employer: 1200,
    Employee: 500,
    TotalInterest: 500,
  },
  {
    name: "35",
    Employer: 1350,
    Employee: 700,
    TotalInterest: 700,
  },
  {
    name: "40",
    Employer: 1500,
    Employee: 900,
    TotalInterest: 900,
  },
  {
    name: "60",
    Employer: 1700,
    Employee: 1100,
    TotalInterest: 1100,
  },
  {
    name: "65",
    Employer: 1900,
    Employee: 1250,
    TotalInterest: 1300,
  },
];

export function SimpleBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="transparent" strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Bar dataKey="Employer" stackId="a" fill="#160bf0" barSize={15} />
        <Bar dataKey="Employee" stackId="a" fill="#6464f6" />
        <Bar dataKey="TotalInterest" stackId="a" fill="#bdd1f8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function MobileSimpleBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={900}
        height={400}
        data={mobileData}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="transparent" strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Bar dataKey="Employer" stackId="a" fill="#160bf0" barSize={15} />
        <Bar dataKey="Employee" stackId="a" fill="#6464f6" />
        <Bar dataKey="TotalInterest" stackId="a" fill="#bdd1f8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
