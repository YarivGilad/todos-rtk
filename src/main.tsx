import ReactDOMClient from 'react-dom/client'
import { Provider } from "react-redux";
import { App } from './view/App/App.view.tsx'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import {store} from "./state/configure.store";


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
  <>
    <ResetCSS />
    <Provider store={store}>
        <App />
    </Provider>
  </>
)