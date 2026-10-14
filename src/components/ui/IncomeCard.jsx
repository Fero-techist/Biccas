const IncomeCard = () => (
  <div className="absolute bottom-[18px] left-[-38px] z-20 rounded-lg bg-white px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,.08)]">
    <div className="text-[7px] text-gray-400">Total Income</div>

    <div className="mt-1 flex items-center gap-3">
      <span className="text-[10px] font-semibold">$245.00</span>

      <span className="text-[9px] text-[#4fbd98]">↗</span>
    </div>
  </div>
);
export default IncomeCard;
