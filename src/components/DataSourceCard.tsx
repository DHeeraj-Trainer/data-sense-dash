
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DataSourceCardProps {
  title: string;
  description: string;
  sourceType: string;
  lastUpdated: string;
  rowCount: number;
  columnCount: number;
  onClick?: () => void;
}

const DataSourceCard = ({
  title,
  description,
  sourceType,
  lastUpdated,
  rowCount,
  columnCount,
  onClick,
}: DataSourceCardProps) => {
  const getSourceTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "csv":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "excel":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "json":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "api":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "database":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1 line-clamp-2">{description}</CardDescription>
          </div>
          <Badge className={getSourceTypeColor(sourceType)}>{sourceType}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <div>
              <p className="text-muted-foreground">Rows</p>
              <p className="font-medium">{rowCount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Columns</p>
              <p className="font-medium">{columnCount}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Last updated</p>
            <p className="font-medium">{lastUpdated}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSourceCard;
