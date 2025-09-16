import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Изработка и монтаж на тръбопроводни системи",
      description: "Нашите услуги включват доставка и производство на металургични материали, основно тръбопроводни системи (тръби, колена, фитинги, фланци, арматури(низко и високо налягане, газопроводи и т.н.).Технологичните тръбопроводи включват всички тръбопроводи, през които се транспортират суровини, полуфабрикати и готова продукция; поддържащи материали; производствени отпадъци от агресивни отпадни води.",
      image: "pipeline-placeholder"
    },
    {
      title: "Огъване на Колена и Доставка на Тръби",
      description: "Услуги: Огъващи машини, външно и вътрешно шлифоване на тръби, лентъчно режещи машини, оборудване за рязане, нагряваща пещи, преси за производство на арматура.\nДоставка на допълнителни части - преходи, тройници, дъна, фланци, арматури, профилна стомана.\n\n- Индукционно и студено огъване на тръби с диаметър до 711мм., от 0°до180° и радиус до20000мм. Дебелина до 55мм.\n- Изработваме по поръчка 1,5D колена със по-голяма дебелина от стандартните.\nЗа изработката осигуряваме цялостна гама от материали: неръждаеми 1.4541/1.4571/08CH18N10T и т.н.\nЛегирани 10CRMo9-10/13CRMo4-5/ и т.н., котлови S235/P265GH/ ST35.8 и X10CRVNB9-1 и т.н.\nПо изискване на клиента извършваме обработка / скос, фаска, резба/ според чертежната документация, пясъкосруене, бластиране, боядисване, изолация и т.н.",
      image: "pipe-bending-placeholder"
    },
    {
      title: "Заваряване",
      description: "Нашата компания е специализирана във висококачествено заваряване на метални изделия, тръбопроводи и конструкции. Екипът ни от заварчици гарантира здравина и надеждност на всяка заварка, като спазва всички стандарти за качество и безопасност.\n\nВидове заварки: Ръчно електродъгово заваряване, MIG/MAG заваряване ,TIG заваряване, Подфлюсово заваряване, Газокислородно (автогенно) заваряване, Лазерно заваряване, Плазмено заваряване.\n\nКонтрол на заварките - контролира се всяка заварка. Упражняване на стриктен контрол на заварките, като всяка една трябва да мине през радиоактивен контрол.",
      image: "welding-placeholder"
    },
    {
      title: "Поддръжка на предприятия - поддръжка на съоръжения и инсталации",
      description: "Наличен екип от квалифицирани техници, които могат да извършат поддръжка на всякакъв вид промишлини и машинни инсталации.",
      image: "maintenance-placeholder"
    },
    {
      title: "Монтаж на метални конструкции",
      description: "монтаж на метални халета, монтаж на метални складове, изграждане на метални конструкции предназначени за основа на фабрици и цехове както и хипермаркети. Ние предлгаме и цялостна реконструкция на всички посочени метални структури. Бързина, надеждност и спазени срокове.",
      image: "metal-construction-placeholder"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Услуги</h2>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-card border-0 bg-card">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                <div className="lg:w-1/2 p-12">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">{service.title}</h3>
                  <div className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                    {service.description}
                  </div>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Разбери Повече
                  </Button>
                </div>
                <div className="lg:w-1/2 h-80 lg:h-96 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{service.image}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;