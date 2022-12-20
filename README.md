# Notify users about new deployments with Next.js + SWR

This repository provides an example to notify users about new deployments with Next.js + SWR.

[Check the article for more information](https://monogram.io/blog/notify-users-about-new-deployments-with-next-js-swr).

## Testing the new version functionality

### 1. Install dependencies

This project is using [pnpm](https://pnpm.io/) as the package manager.

```
pnpm install
```

### 2. Run the project

With the development server:

```
pnpm dev
```

or with the production server:

```
pnpm build && pnpm start
```

### 3. Generate a new version

```
pnpm prebuild
```

When you generate a new version the UI should indicate that there's a new app version. That's it!
