export default function TermsPage() {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home • Login
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Shop Terms & Conditions
        </h1>

        <h2 className="text-lg font-bold mb-6">
          GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6 text-gray-700 text-sm leading-relaxed">

            <h3 className="font-bold text-base">
              Definitions & Interpretation
            </h3>

            <p>
              In the following Terms and Conditions of sale, unless the context requires otherwise:
            </p>

            <ul className="space-y-2">
              <li>(a) Shop means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) Customer means the person or corporation placing an order;</li>
              <li>(c) Products means goods or services provided by the Shop;</li>
              <li>(d) if the Customer comprises more than one person, liability is joint;</li>
              <li>(e) references include successors and assigns;</li>
              <li>(f) time is of the essence;</li>
              <li>(g) all currency references are in Australian dollars;</li>
            </ul>

            <h3 className="font-bold text-base pt-4">
              Quotations
            </h3>

            <p>
             Any quotation by Shop to the Customer will be open for acceptance by the Customer within the period stated in the quotation or, where no period is stated, within seven (7) days from the date of the quotation. Thereafter, prices stated in the quotation may be varied by Shop without notice to the Customer.
            </p>


            <h3 className="font-bold text-base pt-4">
              Prices / Taxes
            </h3>

            <p>
          The prices charged by and payable to Shop will be the ruling prices applicable at the time of order placement, provided that the Products are accepted for delivery within a reasonable time. Prices are subject to change without notice. Recommended retail prices are provided for indicative purposes only and there is no obligation for Shop to comply with that recommendation. It as agreed that should the Customer fail for any reason to acquire the quantity of Products sold then without limiting Shop other rights and remedies the unit price charged for the goods sold may be amended to take into account any variation in the total quantity purchased by the Customer. Prices include GST, but do not include any other tax or duty, which is in addition to the price and is to be paid by the Customer at the time of payment for the Products.
            </p>


            <h3 className="font-bold text-base pt-4">
              Terms of Payment
            </h3>

            <p>
             Credit Card Payments may attract a surcharge, and Shop will inform the Customer if this is to be the case before processing the transaction.
            </p>
            <p>
            Unless otherwise agreed in writing by Shop, where Shop has not agreed in writing to provide commercial credit to the Customer, the total purchase price for Products supplied will be due for payment in cash prior to delivery.
            </p>
            <p>
             Where Shop has agreed in writing to provide commercial credit to the Customer, the Customer must make payments in accordance with the payment terms provided by Shop.
            </p>
            <p>
             Where Shop has approved the provision of a commercial credit arrangement with the Customer but has not provided notice of the payment terms to the Customer, the Customer must pay the total purchase price for Products supplied within seven days of the statement date.
            </p>
            <p>
              Credit Card Payment at an Invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation.
            </p>
            <p>
             Where Shop has approved the provision of a commercial credit arrangement with the Customer but has not provided notice of the payment terms to the Customer, the Customer must pay the total purchase price for Products supplied within seven days of the statement date.
            </p>

            <h3 className="font-bold text-base pt-4">
              Credit Accounts
            </h3>
            <p>Credit Card Payment at an Invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation.</p>
            <p>Credit Card Payment at an Invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation.</p>

            
            <h3 className="font-bold text-base pt-4">
              Change of Ownership
            </h3>
            <p>Trading accounts are approved by Shop based on the information supplied and the representations made by the Customer. In the event that there is a change in ownership of the Customer, whether total or partial, the Customer must immediately provide written notice to Shop informing Shop of these changes. Until Shop receives written notice from the Customer of a change in ownership, the Customer (including where it is a company or trustee, each of the Directors thereof) holds Shop indemnified against any and all losses, unpaid accounts, interest, damages, costs, charges, fees and expenses incurred or suffered by Shop in trading with any person, company (including the same company but with a different shareholder or shareholders) or other entity (including a trust) which may have purchased the Customers business or any interest in the Customers business or any of the shares in the Customer and used the Customers previously approved account for trading.</p>



          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[300px]">

            <div className="bg-gray-100 border rounded-md p-5 space-y-3 lg:sticky lg:top-20">

              <h4 className="font-semibold text-sm mb-2">
                Definitions & Interpretation
              </h4>

              <ul className="text-sm text-gray-600 space-y-2">
                <li className="cursor-pointer hover:text-blue-600">General</li>
                <li className="cursor-pointer hover:text-blue-600">Quotations</li>
                <li className="cursor-pointer hover:text-blue-600">Prices / Taxes</li>
                <li className="cursor-pointer hover:text-blue-600">Terms of Payment</li>
                <li className="cursor-pointer hover:text-blue-600">Credit Accounts</li>
                <li className="cursor-pointer hover:text-blue-600">Change of Ownership</li>
                <li className="cursor-pointer hover:text-blue-600">Information on Products</li>
                <li className="cursor-pointer hover:text-blue-600">Delivery</li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}