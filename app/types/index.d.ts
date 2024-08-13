import { Barbershop, BarbershopService } from "@prisma/client";

export interface BarbershopCardProps {
  barbershop: Barbershop;
}

export interface QuickSearchOption {
  label: string;
  icon: string;
}

export interface BarbershopPageProps {
  params: {
    id: string;
  };
}

export interface ServiceCardProps {
  service: BarbershopService;
}
