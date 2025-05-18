
import { useState } from "react";
import Layout from "@/components/Layout";
import { FileDropzone } from "@/components/FileDropzone";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DataSourceCard from "@/components/DataSourceCard";
import { ArrowRight, Database, Link, Table } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DataUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleUploadFiles = () => {
    if (selectedFiles.length === 0) {
      toast.error("Please select at least one file to upload");
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      toast.success(`${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''} uploaded successfully!`);
      setUploading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleConnectDatabase = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Database connection successful!");
    navigate("/dashboard");
  };

  const handleConnectAPI = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("API connection successful!");
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Upload Data</h1>
            <p className="text-muted-foreground">
              Add new data by file upload or connect to external sources
            </p>
          </div>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </Button>
        </div>

        <Tabs defaultValue="file" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="file">File Upload</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="file" className="space-y-6 py-6">
            <FileDropzone onFilesSelected={handleFilesSelected} />
            
            <div className="flex justify-end">
              <Button 
                disabled={selectedFiles.length === 0 || uploading} 
                onClick={handleUploadFiles}
                className="gap-2"
              >
                Upload and Process 
                {uploading ? (
                  <span className="animate-spin ml-2">◌</span>
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="database" className="py-6">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleConnectDatabase} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-type" className="text-sm font-medium">
                          Database Type
                        </label>
                        <Select defaultValue="mysql">
                          <SelectTrigger>
                            <SelectValue placeholder="Select database type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mysql">MySQL</SelectItem>
                            <SelectItem value="postgres">PostgreSQL</SelectItem>
                            <SelectItem value="mssql">SQL Server</SelectItem>
                            <SelectItem value="oracle">Oracle</SelectItem>
                            <SelectItem value="mongodb">MongoDB</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-host" className="text-sm font-medium">
                          Host
                        </label>
                        <Input id="db-host" placeholder="e.g., localhost or 192.168.1.1" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-port" className="text-sm font-medium">
                          Port
                        </label>
                        <Input id="db-port" placeholder="e.g., 3306" type="number" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-name" className="text-sm font-medium">
                          Database Name
                        </label>
                        <Input id="db-name" placeholder="Enter database name" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-user" className="text-sm font-medium">
                          Username
                        </label>
                        <Input id="db-user" placeholder="Enter username" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <label htmlFor="db-password" className="text-sm font-medium">
                          Password
                        </label>
                        <Input id="db-password" type="password" placeholder="Enter password" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="db-query" className="text-sm font-medium">
                      SQL Query (optional)
                    </label>
                    <Textarea
                      id="db-query"
                      placeholder="SELECT * FROM table_name"
                      className="h-24"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty to browse tables in the next step
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="gap-2">
                      Connect to Database <Database className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="py-6">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleConnectAPI} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="api-url" className="text-sm font-medium">
                        API Endpoint URL
                      </label>
                      <Input id="api-url" placeholder="https://api.example.com/data" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="api-method" className="text-sm font-medium">
                        Request Method
                      </label>
                      <Select defaultValue="GET">
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GET">GET</SelectItem>
                          <SelectItem value="POST">POST</SelectItem>
                          <SelectItem value="PUT">PUT</SelectItem>
                          <SelectItem value="DELETE">DELETE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="api-auth" className="text-sm font-medium">
                        Authentication Type
                      </label>
                      <Select defaultValue="none">
                        <SelectTrigger>
                          <SelectValue placeholder="Select authentication type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="basic">Basic Auth</SelectItem>
                          <SelectItem value="apiKey">API Key</SelectItem>
                          <SelectItem value="bearer">Bearer Token</SelectItem>
                          <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="api-headers" className="text-sm font-medium">
                        Headers (JSON format)
                      </label>
                      <Textarea
                        id="api-headers"
                        placeholder='{"Content-Type": "application/json", "Authorization": "Bearer token"}'
                        className="h-20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="api-body" className="text-sm font-medium">
                        Request Body (optional)
                      </label>
                      <Textarea
                        id="api-body"
                        placeholder='{"query": "select * from data"}'
                        className="h-20"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="gap-2">
                      Connect to API <Link className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DataSourceCard
              title="Sales Data Q2"
              description="Quarterly sales report with product categories and regional breakdowns."
              sourceType="CSV"
              lastUpdated="2 days ago"
              rowCount={1250}
              columnCount={15}
              onClick={() => toast.info("Opening Sales Data Q2...")}
            />
            <DataSourceCard
              title="Customer Feedback"
              description="Survey responses from customers about product satisfaction."
              sourceType="Excel"
              lastUpdated="1 week ago"
              rowCount={342}
              columnCount={28}
              onClick={() => toast.info("Opening Customer Feedback...")}
            />
            <DataSourceCard
              title="Marketing Campaign Results"
              description="Performance metrics for digital advertising campaigns."
              sourceType="API"
              lastUpdated="2 weeks ago"
              rowCount={856}
              columnCount={12}
              onClick={() => toast.info("Opening Marketing Campaign Results...")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataUpload;
