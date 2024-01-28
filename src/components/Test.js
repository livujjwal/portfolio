import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Test() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Scroll to Specific Section</h1>
          <nav>
            <ul>
              <li>
                <Link
                  to="/section1"
                  onClick={() => scrollToSection(section1Ref)}
                >
                  Section 1
                </Link>
              </li>
              <li>
                <Link
                  to="/section2"
                  onClick={() => scrollToSection(section2Ref)}
                >
                  Section 2
                </Link>
              </li>
              <li>
                <Link
                  to="/section3"
                  onClick={() => scrollToSection(section3Ref)}
                >
                  Section 3
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/section1">
            <section ref={section1Ref}>
              <h2>Section 1</h2>
              <p>This is the first section of the website.</p>
            </section>
          </Route>
          <Route path="/section2">
            <section ref={section2Ref}>
              <h2>Section 2</h2>
              <p>This is the second section of the website.</p>
            </section>
          </Route>
          <Route path="/section3">
            <section ref={section3Ref}>
              <h2>Section 3</h2>
              <p>This is the third section of the website.</p>
            </section>
          </Route>
        </main>
      </div>
    </Router>
  );
}
