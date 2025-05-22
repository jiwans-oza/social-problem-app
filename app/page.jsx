import Link from "next/link"
import Image from "next/image"
import { AlertCircle, ArrowRight, CheckCircle, ClipboardList } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background px-4 py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Report Local Issues, <br />
              <span className="text-primary">Improve Your Community</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              ReportIt helps you report local problems, track their status, and see them resolved. Make your
              neighborhood better, together.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/report">
                  Report a Problem
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/issues">View Issues</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl md:aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Community reporting"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform makes it easy to report and resolve community issues in just three simple steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">1. Report</h3>
                <p className="text-muted-foreground">
                  Submit details about the issue you've found, including location and photos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <AlertCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">2. Review</h3>
                <p className="text-muted-foreground">Local authorities review and prioritize the reported issues.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">3. Resolve</h3>
                <p className="text-muted-foreground">
                  Track progress as issues are addressed and resolved by responsible parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Recent Reports</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See how community members are making a difference with ReportIt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Broken Street Light",
                description: "The street light at Oak and Main has been out for weeks, creating a safety hazard.",
                category: "Safety",
                status: "Resolved",
                user: "Sarah J.",
              },
              {
                title: "Pothole on Elm Street",
                description: "Large pothole damaging vehicles. Needs immediate attention.",
                category: "Roads",
                status: "In Progress",
                user: "Michael T.",
              },
              {
                title: "Overflowing Trash Bin",
                description: "Public trash bin hasn't been emptied in days. Creating unsanitary conditions.",
                category: "Sanitation",
                status: "Pending",
                user: "David L.",
              },
            ].map((report, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Issue+Image`}
                    alt={report.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="font-bold">{report.title}</h3>
                    <Badge
                      variant={
                        report.status === "Resolved"
                          ? "default"
                          : report.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                      className="ml-2"
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{report.category}</Badge>
                    <span className="text-xs text-muted-foreground">Reported by {report.user}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold">ReportIt</span>
              </div>
              <p className="text-sm text-muted-foreground">Making communities better, one report at a time.</p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="text-muted-foreground hover:text-foreground">
                    Report a Problem
                  </Link>
                </li>
                <li>
                  <Link href="/issues" className="text-muted-foreground hover:text-foreground">
                    Issues
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">contact@reportit.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Main St, Anytown, USA</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ReportIt. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
