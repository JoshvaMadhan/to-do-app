import React from "react";

const Landing = () => {
  return (
   <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
  {/* Header */}
  <header className="bg-green-500 dark:bg-gray-950 text-white p-6 text-center">
    <h1 className="text-2xl font-bold">Welcome To TODO Master</h1>
    <nav className="mt-4">
      <a href="#features" className="text-gray-200 hover:text-blue-400 px-3 dark:hover:text-blue-300">Features</a>
      <a href="#about" className="text-gray-200 hover:text-blue-400 px-3 dark:hover:text-blue-300">About</a>
      <a href="#contact" className="text-gray-200 hover:text-blue-400 px-3 dark:hover:text-blue-300">Contact</a>
    </nav>
  </header>

  {/* Hero Section */}
  <section className="py-12 text-center">
    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-12">Todo Master is yours</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">If any doubt</p>
    <div className="mt-6">
      <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</a>
      <a href="#about" className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">Learn More</a>
    </div>
  </section>

  {/* Features Section */}
  <section id="features" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Here the features of Todo</h1>
    <h1 className="text-xl text-gray-600 dark:text-gray-300 mb-6">Why you chose Todo Master</h1>
    <p className="text-base max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
      TodoMaster helps you stay organized and productive by managing your daily tasks with ease. Add, 
      edit, and complete your tasks—all in one simple and intuitive interface.
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <FeatureGuard title="Intuitive Design" description="TodoMaster helps you organize your day and boost your productivity." />
      <FeatureGuard title="Smart Features" description="Get reminders, edit tasks easily, and never miss a deadline." />
      <FeatureGuard title="Cross Platform" description="Works seamlessly across mobile and desktop." />
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="py-16 bg-blue-100 dark:bg-gray-800 text-center">
    <h1 className="text-3xl font-bold text-blue-800 dark:text-white">Todo Manager</h1>
    <p className="text-base text-gray-600 dark:text-gray-300 mt-4">Focus on what matters—let us handle the rest.</p>
  </section>

  {/* Contact Section */}
  <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">We are here for you</h1>
    <p className="text-base text-gray-600 dark:text-gray-300 mt-4">
      With powerful features like real-time syncing, smart reminders.
    </p>
    <div className="mt-6 flex justify-center">
      <form className="flex flex-col items-center">
        <input type="text" placeholder="Enter your name" className="w-full max-w-sm p-2 border border-gray-300 dark:border-gray-700 rounded-lg my-2 bg-white dark:bg-gray-800 text-black dark:text-white" />
        <input type="email" placeholder="Enter your email" className="w-full max-w-sm p-2 border border-gray-300 dark:border-gray-700 rounded-lg my-2 bg-white dark:bg-gray-800 text-black dark:text-white" />
        <textarea className="w-full max-w-sm h-28 p-2 border border-gray-300 dark:border-gray-700 rounded-lg my-2 bg-white dark:bg-gray-800 text-black dark:text-white" placeholder="Write down your comments"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
      </form>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 dark:bg-gray-950 text-white py-4 text-center">
    <p className="text-sm text-gray-300">&copy; All rights reserved to Todo</p>
  </footer>
</div>

  );
};

const FeatureGuard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4 text-left">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Landing;
