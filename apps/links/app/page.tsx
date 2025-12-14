import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-md flex-col gap-4 px-6 py-16">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-lg">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
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

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="https://www.tiktok.com/@narasi.siraya"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm transition-all hover:ring-4 ring-accent hover:cursor-pointer"
          >
            <IconBrandTiktok className="group-hover:-translate-y-1 transition-all ease-out group-hover:text-[#ff0050]" />
            <p className="text-muted-foreground">Tiktok</p>
          </Link>
          <Link
            href="https://www.instagram.com/narasi.siraya"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-background items-center gap-2 ring-accent rounded-2xl border p-4 text-sm hover:ring-4 transition-all hover:cursor-pointer"
          >
            <IconBrandInstagram className="group-hover:-translate-y-1 transition-all ease-out group-hover:text-[#5560d6]" />
            <p className="text-muted-foreground">Instagram</p>
          </Link>
        </div>
      </main>

      <Image
        src={"/background.webp"}
        alt="Background Narasiraya"
        fill
        className="object-cover pointer-events-none -z-10 opacity-50"
      />
      <div className="fixed bottom-0 inset-x-0 h-screen bg-gradient-to-t from-background via-background -z-10 to-transparent" />
    </>
  );
}
