import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      youtube: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
      bio: "",
      githubusername: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    } else {
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile Url"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="facebook Profile Url"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="youtube Profile Url"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="instagram Profile Url"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
          <InputGroup
            placeholder="linkedin Profile Url"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
        </div>
      );
    }
    //select options for status
    const options = [
      { label: "* Select Professional status", value: 0 },
      { label: "* Developer", value: "Developer" },
      { label: "* Junior Developer", value: "Junior Developer" },
      { label: "* Senior Developer", value: "Senior Developer" },
      { label: "* Manager", value: "Manager" },
      { label: "* Intern", value: "Intern" },
      { label: "* Instructor or Teacher", value: "Developer" },
      { label: "* Student or Learning", value: "Student or Learning" },
      { label: "* Other", value: "Other" }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">Lets get some Info</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  options={options}
                  info="Give an ideia where you are at on your carrer"
                />
                <TextFieldGroup
                  placeholder="* Company Handle"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <TextFieldGroup
                  placeholder="* Website Handle"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <TextFieldGroup
                  placeholder="* Profile skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <TextFieldGroup
                  placeholder="* Profile githubusername"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <TextAreaFieldGroup
                  placeholder="* Profile bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="A unique handle for your profile url. Yout full name, company name, nickname"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
