import { AppShell, Aside, createStyles, Navbar } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderConfig } from './HeaderConfig';
import { Background } from './Background';
import { useConfig } from '../../tools/state';
import { PolymorphicModuleDisplay } from '../Services/PolymorphicModuleDisplay';

const useStyles = createStyles((theme) => ({
  main: {},
}));

export default function Layout({ children, style }: any) {
  const { classes, cx } = useStyles();
  const { config } = useConfig();
  // Get all services of type that are on the "right" position, return their "module" id
  const rightServices = config.services
    .filter((service) => service.type === 'Module' && service.position === 'right')
    .map((service) => service.module);
  // Get all services of type that are on the "left" position
  const leftServices = config.services
    .filter((service) => service.type === 'Module' && service.position === 'left')
    .map((service) => service.module);

  return (
    <AppShell
      fixed={false}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
      navbar={
        <Navbar
          hidden
          pl="xs"
          hiddenBreakpoint="sm"
          style={{
            border: 'none',
            background: 'none',
          }}
          width={{
            base: 'auto',
          }}
        >
          <PolymorphicModuleDisplay enabledModules={leftServices} />
        </Navbar>
      }
      aside={
        <Aside
          hidden
          pr="xs"
          hiddenBreakpoint="sm"
          style={{
            border: 'none',
            background: 'none',
          }}
          width={{
            base: 'auto',
          }}
        >
          <PolymorphicModuleDisplay enabledModules={rightServices} />
        </Aside>
      }
      footer={<Footer links={[]} />}
    >
      <HeaderConfig />
      <Background />
      <main
        className={cx(classes.main)}
        style={{
          ...style,
        }}
      >
        {children}
      </main>
      <style>{cx(config.settings.customCSS)}</style>
    </AppShell>
  );
}
