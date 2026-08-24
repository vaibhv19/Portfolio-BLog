# Portfolio Website — Certifications

## Purpose

The Certifications system records formal certifications, course completions, assessments, and academic credentials.

It is a supporting part of the portfolio rather than the primary evidence of technical ability. Projects, engineering work, skills, and writing remain more important.

---

# 1. Architecture

Certifications have a dedicated page.

```text
Home
 └── Certifications Preview
      ├── NPTEL
      ├── E&ICT Academy, IIT Kanpur
      ├── One additional selected certificate
      └── View All Certifications
               ↓
         Certifications Page
               ↓
         Certificate Name
               ↓
         Original Certificate PDF
```

## Home Page

The Home page should show only a small preview of the Certifications inventory.

Display:

- 2–3 selected certifications
- NPTEL certification
- E&ICT Academy, IIT Kanpur certification
- optionally one additional strong or recent certification
- a `View All Certifications` link

The preview is for discovery.

The full inventory belongs on the dedicated Certifications page.

## Certifications Page

The Certifications page contains the complete certificate list.

Each entry should primarily display:

```text
Certificate Name
Issuing Organization
Year / Date
```

Clicking the certificate name should open the original certificate PDF.

No separate detail page is required.

The interaction is:

```text
Certifications Page
        ↓
Certificate Name
        ↓
Open Certificate PDF
```

This intentionally keeps the hierarchy shallow.

---

# 2. Home Page Featured Certifications

The initial featured certificates are:

## The Joy of Computing using Python

**Issuer:** NPTEL  
**Recognition:** Elite

## OOPS with C++

**Issuer:** E&ICT Academy, IIT Kanpur

## C Programming

**Issuer:** E&ICT Academy, IIT Kanpur

The third featured position may later be replaced by a more significant certification if a stronger future credential is added.

After these entries:

```text
View All Certifications →
```

The Home page should not display the complete certification inventory.

---

# 3. Visual Direction

The Certifications section should remain restrained.

Do not use:

- certificate card grids
- large preview thumbnails by default
- badge walls
- carousels
- proficiency bars
- decorative ribbons
- repeated box-in-box layouts
- oversized institutional logos

Prefer an archival list structure.

Example:

```text
CERTIFICATIONS

2026

Exploratory Data Analysis
FutureSkills Prime / NASSCOM
25 Jul 2026 · Gold Assessment

2025

The Joy of Computing using Python
NPTEL
Elite

Introduction to Artificial Intelligence
IBM SkillsBuild
```

Certificate names should be the primary interactive element.

On hover:

```text
Exploratory Data Analysis ↗
```

or another subtle indication that the name opens the original certificate.

---

# 4. Full Certificate Inventory

## 2026

### Exploratory Data Analysis

**Issuer:** FutureSkills Prime / NASSCOM IT-ITeS SSC  
**Completion:** 25 July 2026  
**Assessment:** Gold Certificate, issued 5 August 2026

Both the completion and Gold assessment documents belong to the same certification record.

---

### Lab: Troubleshoot Your Code Using IBM Bob

**Issuer:** IBM SkillsBuild

---

## 2025

### The Joy of Computing using Python

**Issuer:** NPTEL  
**Recognition:** Elite

---

### Introduction to Artificial Intelligence

**Issuer:** IBM SkillsBuild

---

### Exploring Quantum Computing

**Issuer:** IBM SkillsBuild

---

### Getting Started with Artificial Intelligence

**Issuer:** IBM SkillsBuild

The completion certificate and corresponding badge represent the same learning credential and should remain one portfolio entry.

---

### Getting Started with Cybersecurity

**Issuer:** IBM SkillsBuild

The completion certificate and corresponding badge represent the same learning credential and should remain one portfolio entry.

---

### Getting Started with Docker

**Issuer:** Simplilearn SkillUp

---

### Introduction to MongoDB

**Issuer:** Simplilearn SkillUp

---

## 2024

### OOPS with C++

**Issuer:** E&ICT Academy, IIT Kanpur

---

### C Programming

**Issuer:** E&ICT Academy, IIT Kanpur

---

### Java Programming for Beginners

**Issuer:** Simplilearn SkillUp

---

# 5. PDF Behaviour

Every certificate entry must be associated with its original PDF.

When a visitor clicks the certificate name:

- open the PDF directly
- preserve the original document
- do not require a separate certificate detail page
- do not recreate the certificate as a webpage

The portfolio itself remains the directory.

The certificate PDF remains the source document.

If an entry has multiple documents, the implementation may provide a small secondary selector without creating a new page.

---

# 6. Data Model

Each certificate should conceptually contain:

```text
Certificate
├── title
├── issuer
├── issueDate
├── year
├── recognition
├── certificatePdf
├── featured
└── homeOrder
```

Optional future fields:

```text
├── credentialId
├── verificationUrl
├── badgeUrl
└── multipleDocuments
```

The PDF path is the important link target for the current architecture.

---

# 7. Maintenance Rules

1. Add a new certificate as a new list entry.
2. Store or deploy the original certificate PDF with the portfolio assets.
3. Link the certificate name directly to its PDF.
4. Do not create separate pages for individual certificates.
5. Do not duplicate a certificate and its badge when they represent the same credential.
6. The Home page should always show only 2–3 selected certificates.
7. NPTEL and E&ICT Academy certifications are the initial featured entries.
8. Future stronger credentials may replace the third featured position without changing the page architecture.
9. The full Certifications page should contain the complete inventory.

---

# 8. Final Status

```text
Dedicated Certifications page: YES
Home page certificate preview: YES
Featured certificates on Home: 2–3
Initial featured evidence: NPTEL + E&ICT Academy
View All Certifications link: YES
Full certificate inventory page: YES
Individual certificate detail pages: NO
Click certificate name → Open original PDF: YES
Certificate section architecture: FINAL
```
