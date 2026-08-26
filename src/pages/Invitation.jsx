import { motion } from "motion/react";
import "./Invitation.css";

function Invitation() {
  return (
    <main className="invitation-page">
      <div className="coffee-glow coffee-glow-one"></div>
      <div className="coffee-glow coffee-glow-two"></div>

      <div className="network-grid"></div>

      <div className="network-line line-one"></div>
      <div className="network-line line-two"></div>
      <div className="network-line line-three"></div>
      <div className="network-line line-four"></div>

      <motion.div
        className="network-node node-one"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        PY
      </motion.div>

      <motion.div
        className="network-node node-two"
        animate={{
          y: [0, 14, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="network-node node-three"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        PYTHON
      </motion.div>

      <motion.div
        className="network-code code-one"
        animate={{
          y: [0, -10, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"print()"}
      </motion.div>

      <motion.div
        className="network-code code-two"
        animate={{
          y: [0, 12, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {">>>"}
      </motion.div>

      <motion.div
        className="network-code code-three"
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"def()"}
      </motion.div>

      <motion.div
        className="network-code code-four"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.55, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"for _ in range()"}
      </motion.div>

      <motion.div
        className="invitation-card"
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="card-glow"></div>

        <motion.div
          className="card-border"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        />

        <motion.p
          className="invitation-top"
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
        >
          YOU ARE CORDIALLY INVITED
        </motion.p>

        <motion.div
          className="invitation-symbol"
          initial={{
            scale: 0,
            rotate: -30,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.9,
            type: "spring",
            stiffness: 180,
          }}
        >
          {"{ }"}
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
        >
          Happy
          <span>Teacher's Day</span>
        </motion.h1>

        <motion.div
          className="divider"
          initial={{
            width: 0,
          }}
          animate={{
            width: 100,
          }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
        />

        <motion.p
          className="invitation-message"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
        >
          To a teacher who turns every line of code
          into a lesson, every error into an opportunity,
          and every challenge into something worth solving.
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.6,
          }}
        >
          Jhilam Mukherjee
        </motion.h2>

        <motion.p
          className="teacher-role"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
          }}
        >
          Faculty · Python
        </motion.p>

        <motion.div
          className="event-details"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
          }}
        >
          <div>
            <span>DATE</span>
            <strong>03 SEPTEMBER</strong>
          </div>

          <div className="detail-line"></div>

          <div>
            <span>OCCASION</span>
            <strong>TEACHER'S DAY</strong>
          </div>

          <div className="detail-line"></div>

          <div>
            <span>VENUE</span>
            <strong>ROOM NO. 4201</strong>
          </div>
        </motion.div>

        <motion.p
          className="bottom-note"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.4,
          }}
        >
          Thank you for helping us find the logic in every line 
          <span>✦</span>
        </motion.p>
      </motion.div>

      <div className="coffee-particle particle-one"></div>
      <div className="coffee-particle particle-two"></div>
      <div className="coffee-particle particle-three"></div>
      <div className="coffee-particle particle-four"></div>
      <div className="coffee-particle particle-five"></div>
    </main>
  );
}

export default Invitation;