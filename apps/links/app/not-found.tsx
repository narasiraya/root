import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-lg flex-col items-center justify-center gap-1 px-6 py-10">
      <h2 className="-rotate-2 font-serif text-7xl">404</h2>
      <h1 className="text-muted-foreground">
        This page isn't in our solar system
      </h1>
      <Button
        render={<Link href="/" />}
        nativeButton={false}
        variant="outline"
        className="mt-3"
      >
        Kembalikan aku
      </Button>
    </main>
  );
};

export default NotFoundPage;
