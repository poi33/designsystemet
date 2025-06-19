import { render as renderRtl, screen } from '@testing-library/react';
import type { ComponentProps, RefObject } from 'react';
import { createRef } from 'react';
import type { LinkProps } from './Link';
import { Link } from './Link';

// Test data:
const href = 'https://designsystemet.no/';
const children = 'Gå til designsystemet';
const defaultProps: LinkProps = { href, children };

describe('Link', () => {
  it('Renders an anchor element with the given text and href', () => {
    render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(children);
    expect(link).toHaveAttribute('href', href);
  });

  it('Appends given className to the anchor element', () => {
    const className = 'foo';
    render({ className });
    const link = screen.getByRole('link');
    expect(link).toHaveClass('ds-link');
    expect(link).toHaveClass(className);
  });

  it('Sets the ref on the anchor element if given', () => {
    const ref = createRef<HTMLAnchorElement>();
    render({}, ref);
    expect(ref.current).toBe(screen.getByRole('link'));
  });
});

const render = (
  props: Partial<ComponentProps<typeof Link>> = {},
  ref?: RefObject<HTMLAnchorElement | null>,
) => {
  const allProps = { ...defaultProps, ...props };
  return renderRtl(
    <Link {...allProps} ref={ref}>
      {allProps.children}
    </Link>,
  );
};
