import WeatherBackground from '@/components/WeatherBackground/WeatherBackground';
import Nav from '@/components/Nav/Nav';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <>
      <WeatherBackground weatherState="clear" />
      <div className="site-content">
        <Nav />
        {children}
      </div>
    </>
  );
}
