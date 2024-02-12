import React from 'react'
import ThemeSwitcher from '../../public/button'

export default function Page() {
  return (
      <div>
        <div>
          <ThemeSwitcher/>
        </div>
        <div className="cv">
          <div className="cv_info">
            <div className="cv_info_left">
              <h2 className="cv_info_name">Yurii Moskaliuk</h2>
              <div className="cv_info_email"><p><span>Email: </span> casualua14@gmail.com</p></div>
              <div className="cv_info_phone"><p><span>Phone: </span>068 11 034 0834</p></div>
            </div>
            <div className="cv_info_right">
              <picture className="cv_info_right_picture"><img className="cv_info_right_picture"
                                                              src="/unnamed.jpeg" alt="" srcSet=""/></picture>
            </div>
          </div>
          <div className="cv_edu">
            <h2>Education</h2>
            <div className="cv_edu_degree"><p><span>Degree: </span>Bachelor of Science in Computer Science</p>
            </div>
            <div className="cv_edu_university"><p><span>University: </span>University Name</p></div>
            <div className="cv_edu_graduation"><p><span>Year of Graduation: </span>2022</p></div>
          </div>
          <div className="cv_exp">
            <h2>Experience</h2>
            <div className="cv_exp_position"><p><span>Position: </span>Software Engineer</p></div>
            <div className="cv_exp_company"><p><span>Company: </span>XYZ Tech Inc.</p></div>
            <div className="cv_exp_duration"><p><span>Duration: </span>January 2022 - Present</p></div>
            <div className="cv_exp_respons"><p><span>Responsibilities: </span>Lorem ipsum dolor sit amet,
              consectetur
              adipiscing elit. Duis quis velit ac eros lacinia dapibus.
            </p></div>
          </div>
          <div className="cv_skills">
            <h2>Skills</h2>
            <div className="cv_skills_info">
              <p>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="cv_projects">
            <h2>Projects</h2>
            <div className="cv_projects_info">
              <p><span>Project 1: </span></p>
              <p><span>Project 2: </span></p>
            </div>
          </div>
        </div>
      </div>
  );
}
