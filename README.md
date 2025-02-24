# Merlin Technical Test

This repository contents the implementation for the technical test
that Merlin sends to the Frontend Developer Candidates.

A production version is deployed in [https://merlin-technical-test.vercel.app](https://merlin-technical-test.vercel.app)

### Table of Contents

- [Getting Started](#getting-started)
- [Project Architecture](#project-architecture)
  - [app](#app)
  - [components](#components)
  - [data](#data)
    - [fetchers](#fetchers)
    - [models](#models)
    - [payloads](#payloads)
    - [providers](#providers)

## Getting Started

First, clone the repository of the project:

```bash
git clone git@github.com:AriasBros/Merlin_Technical_Test.git
```

Then, in the root folder of the project, you need to create an `.env` file to declare some environment variables that the application is expecting:

```bash
NEXT_PUBLIC_API_HOST=<your-api-host>
NEXT_PUBLIC_API_KEY=<your-api-key>
```

Once the environment variables are setup, you need to install the dependencies of the project running:

```bash
pnpm install
```

Finally, you can run the app in the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

or in the production server:

```bash
npm run prod
# or
yarn prod
# or
pnpm prod
# or
bun prod
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Project Architecture

The project is built over React and Next.js, and it is divided in three main folders:

- [app](src/app)
- [components](src/components)
- [data](src/data)

It follows a structure where the source code and the styles are colocated. For example, the component Button:

* [src/components/button.tsx](src/components/button.tsx)
* [src/components/button.module.scss](src/components/button.module.scss)

On the other hand, tests are located in `__tests__` folders, in the same level as the source code that they are covering. For example, again, the component Button and their tests:

* [src/components/__tests__/button.test.jsx](src/components/__tests__/button.test.jsx)

Next, we can find a little description for each main folder in the project:

### app

The [`app`](src/app) folder is provided by Next.js, and it is where Next.js expect we locate the routes of our application. 

### components

In [`components`](src/components), we locate all the source code and styles related to the components/widgets used by the application.

### data

Last, the [`data`](src/data) folder is used to contain all the source code related to the logic, the information and the management of both, used by the application.

Here, we can find the next components of the app:

#### fetchers

The [`fetchers`](src/data/fetchers) are used to request the data to the API and parse it to models that the application can consume later.

#### models

The [`models`](src/data/models) describe the information and its structure that the application will consume.

#### payloads

The [`payloads`](src/data/payloads) are used to describe the data used from the consumed API.
Also, it holds the logic to parse this data and transform it in actual models.

#### providers

The [`providers`](src/data/providers) are used to throw API requests, manage states and/or pass data down in the components tree.
