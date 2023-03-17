import 'node_modules/@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'node_modules/tui-color-picker/dist/tui-color-picker.css';
import 'node_modules/@toast-ui/editor/dist/toastui-editor.css';

import dynamic from 'next/dynamic';

const DynamicWriteContent = dynamic(() => import('./WriteContent'), {
  ssr: false,
});

const Write = () => {
  return <DynamicWriteContent />;
};

export default Write;
