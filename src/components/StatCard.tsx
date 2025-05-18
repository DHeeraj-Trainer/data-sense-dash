
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          {trend && (
            <span
              className={cn(
                "text-xs font-medium inline-flex items-center",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              <svg
                className={cn(
                  "w-2.5 h-2.5 me-1",
                  trend.isPositive ? "rotate-180 text-green-500" : "text-red-500"
                )}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
              {trend.value}%
            </span>
          )}
          {description && (
            <p className={cn("text-xs text-muted-foreground", trend && "ml-1.5")}>
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
