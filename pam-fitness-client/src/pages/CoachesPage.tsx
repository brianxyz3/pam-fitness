import CoachesProfileCard from '../components/CoachesProfileCard';
import GetStarted from '../components/GetStarted';

const CoachesPage = () => {

    const coachesProfile = [
        {
            name: 'Alex Johnson',
            speciality: 'Head Coach',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCCE93q76LgXXHhxv0_nDhvVR1a4iZtfeauz0kEAW1ZzORYbtIV4MnuVeBkKSxQ5qjwEY5xKubibV8HFAvxnJ9ULGhLscrHadmK3ipXqy9lt10Gdwu_VW-l5WqWC5pByVMRC90r7PKe6ec_otSK6g4UER0vJa4yRYRJlJpDIngkq8mPIK0jh5buz6UHuFrs3Y5rOM2-wXmHhswTbnIGycmz2y79xXybWXAOdFayIb7j7mCO0Egmau7AKtvsRxx2318GqsS78YSlbI',
            bio: 'Alex is a certified personal trainer with over 10 years of experience, specializing in strength training and body recomposition. He believes in a holistic approach to fitness.'
        },
        {
            name: 'Maria Rodriguez',
            speciality: 'Yoga Instructor',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcVbzP0qqpHu-Xw1DdCQcdxcQZVBt4Mwye4XoRckHJtDqeu9AkRyjKD92-KntRmrBaxsKGBwkn3MzWmlSBaVLU5VjR8aCZ_T2NU4ZSCAzK-VKHfzUT77Wz8LLTU1RcVV25sB_39Q-jQ4RqfLHeuG61ZiOac85sX3OVzNaVjmNsE5c5XzId2wbQvB0JuABZG1L1I6yhYAp4R_H00rXvcbRgqPKT1byBnokCI0vJ8YWaPQSNYTMYQm_4V4Xa39iSqbJZUe9bTm0bUDc',
            bio: 'Maria brings peace and strength through her Vinyasa and Hatha yoga classes. She has been practicing yoga for 8 years and loves sharing its benefits.'
        },
        {
            name: 'David Chen',
            speciality: 'Nutritionist',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA80Ay9dcqtjC3-UfJisuCIySrE_7HU4vtIcYWiRlE1Ihv3allmhPwJ57YgYLjw6I7TLdrmhAsRPF8owmsZufnKibYRPAoRHL3B8ztfEa4euzNWJ69BmKE7wY8ERxfLBvEtMc9pexfhBNGYbdT-g897HaP5o3OfkKQZmiYxlyNuOq_xG71cRusH3afWrYhejSd2IMYNF3r8uAd14siY9rEwoXR8_JL2tUmWY-Jj_-djktP9OMAvseRYiCEfeZtovlG_G77PMJ_HVBY',
            bio: 'David is a registered dietitian focused on sports nutrition and weight management. He provides personalized meal plans to complement your fitness goals.'
        },
        {
            name: 'Sarah Miller',
            speciality: 'Personal Trainer',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkPyvEtmNyfqPQoHWB4LKe2oZoDr8lWFfPWS0tsHxz_yURQ-ouhpfxlA_6FjJvTKdvR6ujJ-WhtVIwgz3Nga-I2zNSQhxKQ3rK7syMDKEWsXIxjiox1ZepZTHX67S8WKSQYXTVc-ODZIT-TRnvxl3wWbY_uG1h3GehT3NnAAsVArEKSFjz8TgWFydSHG1aMAFJMXFoK1og__6JUnOvMDqemltFEdwoqlSUE-gr-VMIAtiMppduOcVvoKKHPg3w1dVPcaAo6dd-Quw',
            bio: 'Sarah is passionate about functional fitness and HIIT workouts. She motivates her clients to push their limits and achieve their best physical condition.'
        },
        {
            name: 'Emily White',
            speciality: 'Pilates Instructor',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzz5qmsf3K7Q21I8E8Q0RCVqBhfyzam4cA7UATyGMltaB9ri21KvNvE3fapcYMvJ_DK0r5IyVYSgqS49x-J78Vy3_emo3uDfgVqu6IHvVy0f24EMcMYqCz6ZFgYd2gFGeWmSgEqg0iZY7JfskIWSjNw-qwNC-5sOygKOjsuF-Sz1t0tNoV7y28tzSQLIeiERR6dyVc2emwGQlqd1dad4jqfvE_jjuuBm7iq7V5H6ChJ9hV_DmlIBAIy_U4A9x5La5blYOTmFwlFak',
            bio: 'Emily specializes in Mat and Reformer Pilates, focusing on core strength, flexibility, and body awareness for all fitness levels.'
        },
        {
            name: 'Michael Davis',
            speciality: 'Strength & Conditioning Coach',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLBINrVEmeDvxG4eauvsL29ssitPZJ8NQ05VtcC6ZfIV6UprGt36BZ-LR-LdC41eNoPpcwC9TCX7JDNFeYVUkXsRFe-wwCukk1156R6gWa4CGexfGKAScajISIrQd12N7et7vw4zln69BOheEg3wu8rx6NXhW--UKvZ2R5Cj5weZqfuEqd9T_9KRzVpk-hc3v-fcMEOTJ0IUItVAWGfRQtWvhWRtZ5w8r2j2svPj5A6iSmQlJlEh6PrO02pu4M6RM_5iE4VpfdQ88',
            bio: 'Michael designs programs for athletes and individuals looking to improve performance, power, and overall physical conditioning.'
        },
        {
            name: 'Chloe Taylor',
            speciality: 'Rehabilitation Specialist',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUe4Zx505F_vQIhWGnCErn0ziDgBqOXchYoQ-dfe80T8qnUAHzv5dJq2TMwEqQqWGr0Hvh3l-2Y5r4pfCTP90FefuIiUO4-HINPUNOGnLVv0NoQSvKZXM6miBTEEtsw8XorfoXH2tdJDRx9VBo3LRQ3rOn8cZqIoVD8Y4_F_2B4dRz7iP3j384j4LMNDVIXVggPBA-TtNi_WAI3JiBpMwS1PhpbYuQztoIYwLpzFElIl2o7ju5N4Bx4biEGvR1sxwrv74hSuWXjc4',
            bio: 'Chloe works with clients recovering from injuries, designing safe and effective exercise programs to restore mobility and strength.'
        },
        {
            name: 'Jessica Brown',
            speciality: 'Group Fitness Instructor',
            imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCHJkeL-sZip10sHinhEx2j3MHuGi5mjIkyRthfFQ4K1JUUMXtIUvZpKoZU2YncEqcdwHL2CRNHrpVGIPtDiLA749ay5mrUrLEvEXqXCGWAfkJIWpGMYX-6jE3aKp8NwK4gghFkO7jhvDBixc0CL5H1EVhx0bpYZo0SHJNFaphlUaaVnMdV_FqfBGvO5T4HyDGaHDbWgZhn9riq3TwFouxouI3tgtAemC5vAXg7yYXGEL8fXC0jhV9yg_UiN69fRsoppbVZCtn1eI',
            bio: 'Jessica leads energetic group classes, from Zumba to boot camp. Her enthusiasm is contagious and makes every workout fun.'
        },
    ]

  return (
    <main className="container mx-auto px-6 py-14">
        <section className="text-center mb-16 mt-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                MEET <span className="text-custom-orange">OUR TEAM</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our dedicated team of certified professionals is here to guide and motivate you on your fitness journey. Get to know the experts who make our gym a leading fitness destination.
            </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {coachesProfile.map((coach, idx) => (
                <CoachesProfileCard key={idx} name={coach.name} speciality={coach.speciality} imageSrc={coach.imageSrc} bio={coach.bio}/>
            ))}
        </section>
        <section className="mt-20 py-16 bg-gray-800 rounded-lg shadow-xl text-center">
            <GetStarted 
                title="Ready to Start Your Journey?"
                description="Our expert team is excited to help you achieve your fitness aspirations. Join us today and transform your life!"
                btnText="Get Started Now"
            />
        </section>
        
    </main>
  )
}

export default CoachesPage;


{/* <h2 className="text-3xl font-bold mb-4 text-white"></h2>
            <p className="md:text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                
            </p>
            <button type='reset' className="bg-custom-orange text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition duration-300 flex items-center mx-auto">
                 
            </button> */}