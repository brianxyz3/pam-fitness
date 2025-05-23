import { MdBusinessCenter, MdFitnessCenter, MdGroups, MdMilitaryTech, MdRestaurantMenu, MdSpa } from 'react-icons/md';
import { Link } from 'react-router';
import AboutCard from '../components/AboutCard';
import ClientReviewCard from '../components/ClientReviewCard';
import Logo from '../components/Logo';

const ServicePage = () => {
  return (
<>
<section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-custom-darker">
    <div className="w-dvw mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            OUR <span className="text-custom-orange">SERVICES</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of services designed to cater to all your fitness needs, from personalized training to group classes and specialized programs.
        </p>
    </div>
</section>
<section className="py-16 md:py-24 bg-custom-dark">
    <div className="w-dvw px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AboutCard title='Personal Training' link='Learn More →' desc='Get one-on-one guidance from our certified trainers. We tailor workout plans to your specific goals, ensuring maximum results and personalized attention.'>
                <MdFitnessCenter className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
            <AboutCard title='Group Fitness Classes' link='View Schedule →' desc="Join our energetic group classes! From high-intensity interval training (HIIT) to Yoga and Zumba, there's something for everyone to enjoy and stay motivated.">
                <MdGroups className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
            <AboutCard title='Nutritional Guidance' link='Get Advice →' desc='Achieve your fitness goals faster with expert nutritional advice. Our specialists create personalized meal plans to complement your training regimen.'>
                <MdRestaurantMenu className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
            <AboutCard title='Wellness &amp; Recovery' link='Discover More →' desc='Enhance your recovery and overall well-being with services like sports massage, stretching sessions, and access to our sauna and relaxation zones.'>
                <MdSpa className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
            <AboutCard title='Specialized Programs' link='Explore Programs →' desc='We offer specialized training programs such as weight loss challenges, strength building bootcamps, and sport-specific conditioning.'>
                <MdMilitaryTech className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
            <AboutCard title='Corporate Wellness' link='Inquire Now →' desc='Promote health and productivity in your workplace with our tailored corporate wellness packages, including group memberships and on-site classes.'>
                <MdBusinessCenter className="text-custom-orange text-5xl mb-6"/>
            </AboutCard>
        </div>
    </div>
</section>
<section className="py-16 md:py-24 bg-custom-darker">
    <div className="w-dvw px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ClientReviewCard clientName='Alex P.' serviceUsed='Personal Training Client' clientReview="LFITV has completely changed my approach to fitness. The trainers are incredible and the community is so supportive. I've never felt stronger or healthier!" >
                <img alt="Client avatar" width='48px' height='48px' className="size-12 rounded-full mr-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ_i1tq3h1P-x6b9W3UvFm8V6V4kX3dG5s7yL7pX7rT-uJ0lH9xJ2kF6hS3wA-qN8tV7yR9zB6c1L0xK2dM7jS4uO5vE6wR-xP0oJ2sD1tF0qW4xJ6bZ7cV0oI8jA-sT1uP0qR7xV5gH1yB6aJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9q"/>
            </ClientReviewCard>

            <ClientReviewCard clientName='Maria G.' serviceUsed='Group Class Enthusiast' clientReview="The group classes are so much fun and a great workout. I always leave feeling energized. LFITV is more than a gym, it's a family." >
                <img alt="Client avatar" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2n0pPqJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9q"/>
            </ClientReviewCard>
        </div>
    </div>
</section>
<section className="bg-custom-orange py-16 md:py-20">
    <div className="w-dvw px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Experience the Difference?</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">Explore our services and find the perfect fit for your fitness journey. Let's achieve your goals together!</p>
        <button className="bg-white text-custom-orange px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            VIEW MEMBERSHIP OPTIONS
        </button>
    </div>
</section>
<footer className="bg-custom-darker py-12">
    <div className="w-dvw px-4 md:px-8 lg:px-16 text-center text-gray-400">
        <div className="text-2xl font-bold text-custom-orange mb-4 w-fit mx-auto"><Logo/></div>
        <p className="mb-2">123 Fitness Street, Workout City, WC 12345</p>
        <p className="mb-4">© 2024 Pam-Fitness. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
            <Link className="hover:text-custom-orange transition-colors" to="#">Facebook</Link>
            <Link className="hover:text-custom-orange transition-colors" to="#">Instagram</Link>
            <Link className="hover:text-custom-orange transition-colors" to="#">Twitter</Link>
        </div>
    </div>
</footer>

</>
  )
}

export default ServicePage;