import { ServiceCardProps } from "@/app/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(+service.price)}
            </p>

            <Button variant="secondary" size="sm">
              Reserve
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
