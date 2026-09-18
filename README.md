# Sweet Crumbs Bakery Website - Part 2 Submission

## 1. Changelog (Part 1 Feedback & Corrections)
- **Fixed HTML Syntax Errors**: Corrected invalid unclosed `</header>` and `</section>` tags on `AboutUs.html`[cite: 1].
- **Fixed Missing Closing Tag**: Added missing `</address>` tag on `ContactUs.html`[cite: 2].
- **Fixed Broken Links**: Updated invalid navigation links (e.g., `AboutUs,html` to `AboutUs.html` and `href="home"` to `href="Home.html"`)[cite: 3, 4].
- **Removed Inline Styles**: Stripped static inline properties (e.g., `style="font-size:30px"`) from all HTML documents and consolidated styles into `style.css`[cite: 1].
- **Form Layout Enhancements**: Wrapped form controls inside styled form groups with proper `<label>` elements for accessibility.

---

## 2. CSS Design & Responsive Implementation
- **External Stylesheet**: Created a centralized `style.css` containing variables (`:root`), base resets, layout engines, and breakpoint adjustments.
- **Flexbox & CSS Grid**: Integrated Flexbox for navigation menus and site footer structure; integrated CSS Grid for responsive service cards (`.service-grid`) and image listings (`.gallery`).
- **Responsive Breakpoints**:
  - **Desktop View (`> 900px`)**: Multi-column grids for services, contact page layout, and horizontal header navigation.
  - **Tablet View (`600px - 900px`)**: Two-column layout adaptation for service sections and single-column form stacking.
  - **Mobile View (`< 600px`)**: Single-column vertical stacking for navigation menus, grid elements, and footer lists.

---

## 3. Responsive Evidence (Browser Developer Tools Screenshots)
*Note: Add your actual screenshots to an `images/` directory in your repository and reference them below.*

- **Desktop View**:  
  `![Desktop Screenshot](images/desktop-view.png)`

- **Tablet View**:  
  `![Tablet Screenshot](images/tablet-view.png)`

- **Mobile View**:  
  `![Mobile Screenshot](images/mobile-view.png)`

---

