import React from "react";

function Team() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna"></img>
                        <div className="card-body text-center">
                            <img className="avatar rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna"></img>
                            <h4 className="card-title">Robert Downey Jr.</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Famous Actor</h6>
                            <p className="card-text">Robert John Downey Jr.'career has included critical and popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age. </p>
                            <a href="#" className="btn btn-info">Follow</a>
                            <a href="#" className="btn btn-outline-info">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;