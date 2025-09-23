import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you as soon as CARE-E launches.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="fade-in max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-focus h-12 bg-white/80 backdrop-blur-sm border-primary/20"
            required
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="btn-hero h-12 px-6 whitespace-nowrap"
        >
          <Mail className="w-4 h-4 mr-2" />
          {isSubmitting ? 'Notifying...' : 'Notify Me'}
        </Button>
      </form>
    </div>
  );
};

export default EmailSignup;