import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { ChevronLeft } from "lucide-react";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="min-h-screen w-full bg-background py-24 lg:py-32"
    >
      <div className="w-full px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("faq.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("faq.subtitle")}
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <Accordion
              variant="splitted"
              className="text-left"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <AccordionItem
                  key={i}
                  title={t(`faq.q${i}`)}
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${
                        isOpen ? "-rotate-90" : "rotate-0"
                      }`}
                    />
                  )}
                  classNames={{
                    base: "group",
                    title: "text-lg font-medium",
                    content:
                      "px-6 pb-6 pt-4 rounded-xl " +
                      "bg-muted/50 backdrop-blur-sm " +
                      "data-[open=false]:bg-transparent",
                  }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`faq.a${i}`)}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
