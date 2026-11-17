import {
  BotIcon,
  FileTextIcon,
  GlobeIcon,
  PaletteIcon,
  PlayIcon,
  PlusIcon,
  WebhookIcon,
} from "lucide-react";

import Crawlbot from "../components/logos/crawlbot";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Stats from "../components/sections/stats/default";
import { Badge } from "../components/ui/badge";
import { LayoutLines } from "../components/ui/layout-lines";
import Navigation from "../components/ui/navigation";
import { siteConfig } from "../config/site";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar
        logo={<Crawlbot />}
        name="Crawlbot AI"
        mobileLinks={[
          { text: "How it works", href: "#how-it-works" },
          { text: "Features", href: "#features" },
          { text: "FAQ", href: "#faq" },
        ]}
        actions={[
          { text: "Sign in", href: "#sign-in", isButton: false },
          {
            text: "Start crawling",
            href: "#get-started",
            isButton: true,
            variant: "default",
          },
        ]}
        customNavigation={
          <Navigation
            menuItems={[
              { title: "Getting started", content: "default" },
              { title: "Crawlbot features", content: "components" },
              { title: "Documentation", isLink: true, href: "#how-it-works" },
            ]}
            logo={<Crawlbot />}
            logoTitle="Crawlbot AI"
            logoDescription="Build a helpful AI chatbot from your website, documents, and business knowledge."
            logoHref="#get-started"
            introItems={[
              {
                title: "Introduction",
                href: "#how-it-works",
                description: "See how Crawlbot turns your knowledge into clear answers.",
              },
              {
                title: "Create a property",
                href: "#get-started",
                description: "Set up a separate chatbot for each website or project.",
              },
              {
                title: "Add data sources",
                href: "#features",
                description: "Connect URLs, PDFs, spreadsheets, and supported files.",
              },
            ]}
            components={[
              {
                title: "Properties",
                href: "#how-it-works",
                description: "Manage separate chatbots and knowledge bases from one account.",
              },
              {
                title: "Data sources",
                href: "#features",
                description: "Crawl websites and process documents into useful answers.",
              },
              {
                title: "Widget settings",
                href: "#features",
                description: "Customize the chatbot appearance and visitor experience.",
              },
              {
                title: "Conversations",
                href: "#features",
                description: "Review visitor questions and understand what they need.",
              },
              {
                title: "Webhooks",
                href: "#features",
                description: "Connect chatbot events to the tools your team already uses.",
              },
              {
                title: "AI behavior",
                href: "#faq",
                description: "Set the tone, personality, language, and response guidelines.",
              },
            ]}
          />
        }
      />
      <Hero
        badge={
          <Badge variant="outline" className="animate-appear" style={{marginTop: '-100px'}}>
            <span className="text-muted-foreground">Your knowledge, ready to talk</span>
            <a href="#how-it-works" className="flex items-center gap-1">
              See how it works
            </a>
          </Badge>
        }
        title="Your website has answers."
        description="Create an AI chatbot from your website, PDFs, spreadsheets, and more. Give every visitor a clear, helpful answer without adding another tab to your team."
        query={
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                href: "#get-started",
                label: "Start crawling",
                icon: <PlayIcon className="size-4 fill-current" />,
                className:
                  "bg-brand text-brand-foreground hover:bg-brand/90 shadow-orange-500/20 text-white",
              },
              {
                href: "#get-started",
                label: "Add property",
                icon: <PlusIcon className="size-4" />,
                className:
                  "border-border/80 bg-background/90 text-foreground hover:bg-muted border shadow-orange-500/5 backdrop-blur",
              },
            ].map((button) => (
              <div key={button.label} className="group relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-xl bg-[linear-gradient(90deg,transparent_0%,var(--brand)_28%,#45d6a5_48%,#62a5ff_62%,transparent_100%)] bg-[length:200%_100%] opacity-30 blur-[10px] animate-[crawlbot-border_7s_linear_infinite] transition-all group-hover:opacity-75 group-hover:animate-[crawlbot-border_2.2s_linear_infinite]"
                />
                <a
                  href={button.href}
                  className={`relative inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-lg transition-colors ${button.className}`}
                >
                  {button.icon}
                  {button.label}
                </a>
              </div>
            ))}
          </div>
        }
        // buttons={[
        //   { href: "#get-started", text: "Create your chatbot", variant: "default" },
        //   { href: "#how-it-works", text: "Explore Crawlbot", variant: "glow" },
        // ]}
        mockup={
          <div className="bg-background/90 grid min-h-[360px] grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-[220px_1fr] lg:grid-cols-[220px_minmax(0,1fr)_minmax(360px,1fr)]">
            <div className="border-border/60 hidden border-r p-5 sm:block">
              <div className="mb-8 flex items-center gap-2 text-sm font-semibold">
                <span className="bg-brand size-2 rounded-full" />
                Workspace
              </div>
              <div className="space-y-3 text-xs">
                <div className="bg-brand/10 text-brand rounded-md px-3 py-2">Overview</div>
                <div className="text-muted-foreground px-3 py-2">Data sources</div>
                <div className="text-muted-foreground px-3 py-2">Conversations</div>
                <div className="text-muted-foreground px-3 py-2">Widget settings</div>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-5 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-xs">Property</p>
                  <h3 className="mt-1 text-lg font-semibold">Acme Help Center</h3>
                </div>
                <Badge variant="outline" className="border-brand/30 text-brand">Crawled</Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Sources", "12", GlobeIcon],
                  ["Answers", "1,284", BotIcon],
                  ["Conversations", "368", WebhookIcon],
                ].map(([label, value, Icon]) => (
                  <div key={label as string} className="border-border/70 rounded-lg border p-4">
                    <Icon className="text-brand mb-5 size-4" />
                    <p className="text-2xl font-semibold">{value as string}</p>
                    <p className="text-muted-foreground mt-1 text-xs">{label as string}</p>
                  </div>
                ))}
              </div>
              <div className="border-border/70 bg-muted/20 rounded-lg border p-4">
                <p className="text-muted-foreground mb-3 text-xs">Ask your knowledge base</p>
                <div className="bg-background flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                  How do I update my subscription?
                  <span className="bg-brand text-brand-foreground rounded px-2 py-1 text-xs">Ask</span>
                </div>
              </div>
            </div>
              <div className="border-border/60 bg-muted/10 hidden flex-col gap-4 border-l p-5 lg:flex">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Live conversation</p>
                  <span className="bg-brand/10 text-brand rounded-full px-2 py-1 text-[10px]">Online</span>
                </div>
                <div className="bg-muted/30 text-muted-foreground rounded-lg rounded-tl-sm p-3 text-xs leading-relaxed">
                  How can I change my plan?
                </div>
                <div className="bg-brand/10 text-foreground rounded-lg rounded-tr-sm p-3 text-xs leading-relaxed">
                  You can update your plan from Billing in your account settings. Want me to walk you through it?
                </div>
                <div className="border-border/70 text-muted-foreground mt-auto flex items-center gap-2 rounded-md border px-3 py-2 text-[10px]">
                  <BotIcon className="text-brand size-3" />
                  Answered from your knowledge base
                </div>
              </div>
          </div>
        }
      />
      <Logos
        title="Bring your knowledge from anywhere"
        badge={
          <Badge variant="outline" className="border-brand/30 text-brand">
            Connect your sources in minutes
          </Badge>
        }
        logos={[
          <div key="web" className="border-border/70 bg-background/70 flex min-w-[190px] items-center gap-3 rounded-xl border px-4 py-3 text-left shadow-sm">
            <GlobeIcon className="text-brand size-5" />
            <div><p className="text-sm font-semibold">Websites</p><p className="text-muted-foreground text-xs">Live pages & docs</p></div>
          </div>,
          <div key="docs" className="border-border/70 bg-background/70 flex min-w-[190px] items-center gap-3 rounded-xl border px-4 py-3 text-left shadow-sm">
            <FileTextIcon className="text-brand size-5" />
            <div><p className="text-sm font-semibold">Documents</p><p className="text-muted-foreground text-xs">PDFs & spreadsheets</p></div>
          </div>,
          <div key="custom" className="border-border/70 bg-background/70 flex min-w-[190px] items-center gap-3 rounded-xl border px-4 py-3 text-left shadow-sm">
            <WebhookIcon className="text-brand size-5" />
            <div><p className="text-sm font-semibold">Integrations</p><p className="text-muted-foreground text-xs">Webhooks & workflows</p></div>
          </div>,
        ]}
      />
      <div id="features">
        <Items
          title="Everything your chatbot needs to be genuinely useful"
          items={[
            { title: "Crawl any source", description: "Add website URLs, PDFs, Excel files, and supported data sources in a few clicks.", icon: <GlobeIcon className="size-5 stroke-1" /> },
            { title: "One knowledge base", description: "Crawlbot processes your content into a focused knowledge base for each property.", icon: <FileTextIcon className="size-5 stroke-1" /> },
            { title: "Shape the conversation", description: "Set the tone, language, personality, and answering guidelines for your AI.", icon: <BotIcon className="size-5 stroke-1" /> },
            { title: "Match your brand", description: "Customize colors, position, size, welcome message, and opening animation.", icon: <PaletteIcon className="size-5 stroke-1" /> },
            { title: "See what visitors ask", description: "Review conversations and spot the questions your customers ask most.", icon: <WebhookIcon className="size-5 stroke-1" /> },
            { title: "Connect your workflow", description: "Send events to external tools with webhook integrations in real time.", icon: <WebhookIcon className="size-5 stroke-1" /> },
          ]}
        />
      </div>
      <Stats
        items={[
          { label: "one account", value: "∞", description: "properties for separate websites, projects, or businesses" },
          { label: "many formats", value: "4+", description: "ways to add knowledge, from URLs to documents" },
          { label: "always on", value: "24/7", description: "answers for visitors, even when your team is offline" },
          { label: "your voice", value: "100%", description: "control over behavior, tone, and widget appearance" },
        ]}
      />
      <div id="how-it-works">
        <Items
          title="From scattered information to helpful answers"
          items={[
            { title: "1. Create a property", description: "Give each website or business its own chatbot, sources, and settings.", icon: <GlobeIcon className="size-5 stroke-1" /> },
            { title: "2. Add your sources", description: "Connect URLs and upload the content your visitors need to understand.", icon: <FileTextIcon className="size-5 stroke-1" /> },
            { title: "3. Let Crawlbot learn", description: "Crawlbot extracts and processes your content into a searchable knowledge base.", icon: <BotIcon className="size-5 stroke-1" /> },
            { title: "4. Share the widget", description: "Customize the experience and add your chatbot to your website.", icon: <PaletteIcon className="size-5 stroke-1" /> },
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          title="Answers before you even have to ask"
          items={[
            { question: "What is a property?", answer: <p className="text-muted-foreground mb-4 max-w-[640px]">A property is an individual website, business, or project with its own chatbot, knowledge base, data sources, and customization settings.</p> },
            { question: "What can I use as a data source?", answer: <p className="text-muted-foreground mb-4 max-w-[640px]">You can add website URLs, PDF documents, Excel files, and other supported formats. Crawlbot automatically crawls, extracts, and processes them.</p> },
            { question: "Can I control how the AI responds?", answer: <p className="text-muted-foreground mb-4 max-w-[640px]">Yes. Define the chatbot&apos;s instructions, tone, personality, language preferences, and answering guidelines so every response fits your business.</p> },
            { question: "Can Crawlbot connect to other tools?", answer: <p className="text-muted-foreground mb-4 max-w-[640px]">Yes. Webhook integrations can send conversation events to external applications for lead capture, support workflows, appointment requests, and more.</p> },
          ]}
        />
      </div>
      <div id="get-started">
        <CTA title="Turn your knowledge into your next best support agent." buttons={[{ href: "#sign-in", text: "Start with Crawlbot", variant: "default" }]} />
      </div>
      <Footer
        logo={<Crawlbot />}
        name="Crawlbot AI"
        columns={[
          { title: "Product", links: [{ text: "How it works", href: "#how-it-works" }, { text: "Features", href: "#features" }, { text: "FAQ", href: "#faq" }] },
          { title: "Resources", links: [{ text: "Getting started", href: "#get-started" }, { text: "Documentation", href: "#how-it-works" }] },
          { title: "Contact", links: [{ text: "Email us", href: siteConfig.links.email }, { text: "Sign in", href: "#sign-in" }] },
        ]}
        copyright="© 2026 Crawlbot AI. All rights reserved."
        policies={[{ text: "Privacy Policy", href: "#" }, { text: "Terms of Service", href: "#" }]}
      />
    </main>
  );
}
