import Link from 'next/link';
export default function Home() {
  return (
    <div>
      Hello World jest.{' '}
      <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  );
}
