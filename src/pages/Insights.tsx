
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import InsightCard from "@/components/InsightCard";
import { ArrowRight, Search, Zap, Brain } from "lucide-react";
import { toast } from "sonner";

const Insights = () => {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerateInsights = () => {
    if (!query.trim()) {
      toast.error("Please enter a question to analyze");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate AI processing
    toast.info("Analyzing your data...");
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Insights generated successfully!");
    }, 1500);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">AI Insights</h1>
          <p className="text-muted-foreground">
            Discover deeper patterns and actionable intelligence in your data
          </p>
        </div>

        <Card className="bg-insight-100/60 dark:bg-insight-900/30">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-insight-600" />
                <h2 className="text-lg font-medium">Ask about your data</h2>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="E.g., What are the top selling products last quarter?"
                    className="bg-white dark:bg-slate-800"
                  />
                </div>
                <Button onClick={handleGenerateInsights} disabled={isProcessing} className="gap-2">
                  {isProcessing ? "Processing..." : "Generate Insights"}
                  {isProcessing ? (
                    <span className="animate-spin">◌</span>
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 text-sm">
                <p className="text-muted-foreground pr-1">Try asking:</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-auto py-1 px-3"
                  onClick={() => setQuery("Show me trends in customer acquisition cost")}
                >
                  Show me trends in customer acquisition cost
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-1 px-3"
                  onClick={() => setQuery("What's causing the drop in engagement metrics?")}
                >
                  What's causing the drop in engagement metrics?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto py-1 px-3"
                  onClick={() => setQuery("Compare sales performance by region")}
                >
                  Compare sales performance by region
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="insights">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="insights">Generated Insights</TabsTrigger>
              <TabsTrigger value="patterns">Detected Patterns</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
            </TabsList>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search insights..."
                className="pl-9 w-[200px]"
              />
            </div>
          </div>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InsightCard
                title="Sales & Marketing Correlation"
                description="There's a strong positive correlation (0.87) between marketing spend and monthly sales in the past 6 months. For every $1,000 increase in marketing, sales increase by approximately $5,200."
                type="correlation"
                confidence={92}
              />
              <InsightCard
                title="Customer Churn Anomaly"
                description="Unusual spike in customer churn detected in March. This is 2.8x higher than your average monthly churn rate. Primary reasons appear to be related to the pricing change implemented in February."
                type="anomaly"
                confidence={89}
              />
              <InsightCard
                title="Growth Trend"
                description="Customer acquisition has grown by 23% month-over-month for the last quarter, primarily in the Enterprise segment. This coincides with the launch of new features targeting large businesses."
                type="trend"
                confidence={95}
              />
              <InsightCard
                title="Product Usage Pattern"
                description="Users who engage with the analytics dashboard in their first week are 3.5x more likely to convert to paid plans within 30 days. Only 24% of new signups currently use this feature."
                type="correlation"
                confidence={90}
              />
              <InsightCard
                title="Regional Performance"
                description="The European market is showing 2.1x faster growth than North America, despite receiving only 40% of the marketing budget. Customer acquisition costs are 35% lower in this region."
                type="trend"
                confidence={88}
              />
              <InsightCard
                title="Revenue Driver Analysis"
                description="Product upsells account for 34% of revenue growth this quarter, compared to 18% from new customer acquisition. The most effective upsell path is from Basic to Professional tier."
                type="summary"
                confidence={93}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="patterns" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Data Pattern Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Identified patterns from your current datasets:</p>
                  
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Seasonal Purchase Patterns</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Your sales data shows consistent seasonal fluctuations with peaks in November-December (45% above average) and July (28% above average).
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Customer Segmentation Clusters</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        K-means clustering identified 4 distinct customer segments based on purchase behavior, frequency, and value.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Product Affinity Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Purchase history reveals strong correlations between certain products, with 5 key product pairs showing 65%+ co-purchase rates.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="predictions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">AI Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Predictive models based on your historical data:</p>
                  
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Sales Forecast (Next 3 Months)</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Time series analysis predicts a 12% increase in overall sales for the next quarter with 85% confidence interval.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Forecast <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Churn Prediction Model</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Identified 128 customers (5.2% of base) at high risk of churning within the next 30 days based on activity patterns.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View At-Risk List <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Inventory Optimization</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Demand forecasting suggests optimal inventory levels for each product category based on seasonality and growth trends.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        View Recommendations <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Insights;
