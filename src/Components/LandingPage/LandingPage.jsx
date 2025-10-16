import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail, ChevronRight, Award, Users, BookOpen, TrendingUp, CheckCircle, Star, Clock, Video, FileText, BarChart, Check, PhoneCall, Monitor, MessageCircle, ClipboardList, BarChart2, MessageSquare, CreditCard, Laptop, UserCheck, } from 'lucide-react';
import students from "../../assets/images/LandingPage/students-future.jpg"
import design10 from '../../assets/images/LandingPage/design10.png'
import design11 from '../../assets/images/LandingPage/design11.png'
import logo from "../../assets/images/LandingPage/LOGO/Kautilya.png"
import Navbar from './Navbar';
// Motion component for animations
const Motion = ({ children, className, delay = 0, duration = 0.5, type = 'fadeUp' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animations = {
        fadeUp: {
            initial: { opacity: 0, transform: 'translateY(30px)' },
            animate: { opacity: 1, transform: 'translateY(0)' }
        },
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 }
        },
        slideLeft: {
            initial: { opacity: 0, transform: 'translateX(-30px)' },
            animate: { opacity: 1, transform: 'translateX(0)' }
        },
        slideRight: {
            initial: { opacity: 0, transform: 'translateX(30px)' },
            animate: { opacity: 1, transform: 'translateX(0)' }
        },
        scale: {
            initial: { opacity: 0, transform: 'scale(0.9)' },
            animate: { opacity: 1, transform: 'scale(1)' }
        }
    };

    const style = {
        ...animations[type].initial,
        ...(isVisible ? animations[type].animate : {}),
        transition: `all ${duration}s ease-out ${delay}s`
    };

    return (
        <div ref={ref} className={className} style={style}>
            {children}
        </div>
    );
};

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { icon: Award, title: "Expert Mentors", desc: "Learn from CUET specialists with 10+ years experience" },
        { icon: BookOpen, title: "Comprehensive Coverage", desc: "Language, Domain Subjects & General Test" },
        { icon: TrendingUp, title: "Smart Preparation", desc: "Daily quizzes & weekly mock tests" },
        { icon: Users, title: "Personalized Support", desc: "One-on-one feedback & doubt sessions" }
    ];

    const stats = [
        { number: "1000+", label: "Students Placed" },
        { number: "90%", label: "Student Satisfaction Rate" },
        { number: "100+", label: "CUET Selections in Delhi University 2024" },
        { number: "10+", label: "Faculty with 10+ Years of Teaching Experience" }
    ];

    const universities = [
        "Delhi University", "BHU", "JNU", "Jamia Millia Islamia",
        "Allahabad University", "Hyderabad University"
    ];

    const courseFeatures = [
        { icon: Award, title: "Excellent Faculty", desc: "Expert educators with deep subject mastery and 10+ years experience" },
        { icon: BarChart, title: "Regular Assessment", desc: "Weekly tests and personalized feedback for continuous improvement" },
        { icon: Users, title: "Unlimited Doubt Clearing", desc: "One-on-one guidance till you're confident with every concept" },
        { icon: BookOpen, title: "Affordable Fees", desc: "Quality CUET coaching that fits every budget" },
        { icon: Video, title: "Flexible Learning", desc: "Online + Offline options — learn your way, accessible anywhere" },
        { icon: FileText, title: "Smart Classrooms", desc: "Digital boards, test dashboards & real-time analysis" }
    ];

    const successTips = [
        { tip: "Start Early", desc: "Build a daily routine around revision and test practice" },
        { tip: "Focus on Accuracy", desc: "CUET rewards precision more than speed" },
        { tip: "Attempt Mock Tests", desc: "Simulate exam conditions regularly" },
        { tip: "Revise NCERTs", desc: "They form the base for every domain subject" },
        { tip: "Stay Positive", desc: "Confidence is your biggest asset" },
        { tip: "Track Progress", desc: "Analyze your performance to identify weak areas" }
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Left Content */}
                        <Motion type="fadeUp" delay={0.4}>
                            <div>
                                <div className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                                    Rohtak's Most Trusted CUET Coaching
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    Your Gateway to Top <span className="text-blue-600">Central Universities</span>
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-4">
                                    Dreaming of getting into Delhi University, BHU, JNU, or Hyderabad University?
                                    Your journey starts here — at Kautilya Law Institute, Rohtak’s most trusted name for CUET UG Coaching.
                                </p>
                                <p className="text-xs sm:text-lg md:text-md text-gray-600 mb-6 sm:mb-8">
                                    With expert guidance, modern study techniques, and a student-first approach, we help you unlock your potential and secure your seat in India’s best universities.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center text-sm sm:text-base"
                                    >
                                        Book Free Demo Class
                                        <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    </button>
                                    <a href="tel:+919996732928" className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition flex items-center justify-center text-sm sm:text-base">
                                        <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </Motion>

                        {/* Right Content / Image or Form */}
                        <Motion type="scale" delay={0.4}>
                            <div className="relative mt-8 lg:mt-0">

                                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl transition-all duration-500">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">
                                        Enquire Now
                                    </h2>
                                    <form className="flex flex-col gap-3">
                                        <input type="text" placeholder="Name" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                        <input type="email" placeholder="Email" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                        <input type="text" placeholder="Contact Number" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                        <textarea placeholder="Enter Your Query" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                                        <button type="submit" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                                            Schedule a Call
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </Motion>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="features" className="py-12 sm:py-16 md:py-20 bg-white ">
                <Motion type="fadeUp">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center mb-6 md:mb-8">

                        {/* Left Text Column */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Why We Stand Out?
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                                Our consistent results speak louder than words.
                                Kautilya Law Institute has become Rohtak’s leading CUET coaching brand through its commitment to excellence and personalized learning.
                            </p>
                            <p className="text-base sm:text-lg md:text-sm text-gray-600 max-w-3xl font-semibold">
                                Kautilya Law Institute – Rohtak’s Most Trusted CUET Coaching<br />
                                When you join Kautilya, you don’t just prepare for CUET — you prepare for life.<br />
                                Our classroom and online programs combine conceptual clarity, practical mock tests, and motivational mentorship to ensure success.<br />
                                Students from Haryana, Delhi NCR, and nearby regions choose us because we deliver results with responsibility.
                            </p>
                        </div>

                        {/* Right Image Column */}
                        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                            <img
                                src={logo}
                                alt="Why choose us"
                                className="w-full max-w-sm rounded-2xl"
                            />
                        </div>

                    </div>
                </Motion>

                {/* Stats Section */}
                <section className="py-10 sm:py-12 md:py-16 bg-blue-900 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {stats.map((stat, idx) => (
                                <Motion key={idx} type="fadeUp" delay={idx * 0.1}>
                                    <div className="text-center">
                                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.number}</p>
                                        <p className="text-xs sm:text-sm md:text-base text-blue-200">{stat.label}</p>
                                    </div>
                                </Motion>
                            ))}
                        </div>
                    </div>
                </section>
            </section>


            {/* How to Get Started Section */}
            <section id="get-started" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                How to Get Started with Our CUET Coaching?
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                It’s quick and simple to begin your journey with Kautilya Law Institute:
                            </p>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        {[
                            "Visit our center or fill out the online enquiry form.",
                            "Attend a Free Demo Class to experience our teaching style.",
                            "Choose your preferred Batch Type (Regular / Weekend / Online).",
                            "Enroll and start preparing with India’s best CUET faculty."
                        ].map((step, idx) => (
                            <Motion key={idx} type="fadeUp" delay={0.1 * (idx + 1)}>
                                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full text-lg">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg">{step}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <Motion type="scale" delay={0.5}>
                        <div className="mt-10 text-center">
                            <a
                                href="tel:+919996732928"
                                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition transform hover:scale-105"
                            >
                                Call Now to Book Your Demo: +91-9996732928
                            </a>
                        </div>
                    </Motion>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Why Choose Kautilya Law Institute?
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                We're not just another coaching institute — we're your academic partners in success.
                            </p>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {features.map((feature, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.1}>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:shadow-xl transition h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 flex-grow">
                                        {feature.desc}
                                    </p>
                                </div>
                            </Motion>
                        ))}
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <Motion type="slideLeft">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Turning Your Career Dreams into Reality
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                                    At Kautilya Law Institute, we believe that every student deserves a fair chance to study at a dream university. Our CUET coaching program is designed with clarity, consistency, and confidence-building in mind.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Comprehensive Coverage:</span> Language, Domain Subjects, and General Test — all under one roof</p>
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Performance Tracking:</span> Regular reports & one-on-one feedback to help you improve faster</p>
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Student-Centric Support:</span> Doubt-solving sessions until you're 100% confident</p>
                                    </div>
                                </div>
                            </div>
                        </Motion>

                        <Motion type="slideRight" delay={0.2}>
                            <div className="relative mt-8 lg:mt-0">
                                <img
                                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                                    alt="Classroom"
                                    className="rounded-xl sm:rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-700 fill-yellow-700" />
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-gray-900">90% Satisfaction</p>
                                </div>
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>

            {/* Universities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Top Universities Accepting CUET
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600">Secure your seat in India's best universities</p>
                        </div>
                    </Motion>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {universities.map((uni, idx) => (
                            <Motion key={idx} type="scale" delay={idx * 0.05}>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 md:p-6 rounded-xl text-center hover:shadow-lg transition">
                                    <p className="font-semibold text-sm sm:text-base text-gray-900">{uni}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                                CUET Course Features
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-blue-200">Available in Offline & Online Modes</p>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {courseFeatures.map((feature, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.1}>
                                <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/15 transition">
                                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-300 mb-3" />
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-blue-100">{feature.desc}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Tips */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                CUET Success Tips from Our Experts
                            </h2>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {successTips.map((item, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.08}>
                                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                    <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2">💡 {item.tip}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>

            {/* Refernce books */}

            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Top CUET Reference Books Recommended by Our Faculty
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2">
                                These hand-picked materials ensure that your preparation remains focused and effective.
                            </p>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {[
                            { title: "NCERTs (Class 11 & 12)", desc: "Concept clarity foundation" },
                            { title: "Arihant & Pearson CUET Guides", desc: "Exam-level practice" },
                            { title: "Oswaal CUET Question Bank", desc: "Updated sample papers" },
                            { title: "Kautilya In-house CUET Modules", desc: "Topic-wise short notes, formula sheets, and test papers" }
                        ].map((book, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.1}>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col h-full">
                                    <h3 className="text-lg sm:text-xl font-semibold text-teal-800 mb-2">{book.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 flex-1">{book.desc}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>
            {/* How Kautilya Law Institute Helps You Crack CUET */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-0 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left: Text */}
                            <div>
                                <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        How Kautilya Law Institute Helps You Crack CUET
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl px-2">
                                        Our success formula = Concepts + Consistency + Confidence
                                    </p>
                                </div>

                                <ul className="max-w-3xl space-y-3 text-gray-800 text-base sm:text-lg md:text-xl">
                                    <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-2" /> Daily Concept Classes</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-2" /> Section-Wise Practice Tests</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-2" /> Time-Bound Mock Drills</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-2" /> Doubt Resolution Support</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-2" /> Personalized Improvement Plans</li>
                                </ul>

                                <p className="text-gray-600 mt-4 max-w-2xl">
                                    Every student receives a custom strategy to maximize their CUET score.
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src={design10}
                                    alt="CUET Preparation Illustration"
                                    className="w-full max-w-md rounded-lg"
                                />
                            </div>
                        </div>
                    </Motion>
                </div>
            </section>
            {/* Career Opportunities After CUET */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Career Opportunities After CUET
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2">
                                Once you clear CUET, a world of opportunities opens up!
                            </p>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">🎓 Undergraduate Courses</h3>
                            <p>BA, BCom, BBA, BSc, LLB, Journalism, Economics, Political Science & more.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">🏛️ Top Universities</h3>
                            <p>Delhi University, BHU, JNU, Jamia Millia Islamia, Allahabad University, Hyderabad University.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">💼 Career Paths</h3>
                            <p>Civil Services, Law, Business, Research, Media, Management, and beyond.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Unique Strengths (USPs) */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Our Unique Strengths (USPs)
                            </h2>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-gray-800 text-lg">
                        {[
                            "✨ 10+ Years of Academic Excellence",
                            "✨ 360° CUET Preparation – From Basics to Advance",
                            "✨ Weekly Performance Reports",
                            "✨ Personalized Mentorship",
                            "✨ Affordable Fee Plans",
                            "✨ 24×7 Student Support"
                        ].map((item, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.08}>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-center h-full">
                                    <p className="text-center">{item}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>

            {/* CUET Online Coaching – Study Anytime, Anywhere   */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left Column - Text & List */}
                            <div>
                                <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        CUET Online Coaching – Study Anytime, Anywhere
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl lg:max-w-none mx-auto lg:mx-0 px-2">
                                        Join India’s most interactive CUET Online Program designed for students who prefer learning at their own pace.
                                    </p>
                                </div>

                                <ul className="max-w-3xl mx-auto lg:mx-0 space-y-3 text-gray-800 text-base sm:text-lg md:text-xl">
                                    <li className="flex items-center gap-2"><Monitor className="w-5 h-5 text-blue-500" /> Live + Recorded Lectures</li>
                                    <li className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-500" /> Digital Study Materials (PDFs & Notes)</li>
                                    <li className="flex items-center gap-2"><ClipboardList className="w-5 h-5 text-blue-500" /> Mock Tests & Progress Analytics</li>
                                    <li className="flex items-center gap-2"><PhoneCall className="w-5 h-5 text-blue-500" /> Faculty Mentorship Calls</li>
                                    <li className="flex items-center gap-2"><Clock className="w-5 h-5 text-blue-500" /> Flexible Timings for School Students</li>
                                    <li className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-blue-500" /> Unlimited Doubt Sessions</li>
                                </ul>

                                <p className="text-gray-600 mt-4 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                                    Prepare effectively from the comfort of your home without compromising on quality.
                                </p>
                            </div>

                            {/* Right Column - Image */}
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src={design11}
                                    alt="CUET Online Coaching"
                                    className="w-full max-w-md rounded-xl"
                                />
                            </div>
                        </div>
                    </Motion>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion type="fadeUp">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                CUET Course Features (Offline/Online)
                            </h2>
                        </div>
                    </Motion>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 text-lg">
                        {[
                            { icon: <UserCheck className="w-6 h-6 text-blue-500 mr-2" />, text: "Excellent Faculty: Expert educators with deep subject mastery." },
                            { icon: <BarChart2 className="w-6 h-6 text-blue-500 mr-2" />, text: "Regular Assessment: Weekly tests and personalized feedback." },
                            { icon: <MessageSquare className="w-6 h-6 text-blue-500 mr-2" />, text: "Unlimited Doubt Clearing: One-on-one guidance till you’re confident." },
                            { icon: <CreditCard className="w-6 h-6 text-blue-500 mr-2" />, text: "Affordable Fees: Quality CUET coaching that fits every budget." },
                            { icon: <Laptop className="w-6 h-6 text-blue-500 mr-2" />, text: "Online + Offline Options: Learn your way – flexible & accessible." },
                            { icon: <Monitor className="w-6 h-6 text-blue-500 mr-2" />, text: "Smart Classrooms: Digital boards, test dashboards & real-time analysis." }
                        ].map((item, idx) => (
                            <Motion key={idx} type="fadeUp" delay={idx * 0.08}>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-start h-full">
                                    {item.icon}
                                    <p className="ml-2">{item.text}</p>
                                </div>
                            </Motion>
                        ))}
                    </div>
                </div>
            </section>

            {/* contact us demo */}

            <section className="bg-blue-50 py-16 px-6 md:px-20 rounded-t-[80px]">
                <div className="max-w-5xl mx-auto text-center">
                    <h5 className="text-[blue] font-semibold uppercase tracking-wider mb-3">
                        Contact Us
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 leading-snug">
                        Learn How To Grow Your Knowledge And Build A Successful Career With Us!
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Contact */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Contact
                            </label>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                placeholder="Brand Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Your Query
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-center mt-4">
                            <button

                                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center text-sm sm:text-base"
                            >
                                Book Free Demo Class
                                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 mb-6 md:mb-12">
                <Motion type="scale">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Begin Your CUET Journey Today!
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
                            Don't wait for tomorrow — your dream university seat is waiting for you today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a href="tel:+919996732928" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center text-sm sm:text-base">
                                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                +91-9996732928
                            </a>
                            <a href="https://www.kautilyalawinstitute.com" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition text-sm sm:text-base">
                                Visit Website
                            </a>
                        </div>
                    </div>
                </Motion>
            </section>


            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <Motion type="fadeUp">
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Kautilya Law Institute</h3>
                                <p className="text-sm sm:text-base mb-4">Rohtak's most trusted name for CUET UG Coaching</p>
                            </div>
                        </Motion>

                        <Motion type="fadeUp" delay={0.1}>
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Info</h4>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">+91-9996732928</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Rohtak, Haryana</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                        <span className="text-sm sm:text-base break-all">info@kautilyalawinstitute.com</span>
                                    </div>
                                </div>
                            </div>
                        </Motion>

                        <Motion type="fadeUp" delay={0.2}>
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
                                <div className="space-y-2">
                                    <a href="#home" className="block hover:text-white transition text-sm sm:text-base">Home</a>
                                    <a href="#about" className="block hover:text-white transition text-sm sm:text-base">About Us</a>
                                    <a href="#courses" className="block hover:text-white transition text-sm sm:text-base">Courses</a>
                                    <a href="#contact" className="block hover:text-white transition text-sm sm:text-base">Contact</a>
                                </div>
                            </div>
                        </Motion>
                    </div>

                    <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
                        <p className="text-xs sm:text-sm md:text-base">&copy; 2025 Kautilya Law Institute. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}