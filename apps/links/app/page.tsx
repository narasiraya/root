import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { MapCard } from "@/components/map";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-md flex-col gap-4 px-6 py-16">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-serif text-lg text-xl">
              <Avatar className={"ring-0"}>
                <AvatarImage
                  src="logo.svg"
                  alt="@shadcn"
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

        <section className="space-y-1">
          <h2 className="font-medium text-sm">Media Sosial</h2>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="https://www.tiktok.com/@narasi.siraya"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-2xl border bg-background p-4 text-sm ring-accent transition-all hover:cursor-pointer hover:ring-4"
            >
              <IconBrandTiktok className="group-hover:-translate-y-1 transition-all ease-out group-hover:text-[#ff0050]" />
              <p className="text-muted-foreground">Tiktok</p>
            </Link>
            <Link
              href="https://www.instagram.com/narasi.siraya"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-2xl border bg-background p-4 text-sm ring-accent transition-all hover:cursor-pointer hover:ring-4"
            >
              <IconBrandInstagram className="group-hover:-translate-y-1 transition-all ease-out group-hover:text-[#5560d6]" />
              <p className="text-muted-foreground">Instagram</p>
            </Link>
          </div>
        </section>

        <MapCard />
      </main>

      <Image
        src={"/background.webp"}
        alt="Background Narasiraya"
        fill
        className="-z-10 pointer-events-none object-cover opacity-50"
      />
      <div className="-z-10 fixed inset-x-0 bottom-0 h-screen bg-linear-to-t from-background via-background to-transparent" />
    </>
  );
}
