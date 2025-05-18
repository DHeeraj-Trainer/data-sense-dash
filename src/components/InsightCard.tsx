
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  type: "correlation" | "anomaly" | "trend" | "summary";
  confidence?: number;
}

const InsightCard = ({ title, description, type, confidence = 0 }: InsightCardProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "correlation":
        return (
          <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-300" />
          </div>
        );
      case "anomaly":
        return (
          <div className="rounded-full bg-red-100 p-2 dark:bg-red-900">
            <Lightbulb className="h-4 w-4 text-red-600 dark:text-red-300" />
          </div>
        );
      case "trend":
        return (
          <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
            <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-300" />
          </div>
        );
      case "summary":
        return (
          <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
            <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-300" />
          </div>
        );
      default:
        return (
          <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
            <Lightbulb className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
        );
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "correlation":
        return "Correlation";
      case "anomaly":
        return "Anomaly Detected";
      case "trend":
        return "Trend Identified";
      case "summary":
        return "Summary";
      default:
        return "Insight";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <div className="flex items-center space-x-2">
          {confidence > 0 && (
            <span className="text-xs text-muted-foreground">
              {confidence}% confidence
            </span>
          )}
          {getTypeIcon(type)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-1">
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
              {getTypeLabel(type)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
