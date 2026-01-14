import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb } from 'lucide-react';

// Team member images - using placeholders since original images may not exist
const teamMembers = [
    { name: 'Gowthami Pagidala', role: 'Developer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gowthami' },
    { name: 'Shamshik Sai', role: 'Developer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shamshik' },
    { name: 'Ijlal Furqaan', role: 'Developer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ijlal' },
    { name: 'Rishav Sharma', role: 'Developer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rishav' },
];

const About = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                        About <span className="text-indigo-500">AetherReel</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Connecting people through the magic of cinema. We curate reviews
                        and insights to help you discover your next favorite film.
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Target,
                        title: 'Our Mission',
                        description: 'To democratize film criticism and make quality movie reviews accessible to everyone.',
                    },
                    {
                        icon: Lightbulb,
                        title: 'Our Vision',
                        description: 'A world where every movie lover can find their perfect film through trusted recommendations.',
                    },
                    {
                        icon: Users,
                        title: 'Community',
                        description: 'Building a vibrant community of film enthusiasts who share their passion for cinema.',
                    },
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 text-center space-y-4"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20">
                            <item.icon className="h-6 w-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                ))}
            </section>

            {/* What We Do Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-white">What We Do</h2>
                    <p className="text-gray-400 leading-relaxed">
                        AetherReel focuses on bringing you the best movie reviews and insights.
                        We believe that great cinema deserves great discourse, and we're here
                        to spark intellectual conversations about the films that shape our culture.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Through our reviews, articles, and discussions, we hope to guide you
                        through the vast universe of cinema—from blockbusters to indie gems,
                        classics to cutting-edge releases.
                    </p>
                    <Link
                        to="/movies"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors"
                    >
                        Explore Movies →
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
                        alt="Cinema"
                        className="rounded-2xl w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-transparent" />
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
                    <p className="text-gray-400">The passionate people behind AetherReel</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 text-center space-y-4 hover:border-indigo-500/50 transition-colors"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-full mx-auto bg-white/10"
                            />
                            <div>
                                <h4 className="font-semibold text-white">{member.name}</h4>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
