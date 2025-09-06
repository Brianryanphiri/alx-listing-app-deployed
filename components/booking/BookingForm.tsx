import CancellationPolicy from "./CancellationPolicy";

const BookingForm = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label> First Name</label>
            <input type="text" className="border p-2 w-full  mt-2" />
          </div>
          <div>
            <label> Last Name</label>
            <input type="text" className="border p-2 w-full  mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <label> Email</label>
            <input type="email" className="border p-2 w-full  mt-2" />
          </div>
          <div>
            <label> Phone number</label>
            <input type="tel" className="border p-2 w-full  mt-2" />
          </div>
        </div>
        <input type="checkbox" className="mt-4" />
        <label className="ml-2">
          Receive text message update about your booking. Messages rates may
          apply.
        </label>

        <h2 className="text-xl font--semibold">Pay With</h2>
        <div className="mt-4">
          <select name="" id="" className="border p-2 w-full mt-2">
            <option value="">Credit Card</option>
            <option value="">Debit Card</option>
          </select>
        </div>
        <div className="mt-4">
          <label>Card Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        <CancellationPolicy />

        {/* Submit Button */}
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
