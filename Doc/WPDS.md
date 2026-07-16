
docs/
└── WeddingPro-Design-System.md
```

or

```text
docs/
└── WPDS.md
```

I prefer **`WeddingPro-Design-System.md`** because it's descriptive and easy to find.

---

# WeddingPro Design System (WPDS)

**Version:** 1.0
**Project:** WeddingPro
**Framework:** Angular 20 + Angular Material + SCSS + SSR + PWA

---

# Purpose

The WeddingPro Design System (WPDS) defines the design, architecture, coding standards, and UI principles for the WeddingPro application.

Its purpose is to ensure every page, component, and feature follows a consistent design language while maintaining:

* Scalability
* Maintainability
* Accessibility
* Performance
* Responsiveness
* Reusability

This document serves as the single source of truth for frontend development.

---

# Vision

> **Build once. Reuse everywhere.**

Every component should be reusable, configurable, accessible, and responsive.

The objective is not simply to build pages but to create a reusable UI framework that powers the entire WeddingPro ecosystem.

---

# Technology Stack

* Angular 20
* Angular Material
* SCSS (Sass Modules)
* Angular SSR
* Progressive Web App (PWA)
* TypeScript
* Google Lighthouse

---

# Quality Goals

Every release should target:

| Metric         | Target |
| -------------- | ------ |
| Performance    | 95–100 |
| Accessibility  | 95–100 |
| Best Practices | 95–100 |
| SEO            | 95–100 |

Google Lighthouse is the primary quality benchmark.

---

# Design Principles

## 1. Reusability First

Before writing new code, determine whether an existing component can be reused.

Avoid duplicate implementations.

---

## 2. No Hardcoded Values

Never hardcode:

* Colors
* Font sizes
* Spacing
* Border radius
* Shadows
* Animation duration
* Z-index
* Breakpoints

Every value must come from the design system.

**Incorrect**

```scss
padding: 48px;
color: #e91e63;
```

**Correct**

```scss
padding: spacing.$space-8;
color: tokens.$color-primary;
```

---

## 3. One Source of Truth

Every design decision should have exactly one location.

| Property      | Source              |
| ------------- | ------------------- |
| Colors        | `_colors.scss`      |
| Design Tokens | `_tokens.scss`      |
| Typography    | `_typography.scss`  |
| Spacing       | `_spacing.scss`     |
| Radius        | `_radius.scss`      |
| Shadows       | `_shadows.scss`     |
| Breakpoints   | `_breakpoints.scss` |
| Mixins        | `_mixins.scss`      |
| Functions     | `_functions.scss`   |

---

## 4. Mobile First

Every component must be designed for mobile before desktop.

Desktop enhancements should be added through responsive breakpoints.

---

## 5. Accessibility First

Every component should support:

* Keyboard navigation
* Visible focus states
* Proper semantic HTML
* Sufficient color contrast
* Screen reader compatibility where appropriate

Accessibility is a core requirement, not an optional enhancement.

---

## 6. Performance First

Prefer:

* CSS Grid
* Flexbox
* Native browser capabilities
* Lazy loading
* Efficient selectors

Avoid unnecessary DOM complexity and expensive visual effects.

---

## 7. Low Specificity

Avoid deeply nested selectors.

Preferred:

```scss
.banner {}

.banner__content {}

.banner__title {}
```

Avoid:

```scss
.banner {
    .wrapper {
        .content {
            .title {
```

---

## 8. Component Isolation

Every component should own only its own styling.

Do not style unrelated components.

---

# Folder Structure

```text
styles/

├── abstracts/
│   ├── _colors.scss
│   ├── _tokens.scss
│   ├── _typography.scss
│   ├── _spacing.scss
│   ├── _breakpoints.scss
│   ├── _radius.scss
│   ├── _shadows.scss
│   ├── _z-index.scss
│   ├── _functions.scss
│   └── _mixins.scss
│
├── base/
│   ├── _reset.scss
│   ├── _base.scss
│   ├── _helpers.scss
│   └── _utilities.scss
│
├── layout/
│   ├── _container.scss
│   ├── _grid.scss
│   ├── _header.scss
│   ├── _footer.scss
│   └── _section.scss
│
├── components/
│   ├── _banner.scss
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   ├── _navbar.scss
│   ├── _badges.scss
│   ├── _chips.scss
│   ├── _dialog.scss
│   └── _carousel.scss
│
├── themes/
│   ├── _light.scss
│   └── _dark.scss
│
├── utilities/
│
├── vendor/
│
└── styles.scss
```

---

# Development Workflow

Every feature follows the same process:

```text
Design Tokens
      │
      ▼
Functions & Mixins
      │
      ▼
Base Styles
      │
      ▼
Reusable Components
      │
      ▼
Page Sections
      │
      ▼
Pages
```

---

# Design Token Philosophy

Components should never use raw colors or measurements.

Instead they consume semantic tokens.

Example:

```scss
background: tokens.$surface-primary;

color: tokens.$text-primary;

padding: spacing.$space-6;

border-radius: radius.$radius-lg;
```

This enables branding updates, theme changes, and future dark mode support without modifying individual components.

---

# Coding Standards

Every new component should satisfy the following checklist:

* Uses design tokens
* Mobile first
* Responsive
* Accessible
* SSR compatible
* No duplicate CSS
* No hardcoded values
* Semantic HTML
* Reusable
* Easy to maintain

---

# Naming Conventions

### SCSS

```
_banner.scss
_cards.scss
_buttons.scss
```

### Angular Components

```
BannerComponent

CardComponent

ButtonComponent
```

### CSS Classes

```
.banner

.banner__content

.banner__title

.banner__actions
```

---

# Performance Guidelines

* Prefer CSS over JavaScript for visual effects.
* Optimize images and use modern formats where appropriate.
* Minimize layout shifts.
* Keep animations smooth and purposeful.
* Reduce unnecessary DOM nesting.

---

# Lighthouse Policy

Every significant UI change should be validated with Google Lighthouse.

Target:

* Performance ≥ 95
* Accessibility ≥ 95
* Best Practices ≥ 95
* SEO ≥ 95

Performance regressions should be investigated before merging.

---

# Future Enhancements

The design system is intended to evolve over time. Planned areas include:

* Theme switching (Light/Dark)
* Additional design tokens
* Animation library
* Icon system
* Skeleton loaders
* Charts and dashboards
* Data table styling
* Form validation patterns

---

# Guiding Principle

> **Design once. Reuse everywhere.**

A reusable solution is preferred over a page-specific implementation. Every contribution should strengthen the design system rather than introduce one-off patterns.

---

I would treat this as a **living document**. As we make architectural decisions—whether about theming, typography, Angular Material customization, or component patterns—we'll update this document. Over time, it will become the definitive reference for anyone joining the WeddingPro project, ensuring they can understand the project's standards and contribute consistently from day one.
