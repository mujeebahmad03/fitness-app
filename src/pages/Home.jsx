import {
  About,
  Blog,
  BmiCalc,
  ChooseUs,
  CtaBanner,
  Featured,
  Gallery,
  Hero,
  Pricing,
  Testimonials,
  Trainers,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
    </main>
  );
}
