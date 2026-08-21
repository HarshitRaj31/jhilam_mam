import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./Envelope.css";

function Envelope() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    // Let the complete envelope animation finish
    setTimeout(() => {
      navigate("/invitation");
    }, 2200);
  };

  return (
    <section className="envelope-page">
      {/* Background glow */}
      <div className="green-glow"></div>
      <div className="peach-glow"></div>

      <motion.div
        className="envelope-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.p
          className="invitation-label"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A SPECIAL INVITATION
        </motion.p>

        {/* =========================
            ENVELOPE
        ========================= */}

        <div
          className={`envelope ${opened ? "is-open" : ""}`}
          onClick={handleOpen}
        >
          {/* =========================
              LETTER
          ========================= */}

          <motion.div
            className="letter"
            initial={{
              y: 0,
              scale: 1,
            }}
            animate={
              opened
                ? {
                    y: -125,
                    scale: 1.03,
                  }
                : {
                    y: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>A SPECIAL INVITATION</span>

            <h1>For Jhilam Ma'am</h1>

            <div className="letter-line">✦</div>

            <p>
              With gratitude,
              <br />
              respect & love
            </p>
          </motion.div>

          {/* =========================
              ENVELOPE BACK
          ========================= */}

          <div className="envelope-back"></div>

          {/* Left fold */}
          <div className="envelope-left"></div>

          {/* Right fold */}
          <div className="envelope-right"></div>

          {/* Front pocket */}
          <div className="envelope-front"></div>

          {/* =========================
              ENVELOPE FLAP
          ========================= */}

          <motion.div
            className="envelope-flap"
            animate={
              opened
                ? {
                    rotateX: -180,
                  }
                : {
                    rotateX: 0,
                  }
            }
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* =========================
              WAX SEAL
          ========================= */}

          <AnimatePresence>
            {!opened && (
              <motion.div
                className="wax-seal"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                ✦
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================
            OPEN BUTTON
        ========================= */}

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              className="open-area"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
            

              <p className="hint">
                Click the envelope to reveal your invitation
              </p>
            </motion.div>
          ) : (
            <motion.p
              className="opening-message"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              A little surprise, specially created for you 🌿
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Envelope;