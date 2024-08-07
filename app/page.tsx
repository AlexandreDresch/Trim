import AppointmentCard from "@/components/shared/appointment-card";
import BarbershopCard from "@/components/shared/barbershop-card";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { quickSearchOptions } from "./constants";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <Header />

      <section className="space-y-3 px-5">
        <div>
          <h2 className="text-xl font-semibold">Hello, Name</h2>

          <p>Monday, August 5th</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input placeholder="Search..." />
            <Button size="icon">
              <SearchIcon />
            </Button>
          </div>

          <div className="flex gap-3 overflow-x-scroll [&::webkit-scrollbar]:hidden">
            {quickSearchOptions.map((option) => (
              <Button className="gap-1" key={option.label}>
                <Image
                  src={option.icon}
                  alt={option.label}
                  width={16}
                  height={16}
                />

                <span className="text-sm">{option.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative h-[150px] w-full">
          <Image
            src="/images/banner-01.png"
            className="rounded-md object-cover"
            fill
            priority
            alt="The best barbers, waiting for you."
          />
        </div>
      </section>

      <section className="space-y-3 px-5">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground">
          Upcoming Appointments
        </h2>

        <AppointmentCard />
      </section>

      <section className="space-y-3 px-5">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground">
          Recommended
        </h2>

        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => {
            return (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
      </section>

      <section className="space-y-3 px-5">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground">
          Popular
        </h2>

        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => {
            return (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
