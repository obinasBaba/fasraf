import ContextWrapper from '@/context';
import Layout from '@/components/commons/layout';
import '@global/index.scss';
import MuiThemeProvider from '@/components/commons/theme-provider';

export default async function LayoutScaffold({ children }: any) {
  return (
    <ContextWrapper>
      {/* <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Fasraf . Business . Solution</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
      <MuiThemeProvider>
        <Layout>{children}</Layout>
      </MuiThemeProvider>
    </ContextWrapper>
  );
}
