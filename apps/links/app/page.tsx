import {
  IconBookDownload,
  IconConfetti,
  IconDownload,
  IconPhotoDown,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Announcement } from "@/components/announcement";
import { Footer } from "@/components/footer";
import { MapCard } from "@/components/map";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as m from "@/lib/motion";
import { cn } from "@/lib/utils";

const SOCIAL_MEDIA = [
  {
    name: "Tiktok",
    username: "@narasi.siraya",
    href: "https://www.tiktok.com/@narasi.siraya",
    src: "/icons/tiktok.svg",
  },
  {
    name: "Instagram",
    username: "@narasi.siraya",
    href: "https://www.instagram.com/narasi.siraya",
    src: "/icons/instagram.svg",
  },
];

const LINKS = [
  {
    icon: IconBookDownload,
    iconClass: "",
    title: "Guidebook",
    href: "/assets/guidebook.pdf",
  },
  {
    icon: IconPhotoDown,
    iconClass: "",
    title: "Poster",
    href: "/assets/poster.png",
    download: true,
  },
  {
    icon: IconConfetti,
    iconClass: "text-red-700",
    title: "Open Recruitment",
    description: "Mari berjalan bersama dalam satu proses pengabdian.",
    href: "https://bit.ly/OprecNarasiraya",
    cardClass: "bg-red-100/20",
  },
];

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-10">
      <Announcement />
      <m.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card className="pt-0 shadow-sm">
          <div className="relative h-50">
            <Image
              src={"/background.webp"}
              alt="Background Narasiraya"
              fill
              className="pointer-events-none z-0 select-none object-cover"
            />
            <div className="absolute inset-0 z-10 bg-linear-to-t from-card via-card/10 to-transparent" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-serif text-2xl">
              <Avatar className={"ring-0"}>
                <AvatarImage
                  src="logo.svg"
                  alt="Logo Narasiraya"
                  className={"ring-0"}
                />
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              Narasiraya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              KKN-PPM UGM PERIODE II 2026 Kecamatan Simpang Raya, Kabupaten
              Banggai, Sulawesi Tengah ⛰️✨
            </CardDescription>
          </CardContent>
        </Card>
      </m.div>

      <section className="space-y-1">
        <m.h2
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="font-medium text-lg"
        >
          Tautan
        </m.h2>

        <div className="flex flex-col gap-4">
          {LINKS.map((link, i) => (
            <m.div
              key={link.title}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.05 + 0.05 * (i + 1),
              }}
            >
              <Link
                key={link.title}
                href={link.href}
                {...(link.download
                  ? {
                      download: link.download === true ? "" : link.download,
                    }
                  : {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
              >
                <Card
                  className={cn(
                    "group py-4 ring-foreground/10 transition-all hover:ring-4 active:scale-95",
                    link.cardClass,
                  )}
                >
                  <CardContent className="flex flex-row items-center gap-2 px-4">
                    <div className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-inherit p-1 shadow-sm ring ring-border">
                      <link.icon className={link.iconClass} />
                    </div>
                    <div className="flex flex-col justify-center gap-0 transition-transform group-hover:translate-x-1">
                      <h3 className="font-medium text-sm">{link.title}</h3>
                      {link.description && (
                        <p className="text-muted-foreground text-xs">
                          {link.description}
                        </p>
                      )}
                    </div>
                    {link.download && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="ml-auto hover:cursor-pointer"
                      >
                        <IconDownload />
                        <span className="max-[400px]:hidden">Unduh</span>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </m.div>
          ))}
        </div>
      </section>

      <section className="space-y-1">
        <m.h2
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="font-medium text-lg"
        >
          Media Sosial
        </m.h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          {SOCIAL_MEDIA.map((social, i) => (
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.05 + 0.05 * (i + 1),
              }}
              key={social.name}
            >
              <SocialMediaCard {...social} />
            </m.div>
          ))}
        </div>
      </section>

      <MapCard />
      <Footer />
    </main>
  );
}

function SocialMediaCard(props: {
  name: string;
  username: string;
  src: string;
  href: string;
}) {
  let colorClass: string = "";
  switch (props.name.toLowerCase()) {
    case "instagram":
      colorClass = "bg-[#3f60a7] hover:bg[#3f60a7]/80";
      break;
    case "tiktok":
      colorClass = "bg-black hover:bg-black/80";
      break;
    default:
      colorClass = "";
  }

  return (
    <Link
      href={props.href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-32 flex-col gap-2 rounded-2xl bg-background p-4 text-sm shadow-sm ring-1 ring-foreground/10 transition-all hover:cursor-pointer hover:ring-4 active:scale-95"
    >
      <div className="relative size-10 overflow-clip rounded-lg shadow-sm ring ring-border">
        <Image
          src={props.src}
          alt={props.name}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="mb-2">
        <h3>{props.name}</h3>
        <p className="text-muted-foreground text-xs">{props.username}</p>
      </div>

      <Button
        className={`mt-auto w-fit hover:cursor-pointer ${colorClass}`}
        size="sm"
      >
        Follow
      </Button>
    </Link>
  );
}
