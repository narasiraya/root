import { Badge } from "./ui/badge";

export function Announcement() {
  return (
    <div className="flex items-center justify-center gap-2 max-[400px]:flex-col max-[400px]:text-center">
      <Badge variant="destructive">Info</Badge>
      <p className="text-pretty text-sm">Open recruitment sudah ditutup!</p>
    </div>
  );
}
