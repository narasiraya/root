import { IconCopyright } from "@tabler/icons-react";
import * as m from "@/lib/motion";

export function Footer() {
  return (
    <m.footer
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
      className="flex justify-between gap-2"
    >
      <p className="flex items-center gap-2 text-muted-foreground text-xs">
        <IconCopyright className="size-4" />
        KKN-PPM UGM Simpang Raya 2026
      </p>
    </m.footer>
  );
}
