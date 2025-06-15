import FeatureMenu from "@/components/home/FeatureMenu";
import HeroBanner from "@/components/home/HeroBanner";
import NewCollections from "@/components/home/NewCollections";
import NFTDropsCalendar from "@/components/home/NFTDropsCalendar";

export default function Home() {
  return (
    <main className="bg-[#111] text-white">
      <HeroBanner />
      <FeatureMenu />
      <NewCollections />
      <NFTDropsCalendar />
    </main>
  );
}
