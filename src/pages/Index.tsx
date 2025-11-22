import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface DonationPackage {
  id: number;
  title: string;
  price: number;
  currency: string;
  benefits: string[];
  image: string;
  popular?: boolean;
  tag?: string;
}

const donationPackages: DonationPackage[] = [
  {
    id: 1,
    title: 'СЕРВЕР+',
    price: 299,
    currency: '₽',
    benefits: ['100 игровых монет', '5 бустеров', 'Эксклюзивный скин'],
    image: 'https://cdn.poehali.dev/projects/754f4399-6acd-4227-b8d6-99fbdf1aa747/files/83a9be9e-0f60-42bc-8e4a-ac3dedec2c95.jpg',
  },
  {
    id: 2,
    title: 'Pro Gamer',
    price: 799,
    currency: '₽',
    benefits: ['300 игровых монет', '15 бустеров', '3 эксклюзивных скина', 'VIP статус на 7 дней'],
    image: 'https://cdn.poehali.dev/projects/754f4399-6acd-4227-b8d6-99fbdf1aa747/files/83a9be9e-0f60-42bc-8e4a-ac3dedec2c95.jpg',
    popular: true,
    tag: 'Популярный',
  },
  {
    id: 3,
    title: 'Legend Pack',
    price: 1499,
    currency: '₽',
    benefits: ['700 игровых монет', '35 бустеров', '7 эксклюзивных скинов', 'VIP статус на 30 дней', 'Уникальное оружие'],
    image: 'https://cdn.poehali.dev/projects/754f4399-6acd-4227-b8d6-99fbdf1aa747/files/c9202cfb-eb69-466e-a7d8-dd30bb6a2636.jpg',
    tag: 'Выгодно',
  },
  {
    id: 4,
    title: 'Ultimate Pack',
    price: 2999,
    currency: '₽',
    benefits: ['1500 игровых монет', '80 бустеров', '15 эксклюзивных скинов', 'VIP статус на 90 дней', '3 уникальных оружия', 'Персональный бейдж'],
    image: 'https://cdn.poehali.dev/projects/754f4399-6acd-4227-b8d6-99fbdf1aa747/files/c9202cfb-eb69-466e-a7d8-dd30bb6a2636.jpg',
  },
];

const paymentMethods = [
  { id: 1, name: 'Банковская карта', icon: 'CreditCard', description: 'Visa, Mastercard, МИР' },
  { id: 2, name: 'ЮMoney', icon: 'Wallet', description: 'Электронный кошелек' },
  { id: 3, name: 'QIWI', icon: 'Wallet', description: 'Электронный кошелек' },
  { id: 4, name: 'СБП', icon: 'Smartphone', description: 'Система быстрых платежей' },
];

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<DonationPackage | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative bg-cover bg-center py-32 px-4" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/754f4399-6acd-4227-b8d6-99fbdf1aa747/files/2fcc5144-30a2-4007-8638-3d94acda0cc0.jpg')`,
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-glow">
            GAME STORE
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Прокачай своего персонажа с эксклюзивными донатами и бонусами
          </p>
          <Button size="lg" className="glow-effect text-lg px-8 py-6">
            <Icon name="Gamepad2" className="mr-2" size={24} />
            Выбрать донат
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Каталог донатов</h2>
          <p className="text-xl text-muted-foreground">Выбери свой путь к победе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {donationPackages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-effect ${
                pkg.popular ? 'border-primary border-2' : ''
              }`}
            >
              {pkg.tag && (
                <Badge className="absolute top-4 right-4 z-10 glow-effect-pink">
                  {pkg.tag}
                </Badge>
              )}
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mb-4">
                  {pkg.price} {pkg.currency}
                </CardDescription>
                <ul className="space-y-2">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full glow-effect"
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      Купить
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Выбор способа оплаты</DialogTitle>
                      <DialogDescription>
                        {selectedPackage?.title} - {selectedPackage?.price} {selectedPackage?.currency}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3 py-4">
                      {paymentMethods.map((method) => (
                        <Button
                          key={method.id}
                          variant="outline"
                          className="justify-start h-auto py-4 hover:border-primary hover:bg-primary/10"
                        >
                          <Icon name={method.icon as any} className="mr-3" size={24} />
                          <div className="text-left">
                            <div className="font-semibold">{method.name}</div>
                            <div className="text-xs text-muted-foreground">{method.description}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-8">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как быстро зачисляются донаты?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Все донаты зачисляются мгновенно после успешной оплаты. В редких случаях это может занять до 5 минут.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли вернуть донат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Возврат донатов возможен в течение 14 дней, если вы не использовали полученные предметы. Для возврата свяжитесь с поддержкой.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки (ЮMoney, QIWI) и СБП.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Безопасна ли оплата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все платежи проходят через защищенные каналы с использованием SSL-шифрования. Мы не храним данные ваших карт.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Есть ли скидки при покупке нескольких донатов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! При покупке донатов на сумму от 5000₽ вы получаете скидку 10%, а от 10000₽ - 15%. Скидка применяется автоматически.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Phone" size={24} />
            </Button>
          </div>
          <p className="text-muted-foreground">© 2024 Game Store. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;