import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  HeadContent,
  NavigateOptions,
  Outlet,
  Scripts,
  ToOptions,
  createRootRouteWithContext,
  useRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary';
import { Header } from '~/components/header';
import { NotFound } from '~/components/NotFound';
import { ThemeProvider } from '~/components/theme-provider';
import appCss from '~/styles/app.css?url';
import { seo } from '~/utils/seo';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Souliya Phoupaseuth | Web Developer',
        description: `Portfolio website of Souliya Phoupaseuth, a Web Front-End Developer specializing in React, TypeScript, and modern web technologies.`,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'me',
        sizes: '180x180',
        href: '/me.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/me.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/me.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/me.png' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <Outlet />
    </RootDocument>
  );
}

declare module '@react-types/shared' {
  interface RouterConfig {
    href: ToOptions['to'];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  let router = useRouter();

  return (
    <html>
      <head>
        <HeadContent />
        <link rel='icon' type='image/svg+xml' href='/me.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='apple-touch-icon' sizes='180x180' href='/me.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/me.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/me.png' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider
            navigate={(to, options) => router.navigate({ to, ...options })}
            useHref={(to) => router.buildLocation({ to }).href}
          >
            <ThemeProvider defaultTheme='light' storageKey='portfolio-theme'>
              {children}
            </ThemeProvider>
          </HeroUIProvider>
          <TanStackRouterDevtools position='bottom-right' />
          <ReactQueryDevtools buttonPosition='bottom-left' />
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
