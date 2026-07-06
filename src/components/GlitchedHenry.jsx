import React from "react";
import { ReactComponent as GlitchedHenrySvg } from "../vendor/henry/henry-illustration-glitched.svg";

/**
 * Glitched Henry (mismatched eyes, spark antenna, orbiting stars), rendered
 * from the vendored henry-mascot illustration (portfolio-blue, synced from the
 * submodule). Inline SVG = deterministic, no network fetch (used in the
 * content-load error tile).
 */
const GlitchedHenry = ({ className }) => (
  <GlitchedHenrySvg className={className} role="img" aria-label="A glitched robot" />
);

export default GlitchedHenry;
