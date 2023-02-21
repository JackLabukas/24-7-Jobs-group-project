import React from "react";
// import "src/index.css"; // import CSS file
import "../index.css";

function HowItWorks() {
	return (
		<section>
			<h2 id="how-title">How JobSite works</h2>
			<div className="row justify-content-center" id="myContainer">
				<div className="col col d-flex align-items-center justify-content-center high">
					<div className="card" id="izzy-card">
						<h3 className="izzy-h3">
							<span className="number" id="one">
								1
							</span>
							Search for jobs in your field
						</h3>
						<p>
							We offer a wide range of job listings in your field, from full-time to part-time to contract positions. You can filter your search results by location, salary, job type, and other criteria to find the best job matches for you. And with
							the ability to save your favorite job listings and receive email alerts when new jobs are posted that match your search criteria, you'll never miss out on a great opportunity.
						</p>
					</div>
				</div>
				<div className="col col d-flex align-items-center justify-content-center low">
					<div className="card" id="izzy-card">
						<h3 className="izzy-h3">
							<span className="number">2</span>
							<span>
								Apply for jobs that interests <i>you</i>
							</span>
						</h3>
						<p>
							At TechHire, we believe that finding the right job is about more than just submitting your resume. That's why we've created a platform that makes it easy to apply for job listings that interest you. With a free account, you can
							customize your job application by uploading your resume, cover letter, and other documents. And with the ability to track your job applications and receive updates on their status, you'll always be in the know about the latest
							developments.
						</p>
					</div>
				</div>
				<div className="col col d-flex align-items-center justify-content-center high">
					<div className="card izzy-card">
						<h3 className="izzy-h3">
							<span className="number">3</span>Get hired and start your new career
						</h3>
						<p>
							Once you're hired, our platform will guide you through the onboarding process, including filling out any necessary paperwork and completing any required trainings. You'll have access to resources and tools to help you succeed in your
							new job, such as career coaching, skill-building courses, and networking opportunities. And with the ability to stay connected with other TechHire members and receive updates on new job opportunities and career events, you'll be well on
							your way to a successful career.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
