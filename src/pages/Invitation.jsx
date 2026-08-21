import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./Invitation.css";

function Invitation() {
  const navigate = useNavigate();

  return (
    <main className="invitation-page">
      {/* Decorative leaves */}
      <div className="leaf leaf-one">🌿</div>
      <div className="leaf leaf-two">🍃</div>
      <div className="leaf leaf-three">🌿</div>
      <div className="leaf leaf-four">🍃</div>

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
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          YOU ARE CORDIALLY INVITED
        </motion.p>

        <motion.div
          className="invitation-symbol"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.9,
            type: "spring",
          }}
        >
          ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Happy
          <span>Teacher's Day</span>
        </motion.h1>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
        />

        <motion.p
          className="invitation-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          To a teacher who makes every lesson meaningful,
          every question worth asking, and every student
          believe they can do more.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Jhilam Mukherjee
        </motion.h2>

        <motion.p
          className="teacher-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Python Faculty · CSE
        </motion.p>

        <motion.div
          className="event-details"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
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
        </motion.div>

        

        <motion.p
          className="bottom-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          Created with gratitude & love 🌿
        </motion.p>
      </motion.div>
    </main>
  );
}

export default Invitation;