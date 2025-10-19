import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface FinalStepsProps {
  onComplete: () => void;
}

export const FinalSteps = ({ onComplete }: FinalStepsProps) => {
  const steps = [
    "Click on Start Earning Now",
    "Complete at least 2–5 suggested deals",
    "Claim your deposit & repeat anytime"
  ];

  const descriptions = [
    "The button below",
    "Most people get $500+ in Venmo deposits completing just a few deals!", 
    "Many top users complete multiple deals for bonus payouts"
  ];


  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-card-foreground mb-2">
          Almost there!
        </h2>
        <p className="text-sm text-muted-foreground">
          Just a few more steps to start earning
        </p>
      </div>

      <div className="space-y-4">
  {steps.map((step, index) => (
    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-card-foreground">{step}</span>
        <span className="text-xs text-muted-foreground">{descriptions[index]}</span>
      </div>
    </div>
  ))}
</div>

      <Button 
        onClick={onComplete}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
      >
        Start Earning Now!
      </Button>
    </div>
  );
};
