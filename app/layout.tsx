export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // フォーム入力時に勝手にズームされるのを防ぐ（実用的！）
  viewportFit: 'cover', // Dynamic Islandや下のバーまでフル活用する
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Practical Hub",
  description: "シンプルで実用的な自分専用ポータル",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
