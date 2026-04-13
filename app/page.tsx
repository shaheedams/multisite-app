import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { MainContent } from "./components/mainContent/mainContent";
import { NavBar } from "./components/navbar/navBar";
import './globals.css';

export default function Home() {
  return (
    <>
      <NavBar brand="MultiSite" links={[{ href: '/', link: 'Link 1' }, { href: '/', link: 'Link 2' }, { href: '/', link: 'Link 3' }]} />

      <MainContent heading="Get the edge. Make the cut." content="From marketing physical goods to memorable immersive VR experiences, from conventional classroom based training to high impact VR Simulators , from limited resources to rapid scaling, from being one of many to domain expertise. With RRD GO Creative, now you can take your business to the next level. Are you ready to take the leap?" />

      <Contact heading="Click here to connect with us" link="/" cta="Contact Us" />

      <MainContent heading="Expertspeak marketing" content="The momentum behind immersive solutions in Enterprise companies is undeniable. From Fortune 500 giants to emerging startups, organizations across industries recognize the profound impact that immersive technologies can have on their bottom line." subHeading={['ct1', 'ct2', 'ct3']} />

      <Footer brand="MultiSite" content="We help you make Customer Experience your competitive differentiator by reimagining customer interactions, and how your customers connect with your brand." links={[{ href: '/', link: 'Link 1' }, { href: '/', link: 'Link 2' }, { href: '/', link: 'Link 3' }]} />
    </>
  );
}
