import { BarbershopCardProps } from "@/app/types";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { StarIcon } from "lucide-react";

export default function BarbershopCard({ barbershop }: BarbershopCardProps) {
  return (
    <Card className="min-w-[170px]">
      <CardContent className="p-0">
        <div className="relative h-[160px] w-full">
          <Image
            fill
            className="rounded-lg object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs font-semibold">5.0</span>
          </Badge>
        </div>

        <div className="px-2 py-3 pb-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>

          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>

          <Button className="mt-3 w-full" variant="secondary">
            Reserve
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
