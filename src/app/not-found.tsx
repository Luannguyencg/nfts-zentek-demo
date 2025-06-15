import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center mx-auto h-[100vh] w-[100vw]">
      <h2>404 Not Found</h2>
      <Link href="/" className="text-blue-600/100">
        Return Home
      </Link>
    </div>
  );
}