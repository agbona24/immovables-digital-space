export const metadata = {
  title: 'Sanity Studio | Immovables Digital Space',
  description: 'Content management for Immovables Digital Space',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body > nav,
        body > footer,
        body > main > nav,
        body > main > footer,
        #site-navbar,
        #site-footer,
        header:has(nav),
        footer {
          display: none !important;
        }
        body > main {
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>
      <div style={{ height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
        {children}
      </div>
    </>
  );
}
