# Design System Specification: The Nocturnal Horizon

## 1. Overview & Creative North Star
**Creative North Star: The Nocturnal Horizon**
This design system rejects the clinical, high-contrast nature of standard wellness apps in favor of a "Nocturnal Horizon"—a visual metaphor for the transition from the frantic energy of the day to the deep stillness of the night. 

To achieve a signature premium feel, we move away from "boxed" layouts. We utilize **intentional asymmetry**, where content is balanced by generous negative space rather than rigid grids. We replace harsh dividers with **tonal layering**, creating a UI that feels like it’s emerging from a soft mist. This is an editorial approach to sleep: sophisticated, rhythmic, and profoundly calm.

---

## 2. Color & Tonal Architecture
The palette is rooted in the depth of `primary` (Onyx) and the atmospheric clarity of `surface` (Platinum).

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning or containment. Structural boundaries must be defined exclusively through background shifts (e.g., a `surface-container-low` section placed against a `surface` background). 
*   **Surface Hierarchy & Nesting:** Treat the interface as a physical stack of semi-translucent materials. 
    *   **Base:** `surface` (#fcf8f9)
    *   **Secondary Sections:** `surface-container` (#f0edee)
    *   **Elevated Elements:** `surface-container-highest` (#e4e2e3)
*   **The "Glass & Gradient" Rule:** Use `surface-tint` with 60-80% opacity and a `backdrop-blur` of 20px for floating navigation or overlays. 
*   **Signature Textures:** Apply a "Night-to-Day" gradient using `primary` (#0A090C) transitioning into `primary-container` (#07393C) for hero backgrounds. This provides a deep, immersive "soul" that flat hex codes cannot replicate.

---

## 3. Typography: Editorial Rhythm
We pair the geometric authority of **Plus Jakarta Sans** with the refined, humanist legibility of **Manrope**.

*   **Display & Headline (Plus Jakarta Sans):** These are our "Voice." Use `display-lg` and `display-md` with semi-bold weights to create anchor points on the page. Use generous letter-spacing (-0.02em) to maintain a high-end, bespoke feel.
*   **Body & Labels (Manrope):** These are our "Information." Manrope provides a technical yet approachable contrast. Ensure `body-lg` is used for storytelling, while `label-md` is reserved for metadata and micro-copy.
*   **The Hierarchy Goal:** Create a massive scale contrast. A `display-lg` headline should sit comfortably near a `body-md` paragraph, separated by at least a `10` (3.5rem) spacing unit to let the typography breathe.

---

## 4. Elevation & Ambient Depth
In this design system, depth is a feeling, not a structure. We utilize **Tonal Layering** over traditional drop shadows.

*   **The Layering Principle:** To lift a card, do not use a shadow; instead, move it one tier up in the surface scale (e.g., a `surface-container-lowest` card on a `surface-container-low` background).
*   **Ambient Shadows:** If an element must float (e.g., a primary CTA or a modal), use a "Whisper Shadow": 
    *   `box-shadow: 0 20px 40px rgba(0, 34, 36, 0.06);`
    *   The shadow must use a tinted version of the `primary` color, never pure grey.
*   **The "Ghost Border" Fallback:** For accessibility in forms, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For interactive overlays, use a semi-transparent `surface-container-lowest` with a heavy blur to simulate frosted glass, allowing the "Night-to-Day" gradients to bleed through softly.

---

## 5. Bespoke Components

### Buttons
*   **Primary:** Solid `primary-container` (#07393C) with `on-primary` text. Shape: `DEFAULT` (12px). 
*   **Secondary:** Ghost style. No background, no border. Use `secondary` (#2C666E) text with a subtle `primary-fixed-dim` underline on hover.
*   **Sizing:** Generous internal padding (e.g., `spacing-4` vertical, `spacing-8` horizontal) to emphasize the premium nature.

### Cards & Lists
*   **No Dividers:** Forbid the use of line-separators. Separate list items using `spacing-3` (1rem) and subtle background shifts.
*   **The Insight Card:** A `surface-container-lowest` base with a `DEFAULT` (12px) corner radius. Content should be padded by `spacing-6` (2rem).

### Inputs
*   **Field Style:** Use `surface-container-high` as the fill. On focus, transition the background to `surface-container-highest` and apply a `ghost-border` using `secondary`. 
*   **Labeling:** Use `label-md` in `on-surface-variant`, positioned with an extra `spacing-1` of "air" above the input.

### Signature Component: The Sleep Arc
*   An abstract progress motif using the `frosted-blue` (#90DDF0) accent. It should be a non-linear, organic shape that fills as the user approaches their sleep goal, avoiding "industrial" progress bars.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Align text to the left but place abstract motifs (frosted blue shapes) off-center to the right.
*   **Use Abstract Imagery:** Only use high-quality, blurred wellness motifs or grain-textured gradients.
*   **Whitespace as a Feature:** If a section feels crowded, double the spacing token (e.g., move from `12` to `24`).

### Don't:
*   **No Stock Photos:** Never use literal photos of people sleeping. It breaks the premium, "curated" immersion.
*   **No High-Contrast Borders:** Never use a 100% opaque border to separate content.
*   **No Pure Greys:** Every "neutral" must be tinted with the `Onyx` or `Teal` foundation to maintain tonal warmth.
*   **No Sharp Corners:** Every interactive element must respect the 12px (`DEFAULT`) or `full` rounding scale.