import React from "react";
import "./CuteRobot.css";

/**
 * CSS-drawn robot illustration, visually consistent with the loading-veil
 * robot (scripts/prerender.js) but fully decoupled from it -- deterministic
 * markup only (no randomness/Date/window reads) so it hydrates cleanly when
 * captured by the prerenderer.
 */
const CuteRobot = ({ question = false }) => {
  return (
    <span
      className="cute-robot-container"
      role="img"
      aria-label={question ? "A confused robot" : "A friendly robot"}
    >
      {question && (
        <span className="cute-robot-question" aria-hidden="true">
          ?
        </span>
      )}
      <span className="cute-robot-robot" aria-hidden="true">
        <span className="cute-robot-antenna" />
        <span className="cute-robot-head">
          <span className="cute-robot-eye" />
          <span className="cute-robot-eye" />
        </span>
      </span>
    </span>
  );
};

export default CuteRobot;
