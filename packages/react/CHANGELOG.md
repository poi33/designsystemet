# Change Log

## 1.0.0-next.36

### Patch Changes

- Label: Use data attributes for styling ([#2588](https://github.com/digdir/designsystemet/pull/2588))

  ValidationMessage: Use data attributes for styling

- Select + Textarea: ([#2571](https://github.com/digdir/designsystemet/pull/2571))
  - Remove `label`, `hideLabel`, `description`, `characterLimit` and `error` as these will be part of `Field` API

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

- Correctly mark dependencies as external. This ensures Accordion works when consumers have enabled tree-shaking. ([#2479](https://github.com/digdir/designsystemet/pull/2479))

- Button: Remove `type` when `asChild={true}` ([#2472](https://github.com/digdir/designsystemet/pull/2472))

- ErrorSummary: Rename ErrorSummary.Root to ErrorSummary ([#2437](https://github.com/digdir/designsystemet/pull/2437))

- Tabs: ([#2448](https://github.com/digdir/designsystemet/pull/2448))

  - Renames `Tabs.Root` to `Tabs`
  - Renames `Tabs.Content` to `Tabs.Panel`

- Modal: css changes ([#2418](https://github.com/digdir/designsystemet/pull/2418))

- Rename `ErrorMessage` to `ValidationMessage` ([#2473](https://github.com/digdir/designsystemet/pull/2473))

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

- List: Remove `List.Root` and `List.Heading`, which changes API ([#2348](https://github.com/digdir/designsystemet/pull/2348))

- Alert, Avatar, Button, Divider, Link: Use data-attributes for variant, size and color and move icons to CSS ([#2313](https://github.com/digdir/designsystemet/pull/2313))

- Box: Remove component ([#2372](https://github.com/digdir/designsystemet/pull/2372))

- Popover: ([#2369](https://github.com/digdir/designsystemet/pull/2369))

  - Rename `<Popover.Root>` to `<Popover.Context>`
  - use Popover API, allowing `<Popover>` to be used without `Popover.Context`
  - Remove `portal` prop

- Select: Rename from `NativeSelect` ([#2404](https://github.com/digdir/designsystemet/pull/2404))

- Table: Set sort button type to prevent form submit ([#2402](https://github.com/digdir/designsystemet/pull/2402))

- Heading: default level is now 2 ([#2378](https://github.com/digdir/designsystemet/pull/2378))

- Select: ([#2415](https://github.com/digdir/designsystemet/pull/2415))

  - Add Select.Option and Select.Optgroup compond components
  - Remove `multiple` prop

- Accordion: Now uses details and summary HTML elements ([`5d1c5062b526e6829c322ce66c6df08568bb9f63`](https://github.com/digdir/designsystemet/commit/5d1c5062b526e6829c322ce66c6df08568bb9f63))

- Spinner: Style using data attributes ([#2390](https://github.com/digdir/designsystemet/pull/2390))

- Avatar: new component ([#2312](https://github.com/digdir/designsystemet/pull/2312))

- Tag: Make neutral default color in CSS ([#2397](https://github.com/digdir/designsystemet/pull/2397))

- Card: Use data attrs ([#2398](https://github.com/digdir/designsystemet/pull/2398))

- Combobox: fix virtual combobox having large gap between items ([#2376](https://github.com/digdir/designsystemet/pull/2376))

## 1.0.0-next.32

## 1.0.0-next.17

### Patch Changes

- Table: New hover prop and class for toggling hover on rows ([#2285](https://github.com/digdir/designsystemet/pull/2285))

- Combobox: Make controlled input adhere to `inputValue` and send all change events ([#2267](https://github.com/digdir/designsystemet/pull/2267))

- AccordionHeading: Correct name on types ([#2276](https://github.com/digdir/designsystemet/pull/2276))

- Badge: Export component ([#2297](https://github.com/digdir/designsystemet/pull/2297))

- ToggleGroup, Tabs: Active item equality check is now strict ([#2253](https://github.com/digdir/designsystemet/pull/2253))

## 1.0.0-next.16

### Minor Changes

- Breadcrumbs: ✨ new component ([#2226](https://github.com/digdir/designsystemet/pull/2226))

- Badge: ✨ New component ([#2220](https://github.com/digdir/designsystemet/pull/2220))

### Patch Changes

- Modal: add missing ModalRoot export ([#2228](https://github.com/digdir/designsystemet/pull/2228))

- RovingFocus: add `orientation` to support for different arrow directions, and add support home/end buttons ([#2206](https://github.com/digdir/designsystemet/pull/2206))

  - Affects `ToggleGroup`, where up and down arrows can now be used
  - Affects `ToggleGroup`, where home and end can now be used
  - Affects `Tabs`, where home and end can now be used

- Accordion: Fix `defaultOpen` flicker on first render ([#2214](https://github.com/digdir/designsystemet/pull/2214))

- Tabs: Make arrow keys work in any direction ([#2223](https://github.com/digdir/designsystemet/pull/2223))

- Fixes so spacing is the same in checkbox and radio groups ([#2234](https://github.com/digdir/designsystemet/pull/2234))

- Divider: hide from screen readers ([#2232](https://github.com/digdir/designsystemet/pull/2232))

- Modal: remove `FloatingFocusManager` ([#2224](https://github.com/digdir/designsystemet/pull/2224))

- NativeSelect: add focus in `readOnly` state ([#2212](https://github.com/digdir/designsystemet/pull/2212))

## 1.0.0-next.15

### Patch Changes

- chore: Fix rollup build warnings for react package ([#2187](https://github.com/digdir/designsystemet/pull/2187))

- chore: Replace eslint with biomejs ([#2189](https://github.com/digdir/designsystemet/pull/2189))

## 1.0.0-next.14

### Patch Changes

- [`2d1da9a`](https://github.com/digdir/designsystemet/commit/2d1da9a4f77a4d01b17a1987a79ea332465c1d99) Thanks [@mimarz](https://github.com/mimarz)! - Testing snapshot release

- [#2184](https://github.com/digdir/designsystemet/pull/2184) [`8b2abdb`](https://github.com/digdir/designsystemet/commit/8b2abdbce4f51fd7771e0ba041515e25aa5e88a3) Thanks [@mimarz](https://github.com/mimarz)! - fix(Combobox): :bug: Button for toggling open/close should now close when open

- [#2185](https://github.com/digdir/designsystemet/pull/2185) [`567329b`](https://github.com/digdir/designsystemet/commit/567329ba0c228490c95ea4c062e7045bde597a53) Thanks [@mimarz](https://github.com/mimarz)! - feat(Combobox): :sparkles: Label now supports other elements

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.6](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.63.0...@digdir/designsystemet-react@1.0.0-rc.6) (2024-06-11)

### Bug Fixes

- **Tab:** Use correct type on Tab button ([f3f5949](https://github.com/digdir/designsystemet/commit/f3f5949d3a0137463cf511317f1c7be5d0c9138e))

### Features

- 🎨 V1 Release candidate ([#1849](https://github.com/digdir/designsystemet/issues/1849)) ([917ac1f](https://github.com/digdir/designsystemet/commit/917ac1f4a90b7ec2f96247ee015ab47224117d86))

### Reverts

- Revert "Publish" ([8b3c1a1](https://github.com/digdir/designsystemet/commit/8b3c1a153d15997e7b95d21eb146a8f456415a33))

# [0.63.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.62.0...@digdir/designsystemet-react@0.63.0) (2024-06-07)

### Bug Fixes

- **Combobox:** make value as string of integer work ([#2095](https://github.com/digdir/designsystemet/issues/2095)) ([0a687f2](https://github.com/digdir/designsystemet/commit/0a687f2a8ef42d1b4ee051644bf3f8baaa7afcab)), closes [#2081](https://github.com/digdir/designsystemet/issues/2081) [#2106](https://github.com/digdir/designsystemet/issues/2106)
- **Heading:** :coffin: Remove non-working `3xlarge`/`3xl` size ([#2074](https://github.com/digdir/designsystemet/issues/2074)) ([dad4c8e](https://github.com/digdir/designsystemet/commit/dad4c8e3fa96e7e3232960b9224b03afbf9b2f1c))

### Features

- **css:** use native selectors ([#2050](https://github.com/digdir/designsystemet/issues/2050)) ([f1747b0](https://github.com/digdir/designsystemet/commit/f1747b033dd61d42734fd1ede758dc8b86516c45))

# [0.62.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.61.0...@digdir/designsystemet-react@0.62.0) (2024-05-24)

### Bug Fixes

- **Tabs:** `className` being overridden ([#2064](https://github.com/digdir/designsystemet/issues/2064)) ([10fb504](https://github.com/digdir/designsystemet/commit/10fb50477fee3846016b81c23db803eb93992329))
- **Tabs:** active tab has wrong hover style ([#2061](https://github.com/digdir/designsystemet/issues/2061)) ([104e16d](https://github.com/digdir/designsystemet/commit/104e16d1208ecdcfc5bcb2ff081a4e170f6f3a1c))
- **Textfield:** character counter inital value ([#2056](https://github.com/digdir/designsystemet/issues/2056)) ([7b5df7f](https://github.com/digdir/designsystemet/commit/7b5df7f8033d372d3b7d0fa874e0b797a627ab60))
- **Tooltip:** rendered in a portal by default ([#2060](https://github.com/digdir/designsystemet/issues/2060)) ([95960f7](https://github.com/digdir/designsystemet/commit/95960f78743e4f05cf13c6a4ca02f6a9e9307bb5))

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
- **List:** add shorthand sizes ([#2009](https://github.com/digdir/designsystemet/issues/2009)) ([7f694e0](https://github.com/digdir/designsystemet/commit/7f694e0167e0a99e0208fda58477ca34e9926678))
- **NativeSelect:** add shorthand sizes ([#2033](https://github.com/digdir/designsystemet/issues/2033)) ([1d494d1](https://github.com/digdir/designsystemet/commit/1d494d121e9494634805537f1d6a9d58ba2ce8a2))
- **Pagination:** add shorthand sizes ([#2034](https://github.com/digdir/designsystemet/issues/2034)) ([1c549b7](https://github.com/digdir/designsystemet/commit/1c549b70b12cd59f57b47e9d30d769425012441e))
- **Paragraph:** add shorthand sizes ([#1996](https://github.com/digdir/designsystemet/issues/1996)) ([72a7824](https://github.com/digdir/designsystemet/commit/72a782426c26cdc79a0367eba739427660206a3c))
- **Popover:** add shorthand sizes ([#2006](https://github.com/digdir/designsystemet/issues/2006)) ([6637c52](https://github.com/digdir/designsystemet/commit/6637c529e53615fd129686b540f720f9ee2fa8e4))
- **Radio:** add shorthand sizes ([#2036](https://github.com/digdir/designsystemet/issues/2036)) ([20278fa](https://github.com/digdir/designsystemet/commit/20278fa5727e6ea1c3e2867835f1a31b23f86bc9))
- **Search:** add shorthand sizes ([#2028](https://github.com/digdir/designsystemet/issues/2028)) ([d8fc81d](https://github.com/digdir/designsystemet/commit/d8fc81d16a1e07d50466c08e819711edacf09706))
- **Spinner:** add shorthand sizes ([#2000](https://github.com/digdir/designsystemet/issues/2000)) ([b18eb98](https://github.com/digdir/designsystemet/commit/b18eb989fc693cb59a4bea8c9c63ac3083168954))
- **Switch:** add shorthand sizes ([#2027](https://github.com/digdir/designsystemet/issues/2027)) ([bd5160b](https://github.com/digdir/designsystemet/commit/bd5160b5de4371fee869551a833850cae832b418))
- **Table:** add shorthand sizes ([#2016](https://github.com/digdir/designsystemet/issues/2016)) ([50cbb8e](https://github.com/digdir/designsystemet/commit/50cbb8efebe9127d4cf2e171369e7ff5e8e3327e))
- **Tabs:** add shorthand sizes ([#2012](https://github.com/digdir/designsystemet/issues/2012)) ([806125d](https://github.com/digdir/designsystemet/commit/806125d27380de3ca3aec2c997de5db57637f1cc))
- **Tag:** add shorthand sizes ([#2017](https://github.com/digdir/designsystemet/issues/2017)) ([405f55d](https://github.com/digdir/designsystemet/commit/405f55dbaa6b92af3ac6c0e7aaa0a5caa94ae532))
- **Textarea:** add shorthand sizes ([#2031](https://github.com/digdir/designsystemet/issues/2031)) ([5932d5e](https://github.com/digdir/designsystemet/commit/5932d5e6ea883852d7edec6802de7d2bb5a1869a))
- **Textfield:** add shorthand sizes ([#2018](https://github.com/digdir/designsystemet/issues/2018)) ([9c52938](https://github.com/digdir/designsystemet/commit/9c52938b63cf661ee5d54044a7ed33174c2f5261))
- **ToggleGroup:** add shorthand sizes ([#2011](https://github.com/digdir/designsystemet/issues/2011)) ([44f9abd](https://github.com/digdir/designsystemet/commit/44f9abd5297f8cc83b752fc95705c050f2aa8499))

# [0.61.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.60.0...@digdir/designsystemet-react@0.61.0) (2024-05-16)

### Bug Fixes

- **Combobox:** Show all options in single mode when a value is selected ([#1983](https://github.com/digdir/designsystemet/issues/1983)) ([ac82b50](https://github.com/digdir/designsystemet/commit/ac82b50ff9b938081dc7f70d8577bb9838aa7133))

### Features

- **Button:** add shorthand sizes ([#1986](https://github.com/digdir/designsystemet/issues/1986)) ([38a5232](https://github.com/digdir/designsystemet/commit/38a523270f17d3a58800921330706b39c51e4837))

# [0.60.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.59.0...@digdir/designsystemet-react@0.60.0) (2024-05-14)

### Bug Fixes

- **Combobox:** Improve performance ([#1771](https://github.com/digdir/designsystemet/issues/1771)) ([18cdd17](https://github.com/digdir/designsystemet/commit/18cdd17c71a49bbae88ade3e2b925dd28f17acb3))
- **Modal:** fix close button position ([#1877](https://github.com/digdir/designsystemet/issues/1877)) ([c866710](https://github.com/digdir/designsystemet/commit/c866710cc00760a8f1a4f1676e2c8a5eda235a72))

### Features

- **Box:** Remove deprecated `as` prop ([#1896](https://github.com/digdir/designsystemet/issues/1896)) ([59dd231](https://github.com/digdir/designsystemet/commit/59dd2310cfb7c91e4be20a54412e036a8a268b73))
- **Button:** Remove deprecated `as` prop ([#1894](https://github.com/digdir/designsystemet/issues/1894)) ([c346203](https://github.com/digdir/designsystemet/commit/c34620344be7d25c4c73b147b136254b177cab2c))
- **Card:** Remove deprecated `as` prop ([#1897](https://github.com/digdir/designsystemet/issues/1897)) ([17ef8c6](https://github.com/digdir/designsystemet/commit/17ef8c64c3ad07d8a0bf036a032c1a5bd62a4233))
- **DropdownMenuItem:** Remove deprecated `as` prop ([#1895](https://github.com/digdir/designsystemet/issues/1895)) ([2f705bb](https://github.com/digdir/designsystemet/commit/2f705bbe063317fd6f21d340ab222e966d912d7e))
- **ErrorMessage:** Remove deprecated `as` prop ([#1899](https://github.com/digdir/designsystemet/issues/1899)) ([b37584a](https://github.com/digdir/designsystemet/commit/b37584af07b2b8a4f536b5931213227fd1fc1c9d))
- **Heading:** Remove deprecated `as` prop ([#1900](https://github.com/digdir/designsystemet/issues/1900)) ([685e438](https://github.com/digdir/designsystemet/commit/685e43897775276c331b2cf548f70fa508806d9e))
- **Ingress:** Remove deprecated `as` prop ([#1903](https://github.com/digdir/designsystemet/issues/1903)) ([1139b31](https://github.com/digdir/designsystemet/commit/1139b312defa3411e9133c949dc19d48011fa74d))
- **Label:** Remove deprecated `as` prop ([#1904](https://github.com/digdir/designsystemet/issues/1904)) ([a1469e4](https://github.com/digdir/designsystemet/commit/a1469e40f1aa417f8080b12801366a343eef3908))
- **Link:** Remove deprecated `as` prop ([#1898](https://github.com/digdir/designsystemet/issues/1898)) ([f037bd2](https://github.com/digdir/designsystemet/commit/f037bd2e62a9a8c75b097be53d6c959eb6dfb26b))
- **Paragraph:** Remove deprecated `as` prop ([#1905](https://github.com/digdir/designsystemet/issues/1905)) ([aa81f5a](https://github.com/digdir/designsystemet/commit/aa81f5ad1f5d564eccbd3036b99085baa179ea9b))
- **Paragraph:** Remove deprectated `short` prop ([#1891](https://github.com/digdir/designsystemet/issues/1891)) ([e1213b0](https://github.com/digdir/designsystemet/commit/e1213b0fc80b1046587f316f31ea6df1b67dabef))

## [0.59.1-alpha.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.59.1-alpha.0...@digdir/designsystemet-react@0.59.1-alpha.1) (2024-04-26)

### Bug Fixes

- **Modal:** fix close button position ([#1877](https://github.com/digdir/designsystemet/issues/1877)) ([c866710](https://github.com/digdir/designsystemet/commit/c866710cc00760a8f1a4f1676e2c8a5eda235a72))

## [0.59.1-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.59.0...@digdir/designsystemet-react@0.59.1-alpha.0) (2024-04-24)

### Bug Fixes

- **Combobox:** Re-renders ([24fa39f](https://github.com/digdir/designsystemet/commit/24fa39f5124c9fc0b01590ad3f1e7960c54e5f35))

# [0.59.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.58.0...@digdir/designsystemet-react@0.59.0) (2024-04-23)

### Bug Fixes

- **Skiplink:** :bug: Should now show correctly ([#1866](https://github.com/digdir/designsystemet/issues/1866)) ([4afbe91](https://github.com/digdir/designsystemet/commit/4afbe91f7b42da0a3fb1ed26ecb919269db3a746))

### Features

- **Alert:** ✨ New design and sizes ([#1804](https://github.com/digdir/designsystemet/issues/1804)) ([14e707d](https://github.com/digdir/designsystemet/commit/14e707d254571084b1f03aa4b90acfa096b8609f))

# [0.58.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.57.0...@digdir/designsystemet-react@0.58.0) (2024-04-22)

### Bug Fixes

- **Textarea** Add missing error border ([#1853](https://github.com/digdir/designsystemet/issues/1853)) ([fc6c0c5](https://github.com/digdir/designsystemet/commit/fc6c0c58f6d9a3b4ce2f868ae1164fe673acefd6))

### Features

- **Button:** Removed `inverted` color ([#1828](https://github.com/digdir/designsystemet/issues/1828)) ([01ad9c5](https://github.com/digdir/designsystemet/commit/01ad9c52459d14270872d2f7e6a0c8a474e0ab2e))
- **Ingress:** Add `xsmall`, `small`, `large` sizes ([#1838](https://github.com/digdir/designsystemet/issues/1838)) ([2ec7d2c](https://github.com/digdir/designsystemet/commit/2ec7d2c24d344d018e1bf2c959ea826b7a60ade5))

# [0.57.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.56.3-alpha.1...@digdir/designsystemet-react@0.57.0) (2024-04-15)

### Bug Fixes

- Check if window is defined in AnimateHeight ([#1797](https://github.com/digdir/designsystemet/issues/1797)) ([66aec2d](https://github.com/digdir/designsystemet/commit/66aec2de637234f12a72e6d726ffc8e5a127196b))

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))
- **css:** Add cascade layer for every component ([#1805](https://github.com/digdir/designsystemet/issues/1805)) ([b40f95b](https://github.com/digdir/designsystemet/commit/b40f95b837355c402d081e6c89dcb8627e32a71b))
- **DropdownMenu, Popover, Modal:** Using `asChild` on `Trigger` components no longer clones style to child ([#1795](https://github.com/digdir/designsystemet/issues/1795)) ([b827689](https://github.com/digdir/designsystemet/commit/b8276899a6493cd3d651138a00d7ec464b61b60f))
-

## [0.56.3-alpha.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.56.3-alpha.0...@digdir/designsystemet-react@0.56.3-alpha.1) (2024-04-10)

### Bug Fixes

- Check if window is defined in AnimateHeight ([#1797](https://github.com/digdir/designsystemet/issues/1797)) ([66aec2d](https://github.com/digdir/designsystemet/commit/66aec2de637234f12a72e6d726ffc8e5a127196b))

### Features

- **DropdownMenu, Popover, Modal:** Using `asChild` on `Trigger` components no longer clones style to child ([#1795](https://github.com/digdir/designsystemet/issues/1795)) ([b827689](https://github.com/digdir/designsystemet/commit/b8276899a6493cd3d651138a00d7ec464b61b60f))

## [0.56.3-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.56.2...@digdir/designsystemet-react@0.56.3-alpha.0) (2024-04-09)

### Features

- 🎨 Use new sizing scale for typography and components ([#1696](https://github.com/digdir/designsystemet/issues/1696)) ([61b1af7](https://github.com/digdir/designsystemet/commit/61b1af79d96049b664c3fd5725fdffe0f34b27cb))

## [0.56.2](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.56.1...@digdir/designsystemet-react@0.56.2) (2024-04-08)

### Bug Fixes

- **Radio:** :bug: Correct orientation of radio and label ([#1779](https://github.com/digdir/designsystemet/issues/1779)) ([c5c5f9f](https://github.com/digdir/designsystemet/commit/c5c5f9f358b50df7a9586829ab9605cc75371f78))

## [0.56.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.56.0...@digdir/designsystemet-react@0.56.1) (2024-04-08)

### Bug Fixes

- **Checkbox:** :bug: Removed unwanted spacing when no label is defined ([#1762](https://github.com/digdir/designsystemet/issues/1762)) ([439bf8c](https://github.com/digdir/designsystemet/commit/439bf8c1f0cc19b5b49fd65295186005a777038f))
- **Checkbox:** Remove empty label element ([#1737](https://github.com/digdir/designsystemet/issues/1737)) ([152ad27](https://github.com/digdir/designsystemet/commit/152ad27830f569a8b6402a7134e11634dd2f8801))
- **Radio:** :bug: Removed unwanted spacing when no label is defined ([#1768](https://github.com/digdir/designsystemet/issues/1768)) ([03d2553](https://github.com/digdir/designsystemet/commit/03d25530808c70b850f637f71e48dbcd2fe94dbc))
- **Radio:** Remove empty label element ([#1741](https://github.com/digdir/designsystemet/issues/1741)) ([#1764](https://github.com/digdir/designsystemet/issues/1764)) ([73840cf](https://github.com/digdir/designsystemet/commit/73840cfcd041726eb1798add7dbea547adf7fc69))

# [0.56.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.55.0...@digdir/designsystemet-react@0.56.0) (2024-04-04)

### Bug Fixes

- **Checkbox:** `style` applied to wrong element ([#1743](https://github.com/digdir/designsystemet/issues/1743)) ([7bad2c2](https://github.com/digdir/designsystemet/commit/7bad2c2b44cd666094a59a1db2c8e05e422fe6ea))
- **Combobox:** Fix `flushSync` being called inside a lifecycle method ([#1736](https://github.com/digdir/designsystemet/issues/1736)) ([c0a6f73](https://github.com/digdir/designsystemet/commit/c0a6f73c02dc4fa881930bf7cd684997d6fa2223))
- **Radio:** `style` applied to wrong element ([#1742](https://github.com/digdir/designsystemet/issues/1742)) ([fa65b7e](https://github.com/digdir/designsystemet/commit/fa65b7eb8fd8301c1f212bb46283302d24529054))

### Features

- **DropdownMenu:** Remove deprecated `anchorEl` ([#1744](https://github.com/digdir/designsystemet/issues/1744)) ([6da4daa](https://github.com/digdir/designsystemet/commit/6da4daa7292cab394573b2d776415e842f6f45d5))
- **Popover:** Remove deprecated `anchorEl` ([#1718](https://github.com/digdir/designsystemet/issues/1718)) ([e8cf45e](https://github.com/digdir/designsystemet/commit/e8cf45e88b1c4e104b7a39d87756d73975121ae7))
- **storybook:** Add getting started page ([#1746](https://github.com/digdir/designsystemet/issues/1746)) ([1e80130](https://github.com/digdir/designsystemet/commit/1e80130c9068f6a38e1a8ecdc0a351885354ea71))

# [0.55.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.54.0...@digdir/designsystemet-react@0.55.0) (2024-03-21)

### Features

- **Combobox:** Add `hideClearButton` prop ([#1720](https://github.com/digdir/designsystemet/issues/1720)) ([6bbb3b7](https://github.com/digdir/designsystemet/commit/6bbb3b7cce94415e10e981288b7a7a20bb569efc))
- **Combobox:** Add `initialValue` prop ([#1719](https://github.com/digdir/designsystemet/issues/1719)) ([0a0c3d4](https://github.com/digdir/designsystemet/commit/0a0c3d4d3c4e39da4d9f1a5bdad2694e5148390c))

# [0.54.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.53.1...@digdir/designsystemet-react@0.54.0) (2024-03-20)

### Bug Fixes

- **Accordion:** Missing hover & styling corrections ([#1710](https://github.com/digdir/designsystemet/issues/1710)) ([70fe406](https://github.com/digdir/designsystemet/commit/70fe406b3d03cdc70ec58b61e49bf6cdf01f3a49))

### Features

- **Paragraph:** Add `variant` prop with `long` and `short` ([#1636](https://github.com/digdir/designsystemet/issues/1636)) ([efedb27](https://github.com/digdir/designsystemet/commit/efedb27af6324bd018c80392b5a279e57f0cd5dd))

### BREAKING CHANGE:

- **Tabs:** Remove icon sizing ([#1715](https://github.com/digdir/designsystemet/issues/1715))) ([723bf27](https://github.com/digdir/designsystemet/commit/723bf27bebe849d2017f7fd296c0d8483107e01e))
- **Button:** Remove icon sizing ([#1709](https://github.com/digdir/designsystemet/issues/1709)) ([9737aae](https://github.com/digdir/designsystemet/commit/9737aae42eaff7fbaf0b893ea10efd61bcb0f716))

## [0.53.1](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.53.0...@digdir/designsystemet-react@0.53.1) (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-react

# [0.53.0](https://github.com/digdir/designsystemet/compare/@digdir/designsystemet-react@0.52.0...@digdir/designsystemet-react@0.53.0) (2024-03-13)

**Note:** Version bump only for package @digdir/designsystemet-react

### BREAKING CHANGE: Package restructure

## [0.51.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.51.3-alpha.0...@digdir/design-system-react@0.51.3) (2024-03-08)

### Bug Fixes

- **Fieldset:** Make hideLegend work again ([#1641](https://github.com/digdir/designsystemet/issues/1641)) ([74ee58f](https://github.com/digdir/designsystemet/commit/74ee58fb84bb843e842813a1cdc05ea88159bfb5))
- **SpinnerI:** Use correct tokens ([#1650](https://github.com/digdir/designsystemet/issues/1650)) ([63cd398](https://github.com/digdir/designsystemet/commit/63cd398ea1537acb5f6ca82a80765176cc7b8db4))

## [0.51.3-alpha.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.51.2...@digdir/design-system-react@0.51.3-alpha.0) (2024-03-06)

### Bug Fixes

- Components should now inherit font-family correctly ([#1638](https://github.com/digdir/designsystemet/issues/1638)) ([c186fe6](https://github.com/digdir/designsystemet/commit/c186fe6ba427776fabd873b6560fc886904766bb))

## [0.51.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.51.1...@digdir/design-system-react@0.51.2) (2024-03-04)

### Bug Fixes

- **Combobox:** ResizeObserver loop error ([#1594](https://github.com/digdir/designsystemet/issues/1594)) ([688ac31](https://github.com/digdir/designsystemet/commit/688ac3126fb003c412d597e847a9d206ac32d3dd))
- **ErrorSummaryItem:** `href` is optional when `asChild` is `true` ([#1592](https://github.com/digdir/designsystemet/issues/1592)) ([300c9b4](https://github.com/digdir/designsystemet/commit/300c9b46e18481e638a0f3181f6087129374577e))
- **Fieldset:** Simplify CSS ([#1591](https://github.com/digdir/designsystemet/issues/1591)) ([aa5ca25](https://github.com/digdir/designsystemet/commit/aa5ca259a659adc5cd2bb1ac370f5bfb122a1ea7))
- **Popover:** Update aria attributes ([#1578](https://github.com/digdir/designsystemet/issues/1578)) ([9c1e729](https://github.com/digdir/designsystemet/commit/9c1e7299b5045753a9a937c91b081765a4749dc4))

## [0.51.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.51.0...@digdir/design-system-react@0.51.1) (2024-02-23)

### Bug Fixes

- **Button:** Remove `display: inline-block` for icons ([#1567](https://github.com/digdir/designsystemet/issues/1567)) ([40183b6](https://github.com/digdir/designsystemet/commit/40183b64ae4e53004623aecc397a99f0c5e865c8))
- **HelpText:** :bug: Focus and hover should now be correct ([#1568](https://github.com/digdir/designsystemet/issues/1568)) ([2505554](https://github.com/digdir/designsystemet/commit/2505554a87a982000f1980974b4683921726b79e))

### Features

- **Combobox:** Add loading state ([#1558](https://github.com/digdir/designsystemet/issues/1558)) ([635d3cc](https://github.com/digdir/designsystemet/commit/635d3cc8fdceffe125ce738c71b3605f95db2b69))

### Reverts

- Revert "Publish" ([b1d5e6c](https://github.com/digdir/designsystemet/commit/b1d5e6c9f0b0be47592fd3048e175a67894eb1e1))

# [0.51.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.50.0...@digdir/design-system-react@0.51.0) (2024-02-23)

### Features

- **Combobox:** Add `forwardRef` to input ([#1553](https://github.com/digdir/designsystemet/issues/1553)) ([efc3f2c](https://github.com/digdir/designsystemet/commit/efc3f2c967bc7e17ad236c9ac6512a7661f32ed2))

- **Combobox:** Always display selected values ([#1562](https://github.com/digdir/designsystemet/issues/1562)) ([3b5bbc3](https://github.com/digdir/designsystemet/commit/3b5bbc3b8d471f674e0ab5155fe65e90a51090fc))
- **Modal:** Make sub-components composable ([#1556](https://github.com/digdir/designsystemet/issues/1556)) ([e0159ae](https://github.com/digdir/designsystemet/commit/e0159ae97eeb8e74d5e5ea1ff67b12746cd313b6))
- **Pagination:** Add new component API ([#1524](https://github.com/digdir/designsystemet/issues/1524)) ([b43ee0d](https://github.com/digdir/designsystemet/commit/b43ee0d5ca84eda4f232c77ee623e9fcdd15b2b0))

# [0.50.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.49.0...@digdir/design-system-react@0.50.0) (2024-02-19)

### Bug Fixes

- Correct component names in React developer tools ([#1543](https://github.com/digdir/designsystemet/issues/1543)) ([889e91d](https://github.com/digdir/designsystemet/commit/889e91d4acaaa470f10aabfc17657ca5d5477b6a))
- **Paragraph:** Fix CSS specificity ([#1527](https://github.com/digdir/designsystemet/issues/1527)) ([4d76d87](https://github.com/digdir/designsystemet/commit/4d76d875960f9cb544bbb33735a0d8685f8ceee5))
- **Switch:** 🐛 Improvements and adjustments to styling ([#1521](https://github.com/digdir/designsystemet/issues/1521)) ([d9f7a5c](https://github.com/digdir/designsystemet/commit/d9f7a5ce5ee1e70346861a2dcb009b598541958b))

### Features

- **Modal:** Add `Modal.Trigger` ([#1532](https://github.com/digdir/designsystemet/issues/1532)) ([15f7de0](https://github.com/digdir/designsystemet/commit/15f7de0f0d6368c624cb9825d0c35209848f71f9))

# [0.49.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.48.0...@digdir/design-system-react@0.49.0) (2024-02-09)

### Bug Fixes

- **List:** :bug: Should correctly set `aria-labelledby` ([#1508](https://github.com/digdir/designsystemet/issues/1508)) ([41ff47c](https://github.com/digdir/designsystemet/commit/41ff47c7f8060b753db739dabe07cf50fb75e73b))

### Features

- **Checkbox:** Add indeterminate state ([#1513](https://github.com/digdir/designsystemet/issues/1513)) ([913857b](https://github.com/digdir/designsystemet/commit/913857b6da4748181990e658a894bfa79001e2a9))
- **Combobox:** Debounce `Option` click ([#1506](https://github.com/digdir/designsystemet/issues/1506)) ([30ccbe7](https://github.com/digdir/designsystemet/commit/30ccbe7f79890892dffe089a4e456ce83ab74518))
- **Heading:** Add two larger sizes ([#1512](https://github.com/digdir/designsystemet/issues/1512)) ([3d34248](https://github.com/digdir/designsystemet/commit/3d342484eaf74b9ad56c93e7b34b2b4d4169ce6c))

# [0.48.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.47.0...@digdir/design-system-react@0.48.0) (2024-02-07)

### Bug Fixes

- **Button:** :bug: Passed `className` should now override correctly ([#1442](https://github.com/digdir/designsystemet/issues/1442)) ([5a1d463](https://github.com/digdir/designsystemet/commit/5a1d463131f7c6e81a36b457b94eab33322412f7))
- **Table:** :label: Fix types ([#1500](https://github.com/digdir/designsystemet/issues/1500)) ([c962f22](https://github.com/digdir/designsystemet/commit/c962f22b7b56a3bf980e6ccd747e8e0d30ac4325))

### Features

- **Button:** Add `asChild` support to `Button` ([#1463](https://github.com/digdir/designsystemet/issues/1463)) ([87d43f6](https://github.com/digdir/designsystemet/commit/87d43f6ef612243f92ecf5a381b2063a1c2db913))
- **Button:** Change `icon` to boolean and remove `iconPlacement` ([#1413](https://github.com/digdir/designsystemet/issues/1413)) ([98d0610](https://github.com/digdir/designsystemet/commit/98d06108e4e7954feac410178bf81abed3b5f6c5))
- **Card:** Add support for changing element type with `asChild` ([#1323](https://github.com/digdir/designsystemet/issues/1323)) ([d35f56e](https://github.com/digdir/designsystemet/commit/d35f56ef5b2319859e0383b2d07dd6e4180f6a58))
- **DropdownMenu:** Add `DropdownMenu.Trigger` ([#1416](https://github.com/digdir/designsystemet/issues/1416)) ([428b092](https://github.com/digdir/designsystemet/commit/428b0929d54d4b6d8cd155e0ab9dd27517299191))
- **ErrorMessage:** Add `asChild` support to `ErrorMessage` ([#1467](https://github.com/digdir/designsystemet/issues/1467)) ([25ee917](https://github.com/digdir/designsystemet/commit/25ee917e1acbfbf3c4465141f4ac6f996ecc5bef))
- **ErrorSummary:** ✨ Make the component ([#1392](https://github.com/digdir/designsystemet/issues/1392)) ([a33ff7c](https://github.com/digdir/designsystemet/commit/a33ff7c8077c1c07acc027de1b36fa9ad50ef77f))
- **Heading:** Add `asChild` support to `Heading` ([#1459](https://github.com/digdir/designsystemet/issues/1459)) ([dda21d2](https://github.com/digdir/designsystemet/commit/dda21d2bf050538ca0b38418391cd14cf903aeb6))
- **Ingress:** Add `asChild` support to `Ingress` ([#1460](https://github.com/digdir/designsystemet/issues/1460)) ([4f96d58](https://github.com/digdir/designsystemet/commit/4f96d58531726d2dd296a0772f061e7013726430))
- **Label:** Add `asChild` support to `Label` ([#1461](https://github.com/digdir/designsystemet/issues/1461)) ([fa2e961](https://github.com/digdir/designsystemet/commit/fa2e961185d798039c1c54cc1e584dc75ca2a326))
- **Link:** Add `asChild` support to `Link` ([#1458](https://github.com/digdir/designsystemet/issues/1458)) ([54b1dab](https://github.com/digdir/designsystemet/commit/54b1dab8cbed2c5ce4d1030b7465c761dc2a79b1))
- **List:** Change component API ([#1400](https://github.com/digdir/designsystemet/issues/1400)) ([55d8795](https://github.com/digdir/designsystemet/commit/55d87951a270c8449216260cb70e61940fd71293))
- **Paragraph:** Add `asChild` support to `Paragraph` ([#1462](https://github.com/digdir/designsystemet/issues/1462)) ([c886f65](https://github.com/digdir/designsystemet/commit/c886f652e7062e2bff7148cdc4603c851654a50d))
- **Popover:** Add `Popover.Trigger` ([#1406](https://github.com/digdir/designsystemet/issues/1406)) ([33c693b](https://github.com/digdir/designsystemet/commit/33c693b7190253368d156273a17442e7603f83b2))
- **RovingTabindexItem:** Add `asChild` support to `RovingTabindexItem` ([#1468](https://github.com/digdir/designsystemet/issues/1468)) ([8f21be3](https://github.com/digdir/designsystemet/commit/8f21be38dff97d8c1103547d651a77e80b537402))
- **RovingTabindexRoot:** Add `asChild` support to `RovingTabindexRoot` ([#1469](https://github.com/digdir/designsystemet/issues/1469)) ([c766926](https://github.com/digdir/designsystemet/commit/c7669267312cd583d0e79f196822d4491dcd5bc8))
- **Tabs:** Remove `icon` prop ([#1418](https://github.com/digdir/designsystemet/issues/1418)) ([75777db](https://github.com/digdir/designsystemet/commit/75777dbc963329ae4e2201de59304786bc6ef6ff))

# [0.47.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.46.1...@digdir/design-system-react@0.47.0) (2024-01-23)

### Bug Fixes

- **Accordion:** Fix focus style ([#1407](https://github.com/digdir/designsystemet/issues/1407)) ([24e3006](https://github.com/digdir/designsystemet/commit/24e3006de112ea7d667ec07f6c9caccd6e6de9f2))
- **DropdownMenu:** Export correct props type for items ([#1410](https://github.com/digdir/designsystemet/issues/1410)) ([898a13f](https://github.com/digdir/designsystemet/commit/898a13f54cd825619190fb0a65f04c6ed23d77c6))
- **List:** Add `margin-top` to nested lists ([#1402](https://github.com/digdir/designsystemet/issues/1402)) ([524d48c](https://github.com/digdir/designsystemet/commit/524d48c84aa7f6c8c3f2b05f374c1b70e8005053))
- **Pagination:** Add default aria-label to `nav` ([#1401](https://github.com/digdir/designsystemet/issues/1401)) ([b4de3f1](https://github.com/digdir/designsystemet/commit/b4de3f1c166a91abda113cd0fd0d6d8ab36189da))

### Features

- **List:** Add `forwardRef` ([#1393](https://github.com/digdir/designsystemet/issues/1393)) ([b8b6b3a](https://github.com/digdir/designsystemet/commit/b8b6b3a84792897be68d35aee9d9727514641763))
- **List:** Add support for custom heading id ([#1394](https://github.com/digdir/designsystemet/issues/1394)) ([03e1dba](https://github.com/digdir/designsystemet/commit/03e1dba876fdc3534507255bf726f6694c77f73d))

## [0.46.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.46.0...@digdir/design-system-react@0.46.1) (2024-01-16)

### Bug Fixes

- **NativeSelect:** Fix `readOnly` not disabling element ([#1391](https://github.com/digdir/designsystemet/issues/1391)) ([f6f693e](https://github.com/digdir/designsystemet/commit/f6f693e9a2a932f6295405d0e95e3ae2b8335150))

# [0.46.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.45.0...@digdir/design-system-react@0.46.0) (2024-01-15)

### Features

- **Combobox:** Virtualize options ([#1375](https://github.com/digdir/designsystemet/issues/1375)) ([608c066](https://github.com/digdir/designsystemet/commit/608c066c55402d6fa56068e78587f6ee642befb7))
- **HelpText:** :sparkles: Add portal support ([#1367](https://github.com/digdir/designsystemet/issues/1367)) ([d8b201d](https://github.com/digdir/designsystemet/commit/d8b201d85400912012c5d1326700948b1b56d23b))
- **Table:** ✨ Make the component ([#1364](https://github.com/digdir/designsystemet/issues/1364)) ([8c2ddad](https://github.com/digdir/designsystemet/commit/8c2ddadefdf8c64abff32aa32b332adfaf6fcff9))
- **Table:** 🗑️ Change `Table` to legacy ([#1357](https://github.com/digdir/designsystemet/issues/1357)) ([e3da112](https://github.com/digdir/designsystemet/commit/e3da112d56a25f276f628808dee34bc7c9471ea6))

# [0.45.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.44.0...@digdir/design-system-react@0.45.0) (2024-01-10)

### Bug Fixes

- **Combobox:** Pressing `enter` on clear button does not work ([#1354](https://github.com/digdir/designsystemet/issues/1354)) ([884eca7](https://github.com/digdir/designsystemet/commit/884eca74fa41d3e21d2117fbb260fb3a0489d46b))
- **Combobox:** Removing a chip with `enter` selects a value from the list ([#1352](https://github.com/digdir/designsystemet/issues/1352)) ([907a85d](https://github.com/digdir/designsystemet/commit/907a85dba91d23fe9a701637b0b921b70f3bfb3c))

### Features

- **Combobox:** Disable looping when navigating list with keyboard ([#1344](https://github.com/digdir/designsystemet/issues/1344)) ([8bf82d0](https://github.com/digdir/designsystemet/commit/8bf82d05d3e60896fc3a9d1a7685dabf206d513c))
- **Tag:** New Tag design ([#1335](https://github.com/digdir/designsystemet/issues/1335)) ([7640fad](https://github.com/digdir/designsystemet/commit/7640fad5b5c41318b0abd9e2938a89f6068e99ad))

# [0.44.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.43.0...@digdir/design-system-react@0.44.0) (2024-01-05)

### Bug Fixes

- **Chips:** :bug: Correct sizings ([#1316](https://github.com/digdir/designsystemet/issues/1316)) ([70044b8](https://github.com/digdir/designsystemet/commit/70044b89e448ae5ca57594b65b1f5757ffdd5b54))
- **Search:** Scale input height based on sizing prop ([#1329](https://github.com/digdir/designsystemet/issues/1329)) ([bc32cec](https://github.com/digdir/designsystemet/commit/bc32ceca7aa77f5ad67f19c3262df18a6010b68b))

### Features

- **Box:** Add support for changing element type with `asChild` ([#1295](https://github.com/digdir/designsystemet/issues/1295)) ([4d9b78d](https://github.com/digdir/designsystemet/commit/4d9b78dd8a48e978bccdcd0764cf9fbf52af6652))
- **Fieldset:** Make legend prop required ([#1330](https://github.com/digdir/designsystemet/issues/1330)) ([0f502c0](https://github.com/digdir/designsystemet/commit/0f502c0cb6d84867cc22ac7655fe913c13babc33))
- **Tooltip:** Add inverted version ([#1325](https://github.com/digdir/designsystemet/issues/1325)) ([accf27c](https://github.com/digdir/designsystemet/commit/accf27c6477aa07fdd939fc4a4d0d5655ad11849))

# [0.43.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.42.0...@digdir/design-system-react@0.43.0) (2024-01-02)

### Bug Fixes

- **Chip:** :bug: Use correct font token (short) ([#1290](https://github.com/digdir/designsystemet/issues/1290)) ([ddc1166](https://github.com/digdir/designsystemet/commit/ddc11669be368c35b9d12e17a8048fad902c8eb9))
- Make sure `className` and `style` are applied to outer element ([#1277](https://github.com/digdir/designsystemet/issues/1277)) ([1a57299](https://github.com/digdir/designsystemet/commit/1a57299fac3e0431b22cc9f8b2a6ad649e3146d6))

### Features

- **Box:** Add new border radius tokens ([#1275](https://github.com/digdir/designsystemet/issues/1275)) ([59e5cce](https://github.com/digdir/designsystemet/commit/59e5ccece893e580b7f32cfc6ae2761a3502a5c1))
- **DropdownMenu:** Add portal support ([#1289](https://github.com/digdir/designsystemet/issues/1289)) ([a0ff1bf](https://github.com/digdir/designsystemet/commit/a0ff1bf994492c66e567d4887aae75b6fa4e984e))
- **Popover:** Add portal support ([#1293](https://github.com/digdir/designsystemet/issues/1293)) ([e739c24](https://github.com/digdir/designsystemet/commit/e739c24f147819d7afe283b76b1cda4f54a1ad5f))
- **Tooltip:** Add portal support ([#1294](https://github.com/digdir/designsystemet/issues/1294)) ([3e95c3a](https://github.com/digdir/designsystemet/commit/3e95c3a1efc2d2d0866f272b4491fff336b03890))

### Performance Improvements

- :zap: Replace `classnames` with `clsx` ([#1272](https://github.com/digdir/designsystemet/issues/1272)) ([855f387](https://github.com/digdir/designsystemet/commit/855f38756dbc793e471a6718ca7265bb9fc5ff09))

# [0.42.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.41.1...@digdir/design-system-react@0.42.0) (2023-12-21)

### Features

- **Skeleton:** ✨ New component ([#1149](https://github.com/digdir/designsystemet/issues/1149)) ([ab459e6](https://github.com/digdir/designsystemet/commit/ab459e64ca12c64bcd058c445907d5e5b3beb557))

## [0.41.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.41.0...@digdir/design-system-react@0.41.1) (2023-12-20)

### Bug Fixes

- **Radio:** :bug: Correct sizes for icon ([#1255](https://github.com/digdir/designsystemet/issues/1255)) ([53d836e](https://github.com/digdir/designsystemet/commit/53d836e86d5321be3d48cd3ceccb3ccd4092100d))
- **Switch:** :bug: Prevent from being clamped in flex container ([#1256](https://github.com/digdir/designsystemet/issues/1256)) ([f5d31eb](https://github.com/digdir/designsystemet/commit/f5d31eb4ff420fe5bc8a160c90f06eb43ce7d06f))

# [0.41.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.40.0...@digdir/design-system-react@0.41.0) (2023-12-19)

### Bug Fixes

- **Accordion:** 🐛 Fix wrong border colors for `first`, `second`, `third` colors ([#1246](https://github.com/digdir/designsystemet/issues/1246)) ([e38bf41](https://github.com/digdir/designsystemet/commit/e38bf415a2ca258bee229f69b4a16f4205a6f90f))
- **DropdownMenu:** :bug: Add missing background ([#1252](https://github.com/digdir/designsystemet/issues/1252)) ([2abe4db](https://github.com/digdir/designsystemet/commit/2abe4dbd6065ce4784581c53058019b8fd0c621b))

### Features

- **Combobox:** ✨ New component ([#1126](https://github.com/digdir/designsystemet/issues/1126)) ([2d51cd7](https://github.com/digdir/designsystemet/commit/2d51cd771e7c32c5e5fc92c037a33875331d2f7e))
- **Select:** :wastebasket: Change `Select` to legacy ([#1250](https://github.com/digdir/designsystemet/issues/1250)) ([6f619d7](https://github.com/digdir/designsystemet/commit/6f619d76b60b5e7c28cc82295056d1fc6fcfe3d2))

# [0.40.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.39.0...@digdir/design-system-react@0.40.0) (2023-12-18)

### Bug Fixes

- **DropdownMenuItem:** add list style none ([#1190](https://github.com/digdir/designsystemet/issues/1190)) ([11bd19b](https://github.com/digdir/designsystemet/commit/11bd19bfb6ac76b2c697a22e876117c4128be3bd))
- **List:** Wrap in `div` to allow access to `Heading` ([#1217](https://github.com/digdir/designsystemet/issues/1217)) ([afcadb7](https://github.com/digdir/designsystemet/commit/afcadb7c4cb4b368d247af0c41ed8debf53c4b66))
- **Pagination:** Only use needed space for buttons ([#1220](https://github.com/digdir/designsystemet/issues/1220)) ([4bf3d74](https://github.com/digdir/designsystemet/commit/4bf3d745888f500259df5aadf4edee97ec4f95bc))
- **Select:** Select not working properly in Modal ([#1195](https://github.com/digdir/designsystemet/issues/1195)) ([fb8be6a](https://github.com/digdir/designsystemet/commit/fb8be6a647ba0da8b5b23e65813508f34e09c8c1))
- **ToggleGroup:** Only use needed space for buttons ([#1216](https://github.com/digdir/designsystemet/issues/1216)) ([3d4f721](https://github.com/digdir/designsystemet/commit/3d4f7212c2423eae043578dd5c28e35123d863e8))

### Features

- **ToggleGroup:** Support `form` when `name` is provided ([#1218](https://github.com/digdir/designsystemet/issues/1218)) ([75fd99f](https://github.com/digdir/designsystemet/commit/75fd99f2d5f22ca9ceaceb022217a399b5e0a56e))

# [0.39.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.38.0...@digdir/design-system-react@0.39.0) (2023-12-14)

### Bug Fixes

- **Accordion:** support for using custom elements inside `Item` and `Header` ([#1198](https://github.com/digdir/designsystemet/issues/1198)) ([a09eea1](https://github.com/digdir/designsystemet/commit/a09eea1b8c08f91ebb67826aa375f149bb5ea35a))
- **Button, Checkbox, NativeSelect, Radio, Search, Switch, Textfield:** 🐛 Sizes and alignment ([#1166](https://github.com/digdir/designsystemet/issues/1166)) ([716395d](https://github.com/digdir/designsystemet/commit/716395dc5f0805f92c485572ae98693d71d5fa6d))
- **Chip:** :bug: Add missing disabled styling and behaviour ([#1201](https://github.com/digdir/designsystemet/issues/1201)) ([d6647bf](https://github.com/digdir/designsystemet/commit/d6647bfd8622c10fe23fa76dfbadfbb0a5367e89))
- **ErrorMessage:** Change default wrapper to `div` ([#1203](https://github.com/digdir/designsystemet/issues/1203)) ([f14e22b](https://github.com/digdir/designsystemet/commit/f14e22b6bbd14a9e1dbd923583e8573109f9cdaa))
- **NativeSelect:** Fix firefox background color ([#1185](https://github.com/digdir/designsystemet/issues/1185)) ([ddf8d89](https://github.com/digdir/designsystemet/commit/ddf8d8976513c87e155d534950955effc8398574))
- **Search:** :bug: Fix missaligned search icon ([#1207](https://github.com/digdir/designsystemet/issues/1207)) ([eac15b2](https://github.com/digdir/designsystemet/commit/eac15b283fea8a2c8994b1b8f26b59101a89bb90))
- **Textfield, Textarea:** :bug: Only apply `aria-describedby` if its defined ([#1184](https://github.com/digdir/designsystemet/issues/1184)) ([f510c0c](https://github.com/digdir/designsystemet/commit/f510c0cc98b33838da452bd7a89869948247c449))
- **ToggleGroup:** :bug: Use correct paddings on `ToggleGroup.Item` ([#1209](https://github.com/digdir/designsystemet/issues/1209)) ([2b6dade](https://github.com/digdir/designsystemet/commit/2b6dade30d65fb5565c3c266130beaf3480a3520))

### Features

- **Heading:** Make `size` optional with default `xlarge` ([#1208](https://github.com/digdir/designsystemet/issues/1208)) ([b2aaf27](https://github.com/digdir/designsystemet/commit/b2aaf275067bbf2148c7825e8a48f1d8721e7c41))

# [0.38.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.37.0...@digdir/design-system-react@0.38.0) (2023-12-01)

### Bug Fixes

- :bug: Temporary change order for injected CSS ([#1137](https://github.com/digdir/designsystemet/issues/1137)) ([8f8d978](https://github.com/digdir/designsystemet/commit/8f8d97861d96f46f4b1404f24b642993a87a0169))
- **Checkbox, Radio, Search:** 🐛 Styling interferences ([#1163](https://github.com/digdir/designsystemet/issues/1163)) ([b53f050](https://github.com/digdir/designsystemet/commit/b53f050ada1446f955082ea95739cb7fe00f006f))
- **Chip.Toggle:** Make Chip.Toggle fallback on context size ([#1150](https://github.com/digdir/designsystemet/issues/1150)) ([c555bca](https://github.com/digdir/designsystemet/commit/c555bca248b5c07e87b39c8084802da120c7b334))
- **DropdownMenu:** :bug: Add missing z-index ([#1142](https://github.com/digdir/designsystemet/issues/1142)) ([ae84c10](https://github.com/digdir/designsystemet/commit/ae84c10901f1efb9315394d57496982490cff9bb))
- **Link:** Underline not thicker on hover in safari ([#1151](https://github.com/digdir/designsystemet/issues/1151)) ([22580b3](https://github.com/digdir/designsystemet/commit/22580b3268e485079679b3875072cb14fc4d9b6e))
- **Modal:** Change solution for setting width and fixed clicking on top or bottom closing the Modal ([#1171](https://github.com/digdir/designsystemet/issues/1171)) ([22fbc6b](https://github.com/digdir/designsystemet/commit/22fbc6bad67ef3c6b6a4c1bbef742323a7f65c1d))
- **Popover:** wrong border size on arrow ([#1176](https://github.com/digdir/designsystemet/issues/1176)) ([499c5e2](https://github.com/digdir/designsystemet/commit/499c5e2a7a8816ee67ec95f592467df7bbf96fb1))

### Features

- **Card:** ✨ New component ([#1009](https://github.com/digdir/designsystemet/issues/1009)) ([c158e01](https://github.com/digdir/designsystemet/commit/c158e017b365109a9da34a9ddf49755d53b2b588))
- **Divider:** :lipstick: Adjusted size ([#1165](https://github.com/digdir/designsystemet/issues/1165)) ([71dc2f8](https://github.com/digdir/designsystemet/commit/71dc2f8762d0ce25a9f0541a0c9cb4dac457162b))
- **sizing:** Syncronize sizing between Figma and React components ([#1084](https://github.com/digdir/designsystemet/issues/1084)) ([06c9c44](https://github.com/digdir/designsystemet/commit/06c9c44bc03e32a8911a910c4e424aea963002d2))
- **SkipLink:** ✨ New component ([#1111](https://github.com/digdir/designsystemet/issues/1111)) ([996f436](https://github.com/digdir/designsystemet/commit/996f436e757b0a9f24dc15699539a0781a76c088))

# [0.37.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.35.0...@digdir/design-system-react@0.37.0) (2023-11-17)

### Bug Fixes

- **Button:** :bug: Adjust sizing to match `Textfield` and other fixes according to Figma ([#1023](https://github.com/digdir/designsystemet/issues/1023)) ([a3252f9](https://github.com/digdir/designsystemet/commit/a3252f99c135936b50454957914914e8d965cb5d))
- **Divider:** :label: Optional `color` prop ([#1085](https://github.com/digdir/designsystemet/issues/1085)) ([7ae9eca](https://github.com/digdir/designsystemet/commit/7ae9eca79fe6f522d1ee3af1cf0ae3c424b5ede6))
- **Divider:** Add so it can recieve `HTMLHRElement` props ([#1064](https://github.com/digdir/designsystemet/issues/1064)) ([c7c3acd](https://github.com/digdir/designsystemet/commit/c7c3acdb2e2d8520e1fedd9961a4c2789ed847d8))
- **List:** :label: Default type for `children` ([#1032](https://github.com/digdir/designsystemet/issues/1032)) ([4f83fa0](https://github.com/digdir/designsystemet/commit/4f83fa0a3b4a27fbbd9821b6b95ee2c311cdd647))
- **OverridableComponent:** Add `displayName` to type ([#1106](https://github.com/digdir/designsystemet/issues/1106)) ([416810c](https://github.com/digdir/designsystemet/commit/416810cd974974e6ece20ebc703ec8850a1679ff))
- **Switch:** :bug: Should reduce-motion ([#1049](https://github.com/digdir/designsystemet/issues/1049)) ([58926be](https://github.com/digdir/designsystemet/commit/58926be00777eb70d2ccf98332ed0d47d09e0d4f))

### Features

- :sparkles: New `Search` component ([#858](https://github.com/digdir/designsystemet/issues/858)) ([b4888c4](https://github.com/digdir/designsystemet/commit/b4888c43398447a58d17d36920888c4d77ccccbf))
- **Box:** add `forwardRef`, make props default `undefined` ([#1059](https://github.com/digdir/designsystemet/issues/1059)) ([7e0cd1c](https://github.com/digdir/designsystemet/commit/7e0cd1c80c0169b8066d1ab1a40b5317efbf4299))
- **Box:** Make the component ([#1001](https://github.com/digdir/designsystemet/issues/1001)) ([1651d4d](https://github.com/digdir/designsystemet/commit/1651d4d2b03f50d27a9b252556b18ebb30dea217))
- **Combobox:** Create the component ([#774](https://github.com/digdir/designsystemet/issues/774)) ([23d4027](https://github.com/digdir/designsystemet/commit/23d4027ae422531cc279e2b00b25ab679ba524dd))
- **Divider:** ✨ New component ([#1057](https://github.com/digdir/designsystemet/issues/1057)) ([9d5d257](https://github.com/digdir/designsystemet/commit/9d5d257860dc7f2a0886bf8e610799eefe8a62a5))
- **DropdownMenu:** ✨ New component ([#1070](https://github.com/digdir/designsystemet/issues/1070)) ([23bfddf](https://github.com/digdir/designsystemet/commit/23bfddf724c9ead13d284e9ac0d02ddf5ccfd71d))
- **Modal:** ✨ New component ([#1037](https://github.com/digdir/designsystemet/issues/1037)) ([8b720cf](https://github.com/digdir/designsystemet/commit/8b720cf32c77ca1f5b8a080b067bac2789afcfef))
- Remove density tokens ([#1079](https://github.com/digdir/designsystemet/issues/1079)) ([d25c4fd](https://github.com/digdir/designsystemet/commit/d25c4fdf77080776cfd71c69a88da4013edc4caf))
- **ResponsiveTable:** 🗑️ Change to Legacy ([#1108](https://github.com/digdir/designsystemet/issues/1108)) ([348d03b](https://github.com/digdir/designsystemet/commit/348d03b8be6996ac1d4a2093aecdbfa66cb1bf86))
- **Select:** should be able to add name to the select component ([#1046](https://github.com/digdir/designsystemet/issues/1046)) ([4d9fbb2](https://github.com/digdir/designsystemet/commit/4d9fbb28925b9aa052bb8d0026e2c46527c00e0f))

# [0.36.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.35.0...@digdir/design-system-react@0.36.0) (2023-11-08)

### Bug Fixes

- **Button:** :bug: Adjust sizing to match `Textfield` and other fixes according to Figma ([#1023](https://github.com/digdir/designsystemet/issues/1023)) ([a3252f9](https://github.com/digdir/designsystemet/commit/a3252f99c135936b50454957914914e8d965cb5d))
- **Divider:** Add so it can recieve `HTMLHRElement` props ([#1064](https://github.com/digdir/designsystemet/issues/1064)) ([c7c3acd](https://github.com/digdir/designsystemet/commit/c7c3acdb2e2d8520e1fedd9961a4c2789ed847d8))
- **List:** :label: Default type for `children` ([#1032](https://github.com/digdir/designsystemet/issues/1032)) ([4f83fa0](https://github.com/digdir/designsystemet/commit/4f83fa0a3b4a27fbbd9821b6b95ee2c311cdd647))
- **Switch:** :bug: Should reduce-motion ([#1049](https://github.com/digdir/designsystemet/issues/1049)) ([58926be](https://github.com/digdir/designsystemet/commit/58926be00777eb70d2ccf98332ed0d47d09e0d4f))

### Features

- **Box:** Add `forwardRef`, make props default `undefined` ([#1059](https://github.com/digdir/designsystemet/issues/1059)) ([7e0cd1c](https://github.com/digdir/designsystemet/commit/7e0cd1c80c0169b8066d1ab1a40b5317efbf4299))
- **Box:** New internal component ([#1001](https://github.com/digdir/designsystemet/issues/1001)) ([1651d4d](https://github.com/digdir/designsystemet/commit/1651d4d2b03f50d27a9b252556b18ebb30dea217))
- **Combobox:** New experimental component ([#774](https://github.com/digdir/designsystemet/issues/774)) ([23d4027](https://github.com/digdir/designsystemet/commit/23d4027ae422531cc279e2b00b25ab679ba524dd))
- **Divider:** ✨ New component ([#1057](https://github.com/digdir/designsystemet/issues/1057)) ([9d5d257](https://github.com/digdir/designsystemet/commit/9d5d257860dc7f2a0886bf8e610799eefe8a62a5))
- **Select:** Should be able to add name to the select component ([#1046](https://github.com/digdir/designsystemet/issues/1046)) ([4d9fbb2](https://github.com/digdir/designsystemet/commit/4d9fbb28925b9aa052bb8d0026e2c46527c00e0f))

# [0.35.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.34.0...@digdir/design-system-react@0.35.0) (2023-10-30)

### Bug Fixes

- **HelpText:** Add missing `aria-expanded` ([#992](https://github.com/digdir/designsystemet/issues/992)) ([383ed03](https://github.com/digdir/designsystemet/commit/383ed0366e1fd831c1b354411df78a5670b657d2))
- **LegacyTextField, LegacyTextArea:** :bug: Fix wrong placement of character counter ([#1008](https://github.com/digdir/designsystemet/issues/1008)) ([c75aa3f](https://github.com/digdir/designsystemet/commit/c75aa3fd4e7322d4b6870423dfbc1264b3e7ba11))

### Features

- **Spinner:** Update component and docs ([#970](https://github.com/digdir/designsystemet/issues/970)) ([269f157](https://github.com/digdir/designsystemet/commit/269f1578b7571ab6eb53c52cb8055734abaa14f9))

# [0.34.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.33.0...@digdir/design-system-react@0.34.0) (2023-10-25)

### Bug Fixes

- **InputWrapper:** Remove gap ([#989](https://github.com/digdir/designsystemet/issues/989)) ([1fac2f7](https://github.com/digdir/designsystemet/commit/1fac2f784ca5814a66529c51d800307e70def9d1))
- **List:** Add more spacing between items ([#982](https://github.com/digdir/designsystemet/issues/982)) ([6febc88](https://github.com/digdir/designsystemet/commit/6febc887f165802efd5a8ded9d63ec547b2032cf))
- **Switch:** Remove `gap` when there is no children ([#986](https://github.com/digdir/designsystemet/issues/986)) ([1c95186](https://github.com/digdir/designsystemet/commit/1c951865d51b042bf4f00998e3d71d2ec9e6ded2))

### Features

- Add `htmlSize` to `NativeSelect` and `Textfield` ([#972](https://github.com/digdir/designsystemet/issues/972)) ([bf72f3b](https://github.com/digdir/designsystemet/commit/bf72f3b7cf5b97ed7af53c731c757c6acbc90048))
- **List:** More options for `List` component ([#913](https://github.com/digdir/designsystemet/issues/913)) ([8903110](https://github.com/digdir/designsystemet/commit/8903110823ce7d5ce85651724d057efc3d09ffd4))

# [0.33.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.32.1...@digdir/design-system-react@0.33.0) (2023-10-19)

### Features

- **HelpText:** Use new Popover ([#960](https://github.com/digdir/designsystemet/issues/960)) ([b12da58](https://github.com/digdir/designsystemet/commit/b12da582879ceb9847d0b63944fe4d3ab643b146))
- **NativeSelect:** Updated to match other form components ([#955](https://github.com/digdir/designsystemet/issues/955)) ([71f048e](https://github.com/digdir/designsystemet/commit/71f048ee01e4c0d638bb2204dd40b289fd422d75))
- **Popover:** :wastebasket: Change to Legacy ([#956](https://github.com/digdir/designsystemet/issues/956)) ([cf9be72](https://github.com/digdir/designsystemet/commit/cf9be72215ff813b80d881852c52ccb083b5ca5a))
- **Popover:** New component and method for attaching to anchor element ([#959](https://github.com/digdir/designsystemet/issues/959)) ([98f9985](https://github.com/digdir/designsystemet/commit/98f99853bfd55c9dde0d307188be2b00528800bc))
- **Tag:** Change `filled` and `outline` to `primary` and `secondary` ([#958](https://github.com/digdir/designsystemet/issues/958)) ([9c230af](https://github.com/digdir/designsystemet/commit/9c230af1fae54db02420241f30261971d3aaa83c))

## [0.32.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.32.0...@digdir/design-system-react@0.32.1) (2023-10-17)

### Bug Fixes

- **ToggleGroup:** :bug: Fix missing styling on `ToggleGroup.Item` ([#952](https://github.com/digdir/designsystemet/issues/952)) ([9ebf8c1](https://github.com/digdir/designsystemet/commit/9ebf8c1b676c55aae0f951a30a684c5c325966b1))

# [0.32.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.31.0...@digdir/design-system-react@0.32.0) (2023-10-16)

### Bug Fixes

- **Chip:** Move all `Chip` css to one file ([#944](https://github.com/digdir/designsystemet/issues/944)) ([ee4f4d3](https://github.com/digdir/designsystemet/commit/ee4f4d3243d3be08d6c9cdfc28729ee2240e546a))

### Features

- **Button:** :boom: Removed `dashedBorder` ([#941](https://github.com/digdir/designsystemet/issues/941)) ([2297429](https://github.com/digdir/designsystemet/commit/2297429a2cbc00a2287954210aeccb02ca3fc56d))
- **Button:** New `variants` and minor fixes ([#938](https://github.com/digdir/designsystemet/issues/938)) ([bc7a052](https://github.com/digdir/designsystemet/commit/bc7a052e75499afd0e2260ee7e2557191b8b12bd))

## [0.31.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.31.0...@digdir/design-system-react@0.31.1) (2023-10-13)

### Bug Fixes

- Revert "fix(Select): Hide list when reference is hidden (#917)" ([#936](https://github.com/digdir/designsystemet/issues/936))

# [0.31.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.30.0...@digdir/design-system-react@0.31.0) (2023-10-12)

### Bug Fixes

- Add missing export `ToggleGroup` ([#931](https://github.com/digdir/designsystemet/issues/931)) ([782d77d](https://github.com/digdir/designsystemet/commit/782d77d7cbbdba83744649134c1e30ec8a682b0d))

### Features

- **Button:** :sparkles: Support for overriding html element using `as` ([#926](https://github.com/digdir/designsystemet/issues/926)) ([5689052](https://github.com/digdir/designsystemet/commit/5689052b461c424bf26bc750c2e1212f3034c430))

# [0.30.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.29.0...@digdir/design-system-react@0.30.0) (2023-10-11)

### Bug Fixes

- **Select:** Hide list when reference is hidden ([#917](https://github.com/digdir/designsystemet/issues/917)) ([bccea75](https://github.com/digdir/designsystemet/commit/bccea7520cb7f7de13b434dbd4dcef646885aa36))

### Features

- **Tooltip:** Create new tooltip component ([#914](https://github.com/digdir/designsystemet/issues/914)) ([eccc36d](https://github.com/digdir/designsystemet/commit/eccc36d24b4e8cdf77939d88e45a2a9eb9e76998))

# [0.29.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.28.1...@digdir/design-system-react@0.29.0) (2023-10-07)

### Features

- **Tabs:** :sparkles: Add missing export for new Tabs ([#915](https://github.com/digdir/designsystemet/issues/915)) ([6cf70ec](https://github.com/digdir/designsystemet/commit/6cf70ec65d8ae713b71f7345cb73b70b62a1997c))

## [0.28.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.28.0...@digdir/design-system-react@0.28.1) (2023-10-06)

### Bug Fixes

- **Accordion:** Make border styling overridable ([#900](https://github.com/digdir/designsystemet/issues/900)) ([b4af852](https://github.com/digdir/designsystemet/commit/b4af8521ecf66bb0dbd38bc431cec4db98e6ebc7))
- **Radio:** Adhere to provided name prop ([#903](https://github.com/digdir/designsystemet/issues/903)) ([f0cfa2a](https://github.com/digdir/designsystemet/commit/f0cfa2a1139b5e2291123763cba5a8ac69f390f5))

# [0.28.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.27.0...@digdir/design-system-react@0.28.0) (2023-10-05)

### Features

- Add basic SSR support and peerDependecies to `react 18.2.0` ([#864](https://github.com/digdir/designsystemet/issues/864)) ([d512ee2](https://github.com/digdir/designsystemet/commit/d512ee26e6f50e61588538961dd185b92e3e6654))
- Change `color` names `primary`, `secondary`, `tertiary` to `first`, `second`, `third` ([#887](https://github.com/digdir/designsystemet/issues/887)) ([50f4eee](https://github.com/digdir/designsystemet/commit/50f4eee4bf2ce813001ad1e28fa12648149fe677))
- **DosAndDonts:** Add Do and Dont component ([#857](https://github.com/digdir/designsystemet/issues/857)) ([8116d00](https://github.com/digdir/designsystemet/commit/8116d00eb8afbb606bd325a7a1695c31bbc3fcbe))
- **Tabs:** :sparkles: New `Tabs` Component ([#876](https://github.com/digdir/designsystemet/issues/876)) ([6ae19e7](https://github.com/digdir/designsystemet/commit/6ae19e75e7f874dc7d1acbfe9587c8ffbb29e641))
- **Tabs:** :wastebasket: Change to Legacy ([#875](https://github.com/digdir/designsystemet/issues/875)) ([1863383](https://github.com/digdir/designsystemet/commit/186338375861af241c565be4bf86ab9c05d1867b))
- **ToggleGroup:** Add accessible title for items with only icon ([#897](https://github.com/digdir/designsystemet/issues/897)) ([9482315](https://github.com/digdir/designsystemet/commit/94823150b5585ba9612fbbfbb70c32818812fcaa))

# [0.27.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.26.0...@digdir/design-system-react@0.27.0) (2023-09-28)

### Features

- **Button, Chip, Accordion:** :recycle: Change components to use the same class for focus behaviour ([#868](https://github.com/digdir/designsystemet/issues/868)) ([b3fa591](https://github.com/digdir/designsystemet/commit/b3fa591d86bbf2b497a618464e3f3af10b852ad6))
- **ToggleButtonGroup:** :wastebasket: Change to Legacy ([#870](https://github.com/digdir/designsystemet/issues/870)) ([3298aba](https://github.com/digdir/designsystemet/commit/3298aba96e343af73bcf8b12cfcb64f9cf0a61a0))
- **ToggleGroup:** ✨ New `ToggleGroup` component ([#813](https://github.com/digdir/designsystemet/issues/813)) ([bc45c2e](https://github.com/digdir/designsystemet/commit/bc45c2e50a941fdd49028607fa3d94c4876e4cc0))

# [0.26.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.25.1...@digdir/design-system-react@0.26.0) (2023-09-22)

### Bug Fixes

- **Textfield:** :lipstick: Style adjustments after feedback ([#852](https://github.com/digdir/designsystemet/issues/852)) ([4544f1e](https://github.com/digdir/designsystemet/commit/4544f1e96fb90c00360377b2a18998e9bce36f16))

### Features

- **Textarea:** :sparkles: New `Textarea` component ([#851](https://github.com/digdir/designsystemet/issues/851)) ([9d9c3ab](https://github.com/digdir/designsystemet/commit/9d9c3ab390cea40bd3137845fd2b7fb251c84b7a))
- **TextArea:** :wastebasket: Change to Legacy ([#853](https://github.com/digdir/designsystemet/issues/853)) ([9da973f](https://github.com/digdir/designsystemet/commit/9da973f9db34576ad89f5d31f07ccfc933f84ee7))

## [0.25.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.25.0...@digdir/design-system-react@0.25.1) (2023-09-22)

### Bug Fixes

- **Textfield:** Prop typo ([#848](https://github.com/digdir/designsystemet/issues/848)) ([0c59b86](https://github.com/digdir/designsystemet/commit/0c59b86f661222e0021311cd5eba6c7aa429ea8c))

# [0.25.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.24.2...@digdir/design-system-react@0.25.0) (2023-09-21)

### Features

- **ErrorMessage:** :sparkles: Add new option to toggle error color ([#836](https://github.com/digdir/designsystemet/issues/836)) ([8b177f3](https://github.com/digdir/designsystemet/commit/8b177f3f25b3c2075d38f8f5e8a438d8727b5c98))
- **ErrorMessage:** ✨ Add `large` size ([#840](https://github.com/digdir/designsystemet/issues/840)) ([9742abf](https://github.com/digdir/designsystemet/commit/9742abf1d002967fdfdb6b3caa8f33bb11a85019))
- **Fieldset, Switch, Radio, Checkbox:** :sparkles: Add `large` size ([#841](https://github.com/digdir/designsystemet/issues/841)) ([4e8052f](https://github.com/digdir/designsystemet/commit/4e8052fc6a886b68676ca5de0a47d80eadb93656))
- **Textfield:** :sparkles: New `Textfield` component ([#816](https://github.com/digdir/designsystemet/issues/816)) ([0c14cfa](https://github.com/digdir/designsystemet/commit/0c14cfa3c6add379ada2f5e11dd2b6a0de05aa56))
- **TextField:** 🗑️ Change to Legacy ([#838](https://github.com/digdir/designsystemet/issues/838)) ([c3d6d2d](https://github.com/digdir/designsystemet/commit/c3d6d2d684ff764fe96a92e1852ddf115cf1ec62))

## [0.24.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.24.1...@digdir/design-system-react@0.24.2) (2023-09-19)

### Bug Fixes

- **Switch:** :bug: Adher to passed `checked` & `defaultChecked` props ([#832](https://github.com/digdir/designsystemet/issues/832)) ([13a4577](https://github.com/digdir/designsystemet/commit/13a45774943d01c6ea3cb9e7056b1686dfa9a358))

## [0.24.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.24.0...@digdir/design-system-react@0.24.1) (2023-09-18)

### Bug Fixes

- **Accordion:** hide content in Accordions from screen readers when Accordion is closed ([#815](https://github.com/digdir/designsystemet/issues/815)) ([eea59af](https://github.com/digdir/designsystemet/commit/eea59af9d09c59ba8da734a0b5cf60bd704661d1))
- **Radio, Checkbox, Button, Chip.Toggle:** Remove sticky hover on touch devices ([#803](https://github.com/digdir/designsystemet/issues/803)) ([a4be791](https://github.com/digdir/designsystemet/commit/a4be7918b49a607ebfa7042b3aa2d8e2f798a016))
- **Radio, Checkbox, Switch:** :bug: Remove z-index on selection control icon ([#798](https://github.com/digdir/designsystemet/issues/798)) ([6c1db8b](https://github.com/digdir/designsystemet/commit/6c1db8bf213e62eb9b788ac82e3114e90cd9f052))

# [0.24.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.23.3...@digdir/design-system-react@0.24.0) (2023-08-31)

### Features

- **Switch:** :sparkles: New `Switch` component ([#727](https://github.com/digdir/designsystemet/issues/727)) ([8fa362b](https://github.com/digdir/designsystemet/commit/8fa362bde7ac7d7c6d242e625bf2e4f42f90aa8d))

## [0.23.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.23.2...@digdir/design-system-react@0.23.3) (2023-08-25)

### Bug Fixes

- **Chip:** Proper styling on tall chips ([#756](https://github.com/digdir/designsystemet/issues/756)) ([b47eb37](https://github.com/digdir/designsystemet/commit/b47eb37a40019eb4cfeb755551a688541ab60dd7))

## [0.23.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.23.1...@digdir/design-system-react@0.23.2) (2023-08-23)

### Bug Fixes

- **Accordion:** :bug: Correct header color opacity ([f68ad25](https://github.com/digdir/designsystemet/commit/f68ad25d4693505bfa78679d1cb14454bbf99644))

## [0.23.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.23.0...@digdir/design-system-react@0.23.1) (2023-08-23)

### Bug Fixes

- **Accordion:** Apply height animation on opening and closing only ([#730](https://github.com/digdir/designsystemet/issues/730)) ([78852e1](https://github.com/digdir/designsystemet/commit/78852e195efea10b9eb93085b5ad20b843f39aa5))
- **Checkbox, Radio, Fieldset:** :bug: Make sure spacings are only applied when needed ([#746](https://github.com/digdir/designsystemet/issues/746)) ([f03df61](https://github.com/digdir/designsystemet/commit/f03df61dd5b5ca3e93e62a30bd480c9541a71ccf))
- **InputWrapper:** isValid works now independent of charLimit validation ([#734](https://github.com/digdir/designsystemet/issues/734)) ([bf4ecd8](https://github.com/digdir/designsystemet/commit/bf4ecd83f71f66351d6de0cae4343fcded53ed0a))
- **Link:** :lipstick: Tweaked style for better visibility between states ([#744](https://github.com/digdir/designsystemet/issues/744)) ([cfc37e2](https://github.com/digdir/designsystemet/commit/cfc37e2687db883a25dc16042c1e3c602455850b))
- **Pagination:** :bug: Fix compact spacings and ellipsis alignment ([#748](https://github.com/digdir/designsystemet/issues/748)) ([c54eb1e](https://github.com/digdir/designsystemet/commit/c54eb1ec90b6088774202effa630d3c1d4a0425f))
- **Radio, Checkbox:** :bug: Fallback to `checked` or `defaultChecked` if `Group` `value` is not set ([#733](https://github.com/digdir/designsystemet/issues/733)) ([4777dac](https://github.com/digdir/designsystemet/commit/4777dac6bef610cbf5010ff37eff5d6c42820df9))

# [0.23.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.22.0...@digdir/design-system-react@0.23.0) (2023-08-16)

### Bug Fixes

- **Pagination:** :wheelchair: Fix 'a11y' error for Pagination next/prev buttons ([#726](https://github.com/digdir/designsystemet/issues/726)) ([e0e6fa4](https://github.com/digdir/designsystemet/commit/e0e6fa424c9d1af54546eb344e58105271c8ea63))

### Features

- **Checkbox, CheckboxGroup, FieldSet, RadioButton, RadioGroup:** :wastebasket: Change to Legacy ([#716](https://github.com/digdir/designsystemet/issues/716)) ([b22d836](https://github.com/digdir/designsystemet/commit/b22d836c51ffcb024331eb07109547b288151888))
- **Checkbox, Radio, Fieldset:** :sparkles: Release new components ([#720](https://github.com/digdir/designsystemet/issues/720)) ([7facb4d](https://github.com/digdir/designsystemet/commit/7facb4d1c77deffedb350fc7ed3e4bceecd4ff75))
- **Link:** Create the component ([#711](https://github.com/digdir/designsystemet/issues/711)) ([ac0adcc](https://github.com/digdir/designsystemet/commit/ac0adcc2992499fd850e7974a54a7e4b19dfdd06))

### BREAKING CHANGE

- **enums:** 🔥 Remove `enums` ([#721](https://github.com/digdir/designsystemet/issues/721))
- **LegacyAccordion:** 🔥 Remove `LegacyAccordion` ([#707](https://github.com/digdir/designsystemet/issues/707))

# [0.22.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.21.0...@digdir/design-system-react@0.22.0) (2023-08-09)

### Bug Fixes

- **Accordion:** Support dynamic height ([#689](https://github.com/digdir/designsystemet/issues/689)) ([6624ba1](https://github.com/digdir/designsystemet/commit/6624ba1eb75007cf07227f74a633f78d0b718ce3))
- **Alert:** :bug: Left border should now be positioned correctly inside the box ([#702](https://github.com/digdir/designsystemet/issues/702)) ([5fa2aeb](https://github.com/digdir/designsystemet/commit/5fa2aeb4a17e77f5fbb98fd8ac039bb4bed0a473))
- **Chip.Removable:** :bug: Use correct button type to avoid default submit ([#694](https://github.com/digdir/designsystemet/issues/694)) ([357cfe8](https://github.com/digdir/designsystemet/commit/357cfe827460031cc5e03f0e98f61947210bf40c))

### Features

- **Button:** :recycle: Change default `size` to medium (instead of small`) ([#698](https://github.com/digdir/designsystemet/issues/698)) ([ab238df](https://github.com/digdir/designsystemet/commit/ab238df8edb86f0432fe59b0d653986c6d3f09b5))
- **Checkbox:** ✨ New `Checkbox` component (unreleased) ([#681](https://github.com/digdir/designsystemet/issues/681)) ([6b49301](https://github.com/digdir/designsystemet/commit/6b4930169802a860bad518173e18186407a36f02))
- **Chip.Toggle:** ♻️ Enabled `checkmark` as default when `selected` ([#693](https://github.com/digdir/designsystemet/issues/693)) ([049460c](https://github.com/digdir/designsystemet/commit/049460c1b027f1846e5bf675b4e6768d6320458a))
- **Label:** :sparkles: Added new prop `weight` for setting font weight ([#699](https://github.com/digdir/designsystemet/issues/699)) ([1641752](https://github.com/digdir/designsystemet/commit/16417526f584339544129ba990891f3dabf66267))

# [0.21.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.20.0...@digdir/design-system-react@0.21.0) (2023-08-02)

### Bug Fixes

- **Button:** :bug: Fix icon being clipped in Firefox browser ([#679](https://github.com/digdir/designsystemet/issues/679)) ([75b8bd7](https://github.com/digdir/designsystemet/commit/75b8bd79df45345be7ea4f07a4c88c303ec5c946))

### Features

- **Pagination:** New `Pagination` component ([#677](https://github.com/digdir/designsystemet/issues/677)) ([6085019](https://github.com/digdir/designsystemet/commit/6085019e7756d2a06cd087914d7ab839ca184765))
- **Radio, Fieldset:** :sparkles: New `Radio` & `Fieldset` component (unreleased) ([#666](https://github.com/digdir/designsystemet/issues/666)) ([e2d6f89](https://github.com/digdir/designsystemet/commit/e2d6f89523576520058024e3a02fad367148ac7e))

# [0.20.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.19.0...@digdir/design-system-react@0.20.0) (2023-07-24)

### Bug Fixes

- **Button:** :wheelchair: Added 44px clickbound for `small` size ([#676](https://github.com/digdir/designsystemet/issues/676)) ([921b9c7](https://github.com/digdir/designsystemet/commit/921b9c73315232e83fb25cd7365133e5e0dff3f1))
- **Button:** Correct sizes when only icon is used ([#674](https://github.com/digdir/designsystemet/issues/674)) ([0598060](https://github.com/digdir/designsystemet/commit/05980600bdb122ebf0965540ea1d0fbf65e26c7f))

### Features

- **Chip:** implemented Chip.Toggle ([#669](https://github.com/digdir/designsystemet/issues/669)) ([bc50da4](https://github.com/digdir/designsystemet/commit/bc50da48bd834b80f256a835c3bb7fd7c5b17afc))

# [0.19.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.18.0...@digdir/design-system-react@0.19.0) (2023-07-05)

### Features

- **Accordion:** use the new semantic colors for focus style ([#611](https://github.com/digdir/designsystemet/issues/611)) ([20bffae](https://github.com/digdir/designsystemet/commit/20bffaea35ef913fd7a4e580f30e649647310a7a))
- **ToggleButton:** use the correct focus styling ([#612](https://github.com/digdir/designsystemet/issues/612)) ([507f566](https://github.com/digdir/designsystemet/commit/507f566777119506b3747acd493e33266aa3657d))

# [0.18.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.17.0...@digdir/design-system-react@0.18.0) (2023-06-28)

### Bug Fixes

- **Chip:** visual improvements ([#610](https://github.com/digdir/designsystemet/issues/610)) ([58a4627](https://github.com/digdir/designsystemet/commit/58a46278a00faf10f0e86cdbf7813b57dceb40cc))

### Features

- **Chip.Group, Chip.Removable, Chip:** created chips ([#575](https://github.com/digdir/designsystemet/issues/575)) ([26eae91](https://github.com/digdir/designsystemet/commit/26eae91cabbbbf5528b1a339ce99458dcc75c08a))
- **TextField:** Type attribute ([#579](https://github.com/digdir/designsystemet/issues/579)) ([0ec6e5d](https://github.com/digdir/designsystemet/commit/0ec6e5db7f59f192eba9173a428a69b9ff75c754))

# [0.17.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.16.0...@digdir/design-system-react@0.17.0) (2023-06-21)

### Bug Fixes

- **Alert:** avoid the border-left to disappear when elevated is true ([#554](https://github.com/digdir/designsystemet/issues/554)) ([cf26ba2](https://github.com/digdir/designsystemet/commit/cf26ba22686e15dc424be93bbe2fb0aa302f6e97))
- **Select:** ResizeObserver loop error ([#565](https://github.com/digdir/designsystemet/issues/565)) ([48051db](https://github.com/digdir/designsystemet/commit/48051db43bf886e9bea1584e8245c14ba83bfa3f))
- **Typography:** fixed spacing ([#569](https://github.com/digdir/designsystemet/issues/569)) ([6a0311e](https://github.com/digdir/designsystemet/commit/6a0311e3fe0d41bbc6ae996136016c320d4e9447))

### Features

- **ErrorMessage:** added xsmall options ([#552](https://github.com/digdir/designsystemet/issues/552)) ([e776dfb](https://github.com/digdir/designsystemet/commit/e776dfb8d17216ebf9ce870f11d7071bc48f41e8))
- **RadioButton:** implemented forwardRef ([#562](https://github.com/digdir/designsystemet/issues/562)) ([66302de](https://github.com/digdir/designsystemet/commit/66302dea55cd082357b633f15744381cc0bc9318))

# [0.16.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.15.0...@digdir/design-system-react@0.16.0) (2023-06-14)

### Features

- **Tag:** created the tag component ([#542](https://github.com/digdir/designsystemet/issues/542)) ([7fd2330](https://github.com/digdir/designsystemet/commit/7fd23304220bcf69291b51b5f33b93556484a142))

# [0.15.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.14.0...@digdir/design-system-react@0.15.0) (2023-06-09)

### Bug Fixes

- **Checkbox:** should avoid different box-size when checked/unchecked ([#533](https://github.com/digdir/designsystemet/issues/533)) ([52d368f](https://github.com/digdir/designsystemet/commit/52d368f02a7f59ef25aadea0323e22faa3c4d0f9))
- **FieldSet:** :wheelchair: Fix wrong role on `ErrorMessage` ([#520](https://github.com/digdir/designsystemet/issues/520)) ([b0f8894](https://github.com/digdir/designsystemet/commit/b0f88948a56192787cb4d14a41937f3e82081fe1))

### Features

- **Alert:** :sparkles: New React component `Alert` ([#510](https://github.com/digdir/designsystemet/issues/510)) ([8f36198](https://github.com/digdir/designsystemet/commit/8f361987963ba0dbbfc66b51c2241cd8da383c42))
- **NativeSelect:** :sparkles: New React component `NativeSelect` ([#488](https://github.com/digdir/designsystemet/issues/488)) ([36eb3eb](https://github.com/digdir/designsystemet/commit/36eb3ebbe8e8d741d396f962fe55095b1e8def52))

# [0.14.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.13.0...@digdir/design-system-react@0.14.0) (2023-06-07)

### Bug Fixes

- **InputWrapper:** should only show invalid variant when field is invalid ([#502](https://github.com/digdir/designsystemet/issues/502)) ([556515c](https://github.com/digdir/designsystemet/commit/556515c1f3a244c1b5ce7bac9fcfbc878ba77ae3))
- **Select:** :bug: Add zindex to dropdown ([#513](https://github.com/digdir/designsystemet/issues/513)) ([cf62384](https://github.com/digdir/designsystemet/commit/cf62384282d43ed417d5bd77a119b604d262bd84))
- **Table:** Remove padding in header cells ([#485](https://github.com/digdir/designsystemet/issues/485)) ([17971e2](https://github.com/digdir/designsystemet/commit/17971e20015d07187ee316e7974a6a79c7712d80))

### Features

- **Typography:** :sparkles: Define font color ([#511](https://github.com/digdir/designsystemet/issues/511)) ([5446557](https://github.com/digdir/designsystemet/commit/54465579e63caefc21f43635272a80b2a4805dda))

# [0.13.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.12.1...@digdir/design-system-react@0.13.0) (2023-05-31)

### Bug Fixes

- **Accordion:** :bug: Fix `displayName` for Accordion sub-components ([#424](https://github.com/digdir/designsystemet/issues/424)) ([c755c4a](https://github.com/digdir/designsystemet/commit/c755c4a8c19ac6d03a7dd51b32e4e3d92e33af3b))
- **Accordion:** :bug: Use correct icon in header ([#473](https://github.com/digdir/designsystemet/issues/473)) ([7517690](https://github.com/digdir/designsystemet/commit/7517690873caf74d7eac6bc47f8f179df4a999a8))
- **Accordion:** 🐛 Fix hover state on Accordion.Header when used on touch devies ([#435](https://github.com/digdir/designsystemet/issues/435)) ([8164dcc](https://github.com/digdir/designsystemet/commit/8164dcca1ebd81ada20a9347e943983f9eed6224))
- **CheckboxRadioTemplate:** ensure to remove spacing/gap when label is hidden ([#427](https://github.com/digdir/designsystemet/issues/427)) ([f5a20e6](https://github.com/digdir/designsystemet/commit/f5a20e66b50254611373ee3efa1d827be5124520))
- **InputWrapper, Select, Tabs, ToggleButtonGroup:** :recycle: Removed component defined font-family ([#476](https://github.com/digdir/designsystemet/issues/476)) ([2e65214](https://github.com/digdir/designsystemet/commit/2e6521401e0aabd9975ecc8ce6bcf7a4352ee662))
- **Select:** Make options list independent of container size restrictions ([#449](https://github.com/digdir/designsystemet/issues/449)) ([6f8ce62](https://github.com/digdir/designsystemet/commit/6f8ce623af3ff09c817674289c94d802a04af912))
- **TextField, TextArea:** append ids to aria-described-by ([#456](https://github.com/digdir/designsystemet/issues/456)) ([449988c](https://github.com/digdir/designsystemet/commit/449988c5d6ea69b9c52a61be481e61d6236b8f9c))
- **Typography:** :bug: Fix Typography components to inherit font-family ([#470](https://github.com/digdir/designsystemet/issues/470)) ([06f6677](https://github.com/digdir/designsystemet/commit/06f66770df7bdc6f3a55f4d3567a0e2e249e8bf8))

## [0.12.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.12.0...@digdir/design-system-react@0.12.1) (2023-05-22)

### Bug Fixes

- Export `Accordion` component publicly ([#423](https://github.com/digdir/designsystemet/issues/423)) ([82adba2](https://github.com/digdir/designsystemet/commit/82adba2a4d894d4a8440f51e61694702cc6c3213))

# [0.12.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.11.1...@digdir/design-system-react@0.12.0) (2023-05-16)

### Bug Fixes

- **FieldSet:** Fixing typo in font size ([#372](https://github.com/digdir/designsystemet/issues/372)) ([287c8a4](https://github.com/digdir/designsystemet/commit/287c8a4cea2d0d310f4913873598a1bf5144dd33))
- **Select:** Adjust list size to available space ([#383](https://github.com/digdir/designsystemet/issues/383)) ([2d11090](https://github.com/digdir/designsystemet/commit/2d1109013c5f50aadee39b4270483c45e973e137))
- **TextField, TextArea, Checkbox, RadioButton, Button and HelpText:** New focus style ([#354](https://github.com/digdir/designsystemet/issues/354)) ([1786918](https://github.com/digdir/designsystemet/commit/1786918a90037cce2c6e300f271a62ea34d166c3))

### Features

- **Accordion:** New Accordion component ([#313](https://github.com/digdir/designsystemet/issues/313)) ([62cc44b](https://github.com/digdir/designsystemet/commit/62cc44b05f35d5de30b6844859585967785be87c))
- **TextArea, TextField:** Countdown remaining letters ([#365](https://github.com/digdir/designsystemet/issues/365)) ([6f08478](https://github.com/digdir/designsystemet/commit/6f08478e929c2740d0830edca453a2c68549fa61))
- **Heading, Paragraph, Ingress, Label, ErrorMessage:** New Typography components ([#374](https://github.com/digdir/designsystemet/issues/374)) ([2bb07d6](https://github.com/digdir/designsystemet/commit/2bb07d6dbbcf277c24eeb06176e365cd366c5a20))

## [0.11.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.11.1...@digdir/design-system-react@0.11.3) (2023-05-04)

### Bug Fixes

- **Select:** Collapse when arrow button is clicked ([#336](https://github.com/digdir/designsystemet/issues/336)) ([254628a](https://github.com/digdir/designsystemet/commit/254628a7918dc037643b7157b40ad3e7031daeae))
- **Select:** Set "button" type on buttons ([#338](https://github.com/digdir/designsystemet/issues/338)) ([f3035f0](https://github.com/digdir/designsystemet/commit/f3035f0b1a37fa406f4f85af084571335f3ace0a))

## [0.11.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.11.1...@digdir/design-system-react@0.11.2) (2023-04-24)

### Bug Fixes

- **InputWrapper:** Make input borders clickable ([#282](https://github.com/digdir/designsystemet/issues/282)) ([d35df3f](https://github.com/digdir/designsystemet/commit/d35df3f852359a0e21e9d05f8259158036db1206))
- **Select:** fix aria-activedecendant attribute ([#291](https://github.com/digdir/designsystemet/issues/291)) ([0ed8958](https://github.com/digdir/designsystemet/commit/0ed89584083a66d20d4f37570825f023fc40c24a))
- **Select:** Make event listeners local ([#299](https://github.com/digdir/designsystemet/issues/299)) ([1439820](https://github.com/digdir/designsystemet/commit/14398207f95816f13ff9133913c0ee40080c25f9))
- **Table/RadioGroup/CheckboxGroup/FieldSet:** Multiple minor accessibility improvements ([#301](https://github.com/digdir/designsystemet/issues/301)) ([c299106](https://github.com/digdir/designsystemet/commit/c299106502175c220f1c051ec215b6fe25ef0bf7))
- **Table:** Omitting `aria-sort` when no sort order is in effect ([#306](https://github.com/digdir/designsystemet/issues/306)) ([ecb1570](https://github.com/digdir/designsystemet/commit/ecb1570fdad1c9182fa3ee51154721a674324e0c))
- **Table:** Sort-arrows fix ([#297](https://github.com/digdir/designsystemet/issues/297)) ([fbc8e50](https://github.com/digdir/designsystemet/commit/fbc8e5083802667f3fbc664637c36a7881cde040))
- **TextArea:** Set border ([#310](https://github.com/digdir/designsystemet/issues/310)) ([255f632](https://github.com/digdir/designsystemet/commit/255f632c128a0c7a41fd466d63d285495401eac1))

### BREAKING CHANGE

- **Accordion** was renamed to LegacyAccordion to make room for new “Accordion” component in accordance with new design & features ([#296](https://github.com/digdir/designsystemet/issues/296))([83d7e6c](https://github.com/digdir/designsystemet/commit/83d7e6cabf3df97a252d56196d6583d847b6f663))

## [0.11.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.11.0...@digdir/design-system-react@0.11.1) (2023-04-11)

### Bug Fixes

- **Select:** Make onBlur work when there is no active element ([#281](https://github.com/digdir/designsystemet/issues/281)) ([cd1f43c](https://github.com/digdir/designsystemet/commit/cd1f43ccc78b77baf11a4f01221572ffd13470fe))
- **Select:** Update selected on option change ([#286](https://github.com/digdir/designsystemet/issues/286)) ([623d306](https://github.com/digdir/designsystemet/commit/623d3067025f2da9359479d77f0dfcc29d4ac9d6))

# [0.11.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.10.2...@digdir/design-system-react@0.11.0) (2023-03-30)

### Features

- **Select:** Add onFocus and onBlur events ([#278](https://github.com/digdir/designsystemet/issues/278)) ([7fc362c](https://github.com/digdir/designsystemet/commit/7fc362c735f8f31f0b49ba65c8a98d90133db3cc))

## [0.10.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.10.1...@digdir/design-system-react@0.10.2) (2023-03-30)

### Bug Fixes

- **Textfield:** upgrading `react-number-format`, removing workaround ([e2dc0e6](https://github.com/digdir/designsystemet/commit/e2dc0e62093af9a7feb83bf2f6ee55ab7b1082e0))

## [0.10.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.10.0...@digdir/design-system-react@0.10.1) (2023-03-29)

### Bug Fixes

- **Accordion:** Fix continous texts word break ([#264](https://github.com/digdir/designsystemet/issues/264)) ([13b3bd6](https://github.com/digdir/designsystemet/commit/13b3bd6fb6a336ae1db86ea79555dde257162fa0))
- **Button:** adjust padding to make icon round ([#265](https://github.com/digdir/designsystemet/issues/265)) ([922014d](https://github.com/digdir/designsystemet/commit/922014d14f8316421c17b5ffb435acb2ba2c51ae))
- **RadioButton:** RadioButton looks wrong when zoming in browser ([#266](https://github.com/digdir/designsystemet/issues/266)) ([5f40bc3](https://github.com/digdir/designsystemet/commit/5f40bc35e0ed6f1c1e2535b0d45a38d18b1768c0))
- **Select:** Display initial value on single select ([#268](https://github.com/digdir/designsystemet/issues/268)) ([7ad5f0f](https://github.com/digdir/designsystemet/commit/7ad5f0fa6345577993dca28c0bb6066c9595634d))
- **ToggleButtonGroup:** Set correct button type ([#261](https://github.com/digdir/designsystemet/issues/261)) ([a706f07](https://github.com/digdir/designsystemet/commit/a706f0773acbf5bf4766d915af95696cdfaa67af))

# [0.10.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.9.0...@digdir/design-system-react@0.10.0) (2023-03-24)

### Bug Fixes

- **Select:** NVDA screen reader issues ([#246](https://github.com/digdir/designsystemet/issues/246)) ([3a57e6c](https://github.com/digdir/designsystemet/commit/3a57e6c0cba74989758c4900d0130705f9b160e3))
- **Select:** Support dynamically changing options ([#253](https://github.com/digdir/designsystemet/issues/253)) ([5b13f7c](https://github.com/digdir/designsystemet/commit/5b13f7c13590f71547caa0e90c7f0d85e610c4af))

### Features

- Add toggle button component ([#258](https://github.com/digdir/designsystemet/issues/258)) ([2ecbe69](https://github.com/digdir/designsystemet/commit/2ecbe69fa8fe1d35f1ca91f8e7eef1f0f762f209))

# [0.9.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.8.1...@digdir/design-system-react@0.9.0) (2023-03-17)

### Bug Fixes

- **Button:** Remove width in css for buttons with only icons ([#232](https://github.com/digdir/designsystemet/issues/232)) ([4962e49](https://github.com/digdir/designsystemet/commit/4962e49de0b69d33f6c7b884021819c6a9b5c86c))
- **CheckboxGroup:** Improved item update handling ([#241](https://github.com/digdir/designsystemet/issues/241)) ([9a157df](https://github.com/digdir/designsystemet/commit/9a157dfb6805b3e54930f2d555a18c7117fab577))
- use ReactNode in helptexts to allow rich content ([#245](https://github.com/digdir/designsystemet/issues/245)) ([4469c7d](https://github.com/digdir/designsystemet/commit/4469c7d653cb612e94e35b82fc97bdf622c5b5a3))

### Features

- **Button:** Added support for aria-disabled to button and loading button example in storybook ([#240](https://github.com/digdir/designsystemet/issues/240)) ([51992e8](https://github.com/digdir/designsystemet/commit/51992e8bf329e6b3cb38c0a88c36ef0ac20c9a84))

## [0.8.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.8.0...@digdir/design-system-react@0.8.1) (2023-03-09)

**Note:** Version bump only for package @digdir/design-system-react

# [0.8.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.7.0...@digdir/design-system-react@0.8.0) (2023-03-09)

### Bug Fixes

- **CheckboxGroup:** fix state handling problem ([#205](https://github.com/digdir/designsystemet/issues/205)) ([50aab5a](https://github.com/digdir/designsystemet/commit/50aab5ad8152083c9c4efaa8b7fac48ed77284ce))
- **HelpText:** helptext´s content not reachable with NVDA screenreader ([#206](https://github.com/digdir/designsystemet/issues/206)) ([e4c115f](https://github.com/digdir/designsystemet/commit/e4c115f11d95442372fbcee3c690ed617de0860a))
- Set correct font size in all text input fields ([#201](https://github.com/digdir/designsystemet/issues/201)) ([2f1a903](https://github.com/digdir/designsystemet/commit/2f1a9030b94c6938d8b8719cf6ed7f92d4eaa4b6))

### Features

- Add table component ([#207](https://github.com/digdir/designsystemet/issues/207)) ([c07a288](https://github.com/digdir/designsystemet/commit/c07a288daac0cc39e8bc8e78b5e214cb3c45a2f8))

# [0.7.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.6.0...@digdir/design-system-react@0.7.0) (2023-02-24)

### Bug Fixes

- **HelpText:** hide helptext button in pdfs ([#156](https://github.com/digdir/designsystemet/issues/156)) ([7b9c217](https://github.com/digdir/designsystemet/commit/7b9c2174b8095f7fe56c205d4a462168b734e950))

### Features

- **HelpText:** take reactnode instead of string ([#181](https://github.com/digdir/designsystemet/issues/181)) ([2c1a8df](https://github.com/digdir/designsystemet/commit/2c1a8df08ea91a81f95252db8c12d5a6229f9188))
- **Spinner:** Add spinner component ([#162](https://github.com/digdir/designsystemet/issues/162)) ([deb6fec](https://github.com/digdir/designsystemet/commit/deb6fec8524bae70a001d330ac3ca15330879ff2))

# [0.6.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.5.1...@digdir/design-system-react@0.6.0) (2023-02-16)

### Bug Fixes

- **HelpText:** fix help-text width ([#149](https://github.com/digdir/designsystemet/issues/149)) ([e0ddf38](https://github.com/digdir/designsystemet/commit/e0ddf3895994f1b276e851f74de495a33e4d964a))
- **Popover:** fix display-issue-with-popover-arrow ([#152](https://github.com/digdir/designsystemet/issues/152)) ([2b3e311](https://github.com/digdir/designsystemet/commit/2b3e3112407fdc86dcc092b1d93c34c9f76dbf69))

### Features

- **List:** Add list component ([#153](https://github.com/digdir/designsystemet/issues/153)) ([f3befb9](https://github.com/digdir/designsystemet/commit/f3befb9643f9c5be440426d8f57f3542ea44cf61))
- **Select:** Search and formatting ([#151](https://github.com/digdir/designsystemet/issues/151)) ([d26ea78](https://github.com/digdir/designsystemet/commit/d26ea78a8cb2ce6d12f60c4faa2ec0202ff37054))

## [0.5.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.5.0...@digdir/design-system-react@0.5.1) (2023-02-13)

### Bug Fixes

- **Accordion:** Fix subtitle placement issues ([#144](https://github.com/digdir/designsystemet/issues/144)) ([316e450](https://github.com/digdir/designsystemet/commit/316e4502d3b34a90ca577a45bbb367f547f6fb96))
- **Button:** Enforce icon button to have same width and height ([#139](https://github.com/digdir/designsystemet/issues/139)) ([9b3bb93](https://github.com/digdir/designsystemet/commit/9b3bb93fc0e73b10a7522c07f54ca250b3d686b8))
- **HelpText:** export help text size prop ([#147](https://github.com/digdir/designsystemet/issues/147)) ([7a716bb](https://github.com/digdir/designsystemet/commit/7a716bbed965ec8fb5f01799c7aea32be4fdd8e3))
- **InputWrapper:** Change outline style to solid from auto to make outline-offset work ([#140](https://github.com/digdir/designsystemet/issues/140)) ([ef2a9f4](https://github.com/digdir/designsystemet/commit/ef2a9f4e003d6c7ca3ac72a1e4b3e915d4a174a7))

# [0.5.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.4.3...@digdir/design-system-react@0.5.0) (2023-02-08)

### Bug Fixes

- added displayName to all exported components ([#135](https://github.com/digdir/designsystemet/issues/135)) ([7f0dd1b](https://github.com/digdir/designsystemet/commit/7f0dd1b01930e0a3dfd5117f6a5277d08dc1ebd7))
- **Button:** Replace non existent Figma token ([#128](https://github.com/digdir/designsystemet/issues/128)) ([b27e3d4](https://github.com/digdir/designsystemet/commit/b27e3d4cb67da0f9ae70d3f4d4b6f71a777b7bae))
- **Select:** Accept empty list of options ([#133](https://github.com/digdir/designsystemet/issues/133)) ([515e84f](https://github.com/digdir/designsystemet/commit/515e84f40edbec392041769e93aaf90f474aaa78))

### Features

- **Accordion:** Add accordion component ([#130](https://github.com/digdir/designsystemet/issues/130)) ([5cf8bf2](https://github.com/digdir/designsystemet/commit/5cf8bf20f5c59f1d9bca45af4c9cbceb017f22cf))

## [0.4.3](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.4.2...@digdir/design-system-react@0.4.3) (2023-02-02)

### Bug Fixes

- **Button:** Only icon padding ([#109](https://github.com/digdir/designsystemet/issues/109)) ([7a4c286](https://github.com/digdir/designsystemet/commit/7a4c28622a3e558d36fa4c526b0d0e3c9a875bc8))
- **help text:** add title to helptext tests ([#126](https://github.com/digdir/designsystemet/issues/126)) ([9b3fc86](https://github.com/digdir/designsystemet/commit/9b3fc8686bf56eca2f69f80b4f02e3ee4e281b58))
- **Select:** Set higher z-index on option list ([#114](https://github.com/digdir/designsystemet/issues/114)) ([f6077a6](https://github.com/digdir/designsystemet/commit/f6077a645509001edc482e075a3a5df5ffa87076))
- Set font and min height on input fields ([#112](https://github.com/digdir/designsystemet/issues/112)) ([e7671fa](https://github.com/digdir/designsystemet/commit/e7671fabed4b9ab9d3094a44651e5f8797012bb9))
- Update Figma tokens ([#111](https://github.com/digdir/designsystemet/issues/111)) ([8e0edd8](https://github.com/digdir/designsystemet/commit/8e0edd819c6483ea9a372bb44f13ad8f3af38cc9))
- update figma-token for CheckboxRadioTemplate ([df69b2a](https://github.com/digdir/designsystemet/commit/df69b2a2c366b4c46baa67a8f84c3358357b5324))

## [0.4.2](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.4.1...@digdir/design-system-react@0.4.2) (2023-01-30)

### Bug Fixes

- added types file to export ([99a33f9](https://github.com/digdir/designsystemet/commit/99a33f9b8c2b61019dbd7a04a911ab9f3b833a89))

## [0.4.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.4.0...@digdir/design-system-react@0.4.1) (2023-01-27)

### Bug Fixes

- **popover:** popover screen reader ordering ([c8a0190](https://github.com/digdir/designsystemet/commit/c8a0190d887b95b1e0ea0178c1a2e51f93d48c24))

# [0.4.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.3.1...@digdir/design-system-react@0.4.0) (2023-01-26)

### Bug Fixes

- **popover:** retain focus on trigger when opening popover ([d54c7c8](https://github.com/digdir/designsystemet/commit/d54c7c8293372415a560bb334f2c2df1ed342d7c))
- **Tabs:** Spacing issues ([#95](https://github.com/digdir/designsystemet/issues/95)) ([2583e4c](https://github.com/digdir/designsystemet/commit/2583e4c8f1205bd5d7c9882ebfc55edf7efd0959))

### Features

- **help-text:** add help text component ([8f2bb3b](https://github.com/digdir/designsystemet/commit/8f2bb3bc682b9bfec650fe2813d402c94771a6d3))
- **popover:** added popover component ([6e34adf](https://github.com/digdir/designsystemet/commit/6e34adfebed9742c7145fcc3e2e99b2075fe8081))

## [0.3.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.3.0...@digdir/design-system-react@0.3.1) (2023-01-24)

### Bug Fixes

- Export issues ([#72](https://github.com/digdir/designsystemet/issues/72)) ([716e9d7](https://github.com/digdir/designsystemet/commit/716e9d7892be4ef7f21864338fd299a2f98a6784))

# [0.3.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.2.1...@digdir/design-system-react@0.3.0) (2023-01-23)

### Bug Fixes

- **select:** Value update in Select component ([#63](https://github.com/digdir/designsystemet/issues/63)) ([0a4677c](https://github.com/digdir/designsystemet/commit/0a4677cc00cc1b316ca17d5522a10c7385817fed))

### Features

- **textfield:** Add text field component ([#67](https://github.com/digdir/designsystemet/issues/67)) ([ba7e8a5](https://github.com/digdir/designsystemet/commit/ba7e8a5484f1fc75ec982eb666c1a94e3594cdea))

## [0.2.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.2.0...@digdir/design-system-react@0.2.1) (2023-01-19)

### Bug Fixes

- Presentation mode issues on checkboxes and radio buttons ([#61](https://github.com/digdir/designsystemet/issues/61)) ([2ee07b4](https://github.com/digdir/designsystemet/commit/2ee07b46794580bf255091fcc142b793c8a91682))

# [0.2.0](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.1.1...@digdir/design-system-react@0.2.0) (2023-01-19)

### Bug Fixes

- **button:** Export button props ([#52](https://github.com/digdir/designsystemet/issues/52)) ([604caed](https://github.com/digdir/designsystemet/commit/604caed26dbd16b225c1c5dc41d8eb98eba94f10))

### Features

- **textarea:** Add TextArea component ([#59](https://github.com/digdir/designsystemet/issues/59)) ([1938b7d](https://github.com/digdir/designsystemet/commit/1938b7dd541e4c3508b0942b14c87ac64dc7c7f7))

## [0.1.1](https://github.com/digdir/designsystemet/compare/@digdir/design-system-react@0.1.0...@digdir/design-system-react@0.1.1) (2023-01-12)

### Bug Fixes

- testing changelog with new release commands ([4906c28](https://github.com/digdir/designsystemet/commit/4906c28e4b6972d7c5d93e4ab630fe5d52d8fdb2))

# 0.1.0 (2023-01-11)

### Features

- testing changelogs for the react package ([f988027](https://github.com/digdir/designsystemet/commit/f9880278d774c4892e4792ad2f14d40d662e5206))
