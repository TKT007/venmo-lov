import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CountrySelectorProps {
  onCountrySelect: (country: string) => void;
}

export const CountrySelector = ({ onCountrySelect }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleValueChange = (value: string) => {
    setSelectedCountry(value);
    onCountrySelect(value);
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-card-foreground">
          What type of device are you using?
        </h2>
        <p className="text-sm text-muted-foreground">
          Please select your device so we can optimize rewards for you.
        </p>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <Select onValueChange={handleValueChange} value={selectedCountry}>
          <SelectTrigger className="w-full h-12 bg-card border-border">
            <SelectValue placeholder="Select your device" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="ios" className="h-12">
              iOS
            </SelectItem>
            <SelectItem value="android" className="h-12">
              Android
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
