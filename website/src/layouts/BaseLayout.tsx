import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'uiw';
import VersionSelect from '../components/VersionSelect';
import styles from './index.module.less';
import version from '../version.json';
import SiderMenu from '../components/SiderMenu';
import Nav from '../components/Nav';
import { ThemeContext } from '../contexts';

const { Header, Sider, Content } = Layout;
export interface ComponentsProps {
  siderMenu?: boolean;
}

export default function Components(props: ComponentsProps) {
  const { siderMenu = true } = props;
  const { state } = useContext(ThemeContext);
  return (
    <Layout>
      {state.layout === 'top' ? (
        <Fragment>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Nav />
          </Header>
          <Layout>
            <Sider width={siderMenu ? 260 : 0}>
              <SiderMenu />
            </Sider>
            <Content style={{ padding: 20, zIndex: 2 }}>
              <Outlet />
            </Content>
          </Layout>
        </Fragment>
      ) : (
        <Fragment>
          <Sider width={siderMenu ? 330 : 64}>
            <Layout className={styles.sider}>
              <Sider className={styles.menuWarpper} width={64}>
                <Nav />
              </Sider>
              <Layout
                style={{
                  position: 'fixed',
                  width: siderMenu ? 330 : 64,
                  zIndex: 1,
                  left: 0,
                  top: 0,
                  bottom: 0,
                  overflow: 'auto',
                }}
              >
                <Content className={styles.subMenu} style={{ paddingLeft: 64 }}>
                  <SiderMenu />
                </Content>
              </Layout>
            </Layout>
          </Sider>
          <Layout style={{ position: 'relative' }}>
            <Header
              style={{
                height: 'inherit',
                lineHeight: '32px',
                position: 'absolute',
                padding: '5px 10px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                backgroundColor: 'transparent',
              }}
            >
              <VersionSelect data={version} />
            </Header>
            <Content style={{ padding: 20 }}>
              <Outlet />
            </Content>
          </Layout>
        </Fragment>
      )}
    </Layout>
  );
}
