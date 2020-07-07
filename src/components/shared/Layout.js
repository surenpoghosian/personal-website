// @flow
import React from 'react';
import type { Node } from 'react';
import NavigationMenu from '../elements/NavigationMenu';

type LayoutProps = {
  children: Node,
};

const Layout = (props: LayoutProps): Node => {
  const { children } = props;

  return (
    <main className="flex flex-col flex-grow">
      <header className="flex flex-row px-6 py-6">
        <NavigationMenu />
      </header>
      <section className="flex flex-row flex-grow px-6 py-0">
        {children}
      </section>
      <footer className="flex flex-row p-6" />
    </main>
  );
};

export default Layout;
