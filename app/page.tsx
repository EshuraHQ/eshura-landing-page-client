import { HeroSection } from "@/components/hero-section";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
// import Features from "@/components/featured-section";
import { Integration } from "@/components/integration";
import { Cta } from "@/components/cta";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Services />
            <WhyChooseUs heading="Why Choose Us" />
            {/* <Features /> */}
            <Integration heading="Seamless Integration" />
            <Cta heading="Get Started Today" />
        </>
    );
}

