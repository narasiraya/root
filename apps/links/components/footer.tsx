import { IconCopyright } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="flex justify-between gap-2">
      <p className="flex items-center gap-2 text-muted-foreground text-xs">
        <IconCopyright className="size-4" />
        KKN-PPM UGM Simpang Raya 2026
      </p>
    </footer>
  );
}
