export default function CountContainer({ count, label, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
      <p className={`font-poppins font-medium text-7xl md:text-8xl ${text === 'red' ? 'text-brand-red' : 'text-brand-blue'}`}>{count}</p>
      <p className="font-avenir font-light text-[16px]">{label}</p>
    </div>
  );
}
