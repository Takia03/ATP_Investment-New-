export function Steps() {
    const steps = [
      {
        number: 1,
        title: "Lorem Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing in the real economy globally"
      },
      {
        number: 2,
        title: "Lorem Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing in the real economy globally"
      },
      {
        number: 3,
        title: "Lorem Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing in the real economy globally"
      },
      {
        number: 4,
        title: "Lorem Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing in the real economy globally"
      }
    ];
  
    return (
      <div className="relative flex justify-between items-start gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 relative">
            <div className={`bg-gray-100 p-6 rounded-lg h-full ${index % 2 === 0 ? 'transform translate-y-4' : 'transform -translate-y-4'} shadow-lg`}>
              <div className="flex flex-col items-center mb-4">
                {/* Increased font size and weight for step number */}
                <span className="w-10 h-10 flex items-center justify-center text-blue-600 text-black rounded-full text-lg font-bold mb-4">
                  {step.number}
                </span>
                <div>
                  {/* Increased font size and weight for title */}
                  <h3 className="font-bold text-xl mb-2 text-center">{step.title}</h3>
                  {/* Optional: Increase font size of description as well */}
                  <p className="text-gray-600 text-base text-center">{step.description}</p>
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-[30px] right-[-30px] transform translate-x-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  