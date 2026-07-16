import { FileText, Eye } from "lucide-react";

import { resumeUrl } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeContent() {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-3">
        <FileText size={32} className="text-primary" />
        <p className="text-sm text-muted-foreground">View a copy of my resume.</p>
        <Button asChild>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            <Eye size={16} />
            View Resume
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
