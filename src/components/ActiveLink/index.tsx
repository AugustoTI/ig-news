import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName?: string;
  className?: string;
}

export const ActiveLink = ({
  children,
  activeClassName = '',
  className = '',
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const newClassName = asPath === props.href ? activeClassName : '';

  return (
    <Link {...props}>
      {cloneElement(children, {
        className: className + ` ${newClassName}`,
      })}
    </Link>
  );
};
