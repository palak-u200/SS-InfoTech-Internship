function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Side */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b293f"
                alt="Profile"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg animate-float"
              />
            </div>

            {/* Right Side */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                Hi, I'm Palak 👋
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am a Computer Engineering student passionate about web
                development, UI/UX design, and modern technologies.
                I enjoy creating responsive and attractive websites using
                React, Tailwind CSS, and JavaScript.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Currently, I am working on projects and internships to improve
                my technical skills and gain real-world experience in software
                development.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500/20 p-4 rounded-xl">
                  <h4 className="text-white font-bold">Education</h4>
                  <p className="text-gray-300 text-sm">
                    B.Tech Computer Engineering
                  </p>
                </div>

                <div className="bg-purple-500/20 p-4 rounded-xl">
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-300 text-sm">
                    Maharashtra, India
                  </p>
                </div>

                <div className="bg-purple-500/20 p-4 rounded-xl">
                  <h4 className="text-white font-bold">Skills</h4>
                  <p className="text-gray-300 text-sm">
                    React, JS, HTML, CSS
                  </p>
                </div>

                <div className="bg-purple-500/20 p-4 rounded-xl">
                  <h4 className="text-white font-bold">Goal</h4>
                  <p className="text-gray-300 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;