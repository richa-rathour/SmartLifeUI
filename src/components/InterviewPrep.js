import React, { useState } from 'react';

const InterviewPrep = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock interview questions data
  const mockQuestions = {
    'javascript': [
      {
        id: 1,
        question: "What is the difference between let, const, and var?",
        answer: "var is function-scoped and can be redeclared and reassigned. let is block-scoped, can be reassigned but not redeclared. const is block-scoped and cannot be reassigned or redeclared after initialization."
      },
      {
        id: 2,
        question: "Explain closures in JavaScript",
        answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function returns. This allows for data privacy and the creation of function factories."
      },
      {
        id: 3,
        question: "What is the event loop in JavaScript?",
        answer: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible. It handles the execution of multiple chunks of your program over time."
      }
    ],
    'react': [
      {
        id: 1,
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It gets transpiled to React.createElement() calls."
      },
      {
        id: 2,
        question: "Explain the difference between props and state",
        answer: "Props are read-only data passed down from parent components. State is internal data that can be changed by the component itself using setState or useState hook."
      },
      {
        id: 3,
        question: "What are React hooks?",
        answer: "Hooks are functions that let you use state and other React features in functional components. They allow you to reuse stateful logic between components."
      }
    ],
    'java': [
      {
        id: 1,
        question: "What is Object-Oriented Programming?",
        answer: "OOP is a programming paradigm based on the concept of objects, which contain data (attributes) and code (methods). It emphasizes encapsulation, inheritance, polymorphism, and abstraction."
      },
      {
        id: 2,
        question: "Explain the difference between abstract class and interface",
        answer: "An abstract class can have both abstract and concrete methods, can have instance variables, and supports single inheritance. An interface can only have abstract methods (before Java 8), can only have constants, and supports multiple inheritance."
      },
      {
        id: 3,
        question: "What is the difference between == and equals() in Java?",
        answer: "== compares object references (memory addresses) for objects, while equals() compares the actual content of objects. For primitive types, == compares values."
      }
    ],
    'python': [
      {
        id: 1,
        question: "What is the difference between list and tuple?",
        answer: "Lists are mutable (can be modified after creation) and use square brackets. Tuples are immutable (cannot be modified after creation) and use parentheses."
      },
      {
        id: 2,
        question: "Explain list comprehensions",
        answer: "List comprehensions provide a concise way to create lists. They consist of brackets containing an expression followed by a for clause, then zero or more for or if clauses."
      },
      {
        id: 3,
        question: "What is the Global Interpreter Lock (GIL)?",
        answer: "GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. This can limit performance in CPU-bound multithreaded programs."
      }
    ]
  };

  const fetchQuestions = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    
    // Simulate API call delay
    setTimeout(() => {
      const normalizedTopic = topic.toLowerCase().trim();
      const topicQuestions = mockQuestions[normalizedTopic] || mockQuestions['javascript'];
      
      if (topicQuestions) {
        setQuestions(topicQuestions);
      } else {
        setError('No questions found for this topic. Try: JavaScript, React, Java, or Python');
      }
      setLoading(false);
    }, 1000);
  };

  const clearQuestions = () => {
    setQuestions([]);
    setTopic('');
    setError('');
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Interview Prep</h2>
        <p className="text-gray-600">Practice with curated interview questions for your next technical interview</p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Interview Questions</h3>
        <form onSubmit={fetchQuestions} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter topic (e.g., JavaScript, React, Java, Python)..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !topic.trim()}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
          >
            {loading ? 'Loading...' : 'Get Questions'}
          </button>
        </form>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Suggested Topics */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Try these topics:</p>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'React', 'Java', 'Python'].map((suggestedTopic) => (
              <button
                key={suggestedTopic}
                onClick={() => setTopic(suggestedTopic)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                {suggestedTopic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions List */}
      {questions.length > 0 && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Interview Questions for {topic}
            </h3>
            <button
              onClick={clearQuestions}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Clear All
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {questions.map((q, index) => (
              <div key={q.id} className="border-b border-gray-200 last:border-b-0">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-800 mb-3">
                        {q.question}
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {questions.length === 0 && !loading && !error && (
        <div className="text-center py-12 text-gray-500">
          <div className="text-6xl mb-4">🎤</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Ready to Practice?</h3>
          <p>Enter a topic above to get started with interview questions</p>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Interview Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h4 className="font-medium text-gray-800">Be Specific</h4>
              <p className="text-sm text-gray-600">Use concrete examples from your experience when answering questions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🤔</span>
            <div>
              <h4 className="font-medium text-gray-800">Think Aloud</h4>
              <p className="text-sm text-gray-600">Explain your thought process as you work through problems</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">❓</span>
            <div>
              <h4 className="font-medium text-gray-800">Ask Questions</h4>
              <p className="text-sm text-gray-600">Clarify requirements before jumping into solutions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">⏰</span>
            <div>
              <h4 className="font-medium text-gray-800">Practice Timing</h4>
              <p className="text-sm text-gray-600">Time yourself to get comfortable with interview pace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
