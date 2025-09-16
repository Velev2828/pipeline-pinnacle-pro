const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">МЕТТРЕЙД ЦЕНТЪР ЕООД</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Професионални услуги за тръбопроводни системи, заваряване и индустриална поддръжка.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>гр. София, бул. Евлоги и Христо Георгиеви, 38</p>
              <p>НС "Васил Левски", сектор "В", офис № 4</p>
              <p className="text-primary-glow">+359877714747</p>
              <p className="text-primary-glow">info@mtc.bg</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>Тръбопроводни системи</p>
              <p>Заваряване</p>
              <p>Метални конструкции</p>
              <p>Индустриална поддръжка</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © Меттрейд Център ЕООД. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;