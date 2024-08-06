import AppointmentCard from "@/components/shared/appointment-card";
import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      <section className="space-y-3 p-5">
        <div>
          <h2 className="text-xl font-semibold">Hello, Name</h2>

          <p>Monday, August 5th</p>
        </div>

        <div className="flex gap-2">
          <Input placeholder="Search..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
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
    </div>
  );
}
