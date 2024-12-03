import React from "react";

const TermsOfUse = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4 text-sm text-gray-500">Last Updated: December 3, 2024</p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Use of the Service</h2>
        <p>
          Welcome to <strong>UUID Generator</strong>. By using our website, you agree to comply
          with and be bound by the following Terms of Use. If you do not agree with these terms, please refrain from using our
          service.
        </p>
        <p>
          Our website allows users to generate UUIDs (Universally Unique Identifiers) free of charge. You are solely
          responsible for how you use the generated UUIDs. We do not guarantee the suitability of the UUIDs for specific
          purposes and recommend independent validation for critical applications.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Liability</h2>
        <p>
          We are not liable for any direct, indirect, or consequential damages resulting from the use of the UUIDs generated
          or our service, including technical failures, errors, or website unavailability.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Use at any time. Significant changes will be communicated to users.
          Continued use of the site after updates constitutes acceptance of the revised terms.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
        <p>
          All content on the site, including text, design, logos, and graphics, is protected by copyright laws. You may not
          reproduce, distribute, or modify any part of the site without prior written permission.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
