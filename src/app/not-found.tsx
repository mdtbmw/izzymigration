import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="bg-surface-100 min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-xl mx-auto text-center space-y-6 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sovereign">
        <Badge variant="gold">404 Error</Badge>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-navy-900">
          Page Not Found
        </h1>

        <p className="text-sm text-body leading-relaxed max-w-md mx-auto">
          The sovereign dossier, programme, or page you requested could not be located. It may have been updated or relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
          <Button href="/programmes" variant="outline" size="md">
            <Search className="w-4 h-4 mr-2" />
            Browse Programmes
          </Button>
        </div>
      </div>
    </div>
  );
}
