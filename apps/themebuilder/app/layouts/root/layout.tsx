import { SkipLink } from '@digdir/designsystemet-react';
import {
  ContentContainer,
  Figma,
  Footer,
  type FooterLinkListItemProps,
  Github,
  Header,
  Slack,
} from '@internal/components';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';
import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, Outlet, useRouteLoaderData } from 'react-router';
import type { Route as RootRoute } from './../../+types/root';
import type { Route } from './+types/layout';

const rightLinks: FooterLinkListItemProps[] = [
  {
    text: 'designsystem@digdir.no' as unknown as FooterLinkListItemProps['text'],
    url: 'mailto:designsystem@digdir.no',
    prefix: <EnvelopeClosedIcon aria-hidden='true' fontSize='1.5em' />,
  },
  {
    text: ['footer.slack'] as unknown as FooterLinkListItemProps['text'],
    url: 'https://designsystemet.no/slack',
    prefix: <Slack />,
  },
  {
    text: 'Github' as unknown as FooterLinkListItemProps['text'],
    url: 'https://github.com/digdir/designsystemet',
    prefix: <Github />,
  },
  {
    text: 'Figma' as unknown as FooterLinkListItemProps['text'],
    url: 'https://www.figma.com/@designsystemet',
    prefix: <Figma />,
  },
];

export default function RootLayout() {
  const { t } = useTranslation();
  const { lang, centerLinks, menu } = useRouteLoaderData('root') as Omit<
    RootRoute.ComponentProps['loaderData'],
    'centerLinks'
  > & {
    centerLinks: FooterLinkListItemProps[];
    menu: {
      name: TemplateStringsArray;
      href: string;
    }[];
  };

  return (
    <>
      <SkipLink href='#main'>{t('accessibility.skip-link')}</SkipLink>
      <Header
        menu={menu}
        logoLink={`/${lang}`}
        themeSwitcher
        transparentBackground
      />
      <Outlet />
      <Footer
        centerLinks={centerLinks}
        rightLinks={rightLinks as FooterLinkListItemProps[]}
      />
    </>
  );
}

type ErrorWrapperRootProps = {
  children: React.ReactNode;
  lang: string;
  menu: {
    name: TemplateStringsArray;
    href: string;
  }[];
  centerLinks: {
    text: TemplateStringsArray;
    url: string;
  }[];
  rightLinks: {
    text: TemplateStringsArray;
    url: string;
    prefix?: React.ReactNode;
  }[];
};

const ErrorWrapperRoot = ({
  children,
  lang,
  menu,
  centerLinks,
  rightLinks,
}: ErrorWrapperRootProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SkipLink href='#main'>{t('accessibility.skip-link')}</SkipLink>
      <Header menu={menu} logoLink={`/${lang}`} themeSwitcher />
      <main id='main'>
        <ContentContainer>{children}</ContentContainer>
      </main>
      <Footer centerLinks={centerLinks} rightLinks={rightLinks} />
    </>
  );
};

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { t } = useTranslation();
  const message = t('errors.default.title');
  let details = t('errors.default.details');
  let stack: string | undefined;

  const loaderData = useRouteLoaderData(
    'root',
  ) as RootRoute.ComponentProps['loaderData'] & {
    centerLinks: FooterLinkListItemProps[];
    menu: {
      name: TemplateStringsArray;
      href: string;
    }[];
  };

  if (!loaderData) {
    return '<Error404 />';
  }

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return '<Error404 />';
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ErrorWrapperRoot
      lang={loaderData.lang}
      menu={loaderData.menu}
      centerLinks={loaderData.centerLinks}
      rightLinks={[]}
    >
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </ErrorWrapperRoot>
  );
}
