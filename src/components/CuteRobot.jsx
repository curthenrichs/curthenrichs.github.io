import React from "react";
import "../vendor/henry/henry-animated.css";

/**
 * Henry, animated. Renders the cute-robot- markup contract; all geometry,
 * colors, and animation come from the vendored henry-animated.css (synced
 * from the henry-mascot submodule -- the single source of truth). Deterministic
 * markup only (no randomness/Date/window reads) so it hydrates cleanly.
 */
const CuteRobot = ({ question = false }) => {
  return (
    <span
      className={`cute-robot-container${question ? " cute-robot-has-question" : ""}`}
      role="img"
      aria-label={question ? "A confused robot" : "A friendly robot"}
    >
      {question && (
        <>
          <span className="cute-robot-q cute-robot-q-main" aria-hidden="true">
            ?
          </span>
          <span className="cute-robot-q cute-robot-q-small" aria-hidden="true">
            ?
          </span>
        </>
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
