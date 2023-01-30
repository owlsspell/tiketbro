import * as React from 'react';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) {
  return (
    <div
      className={
        'my-9 max-w-672 rounded-2xl bg-gray-100 py-9 px-4 text-base italic md:mx-auto md:px-8 ' +
        className
      }
    >
      {children}
    </div>
  );
}
