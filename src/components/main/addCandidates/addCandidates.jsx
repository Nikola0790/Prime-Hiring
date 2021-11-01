import { useState } from "react";
import { addCandidate } from "../../../service/service";

const initalForm = {
  id: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  picture: "",
  pricePerHour: 0,
  technology: "",
  descrip: "",
  expirience: "",
  nativeLanguage: "",
  linkedinProfile: "",
  status: "Open to work",
};

export const AddCandidate = () => {
  const [doc, setDoc] = useState(initalForm);

  const handleChange = (event) => {
    setDoc({
      ...doc,
      [event.target.name]: event.target.value,
    });
  };

  const addCand = () => {
    addCandidate(doc);
  };

  return (
    <div className="container">
      <form onSubmit={addCand}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3 mt-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input
                name="phone"
                type="tel"
                className="form-control"
                id="phone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loc" className="form-label">
                Location
              </label>
              <input
                name="location"
                type="text"
                className="form-control"
                id="loc"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pic" className="form-label">
                Picture
              </label>
              <input
                name="picture"
                type="url"
                className="form-control"
                id="pic"
                placeholder="url"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price per hour
              </label>
              <input
                name="pricePerHour"
                type="number"
                className="form-control"
                id="price"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tec" className="form-label">
                Technology:
              </label>
              <select
                name="technology"
                id="tec"
                onChange={handleChange}
                required
              >
                <option value="--">--</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
                <option value=".Net">.Net</option>
                <option value="Flutter">Flutter</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">
                Description
              </label>
              <textarea
                name="descrip"
                className="form-control"
                id="textarea"
                rows="3"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exp" className="form-label">
                Years of expirience
              </label>
              <input
                name="expirience"
                type="number"
                className="form-control"
                id="exp"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lang" className="form-label">
                Native Language:
              </label>
              <select
                name="nativeLanguage"
                id="lang"
                onChange={handleChange}
                required
              >
                <option value="-">--</option>
                <option value="English">English</option>
                <option value="Serbian">Serbian</option>
                <option value="Bulgarian">Bulgarian</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="linked" className="form-label">
                LinkedIn
              </label>
              <input
                name="linkedin"
                type="url"
                className="form-control"
                id="linked"
                placeholder="url"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input type="submit" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
