"use client"

import { useState } from "react"
import { Filter, Layers, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample data
const issues = [
  {
    id: 1,
    title: "Broken Street Light",
    description: "The street light at Oak and Main has been out for weeks.",
    category: "Safety",
    status: "Resolved",
    location: "Oak St & Main St",
  },
  {
    id: 2,
    title: "Pothole on Elm Street",
    description: "Large pothole damaging vehicles. Needs immediate attention.",
    category: "Roads",
    status: "In Progress",
    location: "123 Elm St",
  },
  {
    id: 3,
    title: "Overflowing Trash Bin",
    description: "Public trash bin hasn't been emptied in days.",
    category: "Sanitation",
    status: "Pending",
    location: "Central Park, West Entrance",
  },
  {
    id: 4,
    title: "Graffiti on Public Building",
    description: "Inappropriate graffiti on the side of the community center.",
    category: "Vandalism",
    status: "Pending",
    location: "45 Community Ave",
  },
  {
    id: 5,
    title: "Fallen Tree Branch",
    description: "Large branch blocking sidewalk after storm.",
    category: "Hazard",
    status: "Resolved",
    location: "Maple Drive & 5th St",
  },
]

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)

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

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  return (
    <div className="flex h-[calc(100vh-65px)] flex-col">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className={`border-r bg-background transition-all duration-300 ${sidebarOpen ? "w-80" : "w-0"}`}>
          {sidebarOpen && (
            <div className="flex h-full flex-col">
              <div className="border-b p-4">
                <h2 className="text-xl font-bold">Issues Map</h2>
                <p className="text-sm text-muted-foreground">View and filter reported issues on the map</p>
              </div>
              <div className="border-b p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search issues..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={selectedCategories.includes(category) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Status</h3>
                    <div className="flex flex-wrap gap-2">
                      {statuses.map((status) => (
                        <Badge
                          key={status}
                          variant={selectedStatuses.includes(status) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleStatus(status)}
                        >
                          {status}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {filteredIssues.map((issue) => (
                    <Card key={issue.id} className="cursor-pointer hover:bg-muted/50">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">{issue.title}</CardTitle>
                          <Badge
                            variant={
                              issue.status === "Resolved"
                                ? "default"
                                : issue.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="ml-2"
                          >
                            {issue.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {issue.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">{issue.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Badge variant="outline">{issue.category}</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="relative flex-1 bg-muted">
          {/* Map Placeholder */}
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <h2 className="text-2xl font-bold">Map View</h2>
              <p className="text-muted-foreground">This is where the interactive map would be displayed</p>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute left-4 top-4 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 bg-background"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Filter className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10 bg-background">
                  <Layers className="h-4 w-4" />
                  <span className="sr-only">Map Layers</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Map Layers</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Street View</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Satellite</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Issue Markers</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Heat Map</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 right-4 rounded-lg border bg-background p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-medium">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-xs">Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="text-xs">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-xs">Resolved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
