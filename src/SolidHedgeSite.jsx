import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function SolidHedgeSite() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10 font-sans">
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-gray-800">Solid Hedge</h1>
        <p className="text-xl text-green-800 mt-2 font-medium">
          Guarding Your Mission. Securing Your Future.
        </p>
        <p className="text-md text-gray-600 mt-1 max-w-2xl mx-auto">
          At Solid Hedge, we protect what matters most to small organizations —
          their people, their data, and their mission.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Our Services</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Managed IT Services & vCIO Support</li>
              <li>✔ Cybersecurity & Compliance (HIPAA, SOC, etc.)</li>
              <li>✔ Microsoft 365, Intune & Cloud Migrations</li>
              <li>✔ Endpoint & Email Protection (Defender, Barracuda)</li>
              <li>✔ Infrastructure Design: Networks, Wi-Fi, Firewalls</li>
              <li>✔ SharePoint, OneDrive & Collaboration Optimization</li>
              <li>✔ Device Management for Remote Teams</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">How-To Guides</h2>
            <ul className="space-y-2 text-gray-700">
              <li>🛡 How to set up 2FA for Microsoft 365</li>
              <li>📧 Spotting and reporting phishing emails</li>
              <li>🌐 Securing your home or office Wi-Fi</li>
              <li>💾 Backing up business-critical data</li>
              <li>🔒 Safely using public Wi-Fi while working remotely</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Latest in Cybersecurity</h2>
            <p className="text-gray-700">
              (Coming soon: Real-time feed with cybersecurity news and alerts curated for small businesses.)
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Contact Us</h2>
            <div className="flex items-center space-x-2">
              <Mail className="text-green-700" />
              <span className="text-gray-700">info@solidhedge.com</span>
            </div>
            <form className="grid grid-cols-1 gap-4 max-w-xl">
              <Input placeholder="Your Name" className="rounded-xl border-gray-300" />
              <Input placeholder="Your Email" className="rounded-xl border-gray-300" />
              <Input placeholder="How can we help?" className="rounded-xl border-gray-300" />
              <Button type="submit" className="bg-green-800 hover:bg-green-900 text-white rounded-xl">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>Reliable IT & Security for Small Teams Doing Big Work.</p>
        <p>&copy; {new Date().getFullYear()} Solid Hedge. All rights reserved.</p>
      </footer>
    </div>
  );
}
