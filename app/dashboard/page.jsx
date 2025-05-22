import Link from "next/link"
import { AlertCircle, CheckCircle, Clock, FileText, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, User! Here's an overview of your reported issues.</p>
        </div>
        <Button asChild>
          <Link href="/report" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Report a Problem
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Being addressed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Successfully completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <div className="mb-8">
        <Tabs defaultValue="all">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Reports</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Broken Street Light",
                  description: "The street light at Oak and Main has been out for weeks.",
                  category: "Safety",
                  status: "Resolved",
                  date: "2023-05-15",
                  location: "Oak St & Main St",
                },
                {
                  title: "Pothole on Elm Street",
                  description: "Large pothole damaging vehicles. Needs immediate attention.",
                  category: "Roads",
                  status: "In Progress",
                  date: "2023-06-02",
                  location: "123 Elm St",
                },
                {
                  title: "Overflowing Trash Bin",
                  description: "Public trash bin hasn't been emptied in days.",
                  category: "Sanitation",
                  status: "Pending",
                  date: "2023-06-10",
                  location: "Central Park, West Entrance",
                },
                {
                  title: "Graffiti on Public Building",
                  description: "Inappropriate graffiti on the side of the community center.",
                  category: "Vandalism",
                  status: "Pending",
                  date: "2023-06-12",
                  location: "45 Community Ave",
                },
                {
                  title: "Fallen Tree Branch",
                  description: "Large branch blocking sidewalk after storm.",
                  category: "Hazard",
                  status: "Resolved",
                  date: "2023-05-20",
                  location: "Maple Drive & 5th St",
                },
                {
                  title: "Broken Playground Equipment",
                  description: "Swing set is damaged and unsafe for children.",
                  category: "Parks",
                  status: "In Progress",
                  date: "2023-05-28",
                  location: "Sunshine Park",
                },
              ].map((report, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle>{report.title}</CardTitle>
                      <Badge
                        variant={
                          report.status === "Resolved"
                            ? "default"
                            : report.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0">
                    <Badge variant="outline">{report.category}</Badge>
                    <span className="text-xs text-muted-foreground">Reported on {report.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Overflowing Trash Bin",
                  description: "Public trash bin hasn't been emptied in days.",
                  category: "Sanitation",
                  status: "Pending",
                  date: "2023-06-10",
                  location: "Central Park, West Entrance",
                },
                {
                  title: "Graffiti on Public Building",
                  description: "Inappropriate graffiti on the side of the community center.",
                  category: "Vandalism",
                  status: "Pending",
                  date: "2023-06-12",
                  location: "45 Community Ave",
                },
              ].map((report, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle>{report.title}</CardTitle>
                      <Badge variant="outline">{report.status}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0">
                    <Badge variant="outline">{report.category}</Badge>
                    <span className="text-xs text-muted-foreground">Reported on {report.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Pothole on Elm Street",
                  description: "Large pothole damaging vehicles. Needs immediate attention.",
                  category: "Roads",
                  status: "In Progress",
                  date: "2023-06-02",
                  location: "123 Elm St",
                },
                {
                  title: "Broken Playground Equipment",
                  description: "Swing set is damaged and unsafe for children.",
                  category: "Parks",
                  status: "In Progress",
                  date: "2023-05-28",
                  location: "Sunshine Park",
                },
              ].map((report, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle>{report.title}</CardTitle>
                      <Badge variant="secondary">{report.status}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0">
                    <Badge variant="outline">{report.category}</Badge>
                    <span className="text-xs text-muted-foreground">Reported on {report.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resolved" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Broken Street Light",
                  description: "The street light at Oak and Main has been out for weeks.",
                  category: "Safety",
                  status: "Resolved",
                  date: "2023-05-15",
                  location: "Oak St & Main St",
                },
                {
                  title: "Fallen Tree Branch",
                  description: "Large branch blocking sidewalk after storm.",
                  category: "Hazard",
                  status: "Resolved",
                  date: "2023-05-20",
                  location: "Maple Drive & 5th St",
                },
              ].map((report, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle>{report.title}</CardTitle>
                      <Badge>{report.status}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {report.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0">
                    <Badge variant="outline">{report.category}</Badge>
                    <span className="text-xs text-muted-foreground">Reported on {report.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="mb-4 text-xl font-bold">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                {
                  action: "Your report 'Pothole on Elm Street' status changed to In Progress",
                  time: "2 hours ago",
                  icon: AlertCircle,
                },
                {
                  action: "Admin commented on your report 'Broken Playground Equipment'",
                  time: "Yesterday",
                  icon: FileText,
                },
                {
                  action: "Your report 'Fallen Tree Branch' has been resolved",
                  time: "3 days ago",
                  icon: CheckCircle,
                },
                {
                  action: "You submitted a new report 'Graffiti on Public Building'",
                  time: "5 days ago",
                  icon: Plus,
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
