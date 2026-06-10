import "./Project.css";

function Project() {
  return (
    <section className="projects">

      <h1>My Projects</h1>

      <p>
        Here are some of the projects I have worked on.
      </p>

      <div className="project-container">

        <div className="project-card">

          <h3>Introduction Page</h3>

          <p>
            A simple introduction webpage created
            using HTML and CSS.
          </p>

          <button>View Project</button>

        </div>

        <div className="project-card">

          <h3>Student Registration Form</h3>

          <p>
            Registration form developed using
            HTML, CSS and JavaScript.
          </p>

          <button>View Project</button>

        </div>

        <div className="project-card">

          <h3>Calculator</h3>

          <p>
            Calculator application capable of
            performing arithmetic operations.
          </p>

          <button>View Project</button>

        </div>

        <div className="project-card">

          <h3>To-Do List</h3>

          <p>
            Task management application with
            add and delete functionality.
          </p>

          <button>View Project</button>

        </div>

      </div>

    </section>
  );
}

export default Project;