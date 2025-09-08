import React, { useEffect, useState } from "react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { service } from "../../services/firebase";

const Community = () => {
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const newTestimonial = {
      opinion: {
        author: userName,
        text: newComment,
      },
    };

    const res = await service.storeComments(userName, newTestimonial);

    // const testimonial = {
    //   id: opinions.length + 1,
    //   name: userName,
    //   opinion: ,
    //   //  likes: 0,
    //   timeStamp:Date.now(),

    // };
    setTestimonials([newTestimonial, ...testimonials]);
    setNewComment("");
    setUserName("");
    // Reset to first page on new post

    alert(
      "Comment submitted! 🎉 It'll go live once we give it a quick review."
    );
  };

  useEffect(() => {
    (async () => {
      const comments = await service.getComments();

      setTestimonials(comments);
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = service.listenForVisibleComments((comments) => {
      setTestimonials(comments);
    });

    // optional: detach logic if needed, e.g., using `off()` if you extend service.js

    return () => {
      // Clean up listener if you create an unsubscribe method
    };
  }, []);

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "3rem",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "80px",
    background:
      "linear-gradient(135deg, var(--text-primary), var(--neon-purple))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <section style={{ padding: "120px 0" }} className="community">
      <div className="container">
        <h2 style={titleStyle}>The Hype is Actually Real</h2>

        <div 
        
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            maxHeight: "500px",
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index}   className="testimonial">
              <div 
                 
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                  lineHeight: 1.6,
                }}
              >
                "{testimonial?.opinion?.text}"
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                — {testimonial?.opinion?.author}
              </div>
            </GlassCard>
          ))}

          {/* Add Comment Card */}
          <GlassCard
            variant="purple"
            className="add-comment"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your style struggles..."
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "15px",
                color: "var(--text-primary)",
                fontSize: "16px",
                resize: "none",
                height: "80px",
                marginBottom: "20px",
                backdropFilter: "blur(10px)",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--neon-purple)";
                e.target.style.boxShadow = "0 0 20px var(--glow-purple)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
            <textarea
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Drop your Name"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "15px",
                color: "var(--text-primary)",
                fontSize: "16px",
                resize: "none",
                height: "80px",
                marginBottom: "20px",
                backdropFilter: "blur(10px)",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--neon-purple)";
                e.target.style.boxShadow = "0 0 20px var(--glow-purple)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
            <Button variant="secondary" onClick={handleAddComment}>
              Drop Your Take
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
          display: flex ;
          flex-direction: column;
        }

        .add-comment {
          order: -1;
        }
      }
       /* ✅ Small screens like iPhone SE */
          @media (max-width: 375px) {
          html,
          body {
          max-width: 100%;
          overflow-x: hidden;  /* 🚫 Disables horizontal scroll */
         
          }

            .testimonials-grid {
              display: flex ;
              flex-direction: column;
              gap: 6px;
               max-width: 100%;
            padding: 0 8px; 
            overflow-x: hidden; 
              
            }
            .testimonial,
           .add-comment {
            width: 85% ;
           max-width: 100% ;
           overflow-x: hidden;
            box-sizing: border-box;
            font-size:12px
                    margin-left: 15px;
           
          }

            textarea {
              font-size: 14px ;
              padding: 12px ;
              height: 50px ;
            }

            button {
              font-size: 14px ;
              padding: 8px;
            }

            h2 {
              font-size: 2rem ;
              margin-bottom: 40px ;
            }
          }
    `}
      </style>
    </section>
  );
};

export default Community;