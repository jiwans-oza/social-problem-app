"use client"

import { useState } from "react"
import { CheckCircle, MoreHorizontal, Search, Trash, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

// Sample data
const issues = [
  {
    id: 1,
    title: "Broken Street Light",
    category: "Safety",
    status: "Resolved",
    date: "2023-05-15",
    location: "Oak St & Main St",
    reporter: "john.doe@example.com",
  },
  {
    id: 2,
    title: "Pothole on Elm Street",
    category: "Roads",
    status: "In Progress",
    date: "2023-06-02",
    location: "123 Elm St",
    reporter: "jane.smith@example.com",
  },
  {
    id: 3,
    title: "Overflowing Trash Bin",
    category: "Sanitation",
    status: "Pending",
    date: "2023-06-10",
    location: "Central Park, West Entrance",
    reporter: "mike.jones@example.com",
  },
  {
    id: 4,
    title: "Graffiti on Public Building",
    category: "Vandalism",
    status: "Pending",
    date: "2023-06-12",
    location: "45 Community Ave",
    reporter: "sarah.wilson@example.com",
  },
  {
    id: 5,
    title: "Fallen Tree Branch",
    category: "Hazard",
    status: "Resolved",
    date: "2023-05-20",
    location: "Maple Drive & 5th St",
    reporter: "david.brown@example.com",
  },
  {
    id: 6,
    title: "Broken Playground Equipment",
    category: "Parks",
    status: "In Progress",
    date: "2023-05-28",
    location: "Sunshine Park",
    reporter: "lisa.johnson@example.com",
  },
  {
    id: 7,
    title: "Illegal Dumping",
    category: "Sanitation",
    status: "Pending",
    date: "2023-06-08",
    location: "River Road, near bridge",
    reporter: "robert.miller@example.com",
  },
  {
    id: 8,
    title: "Damaged Sidewalk",
    category: "Roads",
    status: "Pending",
    date: "2023-06-05",
    location: "456 Pine Avenue",
    reporter: "emily.clark@example.com",
  },
  {
    id: 9,
    title: "Noise Complaint",
    category: "Noise",
    status: "In Progress",
    date: "2023-06-01",
    location: "789 Construction Blvd",
    reporter: "michael.white@example.com",
  },
  {
    id: 10,
    title: "Abandoned Vehicle",
    category: "Safety",
    status: "Pending",
    date: "2023-06-07",
    location: "Oak Street, near park",
    reporter: "jennifer.taylor@example.com",
  },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Get unique categories and statuses for filters
  const categories = Array.from(new Set(issues.map((issue) => issue.category)))
  const statuses = Array.from(new Set(issues.map((issue) => issue.status)))

  // Filter issues based on search query, category, and status
  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      searchQuery === "" ||
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.reporter.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "" || issue.category === selectedCategory
    const matchesStatus = selectedStatus === "" || issue.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleSelectAllRows = (checked: boolean) => {
    if (checked) {
      setSelectedRows(filteredIssues.map((issue) => issue.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, id])
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id))
    }
  }

  const handleDeleteSelected = () => {
    // In a real app, this would delete the selected rows
    console.log("Deleting rows:", selectedRows)
    setSelectedRows([])
    setIsDeleteDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage and moderate reported issues in your community.</p>
      </div>

      {/* Filters and Actions */}
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
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" className="gap-2" disabled={selectedRows.length === 0}>
              <Trash className="h-4 w-4" />
              Delete Selected
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete {selectedRows.length} selected issue
                {selectedRows.length !== 1 ? "s" : ""}? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteSelected}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Issues Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={filteredIssues.length > 0 && selectedRows.length === filteredIssues.length}
                  onCheckedChange={handleSelectAllRows}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIssues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No issues found.
                </TableCell>
              </TableRow>
            ) : (
              filteredIssues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(issue.id)}
                      onCheckedChange={(checked) => handleSelectRow(issue.id, !!checked)}
                      aria-label={`Select issue ${issue.id}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{issue.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{issue.category}</Badge>
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{issue.location}</TableCell>
                  <TableCell>{issue.reporter}</TableCell>
                  <TableCell>{issue.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            <span>Mark as Resolved</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            <span>Reject Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
