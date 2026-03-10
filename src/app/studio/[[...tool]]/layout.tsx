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
    <div style={{ height: '100vh' }}>
      {children}
    </div>
  );
}
