import { Plus, X, CheckCircle } from "lucide-react";

const ProgressComponent = () => {
  return (
    <div className=" p-4 bg-white shadow-md rounded-lg">
      <div className="w-6/10 mx-auto flex  justify-evenly mb-6">
        {['Submit a project', 'At the auction', 'In progress', 'Under warranty', 'Completed'].map((step, index, array) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${index <= 1 ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {index < 1 ? <CheckCircle className="w-5 h-5" /> : index === 1 ? <span className="font-bold">{index + 1}</span> : index + 1}
              </div>
              <span className={`mt-2 text-sm ${index <= 1 ? 'text-purple-600 font-semibold' : 'text-gray-500'}`}>{step}</span>
            </div>
            {index < array.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  index <= 0 ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressComponent;
