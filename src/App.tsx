import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View, usePlatform } from '@vkontakte/vkui';
import React, { useContext } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Context } from '.';
import Cart from './components/Cart';
import useProductData from './hooks/useProductData';

function App() {
  const platform = usePlatform();
  const store = useContext(Context).store;
  const { isLoading, fetchError } = useProductData(store);

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина товаров</PanelHeader>
              <Cart isLoading={isLoading} fetchError={fetchError}/>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
