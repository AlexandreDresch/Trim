import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/" className="flex items-center gap-px">
          <Image
            src="/images/scissor.svg"
            alt="Scissor"
            width={40}
            height={40}
            className="size-9"
          />

          <h1 className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-2xl font-bold text-transparent text-white">
            TRIM
          </h1>
        </Link>

        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
