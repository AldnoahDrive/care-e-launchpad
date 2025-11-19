import { useEffect } from 'react';
import { Mail, Zap } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import DeliveryAnimation from '@/components/DeliveryAnimation';
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
