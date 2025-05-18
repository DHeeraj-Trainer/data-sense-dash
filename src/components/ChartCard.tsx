
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LineChart, BarChart, ScatterChart, AreaChart } from "recharts";
import { MoreVertical, Download, RefreshCw, LineChart as LineChartIcon } from "lucide-react";

interface ChartCardProps {
  title: string;
  chartType: "line" | "bar" | "scatter" | "area";
  data: any[];
  height?: number;
}

const ChartCard = ({ title, chartType, data, height = 250 }: ChartCardProps) => {
  const renderChart = () => {
    // Define general chart props
    const chartProps = {
      width: 350,
      height,
      data,
      margin: { top: 20, right: 10, left: 10, bottom: 10 },
    };

    switch (chartType) {
      case "line":
        return <LineChart {...chartProps} />;
      case "bar":
        return <BarChart {...chartProps} />;
      case "scatter":
        return <ScatterChart {...chartProps} />;
      case "area":
        return <AreaChart {...chartProps} />;
      default:
        return <LineChart {...chartProps} />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RefreshCw className="mr-2 h-4 w-4" />
              <span>Refresh</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LineChartIcon className="mr-2 h-4 w-4" />
              <span>Change chart type</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="chart-container">{renderChart()}</CardContent>
    </Card>
  );
};

export default ChartCard;
