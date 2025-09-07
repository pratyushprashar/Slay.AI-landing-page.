import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AnimatedCounter from '../animations/ AnimatedCounter';


const EarlyAdopters = () => {
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(543);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setCount(prev => prev + 1);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: 'clamp(3rem, 5vw, 4rem)',
    fontWeight: 900,
    marginBottom: '20px',
    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple), var(--neon-pink))',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'gradientText 4s ease infinite'
  };

  return (
    <section 
      id="early" 
      style={{ textAlign: 'center' }}
      className="early-adopters"
    >
      <div className="container">
        <GlassCard 
          padding="xl"
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={titleStyle}>Join the Style Revolution</h2>
          <p style={{ fontSize: '22px', color: 'var(--text-secondary)', marginBottom: '50px' }}>
            Be first to experience AI that actually gets your vibe
          </p>
          
          <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
            <div style={{
              maxWidth: '450px',
              margin: '0 auto',
              display: 'flex',
              gap: '16px',
              padding: '12px',
              borderRadius: '20px',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)'
            }}>
             <Input
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                flex: 1 ,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                outline: 'none',
                paddingLeft:'18px'
                }}
              />
              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : "I'm In 🔥"}
              </Button>
            </div>
          </form>
          
          <div style={{ fontSize: '20px', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <span style={{
              color: 'var(--neon-blue)',
              fontSize: '28px',
              fontWeight: 900,
              textShadow: '0 0 20px var(--glow-blue)'
            }}>
              <AnimatedCounter target={count} />
            </span> style legends already joined
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default EarlyAdopters;