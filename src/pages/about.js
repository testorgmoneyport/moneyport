export default function About() {
    return (
      <div className="container mx-auto">
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center pt-20"
          style={{ backgroundImage: 'url(/assets/img/about-bg.png)' }}
        >
          <div className="w-full max-w-6xl flex flex-wrap">
            {/* Sol Kısım */}
            <div className="w-full md:w-1/3 flex items-center justify-center p-4">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight pt-72">
                MoneyPort ile <br /> Varlıklarınızı izleyin, <br /> yatırımlarınızı güçlendirin
              </h1>
            </div>
  
            {/* Sağ Kısım */}
            <div className="w-full md:w-2/3 px-8">
              <p className="text-2xl text-gray-700 leading-relaxed pt-64">
                Moneyport olarak, finansal özgürlük yolculuğunuzda yanınızda olmayı hedefliyoruz. 
                Varlıklarınızı daha bilinçli yönetmenize olanak sağlayan bir platform sunarak, yatırım 
                kararlarınızda güven ve şeffaflık sağlıyoruz. Yatırım dünyasının karmaşık yapısını 
                sadeleştirerek, kullanıcılarımızın varlıklarını takip etmelerini, kar-zarar analizlerini 
                kolayca yapmalarını ve borsa hareketlerini en güncel şekilde izlemelerini sağlıyoruz. 
                Amacımız, herkes için erişilebilir ve anlaşılır bir finans yönetimi deneyimi sunmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  