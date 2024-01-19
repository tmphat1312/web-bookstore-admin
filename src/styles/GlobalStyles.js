import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    &, &.light-mode {
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;

      --color-blue-100: #e0f2fe;
      --color-blue-700: #0369a1;
      --color-green-100: #dcfce7;
      --color-green-700: #15803d;
      --color-yellow-100: #fef9c3;
      --color-yellow-700: #a16207;
      --color-silver-100: #e5e7eb;
      --color-silver-700: #374151;
      --color-indigo-100: #e0e7ff;
      --color-indigo-700: #4338ca;
      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;

      --backdrop-color: rgba(255, 255, 255, 0.1);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

      --image-grayscale: 0;
      --image-opacity: 100%;
    }

    &.dark-mode {
      --color-grey-0: #18212f;
      --color-grey-50: #111827;
      --color-grey-100: #1f2937;
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #d1d5db;
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;

      --color-blue-100: #075985;
      --color-blue-700: #e0f2fe;
      --color-green-100: #166534;
      --color-green-700: #dcfce7;
      --color-yellow-100: #854d0e;
      --color-yellow-700: #fef9c3;
      --color-silver-100: #374151;
      --color-silver-700: #f3f4f6;
      --color-indigo-100: #3730a3;
      --color-indigo-700: #e0e7ff;
      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;

      --backdrop-color: rgba(0, 0, 0, 0.3);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

      --image-grayscale: 10%;
      --image-opacity: 90%;
    }

    --color-brand-50: #f0fdf4;
    --color-brand-100: #dcfce7;
    --color-brand-200: #bbf7d0;
    --color-brand-300: #86efac;
    --color-brand-400: #4ade80;
    --color-brand-500: #22c55e;
    --color-brand-600: #16a34a;
    --color-brand-700: #15803d;
    --color-brand-800: #166534;
    --color-brand-900: #14532d;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
    --border-100: 1px solid var(--color-grey-100);
    --border-200: 1px solid var(--color-grey-200);
    --border-300: 1px solid var(--color-grey-300);
    --border-dashed: 2px dashed var(--color-grey-300);

    --font-heading: 'Bricolage Grotesque', sans-serif;
    --font-body: 'Noto Sans Display', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: unset;
    margin: unset;
  }

  html {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    min-height: 100svh;
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Noto Sans Display', sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;

    &:has(> svg) {
      line-height: 0;
      vertical-align: middle;
    }
  }

  *:disabled {
    cursor: not-allowed;
  }

  :where(input, button, textarea, select) {
    &:focus-visible {
      outline: 4px solid var(--color-brand-200);
      outline-offset: 2px;
    }

    &:disabled {
      background-color: var(--color-grey-100);
      color: var(--color-grey-500);
    }

    &:active {
      background-color: var(--color-brand-200);
    }
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  ul,ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Bricolage Grotesque', sans-serif;
    overflow-wrap: break-word;
    text-wrap: balance;
    hyphens: auto;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    shape-margin: 0.75rem;

    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .text-center {
    text-align: center;
  }
`;
