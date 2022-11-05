import Link from "next/link";

export default function MainLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
}
