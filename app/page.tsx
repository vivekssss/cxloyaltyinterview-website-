import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventOverview from '@/components/EventOverview';
import PastEditions from '@/components/PastEditions';
import Features from '@/components/Features';
import Agenda from '@/components/Agenda';
import Industries from '@/components/Industries';
import Speakers from '@/components/Speakers';
import TopicHighlights from '@/components/TopicHighlights';
import Sponsors from '@/components/Sponsors';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EventOverview />
      <PastEditions />
      <Features />
      <Agenda />
      <Industries />
      <Speakers />
      <TopicHighlights />
      <Sponsors />
      <Pricing />
      <Footer />
    </main>
  );
}
