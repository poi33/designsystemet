'use client';

import {
  Divider,
  Heading,
  Link,
  Modal,
  Paragraph,
} from '@digdir/designsystemet-react';
import { colorCliOptions } from '@digdir/designsystemet/tokens';
import { InformationSquareIcon, StarIcon } from '@navikt/aksel-icons';
import { CodeSnippet } from '@repo/components';
import { useRef } from 'react';

import cl from 'clsx/lite';

import { type ColorTheme, useThemeStore } from '../../store';
import classes from './TokenModal.module.css';

export const TokenModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const colors = useThemeStore((state) => state.colors);
  const themeName = useThemeStore((state) => state.themeName);
  const baseBorderRadius = useThemeStore((state) => state.baseBorderRadius);

  const setCliColors = (colorTheme: ColorTheme[]) => {
    let str = '';
    for (const color of colorTheme) {
      str += `"${color.name}:${color.colors.light[8].hex}" `;
    }
    return str;
  };

  const cliSnippet = `npx @digdir/designsystemet@next tokens create \\
   --${colorCliOptions.main} ${setCliColors(colors.main)} \\
   --${colorCliOptions.neutral} "${colors.neutral[0]?.colors.light[8].hex}" \\
   --${colorCliOptions.support} ${setCliColors(colors.support)} \\
   --border-radius ${baseBorderRadius} \\
   --theme "${themeName}"`;

  type InfoBoxType = {
    title: string;
    desc: React.ReactNode;
    img: React.ReactNode;
    type?: 'code' | 'figma';
  };

  const InfoBox = ({ title, desc, img, type = 'figma' }: InfoBoxType) => {
    return (
      <div className={classes.infoBox}>
        <div className={classes.infoBox__left}>
          <div
            className={cl(
              classes.infoBox__icon,
              type === 'code' && classes['infoBox__icon--code'],
            )}
          >
            {img}
          </div>
        </div>
        <div className={classes.infoBox__right}>
          <div className={classes.infoBox__container}>
            <Heading data-size='2xs'>{title}</Heading>
            <Paragraph data-size='sm'>{desc}</Paragraph>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal.TriggerContext>
      <Modal.Trigger
        data-size='sm'
        className={classes.trigger}
        onClick={() => {
          return modalRef.current?.showModal();
        }}
      >
        <StarIcon title='a11y-title' fontSize='1.5rem' />
        Ta i bruk tema
      </Modal.Trigger>
      <Modal
        className={classes.modal}
        style={{ maxWidth: 1000 }}
        ref={modalRef}
        backdropClose={true}
      >
        <Modal.Block>
          <Heading className={classes.modalHeader} data-size='2xs'>
            <img src='img/emblem.svg' alt='' className={classes.emblem} />
            <span className={classes.headerText}>Ta i bruk tema</span>
          </Heading>
        </Modal.Block>

        <Modal.Block>
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
                  marginTop: 'var(--ds-spacing-4)',
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
                      href='https://join.slack.com/t/designsystemet/shared_invite/zt-2438eotl3-a4266Vd2IeqMWO8TBw5PrQ'
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
        </Modal.Block>
      </Modal>
    </Modal.TriggerContext>
  );
};
