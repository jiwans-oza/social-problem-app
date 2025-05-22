import Link from "next/link"
import Image from "next/image"
import { AlertCircle, ArrowRight, CheckCircle, ClipboardList, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About <span className="text-primary">ReportIt</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to empower communities by providing a platform for citizens to report local issues and
              track their resolution.
            </p>
            <div className="mt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/report">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
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

      {/* Mission Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We believe that every community deserves a voice and the tools to create positive change.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <AlertCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Identify Issues</h3>
                <p className="text-muted-foreground">
                  Provide a platform for citizens to easily report problems in their community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect Communities</h3>
                <p className="text-muted-foreground">
                  Bridge the gap between citizens and local authorities to facilitate faster resolutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Drive Change</h3>
                <p className="text-muted-foreground">
                  Create accountability and transparency in the process of resolving community issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the dedicated individuals working to make ReportIt a reality.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "Former urban planner with a passion for community development.",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Software engineer with expertise in civic tech solutions.",
              },
              {
                name: "Aisha Patel",
                role: "Community Manager",
                bio: "Community organizer focused on citizen engagement.",
              },
              {
                name: "David Rodriguez",
                role: "Product Manager",
                bio: "UX specialist with a background in public service.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${member.name.charAt(0)}`}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="h-24 w-24 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Find answers to common questions about ReportIt.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I report an issue?",
                answer:
                  "You can report an issue by creating an account and clicking on the 'Report a Problem' button. Fill out the form with details about the issue, including location and photos if available.",
              },
              {
                question: "Who handles the reported issues?",
                answer:
                  "Reported issues are reviewed by our team and then forwarded to the appropriate local authorities or departments responsible for addressing the specific type of problem.",
              },
              {
                question: "How long does it take for an issue to be resolved?",
                answer:
                  "Resolution times vary depending on the nature and complexity of the issue. Some problems can be fixed within days, while others might take weeks. You can track the status of your report on your dashboard.",
              },
              {
                question: "Is ReportIt available in my area?",
                answer:
                  "ReportIt is currently available in select cities and expanding rapidly. Check our coverage map or contact us to see if your community is supported.",
              },
              {
                question: "Is my personal information kept private?",
                answer:
                  "Yes, we take privacy seriously. Your personal information is protected and only shared with relevant authorities when necessary to resolve the reported issue.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h3 className="mb-2 text-lg font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to improve your community?</h2>
            <p className="mx-auto max-w-2xl">Join thousands of citizens making a difference in their neighborhoods.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/report">
                  Report a Problem
                  <ClipboardList className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground">
                <Link href="/login">Create an Account</Link>
              </Button>
            </div>
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
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="text-muted-foreground hover:text-foreground">
                    Report a Problem
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
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
