# Change Log

## 1.0.0-next.36

### Patch Changes

- ValidationMessage: Add icon when `error={true}` ([#2596](https://github.com/digdir/designsystemet/pull/2596))

- chip: Fix wrong font sizes ([#2595](https://github.com/digdir/designsystemet/pull/2595))

- Combobox: fix overflow on screens narrower than ~340px ([#2570](https://github.com/digdir/designsystemet/pull/2570))

- Label: Use data attributes for styling ([#2588](https://github.com/digdir/designsystemet/pull/2588))

  ValidationMessage: Use data attributes for styling

- Select + Textarea: ([#2571](https://github.com/digdir/designsystemet/pull/2571))

  - Remove `label`, `hideLabel`, `description`, `characterLimit` and `error` as these will be part of `Field` API

- Remove `baseline` layer and fix layerorder for typography ([#2588](https://github.com/digdir/designsystemet/pull/2588))

## 1.0.0-next.35

### Patch Changes

- Pagination: ([#2460](https://github.com/digdir/designsystemet/pull/2460))

  - Remove attributes `currentPage` and `totalPages` on `Pagination`
  - Replace `Pagination.Root` with `Paginaton`
  - Replace `Pagination.Next`, `Pagination.Previous` and `Pagination.Ellipsis` with `Paginaton.Button`
  - Make `usePagination` return spreadable props for subcomponents
  - Add support for `showPages` and `onChange` in `usePagination`

- Skiplink: ([#2577](https://github.com/digdir/designsystemet/pull/2577))

  - Simplify DOM
  - Add support for `forwardRef`

- Accordion: Animate open/close with CSS ([#2527](https://github.com/digdir/designsystemet/pull/2527))

  - Replace onFound with onToggle

- Heading: ([#2525](https://github.com/digdir/designsystemet/pull/2525))

  - Classes with data attributes
  - Move base style to utility classes

- Modal: ([#2440](https://github.com/digdir/designsystemet/pull/2440))

  - Rename `Modal.Dialog` to `Modal`
  - Rename `Modal.Root` to `Modal.Context`
  - Replace `onInteractOutside` event with `backdropClose` boolean
  - Replace `closeButton` and `closeButtonTitle` on `Modal.Header` with `closeButton` on `Modal`
  - Add border to `Modal.Header` and `Modal.Footer`
  - Remove `Modal.Content`
  - Remove `onBeforeClose`
  - Remove `subtitle` from `Modal.Header`

- Body/Paragraph ([#2529](https://github.com/digdir/designsystemet/pull/2529))

  - Add body-xl token
  - Add xl paragraph
  - Remove ingress tokens

- Ingress: Remove component ([#2515](https://github.com/digdir/designsystemet/pull/2515))

  - Use `Paragraph variant='long'` instead

- Heading: Fix `md` heading size ([#2485](https://github.com/digdir/designsystemet/pull/2485))

- Card: ([#2509](https://github.com/digdir/designsystemet/pull/2509))

  - Allow `Card` with content placed directly inside
  - Replace `Card.Header`, `Card.Content` and `Card.Footer` with `Card.Block`
  - Replace `isLink` with anchor-in-heading + `click` handler for better accessibility

- Modal: Remove `Modal.Header` and `Modal.Footer`, replace with `Modal.Block` ([#2583](https://github.com/digdir/designsystemet/pull/2583))

- SkipLink: Remove ds-sr-only class ([#2546](https://github.com/digdir/designsystemet/pull/2546))

- Paragraph: Add css classes and style with data attributes ([#2523](https://github.com/digdir/designsystemet/pull/2523))

- Chip: ([#2493](https://github.com/digdir/designsystemet/pull/2493))
  - Add `Chip.Button`
  - Rename `Chip.Toggle` to `Chip.Radio` and `Chip.Checkbox`
  - Remove `Chip.Group`

## 1.0.0-next.34

### Patch Changes

- Textarea: Use `field-sizing: content` ([#2463](https://github.com/digdir/designsystemet/pull/2463))

- ErrorSummary: Rename ErrorSummary.Root to ErrorSummary ([#2437](https://github.com/digdir/designsystemet/pull/2437))

- Tabs: ([#2448](https://github.com/digdir/designsystemet/pull/2448))

  - Renames `Tabs.Root` to `Tabs`
  - Renames `Tabs.Content` to `Tabs.Panel`

- Rename classes from `ds-error-message*` to `ds-validation-message*` ([#2473](https://github.com/digdir/designsystemet/pull/2473))

- Modal: css changes ([#2418](https://github.com/digdir/designsystemet/pull/2418))

- DropdownMenu: ([#2432](https://github.com/digdir/designsystemet/pull/2432))

  - Rename from `DropdownMenu` to `Dropdown`
  - Change API and structure
  - Rename `.Root` to `.Context`
  - Rename `.Content` to `Dropdown`

- Tabs: css changes ([#2431](https://github.com/digdir/designsystemet/pull/2431))

- ToggleGroup: Rename ToggleGroup.Root to ToggleGroup ([#2424](https://github.com/digdir/designsystemet/pull/2424))

- Badge: Only use single DOM element for rendering ([#2422](https://github.com/digdir/designsystemet/pull/2422))

- Skeleton: Replace Skeleton.Text, Skeleton.Circle and Skeleton.Rectangle with <Skeleton variant=""> ([#2435](https://github.com/digdir/designsystemet/pull/2435))

- Breadcrumbs: Rename `Breadcrumbs.Root` to `Breadcrumbs` and remove `Breadcrumbs.Nav` ([#2428](https://github.com/digdir/designsystemet/pull/2428))

- HelpText: ([#2438](https://github.com/digdir/designsystemet/pull/2438))

  - Use Popover API
  - Remove `portal` prop
  - Render icon with pseudo element and require aria-label

- Fieldset: Style using css attributes ([#2447](https://github.com/digdir/designsystemet/pull/2447))

## 1.0.0-next.33

### Patch Changes

- Pagination: Use data attrs instead of class names ([#2395](https://github.com/digdir/designsystemet/pull/2395))

- Badge: Style using css attributes ([#2391](https://github.com/digdir/designsystemet/pull/2391))

- TableHeaderCell: Remove `sortable` prop, `sort` now handles this ([#2393](https://github.com/digdir/designsystemet/pull/2393))

- dropdownmenu: Style using data attributes ([#2387](https://github.com/digdir/designsystemet/pull/2387))

- Chip: Text color is now `accent` ([#2371](https://github.com/digdir/designsystemet/pull/2371))

- List: Remove `List.Root` and `List.Heading`, which changes API ([#2348](https://github.com/digdir/designsystemet/pull/2348))

- Alert, Avatar, Button, Divider, Link: Use data-attributes for variant, size and color and move icons to CSS ([#2313](https://github.com/digdir/designsystemet/pull/2313))

- Box: Remove component ([#2372](https://github.com/digdir/designsystemet/pull/2372))

- Popover: ([#2369](https://github.com/digdir/designsystemet/pull/2369))

  - Rename `<Popover.Root>` to `<Popover.Context>`
  - use Popover API, allowing `<Popover>` to be used without `Popover.Context`
  - Remove `portal` prop

- Tooltip: Only expose background css variable ([#2389](https://github.com/digdir/designsystemet/pull/2389))

- Switch: don't show check when not checked in readonly ([#2377](https://github.com/digdir/designsystemet/pull/2377))

- Select: Rename from `NativeSelect` ([#2404](https://github.com/digdir/designsystemet/pull/2404))

- Accordion: Now uses details and summary HTML elements ([`5d1c5062b526e6829c322ce66c6df08568bb9f63`](https://github.com/digdir/designsystemet/commit/5d1c5062b526e6829c322ce66c6df08568bb9f63))

- Spinner: Style using data attributes ([#2390](https://github.com/digdir/designsystemet/pull/2390))

- Avatar: new component ([#2312](https://github.com/digdir/designsystemet/pull/2312))

- Tag: Make neutral default color in CSS ([#2397](https://github.com/digdir/designsystemet/pull/2397))

- Card: Use data attrs ([#2398](https://github.com/digdir/designsystemet/pull/2398))

## 1.0.0-next.32

### Patch Changes

- Chip: Support wrapping in group ([#2324](https://github.com/digdir/designsystemet/pull/2324))

## 0.11.0-next.12

### Minor Changes

- SkipLink: New style ([#2260](https://github.com/digdir/designsystemet/pull/2260))

### Patch Changes

- Table: New hover prop and class for toggling hover on rows ([#2285](https://github.com/digdir/designsystemet/pull/2285))

- Table: Width is now by default `100%` ([#2285](https://github.com/digdir/designsystemet/pull/2285))

- AccordionHeading: Correct name on types ([#2276](https://github.com/digdir/designsystemet/pull/2276))

## 0.11.0-next.11

### Patch Changes

- Fixes so spacing is the same in checkbox and radio groups ([#2234](https://github.com/digdir/designsystemet/pull/2234))

- Button: `text-align: inherit` when not in full width ([#2216](https://github.com/digdir/designsystemet/pull/2216))

- Breadcrumbs: ✨ new component ([#2226](https://github.com/digdir/designsystemet/pull/2226))

- Badge: ✨ New component ([#2220](https://github.com/digdir/designsystemet/pull/2220))

## 0.11.0-next.10

### Patch Changes

- [`2d1da9a`](https://github.com/digdir/designsystemet/commit/2d1da9a4f77a4d01b17a1987a79ea332465c1d99) Thanks [@mimarz](https://github.com/mimarz)! - Testing snapshot release

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0-alpha.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.10.0...@digdir/designsystemet-css@0.11.0-alpha.2) (2024-06-11)

### Features

- 🎨 V1 Release candidate ([#1849](https://github.com/digdir/designsystemet/issues/1849)) ([917ac1f](https://github.com/digdir/designsystemet/commit/917ac1f4a90b7ec2f96247ee015ab47224117d86))

### Reverts

- Revert "Publish" ([8b3c1a1](https://github.com/digdir/designsystemet/commit/8b3c1a153d15997e7b95d21eb146a8f456415a33))

# [0.10.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.9.0...@digdir/designsystemet-css@0.10.0) (2024-06-07)

### Bug Fixes

- **Heading:** :coffin: Remove non-working `3xlarge`/`3xl` size ([#2074](https://github.com/digdir/designsystemet/issues/2074)) ([dad4c8e](https://github.com/digdir/designsystemet/commit/dad4c8e3fa96e7e3232960b9224b03afbf9b2f1c))

### Features

- **css:** use native selectors ([#2050](https://github.com/digdir/designsystemet/issues/2050)) ([f1747b0](https://github.com/digdir/designsystemet/commit/f1747b033dd61d42734fd1ede758dc8b86516c45))

# [0.9.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.8.0...@digdir/designsystemet-css@0.9.0) (2024-05-24)

### Bug Fixes

- **Combobox:** remove wrong padding ([#2067](https://github.com/digdir/designsystemet/issues/2067)) ([0a60499](https://github.com/digdir/designsystemet/commit/0a604992bec550efa15e2e98707a5f035406d2c3))
- **RadioGroup:** bigger horizontal gap between inputs ([#2068](https://github.com/digdir/designsystemet/issues/2068)) ([c9818ec](https://github.com/digdir/designsystemet/commit/c9818ec1b50c0cfa673dcbe39d8256e3aed3e4ad))
- **Tabs:** active tab has wrong hover style ([#2061](https://github.com/digdir/designsystemet/issues/2061)) ([104e16d](https://github.com/digdir/designsystemet/commit/104e16d1208ecdcfc5bcb2ff081a4e170f6f3a1c))

### Features

- **Alert:** add shorthand sizes ([#1995](https://github.com/digdir/designsystemet/issues/1995)) ([868d214](https://github.com/digdir/designsystemet/commit/868d2143bd59435a9bec7c61a2d7b7a675b4aa0b))
- **Box:** add shorthand sizes ([#2048](https://github.com/digdir/designsystemet/issues/2048)) ([05901c0](https://github.com/digdir/designsystemet/commit/05901c0d4bf8a91e9d30948eaab09b784c95f1a2))
- **Checkbox:** add shorthand sizes ([#2030](https://github.com/digdir/designsystemet/issues/2030)) ([e2ca09d](https://github.com/digdir/designsystemet/commit/e2ca09d8def52418065f7f71d099ded5e6a9e987))
- **Chips:** add shorthand sizes ([#2007](https://github.com/digdir/designsystemet/issues/2007)) ([318d1ee](https://github.com/digdir/designsystemet/commit/318d1eef8b9fe29318594de23d7298b7b6b760e8))
- **Combobox:** add shorthand sizes ([#2029](https://github.com/digdir/designsystemet/issues/2029)) ([f1ef9fe](https://github.com/digdir/designsystemet/commit/f1ef9feb4c317fe9dccb092267480b4ebf4e996b))
- **DropdownMenu:** add shorthand sizes ([#2021](https://github.com/digdir/designsystemet/issues/2021)) ([cf17310](https://github.com/digdir/designsystemet/commit/cf17310aec5c010e6b7e5d78b1fddd1b451c3cb6))
- **ErrorMessage:** add shorthand sizes ([#2019](https://github.com/digdir/designsystemet/issues/2019)) ([c511c59](https://github.com/digdir/designsystemet/commit/c511c59fc1065060f7982e43d778b793854de6f6))
- **Heading:** add shorthand sizes ([#1997](https://github.com/digdir/designsystemet/issues/1997)) ([265a3c7](https://github.com/digdir/designsystemet/commit/265a3c74345af473f7692552f95b8ae14f5158b2))
- **HelpText:** add shorthand sizes ([#2014](https://github.com/digdir/designsystemet/issues/2014)) ([ad97311](https://github.com/digdir/designsystemet/commit/ad9731117607af9c7b40ab91c88add938f6df4da))
- **Ingress:** add shorthand sizes ([#2020](https://github.com/digdir/designsystemet/issues/2020)) ([62caef5](https://github.com/digdir/designsystemet/commit/62caef5fae14f3447b5ca8b41fb82bbc8440ee03))
- **Label:** add shorthand sizes ([#1999](https://github.com/digdir/designsystemet/issues/1999)) ([919c43c](https://github.com/digdir/designsystemet/commit/919c43cabd4cd13fa1368448d72a8264bdf1a685))
- **NativeSelect:** add shorthand sizes ([#2033](https://github.com/digdir/designsystemet/issues/2033)) ([1d494d1](https://github.com/digdir/designsystemet/commit/1d494d121e9494634805537f1d6a9d58ba2ce8a2))
- **Pagination:** add shorthand sizes ([#2034](https://github.com/digdir/designsystemet/issues/2034)) ([1c549b7](https://github.com/digdir/designsystemet/commit/1c549b70b12cd59f57b47e9d30d769425012441e))
- **Paragraph:** add shorthand sizes ([#1996](https://github.com/digdir/designsystemet/issues/1996)) ([72a7824](https://github.com/digdir/designsystemet/commit/72a782426c26cdc79a0367eba739427660206a3c))
- **Popover:** add shorthand sizes ([#2006](https://github.com/digdir/designsystemet/issues/2006)) ([6637c52](https://github.com/digdir/designsystemet/commit/6637c529e53615fd129686b540f720f9ee2fa8e4))
- **Radio:** add shorthand sizes ([#2036](https://github.com/digdir/designsystemet/issues/2036)) ([20278fa](https://github.com/digdir/designsystemet/commit/20278fa5727e6ea1c3e2867835f1a31b23f86bc9))
- **Search:** add shorthand sizes ([#2028](https://github.com/digdir/designsystemet/issues/2028)) ([d8fc81d](https://github.com/digdir/designsystemet/commit/d8fc81d16a1e07d50466c08e819711edacf09706))
- **Switch:** add shorthand sizes ([#2027](https://github.com/digdir/designsystemet/issues/2027)) ([bd5160b](https://github.com/digdir/designsystemet/commit/bd5160b5de4371fee869551a833850cae832b418))
- **Table:** add shorthand sizes ([#2016](https://github.com/digdir/designsystemet/issues/2016)) ([50cbb8e](https://github.com/digdir/designsystemet/commit/50cbb8efebe9127d4cf2e171369e7ff5e8e3327e))
- **Tabs:** add shorthand sizes ([#2012](https://github.com/digdir/designsystemet/issues/2012)) ([806125d](https://github.com/digdir/designsystemet/commit/806125d27380de3ca3aec2c997de5db57637f1cc))
- **Tag:** add shorthand sizes ([#2017](https://github.com/digdir/designsystemet/issues/2017)) ([405f55d](https://github.com/digdir/designsystemet/commit/405f55dbaa6b92af3ac6c0e7aaa0a5caa94ae532))
- **Textarea:** add shorthand sizes ([#2031](https://github.com/digdir/designsystemet/issues/2031)) ([5932d5e](https://github.com/digdir/designsystemet/commit/5932d5e6ea883852d7edec6802de7d2bb5a1869a))
- **Textfield:** add shorthand sizes ([#2018](https://github.com/digdir/designsystemet/issues/2018)) ([9c52938](https://github.com/digdir/designsystemet/commit/9c52938b63cf661ee5d54044a7ed33174c2f5261))

# [0.8.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.7.0...@digdir/designsystemet-css@0.8.0) (2024-05-16)

### Features

- **Button:** add shorthand sizes ([#1986](https://github.com/digdir/designsystemet/issues/1986)) ([38a5232](https://github.com/digdir/designsystemet/commit/38a523270f17d3a58800921330706b39c51e4837))

# [0.7.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.6.0...@digdir/designsystemet-css@0.7.0) (2024-05-14)

### Bug Fixes

- **Combobox:** Improve performance ([#1771](https://github.com/digdir/designsystemet/issues/1771)) ([18cdd17](https://github.com/digdir/designsystemet/commit/18cdd17c71a49bbae88ade3e2b925dd28f17acb3))
- **Modal:** fix close button position ([#1877](https://github.com/digdir/designsystemet/issues/1877)) ([c866710](https://github.com/digdir/designsystemet/commit/c866710cc00760a8f1a4f1676e2c8a5eda235a72))

### Features

- **Button:** :lipstick: Add top & bottom padding ([#1910](https://github.com/digdir/designsystemet/issues/1910)) ([efd0582](https://github.com/digdir/designsystemet/commit/efd05828d8f4c29d36156e3b51a927b947b728f1))

## [0.6.1-alpha.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.6.1-alpha.0...@digdir/designsystemet-css@0.6.1-alpha.1) (2024-04-26)

### Bug Fixes

- **Modal:** fix close button position ([#1877](https://github.com/digdir/designsystemet/issues/1877)) ([c866710](https://github.com/digdir/designsystemet/commit/c866710cc00760a8f1a4f1676e2c8a5eda235a72))

## [0.6.1-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.6.0...@digdir/designsystemet-css@0.6.1-alpha.0) (2024-04-24)

**Note:** Version bump only for package @digdir/designsystemet-css

# [0.6.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.5.0...@digdir/designsystemet-css@0.6.0) (2024-04-23)

### Bug Fixes

- **Skiplink:** :bug: Should now show correctly ([#1866](https://github.com/digdir/designsystemet/issues/1866)) ([4afbe91](https://github.com/digdir/designsystemet/commit/4afbe91f7b42da0a3fb1ed26ecb919269db3a746))

### Features

- **Alert:** ✨ New design and sizes ([#1804](https://github.com/digdir/designsystemet/issues/1804)) ([14e707d](https://github.com/digdir/designsystemet/commit/14e707d254571084b1f03aa4b90acfa096b8609f))

# [0.5.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.4.0...@digdir/designsystemet-css@0.5.0) (2024-04-22)

### Bug Fixes

- **Textarea** Add missing error border ([#1853](https://github.com/digdir/designsystemet/issues/1853)) ([fc6c0c5](https://github.com/digdir/designsystemet/commit/fc6c0c58f6d9a3b4ce2f868ae1164fe673acefd6))

### Features

- **Button:** Removed `inverted` color ([#1828](https://github.com/digdir/designsystemet/issues/1828)) ([01ad9c5](https://github.com/digdir/designsystemet/commit/01ad9c52459d14270872d2f7e6a0c8a474e0ab2e))
- **Ingress:** add `xsmall`, `small`, `large` sizes ([#1838](https://github.com/digdir/designsystemet/issues/1838)) ([2ec7d2c](https://github.com/digdir/designsystemet/commit/2ec7d2c24d344d018e1bf2c959ea826b7a60ade5))

# [0.4.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.3-alpha.2...@digdir/designsystemet-css@0.4.0) (2024-04-15)

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))
- **css:** Add cascade layer for every component ([#1805](https://github.com/digdir/designsystemet/issues/1805)) ([b40f95b](https://github.com/digdir/designsystemet/commit/b40f95b837355c402d081e6c89dcb8627e32a71b))
- **css:** Add autoprefixer with configuration ([#1669](https://github.com/digdir/designsystemet/issues/1669) [#1773](https://github.com/digdir/designsystemet/issues/1773)) ([#1783](https://github.com/digdir/designsystemet/issues/1783)) ([e870720](https://github.com/digdir/designsystemet/commit/e8707209a1ff2eaf1f3379736ff2ed99988493b3))

## [0.3.3-alpha.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.3-alpha.1...@digdir/designsystemet-css@0.3.3-alpha.2) (2024-04-10)

**Note:** Version bump only for package @digdir/designsystemet-css

## [0.3.3-alpha.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.3-alpha.0...@digdir/designsystemet-css@0.3.3-alpha.1) (2024-04-10)

### Features

- **css:** Add autoprefixer with configuration ([#1669](https://github.com/digdir/designsystemet/issues/1669) [#1773](https://github.com/digdir/designsystemet/issues/1773)) ([#1783](https://github.com/digdir/designsystemet/issues/1783)) ([e870720](https://github.com/digdir/designsystemet/commit/e8707209a1ff2eaf1f3379736ff2ed99988493b3))

## [0.3.3-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.2...@digdir/designsystemet-css@0.3.3-alpha.0) (2024-04-09)

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))

## [0.3.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.1...@digdir/designsystemet-css@0.3.2) (2024-04-08)

### Bug Fixes

- **Radio:** :bug: Correct orientation of radio and label ([#1779](https://github.com/digdir/designsystemet/issues/1779)) ([c5c5f9f](https://github.com/digdir/designsystemet/commit/c5c5f9f358b50df7a9586829ab9605cc75371f78))

## [0.3.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.3.0...@digdir/designsystemet-css@0.3.1) (2024-04-08)

### Bug Fixes

- **Checkbox:** :bug: Removed unwanted spacing when no label is defined ([#1762](https://github.com/digdir/designsystemet/issues/1762)) ([439bf8c](https://github.com/digdir/designsystemet/commit/439bf8c1f0cc19b5b49fd65295186005a777038f))
- **Radio:** :bug: Removed unwanted spacing when no label is defined ([#1768](https://github.com/digdir/designsystemet/issues/1768)) ([03d2553](https://github.com/digdir/designsystemet/commit/03d25530808c70b850f637f71e48dbcd2fe94dbc))

# [0.3.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.2.3...@digdir/designsystemet-css@0.3.0) (2024-04-04)

### Features

- **css:** Add css layers ([#1756](https://github.com/digdir/designsystemet/issues/1756)) ([ac3a2b4](https://github.com/digdir/designsystemet/commit/ac3a2b4e289a061ec8f5d589cbcdf8647e19b5d4))

## [0.2.3](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.2.2...@digdir/designsystemet-css@0.2.3) (2024-03-21)

**Note:** Version bump only for package @digdir/designsystemet-css

## [0.2.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.2.1...@digdir/designsystemet-css@0.2.2) (2024-03-20)

### Bug Fixes

- **Accordion:** Missing hover & styling corrections ([#1710](https://github.com/digdir/designsystemet/issues/1710)) ([70fe406](https://github.com/digdir/designsystemet/commit/70fe406b3d03cdc70ec58b61e49bf6cdf01f3a49))

### BREAKING CHANGE:

- **Tabs:** Remove icon sizing ([#1715](https://github.com/digdir/designsystemet/issues/1715))) ([723bf27](https://github.com/digdir/designsystemet/commit/723bf27bebe849d2017f7fd296c0d8483107e01e))
- **Button:** Remove icon sizing ([#1709](https://github.com/digdir/designsystemet/issues/1709)) ([9737aae](https://github.com/digdir/designsystemet/commit/9737aae42eaff7fbaf0b893ea10efd61bcb0f716))

## [0.2.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-css@0.2.0...@digdir/designsystemet-css@0.2.1) (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-css

# 0.2.0 (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-css
