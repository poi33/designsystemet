'use client';

import {
  Dialog,
  Divider,
  Heading,
  Input,
  Link,
  Paragraph,
} from '@digdir/designsystemet-react';
import { cliOptions } from '@digdir/designsystemet/tokens';
import { InformationSquareIcon, StarIcon } from '@navikt/aksel-icons';
import { CodeSnippet } from '@repo/components';
import { useRef, useState } from 'react';

import type { Color } from '@digdir/designsystemet/color';
import { type ColorTheme, useThemeStore } from '../../store';
import classes from './TokenModal.module.css';

const colorCliOptions = cliOptions.theme.colors;

const getBaseDefault = (colorTheme: Color[]) =>
  colorTheme.find((color) => color.name === 'base-default');

export const TokenModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const colors = useThemeStore((state) => state.colors);
  const baseBorderRadius = useThemeStore((state) => state.baseBorderRadius);

  const [themeName, setThemeName] = useState('theme');

  const setCliColors = (colorTheme: ColorTheme[]) => {
    let str = '';
    for (const theme of colorTheme) {
      const baseColor = getBaseDefault(theme.colors.light);
      str += `"${theme.name}:${baseColor?.hex}" `;
    }
    return str;
  };

  const cliSnippet = [
    `npx @digdir/designsystemet@next tokens create`,
    `--${colorCliOptions.main} ${setCliColors(colors.main).trimEnd()}`,
    `--${colorCliOptions.neutral} "${getBaseDefault(colors.neutral[0]?.colors.light)?.hex}"`,
    `${colors.support.length > 0 ? `--${colorCliOptions.support} ${setCliColors(colors.support).trimEnd()}` : ''}`,
    `--border-radius ${baseBorderRadius}`,
    `--theme "${themeName}"`,
  ]
    .filter(Boolean)
    .join(' \\\n');

  return (
    <Dialog.TriggerContext>
      <Dialog.Trigger
        className={classes.trigger}
        onClick={() => {
          return modalRef.current?.showModal();
        }}
      >
        <StarIcon aria-hidden fontSize='1.5rem' />
        Ta i bruk tema
      </Dialog.Trigger>
      <Dialog
        className={classes.modal}
        style={{ maxWidth: 1000 }}
        ref={modalRef}
        backdropClose={true}
      >
        <Dialog.Block>
          <Heading className={classes.modalHeader} data-size='2xs'>
            <img src='img/emblem.svg' alt='' className={classes.emblem} />
            <span className={classes.headerText}>Ta i bruk tema</span>
          </Heading>
        </Dialog.Block>

        <Dialog.Block>
          <Heading className={classes.modalHeader} data-size='xs' level={3}>
            Gi temaet ditt et navn
          </Heading>
          <Paragraph>
            Navnet bør representere virksomheter eller produktet du skal
            profilere.
          </Paragraph>
          <Input
            aria-label='Navn på tema'
            name='themeName'
            value={themeName}
            onChange={(e) => {
              const value = e.currentTarget.value
                .replace(/\s+/g, '-')
                .replace(/[^A-Z0-9-]+/gi, '')
                .toLowerCase();

              setThemeName(value);
            }}
            style={{
              marginTop: 'var(--ds-size-6)',
            }}
          />
        </Dialog.Block>

        <Dialog.Block>
          <div className={classes.content}>
            <div className={classes.rightSection}>
              <div className={classes.step}>
                <span>1</span>
                <Paragraph>
                  Kopier kodesnutten og kjør den på maskinen din for å generere
                  design tokens (json-filer), eller lim den inn i Designsystemet
                  sin{' '}
                  <Link
                    target='_blank'
                    href='https://www.figma.com/community/plugin/1382044395533039221/designsystemet-beta'
                  >
                    Figma plugin
                  </Link>{' '}
                  i{' '}
                  <Link
                    target='_blank'
                    href='https://www.figma.com/community/file/1322138390374166141'
                  >
                    Core UI Kit
                  </Link>{' '}
                  for å oppdatere et tema direkte i Figma. Les mer om disse
                  alternativene på{' '}
                  <Link
                    target='_blank'
                    href='https://www.designsystemet.no/grunnleggende/for-designere/eget-tema'
                  >
                    eget tema
                  </Link>{' '}
                  siden.
                </Paragraph>
              </div>
              <div className={classes.snippet}>
                <CodeSnippet language='bash'>{cliSnippet}</CodeSnippet>
              </div>
              <div
                className={classes.step}
                style={{
                  marginTop: 'var(--ds-size-4)',
                }}
              >
                <span>2</span>
                <Paragraph>
                  Kjør kodesnutten for å generere CSS variabler til kode.
                </Paragraph>
              </div>
              <div className={classes.snippet}>
                <CodeSnippet language='bash'>
                  npx @digdir/designsystemet@next tokens build
                </CodeSnippet>
              </div>

              <Divider />

              <div className={classes.contact}>
                <div className={classes.contact__icon}>
                  <InformationSquareIcon aria-hidden='true' fontSize='1.5rem' />
                </div>
                <div className={classes.contact__content}>
                  <Heading data-size='2xs'>Noe som ikke fungerer?</Heading>
                  <Paragraph data-size='sm'>
                    Send oss en melding på{' '}
                    <Link
                      target='_blank'
                      href='https://designsystemet.no/slack'
                    >
                      Slack
                    </Link>{' '}
                    eller lag et{' '}
                    <Link
                      target='_blank'
                      href='https://github.com/digdir/designsystemet/issues/new/choose'
                    >
                      Github issue
                    </Link>
                    .
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>
  );
};
