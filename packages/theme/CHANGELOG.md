# Change Log

## 1.6.0

### Patch Changes

- Font size variables are now rounded to the nearest pixel. This affects size modes "sm" and "lg", which had subpixel values after v1.5.0. ([#4070](https://github.com/digdir/designsystemet/pull/4070))

## 1.5.1

## 1.5.0

### Minor Changes

- Sizing and size modes have been reimplemented align code and Figma implementations, and to support setting size mode in css queries. ([#3866](https://github.com/digdir/designsystemet/pull/3866))

  `--ds-size-*` variables are now independent of the element's font size, and only depend on the size mode, which aligns the code implementation with how the modes already worked in Figma. **Important**: This will have a large visual impact on existing code where size variables have been used to style Heading elements (e.g. margin).

  Read [Sizes in code](https://www.designsystemet.no/en/fundamentals/code/sizes) for info on how size modes work after these changes.

## 1.4.0

### Minor Changes

- **Default export**: changed color values and removed `brand3` ([#4008](https://github.com/digdir/designsystemet/pull/4008))
  - The old values are still available from `import '@digdir/designsystemet-theme/digdir.css'`;

## 1.3.0

## 1.2.0

## 1.1.10

## 1.1.9

## 1.1.8

## 1.1.7

## 1.1.6

### Patch Changes

- Deprecate `colors.d.ts` from `tokens build`. Replaced by `types.d.ts`. ([#3837](https://github.com/digdir/designsystemet/pull/3837))

## 1.1.5

## 1.1.4

### Patch Changes

- fix: letter-spacing now uses `em` unit instead of invalid percentage unit ([#3759](https://github.com/digdir/designsystemet/pull/3759))
  - **Note:** Users should run `npx @digdir/designsystemet@latest tokens build <options>` to rebuild css-variables with now valid letter-spacing. This will result in a slight visual change in the typography.

## 1.1.3

## 1.1.2

## 1.1.1

## 1.1.0

### Patch Changes

- Round `--ds-size-*` CSS variables by 1px instead of by 0.0625rem. With the ([#3681](https://github.com/digdir/designsystemet/pull/3681))
  default root font size (16px) the result is the same, but if the user has
  changed the browser's font size we now avoid fractional pixels.

- Add export for tailwind config for default theme - `@digdir/designsystemet-theme/tailwind`. ([#3710](https://github.com/digdir/designsystemet/pull/3710))

## 1.0.8

### Patch Changes

- Remove outdated `@layer` definition in default and digdir theme files ([#3643](https://github.com/digdir/designsystemet/pull/3643))

- Fix missing export for default theme file ([#3673](https://github.com/digdir/designsystemet/pull/3673))

## 1.0.7

## 1.0.6

## 1.0.5

### Patch Changes

- Add design-token version to metadata in built theme file ([#3510](https://github.com/digdir/designsystemet/pull/3510))

- Update "Portal" theme colors ([#3502](https://github.com/digdir/designsystemet/pull/3502))

## 1.0.4

### Patch Changes

- Updated metadata in theme file ([#3479](https://github.com/digdir/designsystemet/pull/3479))

- Remove individual theme CSS files from `tokens build`. ([#3475](https://github.com/digdir/designsystemet/pull/3475))

## 1.0.3

### Patch Changes

- Fix `data-color` and `data-color-scheme` used on the same element not working in some browsers ([#3354](https://github.com/digdir/designsystemet/pull/3354))

- Adjusted colors in dark mode, see changelog for `@digdir/designsystemet` ([#3386](https://github.com/digdir/designsystemet/pull/3386))

## 1.0.2

### Patch Changes

- Fix missing `--ds-color-surface-default` for colors `danger`, `warning`, `info`, `success` and `neutral`. ([#3247](https://github.com/digdir/designsystemet/pull/3247))

## 1.0.1

## 1.0.0

### Major Changes

- 🎉 Version 1.0 of Designsystemet! 🎉 ([#3290](https://github.com/digdir/designsystemet/pull/3290))

  We are excited to announce the release of Version 1.0 of Designsystemet! This marks a significant milestone as we establish a solid foundation for future development. 🚀

## 0.101.0

## 0.100.52

## 0.100.52-next.0

## 0.100.51

- 2d1da9a: Testing snapshot release
- bbcd95e: tokens: Removed validationmessage and label typography styles
- 0f7418e: Added token `border-width-focus`
- 482f765: Renamed background, surface and contrast color tokens and CSS variables
- a9f0528: refactor: single CSS file for theme
- 957d418: Increased lightness of global `orange` color
- 2cfd56e: docs: :memo: Fix some outdated information in readme
- 0f7418e: Removed token `border-width-highlight`
- 8277775: Body/Paragraph
  - Add body-xl token
  - Add xl paragraph
  - Remove ingress tokens
- 188bd19: CLI: `tokens build` command now generates a `colors.d.ts` file which enables type safety for the `data-color` attribute when included in your `tsconfig.json`. The `@digdir/designsystemet-theme` package has been updated to include types for those themes.
- 2a3c4d3: Removed CSS variables `--ds-spacing-*` & `--ds-sizing-*`, use `--ds-size-*`.
- 58724b7: Changed focus color to use neutral instead of accent color
- df037aa: Changed alias for type declaration exports
  - React: export alias `./react-types.d.ts` was changed to `./react-types`
  - Theme: added `types` field to default export in package.json, so now it should be posssible to use `"@digdir/designsystemet-theme"`
- dc6ab52: Rename `data-ds-typography` to `data-typography`
- 1a37354: Renamed color step `contrast-1` to `16`
- 0f7418e: Reduced `font-size` scale by one, from 11 to 10. All sizes above and including `font-size-2` have shifted down size by one
- 1a37354: Added new step to color scale, now with a total of 16
- 1767724: React components and css now support custom colors through the `data-color` attribute.

  **BREAKING CHANGE**: All React components that had a `color` prop have been changed to use `data-color`.

  All<sup>1</sup> css targeting `data-color` has been changed to work with all custom colors generated by the CLI.

  `Avatar`, `Badge`, `Button`, and `Link` use `--ds-color-accent-*`<sup>2</sup>, unless `data-color` is set directly on the element.

  For components that had a `color` prop, but defaulted to something other than `"accent"`, `data-color` must also be set directly on the element.

  All other components that defaulted to `"accent"`, or previously only existed in `"accent"` color, now support `data-color`. They will also inherit their color from the closest `data-color` attribute. If none is found, they use `--ds-color-accent-*`<sup>2</sup>.

  <sup>1</sup>: ...except `Alert`, which only supports `info`, `warning`, `danger` and `success` colors.
  <sup>2</sup>: If an `"accent"` color is not defined in the theme, the `--ds-color-accent-*` variables will point to the first `main-color`.

- 6998d4b: **BREAKING CHANGE**: The attribute / prop `data-ds-color-mode` has been renamed to `data-color-scheme`
- f2b9922: chore: Reset `data-color` to degfault color when setting `data-color-scheme`
- 83e083b: Increased the luminance of the Surface Tinted color in light mode and made Surface Tinted stand out more against Surface Default in dark mode.
- 1a37354: Changed order for semantic color tokens in design-tokens
- a452813: CSS variables: `--ds-color-*-{1,2,...,13,contrast-1,contrast-2}`, which were generated from the `primitives` layer of design tokens, have been removed since they are always 1-to-1 with the semantic layer. Use the equivalent variables from the semantic layer instead

  Example, for the `neutral` scale:

  ```css
    var(--ds-color-neutral-background-default); /* instead of: var(--ds-color-neutral-1) */
    var(--ds-color-neutral-background-subtle);  /* instead of: var(--ds-color-neutral-2) */
    var(--ds-color-neutral-surface-default);    /* instead of: var(--ds-color-neutral-3) */
    var(--ds-color-neutral-surface-hover);      /* instead of: var(--ds-color-neutral-4) */
    var(--ds-color-neutral-surface-active);     /* instead of: var(--ds-color-neutral-5) */
    var(--ds-color-neutral-border-subtle);      /* instead of: var(--ds-color-neutral-6) */
    var(--ds-color-neutral-border-default);     /* instead of: var(--ds-color-neutral-7) */
    var(--ds-color-neutral-border-strong);      /* instead of: var(--ds-color-neutral-8) */
    var(--ds-color-neutral-base-default);       /* instead of: var(--ds-color-neutral-9) */
    var(--ds-color-neutral-base-hover);         /* instead of: var(--ds-color-neutral-10) */
    var(--ds-color-neutral-base-active);        /* instead of: var(--ds-color-neutral-11) */
    var(--ds-color-neutral-text-subtle);        /* instead of: var(--ds-color-neutral-12) */
    var(--ds-color-neutral-text-default);       /* instead of: var(--ds-color-neutral-13) */
    var(--ds-color-neutral-contrast-default);   /* instead of: var(--ds-color-neutral-contrast-1) */
    var(--ds-color-neutral-contrast-subtle);    /* instead of: var(--ds-color-neutral-contrast-2) */
  ```

  ...and similarly for `accent`, `brand1`, `brand2` and `brand3`.

- 829ec13: Update global colors
- 171eba9: Tweaked color codes. Visually remains the same
- 957d418: Changed `warning` colors to use global `orange`
- 1a37354: Renamed color step `contrast-2` to `15`
- 9d54191: Moved typography based sizing formula to design-tokens
- 5f51c95: Implemented a more flexible system of semantic border-radius tokens.
- 2a3c4d3: Removed design-tokens `sizing` & `spacing`, use `size`.
- 957d418: Removed global `yellow` color.

## 0.100.51-next.52

## 1.0.0-next.51

## 1.0.0-next.50

### Minor Changes

- Changed alias for type declaration exports ([#3156](https://github.com/digdir/designsystemet/pull/3156))
  - React: export alias `./react-types.d.ts` was changed to `./react-types`
  - Theme: added `types` field to default export in package.json, so now it should be posssible to use `"@digdir/designsystemet-theme"`

## 1.0.0-next.49

### Minor Changes

- Added token `border-width-focus` ([#3138](https://github.com/digdir/designsystemet/pull/3138))

- Renamed background, surface and contrast color tokens and CSS variables ([#3053](https://github.com/digdir/designsystemet/pull/3053))

- Increased lightness of global `orange` color ([#3094](https://github.com/digdir/designsystemet/pull/3094))

- Removed token `border-width-highlight` ([#3138](https://github.com/digdir/designsystemet/pull/3138))

- Renamed color step `contrast-1` to `16` ([#2911](https://github.com/digdir/designsystemet/pull/2911))

- Reduced `font-size` scale by one, from 11 to 10. All sizes above and including `font-size-2` have shifted down size by one ([#3138](https://github.com/digdir/designsystemet/pull/3138))

- Added new step to color scale, now with a total of 16 ([#2911](https://github.com/digdir/designsystemet/pull/2911))

- Changed order for semantic color tokens in design-tokens ([#2911](https://github.com/digdir/designsystemet/pull/2911))

- Changed `warning` colors to use global `orange` ([#3094](https://github.com/digdir/designsystemet/pull/3094))

- Renamed color step `contrast-2` to `15` ([#2911](https://github.com/digdir/designsystemet/pull/2911))

- Removed global `yellow` color. ([#3094](https://github.com/digdir/designsystemet/pull/3094))

### Patch Changes

- Increased the luminance of the Surface Tinted color in light mode and made Surface Tinted stand out more against Surface Default in dark mode. ([#3116](https://github.com/digdir/designsystemet/pull/3116))

## 1.0.0-next.48

## 1.0.0-next.47

## 1.0.0-next.46

### Patch Changes

- Changed focus color to use neutral instead of accent color ([#2989](https://github.com/digdir/designsystemet/pull/2989))

## 1.0.0-next.45

### Minor Changes

- Removed CSS variables `--ds-spacing-*` & `--ds-sizing-*`, use `--ds-size-*`. ([#2939](https://github.com/digdir/designsystemet/pull/2939))

- Moved typography based sizing formula to design-tokens ([#2796](https://github.com/digdir/designsystemet/pull/2796))

- Removed design-tokens `sizing` & `spacing`, use `size`. ([#2939](https://github.com/digdir/designsystemet/pull/2939))

### Patch Changes

- Rename `data-ds-typography` to `data-typography` ([#2959](https://github.com/digdir/designsystemet/pull/2959))

## 1.0.0-next.44

## 1.0.0-next.43

## 1.0.0-next.42

### Patch Changes

- Tweaked color codes. Visually remains the same ([#2854](https://github.com/digdir/designsystemet/pull/2854))

## 1.0.0-next.41

### Patch Changes

- docs: :memo: Fix some outdated information in readme ([#2865](https://github.com/digdir/designsystemet/pull/2865))

## 1.0.0-next.40

## 1.0.0-next.39

### Patch Changes

- chore: Reset `data-color` to degfault color when setting `data-color-scheme` ([#2826](https://github.com/digdir/designsystemet/pull/2826))

## 1.0.0-next.38

## 1.0.0-next.37

### Major Changes

- **BREAKING CHANGE**: The attribute / prop `data-ds-color-mode` has been renamed to `data-color-scheme` ([#2798](https://github.com/digdir/designsystemet/pull/2798))

### Minor Changes

- CLI: `tokens build` command now generates a `colors.d.ts` file which enables type safety for the `data-color` attribute when included in your `tsconfig.json`. The `@digdir/designsystemet-theme` package has been updated to include types for those themes. ([#2795](https://github.com/digdir/designsystemet/pull/2795))

## 1.0.0-next.36

### Minor Changes

- React components and css now support custom colors through the `data-color` attribute. ([#2703](https://github.com/digdir/designsystemet/pull/2703))

  **BREAKING CHANGE**: All React components that had a `color` prop have been changed to use `data-color`.

  All<sup>1</sup> css targeting `data-color` has been changed to work with all custom colors generated by the CLI.

  `Avatar`, `Badge`, `Button`, and `Link` use `--ds-color-accent-*`<sup>2</sup>, unless `data-color` is set directly on the element.

  For components that had a `color` prop, but defaulted to something other than `"accent"`, `data-color` must also be set directly on the element.

  All other components that defaulted to `"accent"`, or previously only existed in `"accent"` color, now support `data-color`. They will also inherit their color from the closest `data-color` attribute. If none is found, they use `--ds-color-accent-*`<sup>2</sup>.

  <sup>1</sup>: ...except `Alert`, which only supports `info`, `warning`, `danger` and `success` colors.
  <sup>2</sup>: If an `"accent"` color is not defined in the theme, the `--ds-color-accent-*` variables will point to the first `main-color`.

- CSS variables: `--ds-color-*-{1,2,...,13,contrast-1,contrast-2}`, which were generated from the `primitives` layer of design tokens, have been removed since they are always 1-to-1 with the semantic layer. Use the equivalent variables from the semantic layer instead ([#2641](https://github.com/digdir/designsystemet/pull/2641))

  Example, for the `neutral` scale:

  ```css
    var(--ds-color-neutral-background-default); /* instead of: var(--ds-color-neutral-1) */
    var(--ds-color-neutral-background-subtle);  /* instead of: var(--ds-color-neutral-2) */
    var(--ds-color-neutral-surface-default);    /* instead of: var(--ds-color-neutral-3) */
    var(--ds-color-neutral-surface-hover);      /* instead of: var(--ds-color-neutral-4) */
    var(--ds-color-neutral-surface-active);     /* instead of: var(--ds-color-neutral-5) */
    var(--ds-color-neutral-border-subtle);      /* instead of: var(--ds-color-neutral-6) */
    var(--ds-color-neutral-border-default);     /* instead of: var(--ds-color-neutral-7) */
    var(--ds-color-neutral-border-strong);      /* instead of: var(--ds-color-neutral-8) */
    var(--ds-color-neutral-base-default);       /* instead of: var(--ds-color-neutral-9) */
    var(--ds-color-neutral-base-hover);         /* instead of: var(--ds-color-neutral-10) */
    var(--ds-color-neutral-base-active);        /* instead of: var(--ds-color-neutral-11) */
    var(--ds-color-neutral-text-subtle);        /* instead of: var(--ds-color-neutral-12) */
    var(--ds-color-neutral-text-default);       /* instead of: var(--ds-color-neutral-13) */
    var(--ds-color-neutral-contrast-default);   /* instead of: var(--ds-color-neutral-contrast-1) */
    var(--ds-color-neutral-contrast-subtle);    /* instead of: var(--ds-color-neutral-contrast-2) */
  ```

  ...and similarly for `accent`, `brand1`, `brand2` and `brand3`.

- Implemented a more flexible system of semantic border-radius tokens. ([#2497](https://github.com/digdir/designsystemet/pull/2497))

### Patch Changes

- tokens: Removed validationmessage and label typography styles ([#2698](https://github.com/digdir/designsystemet/pull/2698))

- Update global colors ([#2662](https://github.com/digdir/designsystemet/pull/2662))

## 1.0.0-next.35

### Patch Changes

- Body/Paragraph ([#2529](https://github.com/digdir/designsystemet/pull/2529))
  - Add body-xl token
  - Add xl paragraph
  - Remove ingress tokens

## 1.0.0-next.34

## 1.0.0-next.33

## 1.0.0-next.32

## 1.0.0-next.15

### Patch Changes

- refactor: single CSS file for theme ([#2204](https://github.com/digdir/designsystemet/pull/2204))

## 1.0.0-next.14

### Patch Changes

- [`2d1da9a`](https://github.com/digdir/designsystemet/commit/2d1da9a4f77a4d01b17a1987a79ea332465c1d99) Thanks [@mimarz](https://github.com/mimarz)! - Testing snapshot release

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.6](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.3...@digdir/designsystemet-theme@1.0.0-rc.6) (2024-06-11)

### Features

- 🎨 V1 Release candidate ([#1849](https://github.com/digdir/designsystemet/issues/1849)) ([917ac1f](https://github.com/digdir/designsystemet/commit/917ac1f4a90b7ec2f96247ee015ab47224117d86))

## [0.15.3](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.2...@digdir/designsystemet-theme@0.15.3) (2024-04-23)

**Note:** Version bump only for package @digdir/designsystemet-theme

## [0.15.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.1...@digdir/designsystemet-theme@0.15.2) (2024-04-22)

**Note:** Version bump only for package @digdir/designsystemet-theme

## [0.15.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.1-alpha.3...@digdir/designsystemet-theme@0.15.1) (2024-04-15)

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))
- **Ingress:** Change line height ([#1793](https://github.com/digdir/designsystemet/issues/1793)) ([0e0b35b](https://github.com/digdir/designsystemet/commit/0e0b35be735fa35b5b319e1b07e13896d077cc9b))

## [0.15.1-alpha.3](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.1-alpha.2...@digdir/designsystemet-theme@0.15.1-alpha.3) (2024-04-10)

### Features

- **Ingress:** Change line height ([#1793](https://github.com/digdir/designsystemet/issues/1793)) ([0e0b35b](https://github.com/digdir/designsystemet/commit/0e0b35be735fa35b5b319e1b07e13896d077cc9b))

## [0.15.1-alpha.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.0...@digdir/designsystemet-theme@0.15.1-alpha.2) (2024-04-09)

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))

## [0.15.1-alpha.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.0...@digdir/designsystemet-theme@0.15.1-alpha.1) (2024-04-04)

### Reverts

- Revert "🍱 Generated new package tokens" ([afa9a47](https://github.com/digdir/designsystemet/commit/afa9a476483612bd162f23d371d4e467755774c8))

## [0.15.1-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.15.0...@digdir/designsystemet-theme@0.15.1-alpha.0) (2024-03-21)

### Reverts

- Revert "🍱 Generated new package tokens" ([106c9c7](https://github.com/digdir/designsystemet/commit/106c9c74463696c22846725c67c3ac08e43249b0))

# [0.15.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.14.1...@digdir/designsystemet-theme@0.15.0) (2024-03-20)

### Features

- **Paragraph:** Add `variant` prop with `long` and `short` ([#1636](https://github.com/digdir/designsystemet/issues/1636)) ([efedb27](https://github.com/digdir/designsystemet/commit/efedb27af6324bd018c80392b5a279e57f0cd5dd))

## [0.14.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-theme@0.14.0...@digdir/designsystemet-theme@0.14.1) (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-theme

# 0.14.0 (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-theme

### BREAKING CHANGE: Package restructure

# [0.13.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.12.0...@digdir/design-system-tokens@0.13.0) (2024-02-07)

### Features

- **tokens:** added f6 and f7 to the typography scale ([#1374](https://github.com/digdir/designsystemet/issues/1374)) ([ba945f9](https://github.com/digdir/designsystemet/commit/ba945f90afd6ae4040d734c92ba50ac7f33ec290))
- **tokens:** added surface focus color ([#1445](https://github.com/digdir/designsystemet/issues/1445)) ([c81cb5d](https://github.com/digdir/designsystemet/commit/c81cb5d6e54b5764d6093a924804ab85181764a0))

# [0.12.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.11.2...@digdir/design-system-tokens@0.12.0) (2024-01-10)

### Features

- **tokens:** Remove JS tokens ([#1347](https://github.com/digdir/designsystemet/issues/1347)) ([1a7e332](https://github.com/digdir/designsystemet/commit/1a7e3322f4c8a53fefe745613ee2987f7cb0d510))

## [0.11.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.11.1...@digdir/design-system-tokens@0.11.2) (2024-01-05)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.11.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.11.0...@digdir/design-system-tokens@0.11.1) (2024-01-02)

**Note:** Version bump only for package @digdir/design-system-tokens

# [0.11.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.10.0...@digdir/design-system-tokens@0.11.0) (2023-12-19)

### Features

- **tokens:** add missing border-radius tokens ([#1232](https://github.com/digdir/designsystemet/issues/1232)) ([85d521e](https://github.com/digdir/designsystemet/commit/85d521e5bacda936b5ea7066f41d916925e2186d))

# [0.10.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.8.1...@digdir/design-system-tokens@0.10.0) (2023-11-17)

### Bug Fixes

- Update box shadow tokens ([#1065](https://github.com/digdir/designsystemet/issues/1065)) ([4931d6d](https://github.com/digdir/designsystemet/commit/4931d6d245b687128ebd4096568318e22d135e78))

### Features

- Change divider color tokens ([#1056](https://github.com/digdir/designsystemet/issues/1056)) ([b01b107](https://github.com/digdir/designsystemet/commit/b01b10768f9cda698facf2a7686e495a6df32884))
- Remove density tokens ([#1079](https://github.com/digdir/designsystemet/issues/1079)) ([d25c4fd](https://github.com/digdir/designsystemet/commit/d25c4fdf77080776cfd71c69a88da4013edc4caf))

# [0.9.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.8.1...@digdir/design-system-tokens@0.9.0) (2023-11-08)

### Features

- Change divider color tokens ([#1056](https://github.com/digdir/designsystemet/issues/1056)) ([b01b107](https://github.com/digdir/designsystemet/commit/b01b10768f9cda698facf2a7686e495a6df32884))

## [0.8.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.8.0...@digdir/design-system-tokens@0.8.1) (2023-10-16)

**Note:** Version bump only for package @digdir/design-system-tokens

# [0.8.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.7.0...@digdir/design-system-tokens@0.8.0) (2023-10-05)

### Features

- Change `color` names `primary`, `secondary`, `tertiary` to `first`, `second`, `third` ([#887](https://github.com/digdir/designsystemet/issues/887)) ([50f4eee](https://github.com/digdir/designsystemet/commit/50f4eee4bf2ce813001ad1e28fa12648149fe677))

# [0.7.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.6.1...@digdir/design-system-tokens@0.7.0) (2023-09-21)

### Features

- **ErrorMessage:** Add Large size token ([#839](https://github.com/digdir/designsystemet/issues/839)) ([a5a7739](https://github.com/digdir/designsystemet/commit/a5a7739d75de642ea6841b61ca4b719be91856b0))

## [0.6.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.6.0...@digdir/design-system-tokens@0.6.1) (2023-09-19)

**Note:** Version bump only for package @digdir/design-system-tokens

# [0.6.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.5.0...@digdir/design-system-tokens@0.6.0) (2023-09-18)

### Features

- added global action colors ([#779](https://github.com/digdir/designsystemet/issues/779)) ([2046352](https://github.com/digdir/designsystemet/commit/2046352e26f234ba304a405ed691004a1c03e0ce))

# [0.5.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.4.2...@digdir/design-system-tokens@0.5.0) (2023-08-31)

### Bug Fixes

- remove brreg action colors, we have to agree upon hover behavior ([#758](https://github.com/digdir/designsystemet/issues/758)) ([02ae6ee](https://github.com/digdir/designsystemet/commit/02ae6ee786aa1cf77d2fdf88ef1041199e81b8f2))

### Features

- added token for surface.neutral.dark-hover ([#767](https://github.com/digdir/designsystemet/issues/767)) ([c083348](https://github.com/digdir/designsystemet/commit/c083348f200fe594eb3d1aeb805e95b7b00df5d9))

## [0.4.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.4.1...@digdir/design-system-tokens@0.4.2) (2023-08-25)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.4.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.4.0...@digdir/design-system-tokens@0.4.1) (2023-08-23)

### Bug Fixes

- **tokens:** Brand tokens not always overriding correctly in tokens export ([#750](https://github.com/digdir/designsystemet/issues/750)) ([4ae2c5b](https://github.com/digdir/designsystemet/commit/4ae2c5b99139c3cef5b5ffc67d201a61220e89a8))

# [0.4.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.3.0...@digdir/design-system-tokens@0.4.0) (2023-08-23)

### Features

- added default action colors ([#728](https://github.com/digdir/designsystemet/issues/728)) ([d578067](https://github.com/digdir/designsystemet/commit/d578067bd0478044904896156ba3154685af58a1))

# [0.3.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.2.0...@digdir/design-system-tokens@0.3.0) (2023-08-16)

### Features

- **tokens:** Add Brreg theme ([#701](https://github.com/digdir/designsystemet/issues/701)) ([64c4f7a](https://github.com/digdir/designsystemet/commit/64c4f7ad121ecbaaf881d1fd198645250ec5f8fd))

# [0.2.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.7...@digdir/design-system-tokens@0.2.0) (2023-08-09)

### Features

- **tokens:** Removed font-weight for radio-and-checkbox tokens ([#692](https://github.com/digdir/designsystemet/issues/692)) ([f1bb5ef](https://github.com/digdir/designsystemet/commit/f1bb5ef09066a7d4bff348f4ce620fd86e203f08))

## [0.1.7](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.6...@digdir/design-system-tokens@0.1.7) (2023-08-02)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.1.6](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.5...@digdir/design-system-tokens@0.1.6) (2023-07-24)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.1.5](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.4...@digdir/design-system-tokens@0.1.5) (2023-07-05)

### Bug Fixes

- **Readme:** fixed spelling issue ([#654](https://github.com/digdir/designsystemet/issues/654)) ([6ec0cc2](https://github.com/digdir/designsystemet/commit/6ec0cc2a2d2fc9c7cabd56eb2874a7e84c303029))

## [0.1.4](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.3...@digdir/design-system-tokens@0.1.4) (2023-06-14)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.1.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.2...@digdir/design-system-tokens@0.1.3) (2023-06-07)

### Bug Fixes

- **Tokens:** 🐛 Fix missing unit on css spacing tokens ([#512](https://github.com/digdir/designsystemet/issues/512)) ([fd1b6f0](https://github.com/digdir/designsystemet/commit/fd1b6f0279d050fbb0954b0d26c167b3ca93cd57))

## [0.1.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.1...@digdir/design-system-tokens@0.1.2) (2023-05-31)

**Note:** Version bump only for package @digdir/design-system-tokens

## [0.1.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.1.0...@digdir/design-system-tokens@0.1.1) (2023-05-22)

**Note:** Version bump only for package @digdir/design-system-tokens

# [0.1.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.0.3...@digdir/design-system-tokens@0.1.0) (2023-05-16)

### Features

- :lipstick: Added fluid typography tokens ([#302](https://github.com/digdir/designsystemet/issues/302)) ([1187af9](https://github.com/digdir/designsystemet/commit/1187af9aaa3b936886696590f387a0f32bb44ba2))

## [0.0.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-tokens@0.0.2...@digdir/design-system-tokens@0.0.3) (2023-03-17)

**Note:** Version bump only for package @digdir/design-system-tokens

## 0.0.2 (2023-03-09)

**Note:** Version bump only for package @digdir/design-system-tokens
