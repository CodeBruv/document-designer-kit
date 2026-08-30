# DossierFlow Pro

Create a VERY SMALL, frontend-only clickable UX prototype for an existing app called DossierBox.

This is ONLY a visual/product prototype for a few screens.

Do NOT build the complete application.

Do NOT build authentication, database, APIs, CV parsing, persistence, backend logic, payments, or deployment infrastructure.

The purpose of this prototype is to explore and clarify the UX of the existing DossierBox product.

IMPORTANT PRODUCT MODEL:

DossierBox has three separate concepts:

1. DOCUMENT TYPE

   What kind of document is the user creating?

   Examples:

   - CV / Resume

   - Cover Letter

   - Professional Profile

   - Academic CV

   - Portfolio / Career Document

2. PURPOSE

   Why is the user creating this document?

   Examples:

   - Job application

   - General professional use

   - Specific role

   - Academic application

   - Internship

   Purpose may be optional depending on document type, but it must NOT replace document type.

3. TEMPLATE / STYLE

   How should the document look?

   This is completely separate from document type and purpose.

The user should have a TEMPLATE LIBRARY with at least 10 choices.

Use example template names such as:

- Modern

- Executive

- Minimal

- Professional

- Elegant

- Creative

- Academic

- Corporate

- Clean

- Bold

The exact names are placeholders. The important point is that users see a genuine collection of different visual templates.

Do NOT use only Compact, Classic, and International.

Those three exist in the current application as references/examples, but they are NOT the product's intended template limit.

PROTOTYPE ONLY THESE FOUR EXPERIENCES:

--------------------------------------------------

SCREEN 1 — DOSSIER REVIEW

--------------------------------------------------

Title:

"My Dossier"

Show:

"Your Dossier"

"8 of 8 sections complete"

Display populated sections:

Personal Information

Education

Work Experience

Certifications

Skills

Projects

Languages

Achievements

Every section should visibly contain realistic example information.

Example:

Education

B.Sc. Computer Science

University of Jos • 2020–2024

Experience

Product / Technology Experience

2022–Present

Certifications

IBM

UNICEF

Make the populated state obvious.

Each section has an Edit action.

The user should immediately understand:

"My saved career information is here."

Include a clear action:

"Create a document"

--------------------------------------------------

SCREEN 2 — DOSSIER SECTION EDITOR

--------------------------------------------------

Open one populated section, preferably Certifications or Education.

Show realistic saved entries already present.

For example:

IBM — Professional Certificate

UNICEF — Professional Development Certificate

Include:

Edit

Add entry

Save changes

Back to Dossier

This screen exists to demonstrate that the Dossier contains persistent reusable information.

Do not make this a complicated form.

--------------------------------------------------

SCREEN 3 — CREATE DOCUMENT

--------------------------------------------------

Design the creation experience around the correct hierarchy.

STEP 1

WHAT ARE YOU CREATING?

Document type:

CV / Resume

Cover Letter

Professional Profile

Academic CV

Portfolio / Career Document

STEP 2

PURPOSE

Why are you creating it?

Job application

General professional use

Specific role

Academic application

Internship

Purpose can be skipped where appropriate.

STEP 3

CHOOSE A TEMPLATE

Present a proper template library with AT LEAST 10 visual choices:

Modern

Executive

Minimal

Professional

Elegant

Creative

Academic

Corporate

Clean

Bold

Show template thumbnails/previews.

The user must understand that these are visual presentation choices.

Do NOT make the template choices look like document types.

Do NOT make Compact / Classic / International the only options.

STEP 4

LIVE DOCUMENT PREVIEW

Show a realistic CV generated from the Dossier information from Screen 1.

The preview should update immediately when another template is selected.

The user must NOT have to save the document before seeing the preview.

STEP 5

CUSTOMIZE

Allow lightweight controls for:

Section visibility

Section order

Optional document settings

Then:

"Create document"

The important mental model is:

Dossier data

→ choose document type

→ optionally define purpose

→ choose template

→ see live preview

→ customize

→ create

The user should never feel that they are manually rebuilding their CV.

--------------------------------------------------

SCREEN 4 — MOBILE CREATE DOCUMENT

--------------------------------------------------

Create the same experience at a narrow mobile viewport.

The mobile layout should preserve the hierarchy:

Create document

DOCUMENT TYPE

[CV / Resume]

PURPOSE

[Job application]

TEMPLATES

A compact horizontally scrollable template selector or sensible mobile template gallery containing all 10 templates.

LIVE PREVIEW

[Generated CV]

CUSTOMIZE

Sections

Visibility

Order

[Create document]

Avoid the problems in the current implementation:

- Do not show three giant template cards stacked vertically.

- Do not force the user through a long template gallery before seeing the document.

- Do not put the live preview far below everything.

- Do not make style/template selection replace the document type decision.

- Do not require saving before previewing.

- Do not create horizontal page overflow.

- Do not make the mobile interface feel like a desktop form squeezed onto a phone.

The template library should be discoverable without dominating the screen.

--------------------------------------------------

VISUAL DIRECTION

--------------------------------------------------

Use the existing DossierBox concept as the visual foundation:

professional

clean

modern

mobile-first

accessible

restrained SaaS UI

Do not redesign the whole product.

Do not create marketing pages.

Do not invent unrelated features.

Use realistic mock Dossier data.

The prototype should feel like a believable next version of the existing product rather than a completely different application.

--------------------------------------------------

CRITICAL UX PRINCIPLES

--------------------------------------------------

1. The Dossier is the reusable source of career information.

2. Dossier Review must visibly show the information that exists in the Dossier.

3. Document type determines WHAT is being created.

4. Purpose explains WHY it is being created.

5. Template determines HOW it looks.

6. Document type and template are completely different concepts.

7. The user should have a meaningful template library with at least 10 choices.

8. The existing Compact / Classic / International choices must NOT be treated as the complete template system.

9. The preview should be live.

10. The user should see the result before committing to create the document.

11. Document creation should consume the Dossier rather than asking the user to rebuild information.

12. The interface should make the workflow understandable without instructions.

KEEP THIS PROTOTYPE SMALL.

Use mock data only.

No backend.

No authentication.

No database.

No API.

No migrations.

No full application.

Make only these four screens and enough navigation to demonstrate the flow:

Dossier Review

→ Section Editor

Dossier Review

→ Create Document

Create Document

→ template selection

→ live preview

Create Document

→ mobile equivalent

The goal is to create a visual reference that can be compared against the existing DossierBox implementation before making further code changes.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35bce554-5a82-42f8-8b6b-4d7be221210c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
