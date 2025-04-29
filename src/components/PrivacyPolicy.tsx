
const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20 bg-vr-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Privacy <span className="vr-gradient-text">Policy</span>
          </h2>
          
          <div className="vr-card p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
              <p className="text-gray-300">
                We collect information that you provide directly to us, such as when you create an account,
                contact us for customer support, or otherwise communicate with us. This information may include
                your name, email address, and any other information you choose to provide.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
              <p className="text-gray-300">
                We use the information we collect to provide, maintain, and improve our services, 
                to develop new ones, and to protect our company and our users. We may also use the 
                information to communicate with you, such as sending you updates about our games.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">3. Sharing of Information</h3>
              <p className="text-gray-300">
                We do not share personal information with companies, organizations, or individuals outside 
                of our company except in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mt-2">
                <li>With your consent</li>
                <li>For legal reasons</li>
                <li>To protect our rights, privacy, safety or property</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">4. Data Security</h3>
              <p className="text-gray-300">
                We work hard to protect your information from unauthorized access, alteration, disclosure, 
                or destruction. We implement appropriate security measures to protect your data.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">5. Your Rights</h3>
              <p className="text-gray-300">
                You have the right to access, correct, or delete your personal information at any time. 
                You may also object to certain processing of your information or request that we restrict processing.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">6. Changes to This Policy</h3>
              <p className="text-gray-300">
                We may change this privacy policy from time to time. If we make changes, we will notify 
                you by revising the date at the top of the policy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">7. Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-vr-purple mt-2">privacy@vrgamestudio.com</p>
            </div>
            
            <div className="pt-4 border-t border-vr-purple/20">
              <p className="text-sm text-gray-400">
                Last updated: April 29, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
