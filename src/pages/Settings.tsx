
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Key, UserCircle, Users, Bell, Shield, LineChart } from "lucide-react";

const Settings = () => {
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile settings saved successfully!");
    }, 1000);
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Password updated successfully!");
    }, 1000);
  };

  const handleSaveAPIKeys = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("API key generated successfully!");
    }, 1000);
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Notification preferences saved!");
  };

  const handleSaveTeam = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Team settings saved!");
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and configurations
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="profile" className="gap-2">
              <UserCircle className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="password" className="gap-2">
              <Key className="h-4 w-4" /> Password
            </TabsTrigger>
            <TabsTrigger value="api" className="gap-2">
              <LineChart className="h-4 w-4" /> API Keys
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="team" className="gap-2">
              <Users className="h-4 w-4" /> Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold">
                        JD
                      </div>
                      <div>
                        <Button variant="outline" type="button" className="mb-1">
                          Change Profile Picture
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          JPG, GIF or PNG. Max size 1MB.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input id="jobTitle" defaultValue="Product Manager" />
                      </div>
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Product Manager with 5+ years of experience in data analytics."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="america_new_york">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="america_new_york">Eastern Time (ET)</SelectItem>
                          <SelectItem value="america_chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="america_denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="america_los_angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="etc_utc">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" disabled={loading}>
                      {loading ? "Saving..." : "Save Profile"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Password Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSavePassword} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Password must be at least 8 characters and include uppercase, lowercase, number and special character.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" type="button">
                      Forgot Password?
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">API Keys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm">
                      Generate API keys to integrate InsightFlow with your applications.
                    </p>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/50 py-3 px-4 border-b">
                      <h3 className="font-medium">Your API Keys</h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b">
                          <div>
                            <p className="font-medium">Main API Key</p>
                            <p className="text-sm text-muted-foreground">
                              Created on May 1, 2025
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              value="••••••••••••••••••••••••"
                              readOnly
                              className="max-w-[220px] font-mono"
                            />
                            <Button variant="outline" size="sm">
                              Copy
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <p className="font-medium">Development Key</p>
                            <p className="text-sm text-muted-foreground">
                              Created on April 15, 2025
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              value="••••••••••••••••••••••••"
                              readOnly
                              className="max-w-[220px] font-mono"
                            />
                            <Button variant="outline" size="sm">
                              Copy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSaveAPIKeys} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="keyName">New API Key Name</Label>
                        <Input id="keyName" placeholder="e.g., Production Key" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="keyExpiry">Expiration</Label>
                        <Select defaultValue="never">
                          <SelectTrigger>
                            <SelectValue placeholder="Select expiration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="never">Never</SelectItem>
                            <SelectItem value="30days">30 Days</SelectItem>
                            <SelectItem value="60days">60 Days</SelectItem>
                            <SelectItem value="90days">90 Days</SelectItem>
                            <SelectItem value="1year">1 Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" disabled={loading}>
                        {loading ? "Generating..." : "Generate New API Key"}
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveNotifications} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium mb-2">Email Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailReports">Scheduled Reports</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive scheduled reports via email
                          </p>
                        </div>
                        <Switch id="emailReports" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailInsights">AI Insights</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about new AI-generated insights
                          </p>
                        </div>
                        <Switch id="emailInsights" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailTeam">Team Activity</Label>
                          <p className="text-sm text-muted-foreground">
                            Updates about team member actions
                          </p>
                        </div>
                        <Switch id="emailTeam" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium mb-2">In-App Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="appShares">Dashboard Shares</Label>
                          <p className="text-sm text-muted-foreground">
                            Notify when someone shares a dashboard with you
                          </p>
                        </div>
                        <Switch id="appShares" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="appComments">Comments</Label>
                          <p className="text-sm text-muted-foreground">
                            Notify about comments on your dashboards
                          </p>
                        </div>
                        <Switch id="appComments" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="appSystem">System Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Product updates and new features
                          </p>
                        </div>
                        <Switch id="appSystem" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emailDigest">Email Digest Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">Real-time</SelectItem>
                          <SelectItem value="daily">Daily Digest</SelectItem>
                          <SelectItem value="weekly">Weekly Digest</SelectItem>
                          <SelectItem value="off">Turn Off</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Save Preferences</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-medium">Team Members (5)</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your team members and their access levels
                      </p>
                    </div>
                    <Button>Invite Member</Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50 border-b">
                          <th className="py-3 px-4 text-left font-medium">Name</th>
                          <th className="py-3 px-4 text-left font-medium">Email</th>
                          <th className="py-3 px-4 text-left font-medium">Role</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                          <th className="py-3 px-4 text-left font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">John Doe (You)</td>
                          <td className="py-3 px-4">john@example.com</td>
                          <td className="py-3 px-4">Owner</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Jane Smith</td>
                          <td className="py-3 px-4">jane@example.com</td>
                          <td className="py-3 px-4">Admin</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Robert Johnson</td>
                          <td className="py-3 px-4">robert@example.com</td>
                          <td className="py-3 px-4">Editor</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Lisa Brown</td>
                          <td className="py-3 px-4">lisa@example.com</td>
                          <td className="py-3 px-4">Viewer</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                              Pending
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Michael Wilson</td>
                          <td className="py-3 px-4">michael@example.com</td>
                          <td className="py-3 px-4">Viewer</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <form onSubmit={handleSaveTeam} className="mt-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Team Settings</h3>
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Team Name</Label>
                      <Input id="teamName" defaultValue="InsightFlow Team" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="allowPublicSharing">Allow Public Sharing</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow team members to create public shareable links
                        </p>
                      </div>
                      <Switch id="allowPublicSharing" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="defaultRole">Default Role for New Members</Label>
                      </div>
                      <Select defaultValue="viewer">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select default role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Save Settings</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
