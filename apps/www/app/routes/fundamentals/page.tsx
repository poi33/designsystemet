import { join } from 'node:path';
import { Heading } from '@digdir/designsystemet-react';
import * as Aksel from '@navikt/aksel-icons';
import cl from 'clsx/lite';
import { EditPageOnGithub } from '~/_components/edit-page-on-github/edit-page-on-github';
import { MDXComponents } from '~/_components/mdx-components/mdx-components';
import { formatDate } from '~/_utils/date';
import { getFileFromContentDir } from '~/_utils/files';
import { generateFromMdx } from '~/_utils/generate-from-mdx';
import { generateMetadata } from '~/_utils/metadata';
import type { Route } from './+types/page';
import classes from './page.module.css';

export async function loader({ params }: Route.LoaderArgs) {
  const { '*': file } = params;

  // Read the file content
  const fileContent = getFileFromContentDir(
    join('fundamentals', params.lang, `${file}.mdx`),
  );

  if (!fileContent) {
    throw new Response('Not Found', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  // Bundle the MDX content
  const result = await generateFromMdx(fileContent);

  return {
    code: result.code,
    frontmatter: result.frontmatter,
    lang: params.lang,
  };
}

export const meta = ({ data }: Route.MetaArgs) => {
  if (!data)
    return [
      {
        title: 'Designsystemet',
      },
    ];
  const {
    frontmatter: { title, description },
  } = data;
  return generateMetadata({
    title,
    description,
  });
};

export default function Fundamentals({
  loaderData: { code, frontmatter, lang },
}: Route.ComponentProps) {
  const Icon = frontmatter.icon
    ? // biome-ignore lint/performance/noDynamicNamespaceImportAccess: this should be safe because we prerender the page
      Aksel[frontmatter.icon as keyof typeof Aksel]
    : Aksel.LayersIcon;

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <Heading data-size='lg' level={1}>
            {frontmatter.title}
          </Heading>
          {frontmatter.date && (
            <div className={classes.date}>
              {formatDate(frontmatter.date, lang)}
            </div>
          )}
        </div>
        <div
          className={cl(
            classes.iconContainer,
            classes[frontmatter.color as keyof typeof classes],
          )}
        >
          <Icon fontSize='4rem' aria-hidden='true' />
        </div>
      </div>
      <div className={classes.content}>
        <MDXComponents code={code} />
        <EditPageOnGithub />
      </div>
    </>
  );
}
