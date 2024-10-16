import { Demo } from './components/Demo';

export default function ColorDesignTokens() {
  return (
    <>
      <Demo />
      <Demo className='dark' />
      <Demo data-theme='citrus' />
      <Demo className='dark' data-theme='citrus' />
    </>
  );
}
