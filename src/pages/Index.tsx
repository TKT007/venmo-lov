import { useState } from "react";
import { RewardLogo } from "@/components/RewardLogo";
import { ProgressBar } from "@/components/ProgressBar";
import { CountrySelector } from "@/components/CountrySelector";
import { FinalSteps } from "@/components/FinalSteps";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const { toast } = useToast();

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setTimeout(() => {
      setCurrentStep(1);
    }, 500);
  };

const handleComplete = () => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('CompleteRegistration');
  }

  const baseUrl = "https://glitchy.go2cloud.org/aff_c?offer_id=2863&aff_id=1497&source=DIRLAND-";
  const finalUrl = addSourceToUrl(baseUrl);
  
  window.location.href = finalUrl;
};
  
  const progress = currentStep === 0 ? 25 : currentStep === 1 ? 75 : 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-lg p-8 space-y-8">
            {/* Show RewardLogo above Progress Section only in final step */}
            {currentStep === 1 && (
              <div className="text-center">
                <RewardLogo className="mb-4" />
              </div>
            )}

            {/* Progress Section */}
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Reward Progress</p>
              </div>
              <ProgressBar progress={progress} />
            </div>

            {/* Content */}
            <div className="min-h-[200px] flex items-center justify-center">
              {currentStep === 0 && (
                <CountrySelector onCountrySelect={handleCountrySelect} />
              )}
              {currentStep === 1 && (
                <FinalSteps onComplete={handleComplete} />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
