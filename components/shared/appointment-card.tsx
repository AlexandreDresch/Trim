import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export default function AppointmentCard() {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">Confirmed</Badge>

          <h3 className="font-semibold">Haircut</h3>

          <div className="flex items-center gap-1">
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-sm">Vintage Barbershop</p>
          </div>
        </div>

        <div className="flex w-1/3 flex-col items-center justify-center border-l-[1px] border-solid">
          <p className="text-sm">August</p>
          <p className="text-2xl">5th</p>
          <p className="text-sm">10:00 AM</p>
        </div>
      </CardContent>
    </Card>
  );
}
