import WhyChoose from "@/components/WhyChoose";
import Hero from "../components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default async function HomePage() {

  const stats = {

    totalEvents : 100 ,
    totalAttendees : 400 ,
    totalOrgs : 6,
    
  }


  return (
    <div>
     <Hero></Hero>
     <WhyChoose></WhyChoose>
     <Statistics stats={stats}></Statistics>
     <Testimonials/>
    </div>
  );
}

