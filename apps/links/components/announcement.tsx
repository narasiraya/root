import { Badge } from "./ui/badge";

export function Announcement() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Badge variant="success">Info</Badge>
      <p className="text-sm">Open Recruitment is coming soon!</p>
    </div>
  );
}
