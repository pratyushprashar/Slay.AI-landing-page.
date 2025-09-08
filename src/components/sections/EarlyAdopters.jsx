import React, { useEffect, useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AnimatedCounter from '../animations/ AnimatedCounter';
import { service } from '../../services/firebase';


const EarlyAdopters = () => {
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(543);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
      
      const getEmailCount=async()=>{
        
        const res=await service.getEmailCount()
        
        
        setCount(res)
        
       
        
      }
      getEmailCount()

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
     const res = await service.storeEmail(email);
    if (res===true) {
      const local_email=sessionStorage.setItem("slayAi_user", JSON.stringify(email));

      const newCOunt=count+1
      setCount(newCOunt)
      
      
      
      const response=await service.emailCount(newCOunt)
     
       setIsSubmitting(false);
    }else if(res==="duplicate"){
      alert("You have already submitted your email")
    }
    

    
  };

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 900,
  
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
          {/* <h2 style={titleStyle}>🔥 Join 50,000+ Style Legends Who Got It Right</h2> */}
          <p style={{ fontSize: '22px', color: 'var(--text-secondary)', marginBottom: '25px' }}>
             Be first to experience AI that actually gets your vibe

          </p>
          
          <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
            <div style={{
              maxWidth: '470px',
              margin: '0 auto',
              display: 'flex',
              gap: '12px',
              padding: '12px',
              borderRadius: '20px',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
               transform: "translateY(-10px)"
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
                pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                outline: 'none',
                paddingLeft:'18px',
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
          
          <div style={{ fontSize: '20px', color: 'var(--text-secondary)', fontWeight: 600,transform: "translateY(-19px)" }}>
            <span style={{
              color: 'var(--neon-blue)',
              fontSize: '28px',
              fontWeight: 900,
              textShadow: '0 0 20px var(--glow-blue)',
                
            }}>
              <AnimatedCounter target={count} />
            </span>  trendsetters already secured their spot
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default EarlyAdopters;