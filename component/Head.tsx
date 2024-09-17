import AnimatedLink from "./AnimatedLink";

export default function Head() {
  return (
    <>
      <header>
        <ul>
          <AnimatedLink href="/">リコリス歯科</AnimatedLink>
          <AnimatedLink href="/about">外来</AnimatedLink>
          <AnimatedLink href="/contact">訪問歯科</AnimatedLink>
          <AnimatedLink href="/services">お知らせ</AnimatedLink>
        </ul>
      </header>
    </>
  );
}
