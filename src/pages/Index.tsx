import { useEffect } from 'react';
import { Mail, Zap } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import DeliveryAnimation from '@/components/DeliveryAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from '@/assets/care-e-new-logo.jpg';

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* Logo & Main Headline */}
          <div className="fade-in space-y-6">
            <div className="inline-flex items-center justify-center mb-6">
              <img 
                src={logo} 
                alt="CARE-E Logo - AI-Powered Emergency Medical Logistics and Cold-Chain Delivery Service" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain animate-pulse-glow"
                width="160"
                height="160"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              CARE-E: AI-Powered Emergency Medical Logistics
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionizing emergency medical logistics with <strong>AI-powered cold-chain delivery</strong>. Fast, reliable, life-saving logistics for medical supplies and emergency response.
            </p>
          </div>

          {/* Tagline */}
          <div className="fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <Zap className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-lg md:text-xl font-semibold text-foreground">
                Fast, Reliable, Life-Saving Logistics
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Coming Soon Section */}
          <section className="space-y-6" aria-labelledby="coming-soon-heading">
            <h2 id="coming-soon-heading" className="text-xl md:text-2xl font-semibold text-foreground fade-in">
              CARE-E Launching Soon
            </h2>
            <div className="fade-in">
              <div className="card-gradient rounded-2xl p-8 md:p-12 space-y-6">
                <p className="text-4xl md:text-6xl font-bold text-gradient">
                  Coming Soon
                </p>
                <div aria-label="Delivery animation showing CARE-E emergency medical transport">
                  <DeliveryAnimation />
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  <strong>CARE-E</strong> is the next-generation emergency medical delivery platform, combining artificial intelligence with cold-chain logistics to ensure critical medical supplies reach their destination safely and swiftly.
                </p>
              </div>
            </div>
          </section>

          {/* Email Signup Section */}
          <section className="space-y-6" aria-labelledby="waitlist-heading">
            <div className="fade-in">
              <h2 id="waitlist-heading" className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Be the First to Experience CARE-E
              </h2>
              <p className="text-muted-foreground mb-6">
                Join the CARE-E waitlist and get early access to revolutionary emergency medical logistics when we launch. Be part of the future of healthcare delivery.
              </p>
            </div>
            <EmailSignup />
          </section>

          {/* About CARE-E Section */}
          <section className="fade-in" aria-labelledby="about-heading">
            <div className="card-gradient rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h2 id="about-heading" className="text-xl font-semibold text-foreground mb-4">
                What is CARE-E?
              </h2>
              <p className="text-muted-foreground text-left leading-relaxed">
                <strong>CARE-E</strong> is an innovative emergency medical logistics platform that leverages artificial intelligence to optimize cold-chain delivery routes for time-sensitive medical supplies. Our AI-powered system ensures that vaccines, blood products, organs, and critical medications are transported with precision timing and temperature control, saving lives through technology-driven healthcare logistics.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="fade-in" aria-labelledby="faq-heading">
            <div className="max-w-3xl mx-auto">
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="card-gradient rounded-2xl p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      What is CARE-E?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      CARE-E is an emergency cold-chain delivery service that transports blood, vaccines, and critical medical supplies quickly and safely across Chennai.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      Who can use CARE-E's services?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Hospitals, clinics, blood banks, diagnostic labs, and other healthcare facilities can request on-demand deliveries through our app or web portal.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      How fast is the delivery?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Most deliveries reach within 30–60 minutes, depending on distance and traffic.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      How do you keep items temperature-controlled?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We use smart IoT-enabled cold boxes that maintain 2–8°C and continuously track temperature during transit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      What items can CARE-E deliver?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Blood units, vaccines, lab samples, emergency medicines, and other temperature-sensitive medical supplies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      Is the service available 24/7?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. CARE-E operates round-the-clock for emergency medical requests.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      How can I request a delivery?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Use the CARE-E mobile app, web dashboard, or partner hospital login to place a request in seconds.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      Are deliveries tracked in real time?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. Hospitals can see live GPS tracking, temperature data, and status updates for every order.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      Do riders follow medical handling standards?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      All riders are trained in proper cold-chain handling and follow strict SOPs for medical transport.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      What is the cost of a delivery?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Pricing is based on distance and urgency. Hospitals can choose pay-per-delivery or subscription plans.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-11" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      Does CARE-E work with government hospitals?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Currently we are focused on private hospitals; government partnerships are planned soon.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-12" className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      How can my hospital partner with CARE-E?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can sign up through our website or contact our onboarding team for a partnership setup.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="fade-in" aria-labelledby="contact-heading">
            <div className="card-gradient rounded-2xl p-6 md:p-8 max-w-lg mx-auto">
              <h2 id="contact-heading" className="text-lg font-semibold text-foreground mb-3">
                Have Questions or Want to Collaborate?
              </h2>
              <a 
                href="mailto:care-e@outlook.com"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors font-medium"
                aria-label="Email CARE-E at care-e@outlook.com"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>care-e@outlook.com</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 backdrop-blur-sm" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              <strong>CARE-E</strong> - AI-Powered Emergency Medical Logistics | Cold-Chain Delivery Excellence
            </div>
            <div className="text-sm text-muted-foreground">
              Keywords: emergency medical delivery, AI healthcare logistics, cold-chain transport, medical supply delivery
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 CARE-E. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
