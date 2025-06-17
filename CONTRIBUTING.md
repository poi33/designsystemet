# Contributing to Designsystemet

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Code of Conduct

This project and everyone participating in it is governed by the
[Designsystemet Code of Conduct](./CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <designsystem@digdir.no>.

---

## Share your feedback and report issues

You can report bugs and suggest new features by going to our [Github Issue Templates](https://github.com/digdir/designsystemet/issues/new/choose).

If you have any questions you can contact us at <designsystem@digdir.no> or in our [Slack](https://designsystemet.no/slack) channel.

---

## I Want To Contribute

### Getting involved with development

It's fantastic that you want to join in and help with our development efforts!
We have established two contribution levels to suit task size: the first level for smaller tasks and the second for larger ones. The main difference is how closely you’ll collaborate with the team behind Designsystemet.

Unsure which level to choose? Send us an email at <designsystem@digdir.no> and we will get back to you as soon as we can!
You can also join our [Slack](https://designsystemet.no/slack) and ask questions there.

We suggest creating a draft pull request as soon as you start working on something. This ensures that different people aren't working on the same task.

Before you start coding also take a look at [how to get started with development](#getting-started-with-development) and our [coding standards](#how-to-write-and-structure-your-code).

#### Addressing minor bugs

Spotted a bug you would like to help fix? Easy! Just fork this repository and submit a [pull request](#pull-requests).
A person from Designsystemet will follow up from there.

Do the same for smaller feature requests. We cannot guarantee that the new feature will be implemented, but we will try our best to make it happen!

#### New features

Your team needs a new component or a new feature that doesn't exist? 
Great news! We have created a process to handle just this use case!

1. Submit a [feature request](https://github.com/digdir/designsystemet/issues/new/choose) detailing your requirements, and indicate your interest in contributing to the development.
2. The team will review the feature request and assess its compatibility with Designsystemet.
3. If the feature fits within the scope of Designsystemet we will follow you up from there.

##### New components
Developing a new components for Designsystemet requires a lot research and work, in addition to deep understand of accessebility and Desigsystemets inner workings to provide all of its features (theming, cli, tokens etc.). This is a process that requires a lot of time and if you are interested in contributing this way we encourage you to become part of the team during this time. We will invite you to participate in our daily check-ins throughout the development process to ensure that the component adheres to our coding standards and seamlessly integrates with our design system.

### Getting started with development

Follow these steps to get up and running with Storybook, Storefront (www.designsystemet.no) or Themebuilder. 

Run the commands from the root of your project. Make sure you clone the `main` branch, this is where we do development.

`pnpm i`
`pnpm build`

#### 4. Start local development servers

Depending on what you want to work on, start `apps` by running script according to folder.

`pnpm storybook | www | themebuilder`

### Pull requests

When creating a pull request for Designsystemet, there are a few things to keep in mind:

- When you create your pull request for the first time make sure to mark it as a [draft](https://github.blog/2019-02-14-introducing-draft-pull-requests/). This is mainly to prevent unnecessary notifications for reviewers during the development process. If you forget then no problem!
- We utilize automated code checks to verify that pull requests align with our established standards. These checks must be successful for the pull request to be merged into the main branch. You don't need to worry about this during development.
  - The pull request title must adhere to the [Conventional Commits](#commit-messages) standard.
  - We run linting and formatting checks on all the code.
- When you are done with development you can mark the pull request as ready for review by clicking on the button at the bottom. A person from Designsystemet will then review your code and comment if there are things that need to be changed. Once the pull request is approved it will be merged into the main branch.
- Make sure the PR is pointing to the `main` branch.

### Changesets
We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

Changes in `/packages/*`, will flag a need for adding adding a changeset to document changes.
We recommend you look at previous releases and what wording has been used there to describe changes. 
At a minimum, a prefix for which part or component the changes apply to.

To do this, run the following command in the root of the repository:

```bash
pnpm changeset
```

You can read more here: https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md

## Styleguides

### Commit Messages

This project uses Changesets with the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification in order to generate changelogs.

The [Semantic Versioning 2.0](https://semver.org/) specification is used for versioning.

To include commits in the changelog, please ensure that you include the following keywords:

- Start the commit with `fix:` to trigger a patch (0.0.x) version.
- Start the commit with `feat:` to trigger a minor (0.x.0) version.

#### Scope

To make commit messages and the changelog more specific and readable, you have the option to scope your commits by adding a keyword in parentheses that indicates the area or aspect you are working on. This practice helps provide clearer context and organization to the commit history.

##### Examples:

- Fix a bug: `fix(Button): correct padding when only icon`.
- Adding documentation: `docs(Table): added paragraph about table header and using interderminate checkboxes`.


![te](https://i.imgur.com/Uw0qA1O.png)
