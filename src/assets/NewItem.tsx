// Новинка

export default function NewItem() {
  return (
    <div className="inline-flex flex-col gap-2 -rotate-6 absolute bottom-2 left-0">
      <div className="flex relative">
        <div className="flex absolute w-full h-full newItem-gradient rounded-xl -left-1.5"></div>
        <div className="flex justify-center rounded-xl items-center text-center px-1.5 py-3 newItem-background max-h-8 min-h-8 text-white z-1">
          Новинки
        </div>
      </div>
    </div>
  );
}
