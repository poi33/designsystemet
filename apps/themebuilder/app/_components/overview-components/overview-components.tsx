import {
  type ColorScheme,
  type CssColor,
  generateColorSchemes,
} from '@digdir/designsystemet';
import {
  Avatar,
  Button,
  Heading,
  Link,
  Paragraph,
  Tag,
  Textfield,
} from '@digdir/designsystemet-react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  generateColorVars,
  generateNeutralColorVars,
} from '~/_utils/generate-color-vars';
import classes from './overview-components.module.css';
import { SettingsCard } from './settings-card/settings-card';
import { TableCard } from './table-card/table-card';

const users = [
  {
    name: 'Ola Normann',
    role: 'Designer',
    avatar: '/img/avatars/male2.png',
  },
  {
    name: 'Kari Slotsveen',
    role: 'Frontend',
    avatar: '/img/avatars/female2.png',
  },
  {
    name: 'Marcus Viken',
    role: 'Backend',
    avatar: '/img/avatars/male3.png',
  },
];

type OverviewComponentsProps = {
  colorScheme: ColorScheme;
  color: CssColor;
  borderRadius?: number;
};

export const OverviewComponents = ({
  colorScheme = 'light',
  color = '#0062BA',
  borderRadius = 4,
}: OverviewComponentsProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // we need to set these properties on the preview element because they are immutable on :root
    for (const key in borderRadiuses) {
      const borderRadius = borderRadiuses[key as keyof typeof borderRadiuses];

      if (ref.current) {
        ref.current.style.setProperty(
          borderRadius.variable,
          borderRadius.value,
        );
      }
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty(
        '--ds-border-radius-base',
        `${borderRadius / 16}rem`,
      );
    }
  }, [borderRadius]);

  const style = () => {
    if (!color) return {};

    const vars = {} as Record<string, string>;

    /* neutral */
    Object.assign(
      vars,
      generateNeutralColorVars(generateColorSchemes('#1E2B3C'), colorScheme),
    );
    /* get -ds-color-* vars */
    Object.assign(
      vars,
      generateColorVars(generateColorSchemes(color), colorScheme),
    );

    return vars;
  };

  return (
    <div ref={ref} style={style()}>
      <div className={classes.inner}>
        <div className={classes.card}>
          <Heading data-size='2xs'>{t('overview.login-title')}</Heading>
          <Textfield
            placeholder='Ola Normann'
            label={t('overview.name')}
            data-size='sm'
          />
          <Textfield
            placeholder='********'
            label={t('overview.password')}
            data-size='sm'
          />
          <Link href='#' data-size='sm'>
            {t('overview.forgot-password')}
          </Link>

          <Button data-size='sm' className={classes.btn}>
            {t('overview.login')}
          </Button>
        </div>
        <div
          className={classes.card}
          style={{
            flexGrow: 1,
          }}
        >
          <TableCard />
        </div>
        <div className={classes.card} data-size='sm'>
          <SettingsCard />
        </div>
        <div className={classes.card}>
          <img className={classes.img} src='/img/city.jpg' alt='' />
          <div className={classes.imgText}>
            <div className={classes.tags} data-size='sm'>
              <Tag data-color='brand1'>{t('overview.sports')}</Tag>
              <Tag data-color='brand2'>{t('overview.news')}</Tag>
              <Tag data-color='brand3'>{t('overview.domestic')}</Tag>
            </div>
            <Heading data-size='2xs' className={classes.imgTitle}>
              {t('overview.news-title')}
            </Heading>
            <Paragraph data-size='sm' className={classes.imgDesc}>
              {t('overview.news-description')}
            </Paragraph>
          </div>
        </div>
        <div className={classes.card} style={{ flexGrow: 1 }}>
          <Heading data-size='xs' level={3}>
            {t('overview.people-you-may-know')}
          </Heading>
          <div className={classes.users}>
            {users.map((user) => {
              return (
                <div className={classes.user} key={user.role}>
                  <Avatar
                    aria-label={user.name}
                    variant='square'
                    className={classes.avatar}
                  >
                    <img src={user.avatar} alt='' />
                  </Avatar>
                  <div>
                    <div className={classes.userRole}>{user.role}</div>
                    <div>{user.name}</div>
                  </div>
                  <Button
                    data-size='sm'
                    variant='secondary'
                    style={{ marginLeft: 'auto' }}
                    aria-label={`${t('overview.follow')} ${user.name}`}
                  >
                    {t('overview.follow')}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO get this token data from @digdir/designsystemet (use json from --preview or something)
const borderRadiuses = {
  sm: {
    name: 'sm',
    value:
      'min(var(--ds-border-radius-base)*0.5,var(--ds-border-radius-scale))',
    variable: '--ds-border-radius-sm',
  },
  md: {
    name: 'md',
    value: 'min(var(--ds-border-radius-base),var(--ds-border-radius-scale)*2)',
    variable: '--ds-border-radius-md',
  },
  lg: {
    name: 'lg',
    value:
      'min(var(--ds-border-radius-base)*2,var(--ds-border-radius-scale)*5)',
    variable: '--ds-border-radius-lg',
  },
  xl: {
    name: 'xl',
    value:
      'min(var(--ds-border-radius-base)*3,var(--ds-border-radius-scale)*7)',
    variable: '--ds-border-radius-xl',
  },
  default: {
    name: 'default',
    value: 'var(--ds-border-radius-base)',
    variable: '--ds-border-radius-default',
  },
  full: {
    name: 'full',
    value: '624.9375rem',
    variable: '--ds-border-radius-full',
  },
};
