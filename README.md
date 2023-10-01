# Todo List App with Next.js 13

This is a simple todo list application built using Next.js 13. It allows you to create and manage tasks, as well as perform searches. This README provides an overview of the project's features and dependencies.

## Features

- **Next.js 13**: The project is built using the Next.js framework, which offers server-side rendering, static site generation, and dynamic routing. You can learn more about Next.js in the [official documentation](https://nextjs.org/docs).

- **App Router System**: The application uses Next.js' routing system. You can find more information about routing [here](https://nextjs.org/docs/app/building-your-application/routing).

- **Static Site Generation (SSG) and Incremental Static Regeneration (ISR)**: The project leverages SSG and ISR to generate static pages with dynamic data. This helps improve performance and SEO. Learn more [here](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

- **Composition Patterns**: Client and server components are structured using composition patterns. This promotes code reusability and maintainability. Check out the composition patterns [here](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns).

- **Metadata Generation**: Metadata is generated for each page, which is crucial for SEO and social media sharing. Learn how to generate metadata [here](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

- **External API Communication**: The application communicates with external APIs to fetch data. It uses the [serper.dev](https://serper.dev/) and [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/) APIs for demonstration purposes.

- **Route Groups**: Route groups are used to organize and manage the application's routes. More details can be found [here](https://nextjs.org/docs/app/building-your-application/routing/route-groups).

- **Error, Loading and notFound Pages**: Custom error, loading and not found pages are implemented for a better user experience. Error conventions are detailed [here](https://nextjs.org/docs/app/api-reference/file-conventions/error), Loading conventions are detailed [here](https://nextjs.org/docs/app/api-reference/file-conventions/loading), and not-found pages are explained [here](https://nextjs.org/docs/app/api-reference/file-conventions/not-found).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

   Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 to access the application.

## Scripts

`npm run dev`: Start the development server.
`npm run build`: Build the production-ready application.
`npm start`: Start the production server.
`npm run lint`: Lint the code using ESLint.

## Acknowledgments

Thanks to the Next.js team for providing an excellent framework and documentation.
