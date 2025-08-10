import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);

  const benefits = [
    {
      icon: "Heart",
      title: "Здоровье сердца",
      description: "Улучшение кровообращения и снижение давления",
    },
    {
      icon: "Brain",
      title: "Ясность ума",
      description: "Снижение стресса и улучшение концентрации",
    },
    {
      icon: "Zap",
      title: "Энергия",
      description: "Повышение жизненной силы и выносливости",
    },
    {
      icon: "Smile",
      title: "Гармония",
      description: "Баланс тела, ума и души",
    },
  ];

  const muscles = [
    {
      name: "Спина",
      description: "Укрепление позвоночника, снятие напряжения",
      exercises: ["Поза собаки", "Поза кобры", "Скручивания"],
    },
    {
      name: "Пресс",
      description: "Создание сильного корпуса, улучшение осанки",
      exercises: ["Планка", "Поза лодки", "Скручивания"],
    },
    {
      name: "Ноги",
      description: "Укрепление бедер, улучшение баланса",
      exercises: ["Поза воина", "Поза дерева", "Выпады"],
    },
    {
      name: "Плечи",
      description: "Снятие зажимов, увеличение подвижности",
      exercises: ["Поза орла", "Растяжка плеч", "Повороты"],
    },
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "За месяц занятий почувствовала невероятную легкость в теле. Боли в спине полностью прошли!",
      rating: 5,
    },
    {
      name: "Дмитрий Иванов",
      text: "Йога помогла мне справиться со стрессом на работе. Теперь я более спокойный и сосредоточенный.",
      rating: 5,
    },
    {
      name: "Мария Сидорова",
      text: "Невероятно! Гибкость улучшилась в разы, а энергии стало намного больше. Рекомендую всем!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Йога Урида</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#masterclass" className="text-gray-600 hover:text-primary transition-colors">Мастер-класс</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О йоге</a>
              <a href="#muscles" className="text-gray-600 hover:text-primary transition-colors">Мышцы</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🆓 Бесплатный мастер-класс
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Откройте силу<br />своего тела
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к недельному бесплатному мастер-классу и почувствуйте,
              как йога трансформирует ваше тело и разум
            </p>
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
              <Icon name="Play" className="mr-2" size={20} />
              Начать бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section id="masterclass" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">7-дневный мастер-класс</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый день — новая практика для разных групп мышц и аспектов йоги
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {Array.from({ length: 7 }, (_, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">День {i + 1}</h3>
                  <p className="text-sm text-gray-600">
                    {["Основы", "Гибкость", "Сила", "Баланс", "Дыхание", "Медитация", "Интеграция"][i]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Что дает йога</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Регулярная практика йоги приносит множество положительных изменений
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Трансформация тела</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
                <Icon name="Activity" className="text-primary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Гибкость</h4>
                <p className="text-gray-600">Увеличение подвижности суставов на 40-60%</p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
                <Icon name="Zap" className="text-primary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Сила</h4>
                <p className="text-gray-600">Укрепление глубоких мышц стабилизаторов</p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
                <Icon name="Heart" className="text-primary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Легкость</h4>
                <p className="text-gray-600">Снятие мышечных зажимов и напряжения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Muscles Section */}
      <section id="muscles" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Какие мышцы прорабатываются</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Нажмите на группу мышц, чтобы узнать подробности
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {muscles.map((muscle, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === muscle.name ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedMuscle(selectedMuscle === muscle.name ? null : muscle.name)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{muscle.name}</h3>
                        <p className="text-gray-600 mt-1">{muscle.description}</p>
                      </div>
                      <Icon 
                        name={selectedMuscle === muscle.name ? "ChevronUp" : "ChevronDown"} 
                        className="text-primary" 
                        size={20} 
                      />
                    </div>
                    {selectedMuscle === muscle.name && (
                      <div className="mt-4 pt-4 border-t animate-fade-in">
                        <h4 className="font-medium mb-2">Основные упражнения:</h4>
                        <div className="flex flex-wrap gap-2">
                          {muscle.exercises.map((exercise, i) => (
                            <Badge key={i} variant="secondary">{exercise}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят те, кто уже изменил свою жизнь с йогой
            </p>
          </div>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 text-center">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-4">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Готовы начать?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам людей, которые уже открыли для себя силу йоги
          </p>
          <Button size="lg" className="text-lg px-8 py-6 mb-8">
            <Icon name="Mail" className="mr-2" size={20} />
            Записаться на мастер-класс
          </Button>
          
          <div className="flex justify-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={20} />
              info@yogaurida.ru
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" className="mr-2" size={20} />
              Москва, ул. Гармонии, 108
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 text-primary">Йога Урида</div>
          <p className="text-gray-400">© 2024 Все права защищены. Откройте силу своего тела.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;