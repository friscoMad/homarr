import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PolymorphicModuleDisplay } from '../components/Services/PolymorphicModuleDisplay';

export default function TestAppShelf() {
  return (
    <>
      <PolymorphicModuleDisplay enabledModules={['date', 'weather']} />;
    </>
  );
}

// function TestAppshelf(props: any) {
//   return (
//     <ServiceShelf
//       services={[
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test medium service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test2',
//           size: 'md',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'medium',
//           type: 'Other',
//           icon: 'Test',
//           id: 'md',
//           size: 'md',
//           url: 'https://google.com',
//         },
//         {
//           name: 'medium',
//           type: 'Other',
//           icon: 'Test',
//           id: 'md',
//           size: 'md',
//           url: 'https://google.com',
//         },
//         {
//           name: 'medium',
//           type: 'Other',
//           icon: 'Test',
//           id: 'md',
//           size: 'md',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'Test small service',
//           type: 'Other',
//           icon: 'Test',
//           id: 'test',
//           size: 'sm',
//           url: 'https://google.com',
//         },
//         {
//           name: 'medium',
//           type: 'Other',
//           icon: 'Test',
//           id: 'md',
//           size: 'md',
//           url: 'https://google.com',
//         },
//         {
//           name: 'large',
//           type: 'Other',
//           icon: 'Test',
//           id: 'large',
//           size: 'lg',
//           url: 'https://google.com',
//         },
//         {
//           name: 'large',
//           type: 'Other',
//           icon: 'Test',
//           id: 'none',
//           size: 'lg',
//           url: 'https://google.com',
//         },
//         {
//           name: 'large',
//           type: 'Other',
//           icon: 'Test',
//           id: 'large',
//           size: 'lg',
//           url: 'https://google.com',
//         },
//       ]}
//       categories={[
//         {
//           name: 'Test',
//           services: ['test', 'test2', 'other'],
//         },
//         {
//           name: 'Test2',
//           services: ['large'],
//         },
//         {
//           name: 'Test3',
//           services: ['none'],
//         },
//       ]}
//     />
//   );
// }

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
