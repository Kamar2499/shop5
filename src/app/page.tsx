'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary text-primary-foreground h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-30">
           {/* Пример использования фонового изображения - замените на ваше, если есть */}
          {/* <Image src="/path/to/your/hero-image.jpg" alt="Магазин одежды" layout="fill" objectFit="cover" /> */}
        </div>
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Добро пожаловать в Магазин одежды
          </motion.h1>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Откройте для себя последние коллекции и найдите свой уникальный стиль.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link href="/catalog" passHref>
              <Button 
                variant="default" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🛍️ Перейти в каталог
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                ✨ Узнать больше
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Section */}
      {/* Эту секцию можно добавить позже, если у вас будут категории товаров */}
      {/* <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Популярные категории</h2>
        {/* Здесь будут карточки категорий */}
      {/* </section> */}

      {/* Optional: Call to Action / Newsletter Section */}
      {/* Эту секцию можно добавить позже */}
      {/* <section className="bg-indigo-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-6">Будьте в курсе</h2>
           <p className="text-xl mb-8">Подпишитесь на нашу рассылку, чтобы получать информацию о новинках и скидках.</p>
           {/* Здесь будет форма подписки */}
        {/* </div>
      </section> */}
    </main>
  );
}
