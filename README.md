# skc-rcl

React component library that will be used by SKC sites.

[![Build & Code Quality](https://github.com/ygo-skc/skc-rcl/actions/workflows/build-and-code-quality.yaml/badge.svg?branch=release)](https://github.com/ygo-skc/skc-rcl/actions/workflows/build-and-code-quality.yaml)

## StoryBook

[![Deploy StoryBook](https://github.com/ygo-skc/skc-rcl/actions/workflows/deploy-storybook.yaml/badge.svg?branch=release)](https://github.com/ygo-skc/skc-rcl/actions/workflows/deploy-storybook.yaml)

This repo has a corresponding StoryBook website that users can take advantage of and see all current components supported. If above badge is not green, then recent deployment of StoryBook components has failed.

## Testing

Jest is used to run Unit tests. There are many dependencies used in testing and they will be explained below.

| Library                           | Function           |
| --------------------------------- | ------------------ |
| @testing-library/jest-dom         | Allows tests to use HTML element matchers. This is imported for all tests using the file `setupTests.ts` and linked in the `package.json` file under Jest config named `setupFilesAfterEnv` |
| @testing-library/react            | Helper library for React apps. Allows us to render the DOM of react apps using the Component |
| jest-environment-jsdom"           | Since the default test environment is node, we need to install `jsdom` (this lib) and specify tne environment in the `package.json` file under Jest config named `testEnvironment`. More info [here](https://jestjs.io/docs/configuration#testenvironment-string) |
| jest-transform-css                | Allows tests to import CSS files |
| ts-jest                           | Allows jest to test TS files |
