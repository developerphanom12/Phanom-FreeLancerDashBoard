import { useState } from "react";
import { FaUniversity, FaPaypal } from "react-icons/fa";

const PaymentSettings = () => {
  const [activeMethod, setActiveMethod] = useState("bank");

  return (
    <div className="p-5">
      <h2 className="text-[30px] font-medium leading-[42px] capitalize mb-3 font-[Poppins]">
        Payment Settings
      </h2>

      <div className="bg-white p-5 rounded-lg shadow-sm mb-8">
        <h3 className="text-[24px] font-medium leading-[30px] capitalize mb-6 font-[Poppins]">
          Payout Settings
        </h3>

        <div className="flex gap-3 mb-6">
          {["bank", "paypal"].map((method) => (
            <div
              key={method}
              className={`rounded-[10px] cursor-pointer ${activeMethod === method
                ? "bg-gradient-to-b from-[#4998E0] via-[#9258E4] to-[#CD1CE8] p-[1.5px]"
                : ""
                }`}
              onClick={() => setActiveMethod(method)}
            >
              <div
                className={`rounded-lg w-[131px] h-[119px] flex flex-col items-center justify-center border border-[#44444423] font-medium transition-all ${activeMethod === method ? "bg-[#f7f0ff]" : "text-[#444]"
                  }`}
              >
                {method === "bank" ? (
                  <FaUniversity
                    className={`text-[28px] mb-2 ${activeMethod === method ? "text-[#6C5FD4]" : "text-[#444]"
                      }`}
                  />
                ) : (
                  <FaPaypal
                    className={`text-[28px] mb-2 ${activeMethod === method ? "text-[#6C5FD4]" : "text-[#444]"
                      }`}
                  />
                )}
                <span
                  className={`text-[14px] text-center ${activeMethod === method ? "text-[#6C5FD4]" : "text-[#444]"
                    }`}
                >
                  {method === "bank" ? "Bank Transfer" : "Paypal"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <form className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex gap-6">
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Bank Account<span className="text-red-500 ml-1">*</span>
              </label>
              <select className="p-3 border border-gray-300 rounded-lg text-sm">
                <option>United States</option>
                <option>India</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Bank BIC/SWIFT<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="ABCDEFTHQXYZ"
                className="p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-6">
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Bank Address<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="123, Street, Bihar, India"
                className="p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Bank City<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Bihar"
                className="p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-6">
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Bank Province/State<span className="text-red-500 ml-1">*</span>
              </label>
              <select className="p-3 border border-gray-300 rounded-lg text-sm">
                <option>California</option>
                <option>Texas</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[16px] font-[Poppins] mb-2">
                Account Number<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="0000000000"
                className="p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col w-[49%]">
            <label className="text-[16px] font-[Poppins] mb-2">
              Name of Account Holder (as shown on bank statement)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Alexander"
              className="p-3 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button
              type="button"
              className="px-4 py-2 border border-[#8F8F8F] bg-white rounded-lg text-sm shadow-md hover:bg-gray-100"
            >
              Add Payment
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-[#459CE1] to-[#D11AE7] hover:opacity-90"
            >
              Add Payment & Activate
            </button>
          </div>
        </form>
      </div>

      {/* ---------------- Payment History ---------------- */}
      <div className="bg-white p-5 rounded-lg shadow-sm overflow-x-auto">
        <h3 className="text-[24px] font-medium leading-[30px] capitalize mb-4 font-[Poppins]">
          Payment History
        </h3>
        <table className="w-full border-collapse font-[Poppins] text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="text-[#6F6F6F] text-left">
              <th className="p-3">AMOUNT</th>
              <th className="p-3">PAYOUT METHOD</th>
              <th className="p-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["₹688", "Paypal", "Mar 12, 2025"],
              ["₹720", "Paypal", "Mar 12, 2025"],
              ["₹720", "Bank Transfer", "Mar 12, 2025"],
              ["₹900", "Bank Transfer", "Mar 12, 2025"],
              ["₹900", "Paypal", "Mar 12, 2025"],
            ].map(([amount, method, date], index) => (
              <tr key={index} className="capitalize font-medium">
                <td className="p-3">{amount}</td>
                <td className="p-3">{method}</td>
                <td className="p-3">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentSettings;
