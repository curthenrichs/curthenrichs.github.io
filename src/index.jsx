import React, { useEffect } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// eslint-disable-next-line import/namespace -- eslint-plugin-import cannot parse react-helmet-async's source
import { HelmetProvider } from "react-helmet-async";

import "antd/dist/antd.css";
import "./index.css";

import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AttributionPage from "./pages/AttributionPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AccessibilityPolicyPage from "./pages/AccessibilityPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ContractingPage from "./pages/ContractingPage";
import CareerPage from "./pages/CareerPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import PublicationsPage from "./pages/PublicationsPage";
import NotFoundNoRoutingPage from "./pages/NotFoundNoRoutingPage";
import ItemDetailPage from "./pages/ItemDetailPage";

import reportWebVitals from "./reportWebVitals";
import contactData from "./content/contact";
import detailRoutes from "./content/detailRoutes.json";
import { holdPrerenderVeil } from "./utils/prerenderVeil";

const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.open(url);
  }, [url]);
  return <Navigate to="/" replace />;
};

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/attribution" element={<AttributionPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/accessibility" element={<AccessibilityPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/resume" element={<ExternalRedirect url={contactData.resume.link} />} />
          <Route path="/blog" element={<ExternalRedirect url={contactData.blog.link} />} />
          <Route path="/contract" element={<ContractingPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          {detailRoutes.map((r) => (
            <Route key={r.key} path={r.path} element={<ItemDetailPage route={r} />} />
          ))}
          {/* Bare /docs is a page miss; /docs/<anything> is a document miss */}
          <Route path="/docs" element={<NotFoundPage />} />
          <Route path="/docs/*" element={<NotFoundNoRoutingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Prerendered pages ship HTML inside #root; hydrate it. Dev server starts empty.
if (container.hasChildNodes()) {
  // The bundle is now executing, so the veil's CSS download-failsafe must not
  // fire mid-hydration; hold the veil until PageTemplate dismisses it post-reflow.
  holdPrerenderVeil();
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
