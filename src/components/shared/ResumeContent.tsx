import { FileText, Download } from "lucide-react";

import { resumeUrl } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeContent() {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-3">
        <FileText size={32} className="text-primary" />
        <p className="text-sm text-muted-foreground">
          Download a copy of my resume as a PDF.
        </p>
        <Button asChild>
          <a href={resumeUrl} download>
            <Download size={16} />
            Download Resume
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
