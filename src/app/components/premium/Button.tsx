import Link from 'next/link';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  // Jeśli jest href, renderuj <a>
  if (href) {
    return (
      <a
        href={href}
        className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition"
      >
        {children}
      </a>
    );
  }

  // W przeciwnym razie renderuj <button>
  return (
    <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition">
      {children}
    </button>
  );
}
