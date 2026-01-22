import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Users, 
  Target, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  Shield,
  TrendingUp,
  MessageCircle,
  X,
  Lightbulb,
  RotateCw,
  Radio,
  MessageSquare,
  Navigation,
  Settings,
  AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import logo from '@/assets/88f42cdb1deb44968ac07fd91d49b5e99ca2a17e.png';

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="WebMarket" className="h-8" />
            </div>
            <a href="https://wa.me/37494508155" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Build a magnetic brand that stops the scroll & sells for you
            </h1>
            
            <p className="text-2xl sm:text-3xl text-slate-600 mb-6 leading-relaxed">
              The Anti-Marketing Strategy
            </p>

            <p className="text-xl text-slate-500 mb-12">
              For businesses that are done blending in
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/37494508155" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                This isn't traditional marketing.
              </h2>
              <p className="text-2xl text-slate-600">
                And it's definitely not about playing it safe.
              </p>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                The Anti-Marketing Strategy is a deliberate approach to marketing that breaks the rules, 
                challenges industry norms, and creates campaigns people actually remember.
              </p>
              <p>
                It's for businesses that want to stand out, attract aligned clients, and stop marketing like 
                everyone else in their market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Anti-Branding Means */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
              What "Anti-Marketing" Really Means
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-700 leading-relaxed"
            >
              <p className="text-xl font-semibold text-slate-900">
                Anti-marketing is not about being messy or unprofessional.
              </p>
              <p>
                It's about intentionally going against what everyone else is doing — visually, verbally, 
                and strategically — so your marketing becomes impossible to ignore.
              </p>
              <div className="space-y-3 pl-6 border-l-4 border-purple-600">
                <p className="text-slate-600">Most marketing follows the same formulas.</p>
                <p className="text-slate-600">Same tactics.</p>
                <p className="text-slate-600">Same language.</p>
                <p className="text-slate-600">Same messaging.</p>
              </div>
              <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anti-marketing exists to disrupt that.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763933356190-6e86bb9faad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVzaW5lc3MlMjBwZXJzb258ZW58MXx8fHwxNzY5MDcyMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional branding"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
              Who This Approach Is For
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              This strategy is for you if:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-blue-600" />,
                text: "You're tired of seeing marketing in your industry all look the same"
              },
              {
                icon: <Target className="w-8 h-8 text-purple-600" />,
                text: "Your current marketing doesn't reflect who you really are"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                text: "You feel invisible online, despite doing \"everything right\""
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                text: "You want your marketing to attract the right people and repel the wrong ones"
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                text: "You're ready to show up confidently and stop second-guessing your marketing"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-purple-200">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-slate-600 italic">
              If you've ever thought "this doesn't feel like me" — that's exactly the point where anti-marketing begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What This Is NOT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                What This Is NOT
              </h2>
              <p className="text-xl text-blue-200">
                Let's be clear about what anti-marketing is not.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-white/90 mb-6">
                This approach does not focus on:
              </p>
              {[
                "Writing mission, vision, or values statements",
                "Following trends",
                "Playing nice or neutral",
                "Generic \"brand clarity\" exercises",
                "Traditional corporate marketing frameworks"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <X className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <span className="text-lg text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
              <p className="text-xl text-white">
                If you're looking for a polished, safe, checkbox brand — this isn't it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
              What the Anti-Marketing Strategy Focuses On
            </h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
              Instead, anti-marketing is about creating campaigns people feel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                title: "Create a signature marketing style",
                description: "that's instantly recognizable"
              },
              {
                icon: <Eye className="w-8 h-8 text-purple-600" />,
                title: "Use visuals and messaging",
                description: "that stop the scroll"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Build emotional connection",
                description: "and customer obsession"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
                title: "Say what others won't say",
                description: "— clearly and confidently"
              },
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Become magnetic",
                description: "to the right audience"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-2xl text-slate-700">
              The goal isn't to appeal to everyone.
            </p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The goal is to be unforgettable to the right ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtfGVufDF8fHx8MTc2OTA0MTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                Why This Works
              </h2>
              
              <p className="text-2xl text-slate-700">
                People don't fall in love with "professional."
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                They fall in love with distinctive.
              </p>

              <div className="space-y-4 mt-8">
                <p className="text-xl text-slate-600 mb-4">Anti-marketing works because it:</p>
                {[
                  "Leans into contrast instead of conformity",
                  "Uses psychology, not templates",
                  "Builds recognition through consistency and confidence",
                  "Turns your marketing into a filter — not a billboard"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <p className="text-xl text-slate-900">
                  When done right, your marketing starts doing the selling before the conversation even begins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The A.N.T.I. System */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full mb-6">
              <RotateCw className="w-5 h-5 text-purple-300" />
              <span className="text-lg font-semibold text-white">THE A.N.T.I. SYSTEM™</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Most marketing frameworks give you a funnel.
            </h2>
            <p className="text-2xl text-blue-200">
              We give you a system that actually runs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6 text-lg text-white/90 leading-relaxed mb-16"
          >
            <p>
              I've worked with enough companies to know that marketing isn't linear.
              It doesn't move from awareness to conversion in a straight line.
              It's cyclical.
            </p>
            <p>
              That's why the A.N.T.I. System™ isn't a step-by-step playbook.
              It's a repeatable loop — one you move through again and again, compounding results each time.
            </p>
            <p className="text-xl text-white font-semibold">
              In this system, you don't "start at the top of the funnel."
              You start where the bottleneck is.
            </p>
            <div className="space-y-3 pl-6 border-l-4 border-purple-400 my-8">
              <p className="text-white/80">Maybe you're getting attention but no trust.</p>
              <p className="text-white/80">Maybe people trust you but don't take action.</p>
              <p className="text-white/80">Maybe sales are coming in, but nothing is predictable or scalable.</p>
            </div>
            <p className="text-xl text-purple-200">
              Wherever you are — that's your entry point.
            </p>
          </motion.div>

          {/* Four Pillars */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-2xl text-white font-semibold">
                The A.N.T.I. System™ is built on four marketing pillars:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  letter: "A",
                  icon: <Radio className="w-10 h-10 text-blue-400" />,
                  title: "ATTENTION",
                  description: "How you earn visibility in a noisy market without chasing trends or burning budget."
                },
                {
                  letter: "N",
                  icon: <MessageSquare className="w-10 h-10 text-purple-400" />,
                  title: "NARRATIVE",
                  description: "The messaging system that turns attention into belief — and belief into intent."
                },
                {
                  letter: "T",
                  icon: <Navigation className="w-10 h-10 text-blue-400" />,
                  title: "TRAFFIC",
                  description: "The controlled pathways that move the right people toward a buying decision."
                },
                {
                  letter: "I",
                  icon: <Settings className="w-10 h-10 text-purple-400" />,
                  title: "INFRASTRUCTURE",
                  description: "The automation, systems, and flows that keep marketing working even when you're not."
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 h-full hover:bg-white/15 transition-all">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                        <span className="text-3xl font-bold text-white">{pillar.letter}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          {pillar.icon}
                          <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DETOX Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border-2 border-red-400/30 p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-12 h-12 text-red-300 flex-shrink-0" />
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">But before you scale the system, you need to DETOX —</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    remove the tactics, tools, and assumptions that keep you busy without making you effective.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 space-y-4"
          >
            <p className="text-2xl text-white">
              Marketing doesn't need more hacks.
            </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              It needs a system that compounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Apply This */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
              How We Apply This at Webmarket
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Webmarket, anti-marketing is not a concept — it's a working strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Audit where marketing is playing it safe"
              },
              {
                icon: <Eye className="w-8 h-8 text-purple-600" />,
                title: "Identify where sameness is costing attention and sales"
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
                title: "Rebuild marketing strategy, messaging, and systems around clarity and contrast"
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Align marketing, branding, and automation into one system"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-purple-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-xl text-slate-700">
              This is not about one-off visuals or copy.
            </p>
            <p className="text-xl font-semibold text-slate-900">
              It's about building marketing that actually works in the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              If This Resonates
            </h2>
            <p className="text-2xl text-blue-100 mb-4">
              If you're reading this and thinking:
            </p>
            <p className="text-2xl text-white font-semibold mb-8">
              "Finally — this explains why nothing else worked"
            </p>
            <p className="text-xl text-blue-100 mb-12">
              then we should probably talk.
            </p>

            <div className="space-y-6 text-white/90 mb-12 max-w-2xl mx-auto">
              <p className="text-xl">No workshops.</p>
              <p className="text-xl">No generic packages.</p>
              <p className="text-2xl font-semibold text-white">
                Just a strategic conversation about where your marketing is holding back — and what's possible when it doesn't.
              </p>
            </div>
            
            <a href="https://wa.me/37494508155" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-blue-50 px-12 py-6 rounded-full font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all"
              >
                Reach Out to Webmarket
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </a>

            <p className="mt-8 text-xl text-white">
              Let's make your marketing impossible to ignore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-semibold">Webmarket</span>
          </div>
          <p className="text-slate-400">
            © 2026 Webmarket. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
