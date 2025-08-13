import React from 'react';

const Contact = () => {
  const handleSalesContact = () => {
    console.log('Contact Sales clicked');
    window.location.href = 'mailto:sales@copym.ai?subject=Sales Inquiry';
  };

  const handleSupportContact = () => {
    console.log('Contact Support clicked');
    window.location.href = 'mailto:support@copym.ai?subject=Support Request';
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
        </svg>
      </div>

      {/* Gradient Shape */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px]  rounded-full blur-[60px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-16">
        {/* Header Section */}
        <div className="text-left mb-16 mt-8">
          <h1 className="brand-title mb-6 text-[#255f99]">
            Select the{' '}
            <span className="relative text-[#15a36e]">
              Copym team
            </span>{' '}
          </h1>
          <h1 className="brand-title mb-6 text-[#255f99]">
            you wish to reach
          </h1>
          <p className="brand-description">
            We will be delighted to help you out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Sales Card */}
          <div 
            className="bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#15a36e] hover:transform hover:-translate-y-1"
            onClick={handleSalesContact}
          >
            <div className="p-8 text-left">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white border-2 border-[#15a36e] rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#15a36e]"
                >
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              
              <h3 className="brand-card-title text-[#255f99] mb-4">
                Sales
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                For enterprise support or accessing premium features
              </p>
              
              <button className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-lg py-3 px-6 font-medium hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center">
                Contact Sales
                <span className="ml-2 text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Help & Support Card */}
          <div 
            className="bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#15a36e] hover:transform hover:-translate-y-1"
            onClick={handleSupportContact}
          >
            <div className="p-8 text-left">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white border-2 border-[#15a36e] rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#15a36e]"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              
              <h3 className="brand-card-title text-[#255f99] mb-4">
                Help & Support
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                For customer support inquiries
              </p>
              
              <button className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-lg py-3 px-6 font-medium hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center">
                Contact Support
                <span className="ml-2 text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
