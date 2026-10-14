const SendCard = () => (
  <div className="absolute left-[-90px] top-[15px] z-20 w-[135px] rounded-lg bg-white p-3 shadow-[0_8px_25px_rgba(0,0,0,.08)]">
    <div className="mb-1 text-[7px] text-gray-400">Enter amount</div>

    <div className="flex items-center justify-between">
      <span className="text-[9px] font-medium">$450.00</span>

      <button className="rounded-full bg-[#4fbd98] px-2 py-1 text-[7px] text-white">
        Send
      </button>
    </div>
  </div>
);
export default SendCard;
