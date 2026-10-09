# Portfolio art direction

Status: structure implementation; visual direction remains in exploration. Updated: 2026-10-09.

This is a living brief. Confirmed preferences come from Gabriel; proposals are directions to explore, not approved implementation requirements. Update this file as the conversation develops.

## Intended impression

The portfolio is for a broad audience, without a specific hiring or client persona driving the design. The intended response is: “That is a really original website; I love the atmosphere.”

It should express Gabriel's taste and personality through composition, imagery, writing, and interaction. Showing work and providing clear ways to explore and make contact still matter, but a recruitment or conversion funnel is not the organizing idea.

## Confirmed preferences

- Rough imagery and quiet moments interrupted by glitches are the strongest reference qualities.
- Photography should be present, especially in large background imagery, with restricted color treatment rather than full color.
- The palette can move beyond black and white. Black and red, or black and purple, are examples under consideration; neither is selected yet.
- The existing small glitch effects and skill cards are elements Gabriel likes.
- A full 3D website is out of scope. Depth is acceptable when it helps animation or another interaction, but it should not be the focus.
- Simple shapes remain possible, but they need a reason to belong in the composition.
- The page structure is approved for implementation. Visual changes remain at the art direction stage.

## Confirmed page structure

- Keep the outer page within one viewport. Allow the right content pane to scroll when needed.
- Use a left aside occupying 25% of the screen for the portfolio's purpose, identity, and navigation: Projects, Skills, and Events.
- Use the shared Next.js app layout and routes to display Projects, Skills, and Events in the right 75%.
- Preserve the existing cards, palette, and visual treatments. This implementation changes structure only.
- Use ordinary lists and grids without pagination or viewport measurement hooks. Projects are listed without opening detail windows.
- Prefer Tailwind CSS v4 utilities for the layout and responsive structure.

## Working visual direction

**Experimental photographic editorial with analog texture and brief digital interruptions.**

Large, heavily treated photographs carry the atmosphere. Precise typography and deliberate empty space give those images room. The experience is mostly quiet; occasional disruptions briefly disturb the image before it settles again.

The old-fashioned quality comes from reproduction: film grain, photocopy contrast, halftone dots, softened detail, crushed shadows, and imperfect edges. Digital motion can manipulate those materials without turning the whole site into a fictional computer interface.

This direction does not prescribe a sad, mysterious, or aggressive personality for Gabriel. The actual photographic subjects and writing must establish that personality.

## What the references contribute

### Joji — Solaris tour

[FRAY Studio's project documentation](https://fraystudio.com/projects/joji-2026) describes four overlapping screen surfaces, offset openings, movement through depth, and changes of intensity across the show. Its stage photography includes high contrast imagery, halftone patterns, and distorted organic forms.

Carry forward the rough image treatment and contrast between calm and interruption. Framing, masking, and temporary overlap can support transitions. The earlier proposal to organize the entire portfolio around a layered viewing chamber is no longer the leading direction: Gabriel clarified that depth should be secondary.

### Joji — Piss in the Wind

The [standard artwork](https://shop.jojimusic.com/vinyl/330134/joji-piss-in-the-wind-vinyl) shows a solitary tree in a grainy red and black landscape. An [official grayscale edition](https://shop.jojimusic.com/vinyl/330123/joji-piss-in-the-wind-vinyl-grayscale-cover-clear-smoke-disc) uses the same scene.

The useful visual qualities are photographic atmosphere, limited color, isolation, softness, and heavy grain. These are interpretations of the artwork, not a claim that the entire album campaign or tour is monochrome.

### 21st.dev — Music Portfolio

[Reference component](https://21st.dev/@lovesickfromthe6ix/components/music-portfolio).

The preview and description connect a compact project index with imagery changing across the scene and text scrambling. Carry forward the relationship between restrained information and expressive photography. Author a distinct composition and interaction; do not treat the component's complete layout as the new portfolio design.

### 21st.dev — Portfolio Hero with Paper Shaders

[Reference component](https://21st.dev/@moazamtrade/components/portfolio-hero-with-paper-shaders).

The preview pairs sparse typesetting with a large dithered form. Carry forward its restraint and image texture. A shader is one possible tool for producing the treatment; it is not the concept around which the website must be organized.

## Palette and photographic treatment

Working interpretation: black plus one selected color family, with tonal variation within that family for photographs and legible text. This preserves a restricted palette while allowing photographic detail. Literal two-value rendering has not been requested.

| Candidate | Proposed character | What to assess in a composition study |
| --- | --- | --- |
| Black + red | Raw, photographic, direct | Whether it feels personal enough to establish distance from the Joji reference |
| Black + purple | Hazy, nocturnal, slightly synthetic | Whether the image treatment retains the desired roughness |

These are aesthetic hypotheses, not fixed properties of the colors. Compare them using the same photograph and composition.

Proposed image rules:

- Use duotone treatment for large ambient photographs: black shadows and the selected hue in lighter areas.
- Let crop, tonal contrast, blur, and scale do most of the work. Grain and halftone should support those choices.
- Give an image enough uninterrupted space to establish a mood; avoid filling every area with interface elements.
- Keep important text sharp and place it against a controlled dark area. Use a readable tint of the selected hue rather than silently introducing a third accent color.
- Prefer original photographs or subjects with a connection to Gabriel. Photographic subjects and asset sources are still open.
- Decide the treatment of project screenshots and detailed case-study media separately; the background photography rule does not settle every kind of project documentation.

No final color values, fonts, or image assets have been selected.

## Typography and composition

Proposals:

- Use one primary typographic voice, with a second face only if it adds a useful distinction.
- Reserve monospace for short captions or technical details; remove its role as an all-purpose terminal costume.
- Compare a restrained condensed display face with a more human editorial face once photographs are chosen.
- Use intentional changes in scale, crop, alignment, and density. An underlying grid can support those changes without becoming visible boxes around every section.
- Keep identity and navigation readable. Originality should come from the authored composition and material.

## Two compositions to explore

### A. Photographic scene with a work index

A dominant photograph establishes the atmosphere immediately. Gabriel's identity and a short, readable work index share the composition, rather than occupying a separate introductory hero.

Selecting a project changes the image and a small amount of accompanying information. A brief disturbance marks that change. Opening the project leads into an expansive, readable study, with project media and decisions taking priority over decorative interface chrome.

The distinctiveness must come from original photographic material, cropping, typography, and a consistent transition behavior. A project list over a stock photograph would be too close to merely adopting the reference component.

### B. Interrupted editorial sequence

A scrolling composition moves between large photographic plates, compact project information, close crops, process fragments, and quiet black space. Scale and density vary across the sequence instead of repeating a hero followed by uniformly boxed sections.

An occasional image disturbance or brief overlap marks a meaningful change. Skills and personal notes can appear in relation to relevant work, with a direct way to find them as well.

This route gives more room to reveal personality gradually through material and pacing.

Neither visual composition has been selected. The fixed sidebar and content architecture above is now confirmed; future composition studies should fit that structure. The scrolling sequence remains an earlier exploration.

## Motion language

The baseline is quiet. The page should have room to rest.

Proposed behaviors:

- A brief image displacement, tonal inversion, or loss of alignment marks a project change, then resolves.
- A reveal can pass through coarse halftone or a disturbed crop before settling into the photograph.
- Slow drift or grain variation is optional. A photograph can also remain completely still.
- A small overlap, mask, or scale change can suggest depth during a transition without requiring a 3D scene.

Use a small, coherent set of behaviors. Constant text corruption, automatic scrambling of every label, and continuous background turbulence would undermine the requested quiet moments. Essential text and controls remain stable. Touch and reduced-motion versions should retain the photographic identity with simpler behavior.

An ambient glitch is an experiment to assess, not a requirement to trigger a disturbance on a fixed timer. Sound has not been requested and is not assumed.

## Current portfolio: retain and reconsider

Before the structure change, the homepage stacked Hero, Projects, SkillGrid, and EventLog. Its visual vocabulary included a typing introduction, a rotating wireframe torus knot, system-status labels, `.exe` project cards, draggable windows, and repeated bordered panels. The shared app layout now places identity and navigation in the aside. The existing card treatments remain; projects are currently listed without detail windows.

| Element | Current direction |
| --- | --- |
| Restricted palette | Retain the principle; explore black with one hue |
| Small glitches | Retain; concentrate them into deliberate moments |
| Skill cards | Retain their tactile character and inversion behavior; explore a treatment suited to the photographic direction |
| Skill content | Consider specific applications and links to work as evidence; final content is not decided |
| Typing introduction and system-status badge | Proposed retirement |
| Rotating wireframe torus knot | Proposed retirement; no replacement shape is required |
| Repeated numbered, bordered sections | Recompose into an authored scene or editorial sequence |
| `.exe` labels and initialization copy | Proposed retirement in favor of personal, direct writing |
| Draggable desktop windows | Removed; the current scope lists projects without detail windows |
| Project imagery | Give it a prominent role in discovering the work |
| Biography and events | Keep what is real and meaningful; placement and final content remain open |

The source files are evidence of the current interface, not confirmation of every listed project, achievement, or biographical claim.

## How this becomes Gabriel's portfolio

An original atmosphere needs original material. Possible inputs include photographs of meaningful places, ordinary objects, sketches, gameplay footage, unfinished experiments, or small personal observations. These are prompts for discovery, not assumed interests.

Choose a recurring visual behavior or motif from that material. Apply it across projects with consistency, while letting each project's imagery retain its own character. Write about actual choices, experiments, and outcomes rather than generic developer statements.

The website should remain recognizable as Gabriel's when the name is covered up.

## Open decisions

1. Which palette to explore first: red, purple, or a side-by-side comparison.
2. Photographic subjects that feel personal to Gabriel, and whether original photographs are available.
3. Photographic scene versus editorial sequence, or a considered combination.
4. Typography, actual project material, and treatment of detailed project media.
5. How much of the existing skill-card treatment should remain visually recognizable.

## Next design work

After the image subjects and palette preference are clearer, prepare a small reference board and compare static compositions using consistent content within the confirmed page structure. Add a short storyboard showing a quiet state, a disturbance, and the resolved state. Choose the visual composition and motion rules before further visual implementation.

The current Next.js foundation is available for a later build. This brief does not require a framework migration or a WebGL scene.

## Decision log

- **Initial exploration:** monochrome editorial, analog imagery, and a possible layered archive influenced by Solaris. This was an assistant proposal.
- **2026-10-08 — Gabriel's clarification:** broad audience; originality and atmosphere are the desired impression; rough imagery and quiet moments interrupted by glitches are preferred; the palette may be black with red or purple; treated photography belongs in the design; full 3D is excluded and depth remains secondary.
- **2026-10-08 — revised proposal:** photographic editorial direction; compare a composed work index with an interrupted editorial sequence; record unresolved choices before implementation.
- **2026-10-09 — Gabriel's structure request:** implement a single-screen portfolio with a 25% left aside for purpose and Projects / Skills / Events navigation, and a 75% right content area. Preserve existing card styling and limit implementation to structure.
- **2026-10-09 — Gabriel's simplification:** use the native app layout and route pages, allow content-pane scrolling, remove viewport hooks and pagination, prefer Tailwind CSS v4, and list projects without opening detail windows.
