import dynamic from 'next/dynamic';

const DynamicWriteContent = dynamic(() => import('./WriteContent'), {
  ssr: false,
});

const Write = () => {
  return <DynamicWriteContent />;
};

export default Write;
