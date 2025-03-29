export default function FooterGeo() {
  return (
    <div className="mt-18 border-b-1 border-gray-700/50 h-40">
      <div className="flex gap-24">
        <div>
          <p className="text-white text-3xl">8 056 774 069 ₽</p>
          <p className="text-gray-500 mt-2 text-lg">
            Выручка российской сети в этом <br></br> месяце. В прошлом —{" "}
            <br></br> 8 754 949 644 ₽
          </p>
        </div>
        <div>
          <p className="text-white text-3xl">1250 пиццерий</p>
          <p className="text-gray-500 mt-2 text-lg">
            в 23 странах, от Турции до Нигерии
          </p>
        </div>
      </div>
    </div>
  );
}
