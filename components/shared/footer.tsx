import React from "react";
import { Card, CardContent } from "../ui/card";

export default function Footer() {
  return (
    <footer>
      <Card>
        <CardContent className="flex justify-center px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright{" "}
            <span className="font-semibold">TRIM Barbershops</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
}
