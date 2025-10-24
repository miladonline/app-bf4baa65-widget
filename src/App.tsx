interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Hello World! 👋
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to your simple Hello World app built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold">✨ This is a simple greeting widget</p>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Received Data:</h2>
            <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto text-sm text-gray-700">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;