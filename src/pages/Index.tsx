import { useEffect } from 'react';
import { Mail, Heart, Zap } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import DeliveryAnimation from '@/components/DeliveryAnimation';

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
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* Logo & Main Headline */}
          <div className="fade-in space-y-6">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gradient">
                CARE-E
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              CARE-E is on the way!
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionizing emergency medical logistics with AI-powered cold-chain delivery.
            </p>
          </div>

          {/* Tagline */}
          <div className="fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-lg md:text-xl font-semibold text-foreground">
                Fast. Reliable. Life-Saving Logistics.
              </span>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground fade-in">
              Launching Soon
            </h3>
            <div className="fade-in">
              <div className="card-gradient rounded-2xl p-8 md:p-12 space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-gradient">
                  Coming Soon
                </h2>
                <DeliveryAnimation />
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="space-y-6">
            <div className="fade-in">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Be the first to know
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our waitlist and get early access to CARE-E when we launch.
              </p>
            </div>
            <EmailSignup />
          </div>

          {/* Contact */}
          <div className="fade-in">
            <div className="card-gradient rounded-2xl p-6 md:p-8 max-w-lg mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Have questions or want to collaborate?
              </h3>
              <a 
                href="mailto:care-e@outlook.com"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                <span>care-e@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 CARE-E. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
