import React from "react";
import { Box, Typography, Paper, Divider, Chip } from "@mui/material";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Oct 2021", Achieved: 7, Target: 5 },
  { name: "Nov 2021", Achieved: 6, Target: 4 },
  { name: "Dec 2021", Achieved: 8, Target: 6 },
  { name: "Jan 2022", Achieved: 9, Target: 7 },
  { name: "Feb 2022", Achieved: 10, Target: 8 },
  { name: "Mar 2022", Achieved: 8, Target: 6 },
  { name: "Apr 2022", Achieved: 7, Target: 5 },
];

const salesOverviewData = [
  { name: "Completed", value: 32, color: "#4F8CFF" },
  { name: "On Hold", value: 25, color: "#7C3AED" },
  { name: "On Progress", value: 25, color: "#F59E42" },
  { name: "Pending", value: 18, color: "#F44336" },
];

const expensesData = [
  { name: "Material", value: 40, color: "#4F8CFF" },
  { name: "Labor", value: 30, color: "#F59E42" },
  { name: "Equipment", value: 20, color: "#7C3AED" },
  { name: "Administrative", value: 10, color: "#F44336" },
];

const Dashboard = () => {
  return (
    <Box sx={{ bgcolor: "#f4f8fd", minHeight: "100vh", p: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {/* Total Sales Card */}
        <Paper elevation={2} sx={{ flex: 1, minWidth: 400, p: 3 }}>
          <Typography variant="subtitle2" fontWeight={600}>
            Total Sales: <span style={{ fontWeight: 700, fontSize: 22 }}>$4,500</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            ↑12% from last month
          </Typography>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={salesData}>
              <Line type="monotone" dataKey="Achieved" stroke="#F44336" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Target" stroke="#7C3AED" strokeWidth={2} dot={false} />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        {/* Sales Overview Card */}
        <Paper elevation={2} sx={{ flex: 1, minWidth: 300, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle2" fontWeight={600}>
              Sales Overview: <span style={{ fontWeight: 700, fontSize: 18 }}>+24 Orders</span>
            </Typography>
            <Chip label="This Month" size="small" sx={{ bgcolor: "#eaf1fb", color: "#1976d2" }} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            This month
          </Typography>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={salesOverviewData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
              >
                {salesOverviewData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>

        {/* Total Expenses Card */}
        <Paper elevation={2} sx={{ flex: 1, minWidth: 300, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle2" fontWeight={600}>
              Total Expenses: <span style={{ fontWeight: 700, fontSize: 18 }}>$2,300</span>
            </Typography>
            <Chip label="This Month" size="small" sx={{ bgcolor: "#eaf1fb", color: "#1976d2" }} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            $2,300
          </Typography>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={expensesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                label
              >
                {expensesData.map((entry, idx) => (
                  <Cell key={`cell-exp-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
