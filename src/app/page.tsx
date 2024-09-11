'use client';

import AnimatedLink from '../../component/AnimatedLink';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header>
          <ul>
            <AnimatedLink href="/about">About</AnimatedLink>
            <AnimatedLink href="/contact">Contact</AnimatedLink>
            <AnimatedLink href="/services">Services</AnimatedLink>
          </ul>
        </header>
        <footer>@copyright リコリス歯科</footer>
      </main>
    </div>
  );
}
