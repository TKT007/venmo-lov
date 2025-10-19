import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Venmo_logo.png/1024px-Venmo_logo.png" 
          alt="Venmo Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
