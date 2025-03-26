import Left from "./components/Left-login";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen">
      <Left />
      {children}
    </div>
  );
}
