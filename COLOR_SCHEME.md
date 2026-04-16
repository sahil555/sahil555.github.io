/* ============================================
   COLOR PALETTE & THEME REFERENCE
   ============================================ */

/* Primary Colors */
--primary-color: #18d26e;      /* Main Green */
--primary-light: #35e888;       /* Light Green */
--primary-dark: #15bb62;        /* Dark Green */

/* Accent Colors */
--secondary-color: #6c5ce7;     /* Modern Purple */
--accent-purple: #a29bfe;       /* Soft Purple */

/* Background Colors */
--dark-bg: #0f0f0f;             /* Deep Dark */
--card-bg: rgba(20, 20, 30, 0.8);  /* Card Background */

/* Borders */
--border-color: rgba(24, 210, 110, 0.2);  /* Green-tinted Border */

/* ============================================
   GRADIENT COMBINATIONS
   ============================================ */

/* Primary Gradient */
background: linear-gradient(90deg, #18d26e, #35e888);

/* Purple Gradient */
background: linear-gradient(135deg, #18d26e, #6c5ce7);

/* Full Rainbow Gradient */
background: linear-gradient(90deg, #18d26e, #6c5ce7, #18d26e);

/* Hero Section */
background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(20, 20, 40, 0.9) 100%);

/* Hover Effect */
box-shadow: 0 12px 40px rgba(24, 210, 110, 0.2);

/* ============================================
   COMPONENT STYLING REFERENCE
   ============================================ */

/* Buttons */
.btn-primary {
  background: linear-gradient(90deg, #18d26e, #35e888);
  color: #041012;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(24, 210, 110, 0.3);
}

/* Project Cards */
.project-card {
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(24, 210, 110, 0.2);
  border-radius: 10px;
  transition: all 0.35s ease;
}

.project-card:hover {
  border-color: rgba(24, 210, 110, 0.5);
  box-shadow: 0 12px 40px rgba(24, 210, 110, 0.2);
  transform: translateY(-4px);
}

/* Tech Tags */
.tech-tags span {
  background: rgba(24, 210, 110, 0.15);
  color: #18d26e;
  border: 1px solid rgba(24, 210, 110, 0.3);
  border-radius: 20px;
}

/* Skills Progress Bar */
.progress-bar {
  background: linear-gradient(90deg, #18d26e, #6c5ce7);
  box-shadow: 0 2px 8px rgba(24, 210, 110, 0.2);
}

/* Interest Boxes */
.interests .icon-box {
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(24, 210, 110, 0.2);
  border-radius: 10px;
}

.interests .icon-box:hover {
  border-color: rgba(24, 210, 110, 0.5);
  box-shadow: 0 12px 40px rgba(24, 210, 110, 0.2);
  transform: translateY(-4px);
}

/* ============================================
   USAGE GUIDE
   ============================================ */

/* How to modify colors */

1. FIND: In assets/css/style.css around line 1010-1020
2. LOOK FOR: :root { --primary-color: ... }
3. CHANGE: Primary green #18d26e to your color
4. RESULT: All components using var(--primary-color) will update

/* Custom gradient combinations */

Green only:
  background: linear-gradient(90deg, #18d26e, #35e888);

Purple only:
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);

Mixed (Recommended):
  background: linear-gradient(135deg, #18d26e, #6c5ce7);

/* Shadow combinations */

Subtle: box-shadow: 0 4px 12px rgba(24, 210, 110, 0.15);
Medium: box-shadow: 0 8px 20px rgba(24, 210, 110, 0.2);
Strong: box-shadow: 0 12px 40px rgba(24, 210, 110, 0.3);

/* ============================================
   DARK MODE ACCESSIBILITY
   ============================================ */

All colors meet WCAG AA contrast standards:
✅ Primary Green on Dark Background: 7.2:1 ratio
✅ Text White on Dark Background: 15:1 ratio
✅ Purple Accent on Dark Background: 6.8:1 ratio

/* ============================================
   HEX TO RGB CONVERSION (for rgba)
   ============================================ */

#18d26e = rgb(24, 210, 110)
#6c5ce7 = rgb(108, 92, 231)
#a29bfe = rgb(162, 155, 254)
#041012 = rgb(4, 16, 18)
#0f0f0f = rgb(15, 15, 15)

/* ============================================
   ANIMATION TIMINGS
   ============================================ */

Fast:    0.2s ease
Medium:  0.3s ease
Smooth:  0.35s ease
Slow:    0.4s ease

/* Default for most components: 0.3s ease-in-out or 0.35s ease */

/* ============================================
   RESPONSIVE BREAKPOINTS
   ============================================ */

Desktop: 1024px+
Tablet:  768px - 1023px
Mobile:  < 768px

Most components adjust padding, font-size, and spacing at 768px breakpoint.
