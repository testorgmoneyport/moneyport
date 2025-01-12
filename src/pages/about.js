export default function About() {
  return (
    <div className="container mx-auto">
      <div
        className="flex min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/img/about-img-2.png), url(/assets/img/about-img-1.png)',
          backgroundPosition: 'top 4rem center, left 90%', // üst görsele margin ve sol görseli dikey ortala
          backgroundSize: '50% auto, 35% auto',
          backgroundRepeat: 'no-repeat, no-repeat',
          paddingTop: '15rem' 
        }}
      >
        <div className="container mx-auto">
          <div className="ml-auto w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
              MoneyPort ile varlıklarınızı izleyin, <br />
              yatırımlarınızı güçlendirin.
            </h1>
            
            <p className="text-2xl text-gray-700 leading-relaxed text-justify">
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