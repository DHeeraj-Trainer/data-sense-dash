
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Download,
  Share2,
  Clock,
  Plus,
  Search,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

const Reports = () => {
  const [reportType, setReportType] = useState("sales");

  const handleDownload = (format: string) => {
    toast.success(`Downloading report in ${format.toUpperCase()} format`);
  };

  const handleShare = () => {
    toast.success("Report link copied to clipboard!");
  };

  const handleSchedule = () => {
    toast.success("Report scheduled successfully!");
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Reports</h1>
            <p className="text-muted-foreground">
              Create, view, and share detailed reports from your data
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New Report
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Generate Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Report Type</label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Summary</SelectItem>
                    <SelectItem value="marketing">Marketing Performance</SelectItem>
                    <SelectItem value="customer">Customer Analysis</SelectItem>
                    <SelectItem value="product">Product Metrics</SelectItem>
                    <SelectItem value="financial">Financial Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Time Period</label>
                <Select defaultValue="last30">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last7">Last 7 Days</SelectItem>
                    <SelectItem value="last30">Last 30 Days</SelectItem>
                    <SelectItem value="last90">Last 90 Days</SelectItem>
                    <SelectItem value="lastYear">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Data Source</label>
                <Select defaultValue="sales_q2">
                  <SelectTrigger>
                    <SelectValue placeholder="Select data source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales_q2">Sales Data Q2</SelectItem>
                    <SelectItem value="customer_survey">Customer Survey</SelectItem>
                    <SelectItem value="marketing_campaign">Marketing Campaigns</SelectItem>
                    <SelectItem value="all">All Sources</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button>Generate</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="saved">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="saved">Saved Reports</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
              <TabsTrigger value="shared">Shared Reports</TabsTrigger>
            </TabsList>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search reports..." className="pl-9 w-[200px]" />
            </div>
          </div>

          <TabsContent value="saved" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ReportCard
                title="Quarterly Sales Report"
                description="Overview of sales performance for Q2 2023"
                createdAt="2 days ago"
                type="sales"
                onDownload={handleDownload}
                onShare={handleShare}
              />
              <ReportCard
                title="Customer Satisfaction Analysis"
                description="Survey results and sentiment analysis from customer feedback"
                createdAt="1 week ago"
                type="customer"
                onDownload={handleDownload}
                onShare={handleShare}
              />
              <ReportCard
                title="Marketing Campaign Performance"
                description="ROI and engagement metrics from recent advertising"
                createdAt="2 weeks ago"
                type="marketing"
                onDownload={handleDownload}
                onShare={handleShare}
              />
              <ReportCard
                title="Product Usage Statistics"
                description="Feature adoption and usage patterns across user segments"
                createdAt="3 weeks ago"
                type="product"
                onDownload={handleDownload}
                onShare={handleShare}
              />
              <ReportCard
                title="Revenue Forecast"
                description="Predictive analysis of revenue trends for next quarter"
                createdAt="1 month ago"
                type="financial"
                onDownload={handleDownload}
                onShare={handleShare}
              />
              <ReportCard
                title="Conversion Funnel Analysis"
                description="Step-by-step breakdown of user conversion path"
                createdAt="1 month ago"
                type="marketing"
                onDownload={handleDownload}
                onShare={handleShare}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="py-3 px-4 text-left font-medium">Report Name</th>
                        <th className="py-3 px-4 text-left font-medium">Frequency</th>
                        <th className="py-3 px-4 text-left font-medium">Recipients</th>
                        <th className="py-3 px-4 text-left font-medium">Next Run</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Sales Dashboard</td>
                        <td className="py-3 px-4">Weekly (Monday)</td>
                        <td className="py-3 px-4">5 recipients</td>
                        <td className="py-3 px-4">May 20, 2025</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm" onClick={handleSchedule}>
                            <Clock className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Monthly Financial Report</td>
                        <td className="py-3 px-4">Monthly (1st)</td>
                        <td className="py-3 px-4">3 recipients</td>
                        <td className="py-3 px-4">June 1, 2025</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm" onClick={handleSchedule}>
                            <Clock className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Customer Churn Analysis</td>
                        <td className="py-3 px-4">Daily</td>
                        <td className="py-3 px-4">2 recipients</td>
                        <td className="py-3 px-4">May 19, 2025</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm" onClick={handleSchedule}>
                            <Clock className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">Schedule a Report</CardTitle>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" /> Set Schedule
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Report</label>
                    <Select defaultValue="sales">
                      <SelectTrigger>
                        <SelectValue placeholder="Select report" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Quarterly Sales Report</SelectItem>
                        <SelectItem value="customer">Customer Satisfaction Analysis</SelectItem>
                        <SelectItem value="marketing">Marketing Campaign Performance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Frequency</label>
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipients</label>
                    <Input placeholder="Email addresses (comma separated)" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Format</label>
                    <Select defaultValue="pdf">
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="shared" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Shared Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="py-3 px-4 text-left font-medium">Report Name</th>
                        <th className="py-3 px-4 text-left font-medium">Shared With</th>
                        <th className="py-3 px-4 text-left font-medium">Access Level</th>
                        <th className="py-3 px-4 text-left font-medium">Shared On</th>
                        <th className="py-3 px-4 text-left font-medium">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Q2 Sales Summary</td>
                        <td className="py-3 px-4">team@example.com</td>
                        <td className="py-3 px-4">View Only</td>
                        <td className="py-3 px-4">May 10, 2025</td>
                        <td className="py-3 px-4">Never</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Marketing Performance</td>
                        <td className="py-3 px-4">marketing@partner.com</td>
                        <td className="py-3 px-4">Edit & Share</td>
                        <td className="py-3 px-4">May 8, 2025</td>
                        <td className="py-3 px-4">Jun 8, 2025</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Public Dashboard</td>
                        <td className="py-3 px-4">Public Link</td>
                        <td className="py-3 px-4">View Only</td>
                        <td className="py-3 px-4">Apr 15, 2025</td>
                        <td className="py-3 px-4">Never</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface ReportCardProps {
  title: string;
  description: string;
  createdAt: string;
  type: string;
  onDownload: (format: string) => void;
  onShare: () => void;
}

const ReportCard = ({
  title,
  description,
  createdAt,
  type,
  onDownload,
  onShare,
}: ReportCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "sales":
        return "bg-blue-500";
      case "marketing":
        return "bg-green-500";
      case "customer":
        return "bg-purple-500";
      case "product":
        return "bg-orange-500";
      case "financial":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className={`h-1.5 w-full ${getTypeColor()}`} />
      <CardContent className="pt-5">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-medium text-base">{title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
          <FileText className={`h-5 w-5 mt-1 text-${type === 'sales' ? 'blue' : type === 'marketing' ? 'green' : type === 'customer' ? 'purple' : type === 'product' ? 'orange' : 'red'}-500`} />
        </div>
        
        <div className="text-xs text-muted-foreground mt-4 mb-3">
          Created {createdAt}
        </div>
        
        <div className="flex justify-between">
          <Select onValueChange={onDownload} defaultValue="download">
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="ppt">PowerPoint</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm" onClick={onShare} className="gap-1">
            <Share2 className="h-3.5 w-3.5" /> Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reports;
