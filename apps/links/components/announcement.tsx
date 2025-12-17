import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Announcement() {
  return (
    <div className="flex items-center justify-center gap-2 max-[400px]:flex-col max-[400px]:text-center">
      <p className="text-pretty text-sm">Open recruitment sudah dibuka!</p>
      <Button
        render={
          <Link
            href={"https://bit.ly/OprecNarasiraya"}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        size="xs"
        variant="outline"
        nativeButton={false}
      >
        Daftar <IconChevronRight />
      </Button>
    </div>
  );
}
