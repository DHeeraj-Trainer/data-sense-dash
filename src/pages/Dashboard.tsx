
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import InsightCard from "@/components/InsightCard";
import { Plus, Upload, Database, BarChart3, Users, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for charts
const salesData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

const customerData = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 1200 },
  { name: "May", value: 1500 },
  { name: "Jun", value: 1800 },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-muted-foreground">
              View your key metrics and insights at a glance
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/upload">
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" /> Upload Data
              </Button>
            </Link>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> New Dashboard
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Datasets"
            value="8"
            description="Last 30 days"
            icon={<Database className="h-4 w-4" />}
          />
          <StatCard
            title="Visualizations Created"
            value="24"
            description="Last 30 days"
            icon={<BarChart3 className="h-4 w-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Team Members"
            value="5"
            description="2 active now"
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard
            title="Saved Reports"
            value="12"
            description="3 shared publicly"
            icon={<FileText className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Recent Data Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="dashboard-grid">
                <ChartCard title="Monthly Sales" chartType="bar" data={salesData} />
                <ChartCard title="Customer Growth" chartType="line" data={customerData} />
                <ChartCard title="Product Distribution" chartType="scatter" data={salesData} />
                <ChartCard title="Revenue Trend" chartType="area" data={customerData} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">AI-Generated Insights</h2>
            <Link to="/insights">
              <Button variant="outline" size="sm" className="gap-1">
                View All <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InsightCard
              title="Sales Correlation"
              description="There's a strong positive correlation (0.87) between marketing spend and monthly sales in the past 6 months."
              type="correlation"
              confidence={92}
            />
            <InsightCard
              title="Customer Anomaly"
              description="Unusual spike in customer churn detected in March. This is 2.8x higher than your average monthly churn rate."
              type="anomaly"
              confidence={89}
            />
            <InsightCard
              title="Growth Trend"
              description="Customer acquisition has grown by 23% month-over-month for the last quarter, primarily in the Enterprise segment."
              type="trend"
              confidence={95}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Recent Datasets</h2>
            <Link to="/upload">
              <Button variant="ghost" size="sm" className="gap-1">
                <Upload className="h-3.5 w-3.5" /> Upload New
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left font-medium">Name</th>
                    <th className="py-3 px-4 text-left font-medium">Type</th>
                    <th className="py-3 px-4 text-left font-medium">Records</th>
                    <th className="py-3 px-4 text-left font-medium">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Sales Q2 2023</td>
                    <td className="py-3 px-4">CSV</td>
                    <td className="py-3 px-4">1,250</td>
                    <td className="py-3 px-4">2 days ago</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Customer Survey Responses</td>
                    <td className="py-3 px-4">Excel</td>
                    <td className="py-3 px-4">342</td>
                    <td className="py-3 px-4">1 week ago</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Marketing Campaign Results</td>
                    <td className="py-3 px-4">JSON</td>
                    <td className="py-3 px-4">856</td>
                    <td className="py-3 px-4">2 weeks ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
