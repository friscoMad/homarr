import { AppShell, Aside, createStyles, Navbar } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderConfig } from './HeaderConfig';
import { Background } from './Background';
import { useConfig } from '../../tools/state';
import Widgets from './Widgets';

const useStyles = createStyles((theme) => ({
  main: {},
}));

export default function Layout({ children, style }: any) {
  const { classes, cx } = useStyles();
  const { config } = useConfig();
  const widgetPosition = config?.settings?.widgetPosition === 'left';

  return (
    <AppShell
      fixed={false}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
      navbar={
        widgetPosition ? (
          <Navbar
            hidden
            pr="md"
            hiddenBreakpoint="sm"
            style={{
              border: 'none',
              background: 'none',
            }}
            width={{
              base: 'auto',
            }}
          >
            <Widgets />
          </Navbar>
        ) : undefined
      }
      aside={
        widgetPosition ? (
          <Aside
            hidden
            pr="md"
            hiddenBreakpoint="sm"
            style={{
              border: 'none',
              background: 'none',
            }}
            width={{
              base: 'auto',
            }}
          >
            <Widgets />
          </Aside>
        ) : undefined
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
