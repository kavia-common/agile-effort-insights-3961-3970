/* global IntersectionObserver, setTimeout */

import './style.css';

// Helper for animated feature blocks
function animateOnScroll(selector) {
  const els = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.2 });
  els.forEach(el => observer.observe(el));
}

// PUBLIC_INTERFACE
function renderLandingPage() {
  document.getElementById('app').innerHTML = `
    <header class="hero-section">
      <nav class="nav">
        <span class="logo">EffortAI</span>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#demos">Demo</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#signup" class="cta-nav-btn">Get Started</a>
      </nav>
      <div class="hero-content">
        <h1>
          <span>AI Effort Tracking & Insights</span>
          <span class="hero-highlight">for Agile Teams</span>
        </h1>
        <p>Analyze your agile process with AI-powered agents. Get actionable insights, chat interface, and automated reporting from Excel sprint data.</p>
        <form class="newsletter-form" id="newsletter-form-hero">
          <input type="email" name="email" placeholder="Enter your email" required>
          <button type="submit">Join Waitlist</button>
        </form>
        <div class="hero-demo-img">
          <img src="https://dummyimage.com/660x230/0a192f/64ffda&text=AI+Effort+Report+Screenshot" alt="Sample Report" />
        </div>
      </div>
      <svg class="hero-wave" preserveAspectRatio="none" viewBox="0 0 100 12"><path d="M0,0 C50,16 50,-4 100,12 L100,0 L0,0 Z" fill="#fff" /></svg>
    </header>
    <section class="features-section" id="features">
      <h2 class="section-title">Features</h2>
      <div class="features-row">
        <div class="feature-card anim-on-scroll">
          <div class="feature-icon"><svg width="32" height="32"><circle cx="16" cy="16" r="14" fill="#64FFDA" /></svg></div>
          <h3>LLM-Powered Analysis</h3>
          <p>LangChain + CrewAI agents deliver robust sprint analysis and capacity insights directly from your raw data.</p>
        </div>
        <div class="feature-card anim-on-scroll">
          <div class="feature-icon"><svg width="32" height="32"><rect width="28" height="16" x="2" y="8" fill="#FF7F50" /></svg></div>
          <h3>Effort Chatbot</h3>
          <p>Smart chat interface allows you to ask about effort breakdown, blockers, and improvement opportunities in your own words.</p>
        </div>
        <div class="feature-card anim-on-scroll">
          <div class="feature-icon"><svg width="32" height="32"><polyline points="4,28 10,18 16,24 28,8" stroke="#0A192F" stroke-width="4" fill="none"/></svg></div>
          <h3>Automated Charts & Reports</h3>
          <p>Automatic markdown reporting and chart generation for effort trends, sprint comparison, and more.</p>
        </div>
      </div>
    </section>
    <section class="demos-section" id="demos">
      <h2 class="section-title">Try the Demo</h2>
      <div class="demos-row">
        <div class="demo-block anim-on-scroll">
          <h3>Effort Analysis Chart</h3>
          <img src="https://dummyimage.com/420x180/64ffda/0a192f&text=Chart+Demo" alt="Chart Demo" />
        </div>
        <div class="demo-block anim-on-scroll">
          <h3>Interactive AI Chat</h3>
          <div class="chat-demo">
            <div class="bubble user">How much effort was spent on bugs last sprint?</div>
            <div class="bubble ai">23% of the team's time was dedicated to bug fixes. Major issues: #2375, #2382.</div>
          </div>
        </div>
        <div class="demo-block anim-on-scroll">
          <h3>Generated Sprint Report</h3>
          <pre class="report-card">
### Sprint 5 - Summary

- Velocity: 36 pts (↑12%)
- Effort Variance: -8%
- Top risk: Underestimated API integration
- Capacity: 87%
          </pre>
        </div>
      </div>
    </section>
    <section class="cta-section" id="signup">
      <h2 class="cta-title">Sign Up for Early Access</h2>
      <form class="newsletter-form" id="newsletter-form-main">
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit">Get Notified</button>
      </form>
      <p class="cta-note">No spam. Insights only.</p>
    </section>
    <section class="testimonials-section" id="testimonials">
      <h2 class="section-title">What Agile Teams Say</h2>
      <div class="testimonials-row">
        <div class="testimonial-card anim-on-scroll">
          <p>"The AI effort report visualizations saved hours in our retrospectives. Instant insights!"</p>
          <span class="testimonial-user">— Priya S., Scrum Master</span>
        </div>
        <div class="testimonial-card anim-on-scroll">
          <p>"EffortAI's chat interface is so intuitive — it's like having a project coach on demand."</p>
          <span class="testimonial-user">— Max L., Product Owner</span>
        </div>
        <div class="testimonial-card anim-on-scroll">
          <p>"Automated markdown reports streamlined our sprint reviews. Game-changer!"</p>
          <span class="testimonial-user">— Carla G., Engineering Lead</span>
        </div>
      </div>
    </section>
    <section class="faq-section" id="faq">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Do I need to upload actual scrum files?</summary>
          <div>Yes. You can securely upload Excel or CSV sprint exports -- EffortAI runs all analysis via AI-powered agents.</div>
        </details>
        <details class="faq-item">
          <summary>Which project management tools do you support?</summary>
          <div>Any tool that exports task data as CSV or XLSX (Jira, Azure DevOps, Trello, etc.).</div>
        </details>
        <details class="faq-item">
          <summary>Is the AI chat interface secure?</summary>
          <div>All chat data is encrypted end-to-end. We never store sensitive questions or answers.</div>
        </details>
        <details class="faq-item">
          <summary>Can I try the charts without signing up?</summary>
          <div>Yes! The interactive demo above lets you preview analysis and chart capability risk-free.</div>
        </details>
      </div>
    </section>
    <footer class="footer-section" id="contact">
      <div class="footer-row">
        <div class="footer-brand">
          <span class="logo">EffortAI</span>
          <p>© 2024 EffortAI - All rights reserved</p>
        </div>
        <div class="footer-links">
          <a href="#features">Features</a>
          <a href="#demos">Demo</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>
        <div class="footer-contact">
          <div>
            <strong>Contact us:</strong>
            <a href="mailto:info@effortai.app">info@effortai.app</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Add scroll-triggered animations for feature and demo cards
  animateOnScroll('.anim-on-scroll');

  // Newsletter form handlers
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Fake newsletter join
      form.querySelector('button').textContent = '✓ Joined!';
      form.querySelector('button').classList.add('joined');
      setTimeout(() => {
        form.querySelector('button').textContent = 'Join Waitlist';
        form.querySelector('button').classList.remove('joined');
        form.reset();
      }, 3000);
    });
  });
}

renderLandingPage();
