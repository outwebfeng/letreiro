import Navigation from '@/components/home/Navigation';
import NavigationDrawer from '@/components/home/NavigationDrawer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="w-full">
          <Navigation />
        </div>
      </header>
      {children}
    </div>
  );
} 