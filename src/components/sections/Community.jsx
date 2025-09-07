import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const Community = () => {
  const [newComment, setNewComment] = useState('');
  const [testimonials, setTestimonials] = useState([
    {
      text: "This AI actually gets my style better than I do. Obsessed.",
      author: "Riley, 21, Content Creator"
    },
    {
      text: "Finally found my style DNA. Every fit recommendation is pure fire 🔥",
      author: "Jordan, 19, Student"
    },
    {
      text: "The virtual try-on is scary good. Saved me from so many fashion fails.",
      author: "Alex, 23, Designer"
    }
  ]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const newTestimonial = {
      text: newComment.trim(),
      author: "You, just now"
    };
    
    setTestimonials([newTestimonial, ...testimonials]);
    setNewComment('');
  };

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: '3rem',
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: '80px',
    background: 'linear-gradient(135deg, var(--text-primary), var(--neon-purple))',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <section style={{ padding: '120px 0' }} className="community">
      <div className="container">
        <h2 style={titleStyle}>The Hype is Real</h2>
        
        <div style={{
          className:"testimonials-grid",
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          maxHeight: '500px',
          overflowY: 'auto',
          paddingRight: '10px'
        }}>
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="testimonial">
              <div style={{
                fontSize: '18px',
                marginBottom: '20px',
                color: 'var(--text-primary)',
                lineHeight: 1.6
              }}>
                "{testimonial.text}"
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}>
                — {testimonial.author}
              </div>
            </GlassCard>
          ))}
          
          {/* Add Comment Card */}
          <GlassCard 
            variant="purple"
            className="add-comment"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Drop your thoughts about AI + fashion..."
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                resize: 'none',
                height: '120px',
                marginBottom: '20px',
                backdropFilter: 'blur(10px)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--neon-purple)';
                e.target.style.boxShadow = '0 0 20px var(--glow-purple)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <Button variant="secondary" onClick={handleAddComment}>
              Share Your Take
            </Button>
          </GlassCard>
        </div>
      </div>
      <style>
    {`
      /* ✅ Default desktop view */
      .testimonials-grid {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }

      /* ✅ On small screens, make it vertical & move comment card on top */
      @media (max-width: 768px) {
        .testimonials-grid {
          display: flex !important;
          flex-direction: column;
        }

        .add-comment {
          order: -1;
        }
      }
    `}
  </style>
    </section>
  );
};

export default Community;