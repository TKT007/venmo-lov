import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <img 
          src="/venmo-logo.png" 
          alt="Venmo Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};