/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Calendar, 
  ArrowRight, 
  Star, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin,
  Quote
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-secondary/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-brand-primary tracking-tight">Linh Hoang</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-stone-600 hover:text-brand-primary font-medium transition-colors">Về tôi</a>
              <a href="#services" className="text-stone-600 hover:text-brand-primary font-medium transition-colors">Dịch vụ</a>
              <a href="#testimonials" className="text-stone-600 hover:text-brand-primary font-medium transition-colors">Cảm nhận</a>
              <a href="#contact" className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">Đặt lịch ngay</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-secondary border-b border-stone-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-stone-600 font-medium">Về tôi</a>
              <a href="#services" className="block px-3 py-2 text-stone-600 font-medium">Dịch vụ</a>
              <a href="#testimonials" className="block px-3 py-2 text-stone-600 font-medium">Cảm nhận</a>
              <a href="#contact" className="block px-3 py-2 text-brand-primary font-bold">Đặt lịch ngay</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent font-medium tracking-widest uppercase text-sm mb-4 block">Diễn giả & Chuyên gia tâm lý</span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6 text-stone-900">
            Kết nối trái tim, <br />
            <span className="italic text-brand-primary">Kiến tạo hạnh phúc</span>
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
            Giúp bạn thấu hiểu bản thân và đối phương để xây dựng những mối quan hệ bền vững, chân thành và đầy yêu thương.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Khám phá khóa học <ArrowRight size={20} />
            </button>
            <button className="border border-brand-primary text-brand-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-primary hover:text-white transition-all">
              Xem các buổi nói chuyện
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Speaker" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-brand-secondary p-3 rounded-full">
                <Heart className="text-brand-primary" fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-stone-900">10,000+</p>
                <p className="text-sm text-stone-500">Người đã thay đổi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Giao tiếp thấu cảm",
      description: "Học cách lắng nghe và chia sẻ để xóa tan mọi khoảng cách trong mối quan hệ."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Chữa lành tổn thương",
      description: "Vượt qua những nỗi đau trong quá khứ để sẵn sàng đón nhận tình yêu mới."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kết nối cộng đồng",
      description: "Tham gia mạng lưới những người cùng chí hướng, chia sẻ và hỗ trợ lẫn nhau."
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Giá trị tôi mang lại</h2>
          <p className="text-stone-500 max-w-2xl mx-auto italic">Hành trình thấu hiểu là hành trình hạnh phúc nhất.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-brand-secondary border border-stone-100 hover:shadow-xl transition-all"
            >
              <div className="text-brand-primary mb-6">{f.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{f.title}</h3>
              <p className="text-stone-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Nguyễn An",
      role: "Học viên khóa 'Yêu lại từ đầu'",
      content: "Những chia sẻ của Linh đã giúp vợ chồng mình hiểu nhau hơn sau 10 năm chung sống. Cảm ơn Linh rất nhiều!",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Trần Bình",
      role: "Doanh nhân",
      content: "Không chỉ là về tình yêu, Linh còn giúp tôi cải thiện mối quan hệ với đồng nghiệp và đối tác một cách kỳ diệu.",
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
      name: "Lê Chi",
      role: "Mẹ đơn thân",
      content: "Khóa học chữa lành đã giúp tôi tìm lại sự tự tin và bình yên sau những đổ vỡ. Một hành trình đáng giá.",
      avatar: "https://i.pravatar.cc/150?u=3"
    }
  ];

  return (
    <section className="py-20 bg-brand-secondary" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Những câu chuyện thay đổi</h2>
            <p className="text-stone-600">Hàng ngàn người đã tìm thấy hạnh phúc thực sự. Bạn sẽ là người tiếp theo?</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-brand-accent fill-current" />)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm relative">
              <Quote className="absolute top-6 right-8 text-brand-secondary w-12 h-12" />
              <p className="text-stone-600 mb-8 italic relative z-10 leading-relaxed">"{r.content}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-stone-900">{r.name}</p>
                  <p className="text-xs text-stone-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-brand-primary rounded-[48px] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Bắt đầu hành trình của bạn</h2>
              <p className="text-brand-secondary/80 mb-8 text-lg">
                Hãy để lại thông tin, tôi sẽ liên hệ trực tiếp để lắng nghe và đồng hành cùng bạn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><Calendar size={20} /></div>
                  <span>Tư vấn 1:1 miễn phí 15 phút</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><Users size={20} /></div>
                  <span>Tham gia workshop hàng tháng</span>
                </div>
              </div>
            </div>
            <form className="bg-white p-8 rounded-3xl space-y-4 text-stone-800">
              <div>
                <label className="block text-sm font-medium mb-1">Họ và tên</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="090 123 4567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Vấn đề bạn quan tâm</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20">
                  <option>Mối quan hệ vợ chồng</option>
                  <option>Chữa lành bản thân</option>
                  <option>Giao tiếp trong tình yêu</option>
                  <option>Khác</option>
                </select>
              </div>
              <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-secondary pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-3xl font-bold text-brand-primary mb-6 block">Linh Hoang</span>
            <p className="text-stone-600 max-w-sm leading-relaxed mb-6">
              Sứ mệnh của tôi là giúp mọi người tìm thấy sự bình yên và hạnh phúc trong chính những mối quan hệ xung quanh mình.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-3 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white p-3 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white p-3 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4 text-stone-600">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Về Linh Hoang</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Khóa học & Workshop</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Blog chia sẻ</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Podcast</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-stone-600">
              <li>Email: hello@linhhoang.com</li>
              <li>Hotline: 090 123 4567</li>
              <li>Địa chỉ: Quận 1, TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-stone-200 text-center text-stone-500 text-sm">
          <p>© 2026 Linh Hoang. All rights reserved. Designed with love.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
