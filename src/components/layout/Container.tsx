import * as React from 'react';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div className={'mx-auto max-w-672 ' + className}>{children}</div>;
}
