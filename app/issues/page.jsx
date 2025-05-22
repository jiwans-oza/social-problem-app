"use client"

import { useState } from "react"
import { AlertCircle, Filter, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const issues = [
  {
    id: 1,
    title: "Broken Street Light",
    description: "The street light at Oak and Main has been out for weeks, creating a safety hazard.",
    category: "Safety",
    status: "Resolved",
    date: "2023-05-15",
    location: "Oak St & Main St",
    upvotes: 12,
  },
  {
    id: 2,
    title: "Pothole on Elm Street",
    description: "Large pothole damaging vehicles. Needs immediate attention.",
    category: "Roads",
    status: "In Progress",
    date: "2023-06-02",
    location: "123 Elm St",
    upvotes: 24,
  },
  {
    id: 3,
    title: "Overflowing Trash Bin",
    description: "Public trash bin hasn't been emptied in days. Creating unsanitary conditions.",
    category: "Sanitation",
    status: "Pending",
    date: "2023-06-10",
    location: "Central Park, West Entrance",
    upvotes: 8,
  },
  {
    id: 4,
    title: "Graffiti on Public Building",
    description: "Inappropriate graffiti on the side of the community center.",
    category: "Vandalism",
    status: "Pending",
    date: "2023-06-12",
    location: "45 Community Ave",
    upvotes: 5,
  },
  {
    id: 5,
    title: "Fallen Tree Branch",
    description: "Large branch blocking sidewalk after storm.",
    category: "Hazard",
    status: "Resolved",
    date: "2023-05-20",
    location: "Maple Drive & 5th St",
    upvotes: 15,
  },
  {
    id: 6,
    title: "Broken Playground Equipment",
    description: "Swing set is damaged and unsafe for children.",
    category: "Parks",
    status: "In Progress",
    date: "2023-05-28",
    location: "Sunshine Park",
    upvotes: 18,
  },
  {
    id: 7,
    title: "Illegal Dumping",
    description: "Someone has dumped construction materials on the side of the road.",
    category: "Sanitation",
    status: "Pending",
    date: "2023-06-08",
    location: "River Road, near bridge",
    upvotes: 9,
  },
  {
    id: 8,
    title: "Damaged Sidewalk",
    description: "Sidewalk has large cracks and uneven sections, creating a tripping hazard.",
    category: "Roads",
    status: "Pending",
    date: "2023-06-05",
    location: "456 Pine Avenue",
    upvotes: 7,
  },
  {
    id: 9,
    title: "Noise Complaint",
    description: "Construction site operating outside of permitted hours.",
    category: "Noise",
    status: "In Progress",
    date: "2023-06-01",
    location: "789 Construction Blvd",
    upvotes: 11,
  },
]

export default function IssuesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewType, setViewType] = useState("grid")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedStatuses, setSelectedStatuses] = useState([])

  // Get unique categories and statuses for filters
  const categories = Array.from(new Set(issues.map((issue) => issue.category)))
  const statuses = Array.from(new Set(issues.map((issue) => issue.status)))

  // Filter issues based on search query, categories, and statuses
  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      searchQuery === "" ||
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(issue.category)

    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(issue.status)

    return matchesSearch && matchesCategory && matchesStatus
  })

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Community Issues</h1>
        <p className="text-muted-foreground">Browse and search for reported issues in your community.</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search issues..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {(selectedCategories.length > 0 || selectedStatuses.length > 0) && (
                  <Badge variant="secondary" className="ml-1 rounded-full px-1">
                    {selectedCategories.length + selectedStatuses.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              {statuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={selectedStatuses.includes(status)}
                  onCheckedChange={() => toggleStatus(status)}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex rounded-md border">
            <Button
              variant={viewType === "grid" ? "default" : "ghost"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setViewType("grid")}
            >
              Grid
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "ghost"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setViewType("list")}
            >
              List
            </Button>
          </div>
        </div>
      </div>

      {/* Issues Display */}
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Issues</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        {["all", "pending", "in-progress", "resolved"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-0">
            {filteredIssues.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="text-xl font-semibold">No issues found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </CardContent>
              </Card>
            ) : viewType === "grid" ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredIssues
                  .filter(
                    (issue) =>
                      tab === "all" ||
                      (tab === "pending" && issue.status === "Pending") ||
                      (tab === "in-progress" && issue.status === "In Progress") ||
                      (tab === "resolved" && issue.status === "Resolved"),
                  )
                  .map((issue) => (
                    <Card key={issue.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle>{issue.title}</CardTitle>
                          <Badge
                            variant={
                              issue.status === "Resolved"
                                ? "default"
                                : issue.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {issue.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {issue.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{issue.description}</p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between pt-0">
                        <Badge variant="outline">{issue.category}</Badge>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                            </svg>
                            {issue.upvotes}
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredIssues
                  .filter(
                    (issue) =>
                      tab === "all" ||
                      (tab === "pending" && issue.status === "Pending") ||
                      (tab === "in-progress" && issue.status === "In Progress") ||
                      (tab === "resolved" && issue.status === "Resolved"),
                  )
                  .map((issue) => (
                    <Card key={issue.id}>
                      <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                        <div className="flex-1">
                          <div className="mb-1 flex items-center justify-between">
                            <h3 className="font-semibold">{issue.title}</h3>
                            <Badge
                              variant={
                                issue.status === "Resolved"
                                  ? "default"
                                  : issue.status === "In Progress"
                                    ? "secondary"
                                    : "outline"
                              }\
