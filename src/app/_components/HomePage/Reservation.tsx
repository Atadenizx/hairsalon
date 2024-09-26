"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { useTranslations } from "next-intl";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    isStudent: false,
  });

  const t = useTranslations("ReservationPage");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckbox = () => {
    setFormData((prev) => ({ ...prev, isStudent: !prev.isStudent }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-white dark:bg-black">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name"> {t("nameLabel")}</Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("namePlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("emailLabel")}</Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("phoneLabel")}</Label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("phonePlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-start gap-3">
                    <Label htmlFor="date">{t("dateLabel")}</Label>
                    <Input
                      value={formData.date ? format(formData.date, "PPP") : ""}
                      type="text"
                      id="date"
                      placeholder={t("datePlaceholder")}
                      readOnly
                      className="cursor-pointer"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) =>
                      setFormData((prev) => ({ ...prev, date }))
                    }
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isStudent"
                checked={formData.isStudent}
                onCheckedChange={handleCheckbox}
              />
              <Label htmlFor="isStudent">{t("studentCheckbox")}</Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit" onClick={handleSubmit} className="w-full">
            {t("submitButton")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
