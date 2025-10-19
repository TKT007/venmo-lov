import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface FinalStepsProps {
  onComplete: () => void;
}

export const FinalSteps = ({ onComplete }: FinalStepsProps) => {
  const steps = [
    "Complete 2-3 required deals",
    "Provide a valid email address",
    "Ensure you are 18 years or older"
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
            <span className="text-sm font-medium text-card-foreground">{step}</span>
          </div>
        ))}
      </div>

      <a 
        href="https://fb.track-conv.shop/visit/0edb44ab-d5e7-4112-a54d-9db1d0812e81"
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-md flex items-center justify-center"
      >
        Continue to Claim Reward
      </a>
    </div>
  );
};
