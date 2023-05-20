export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="font-serif">{children}</div>;
}
