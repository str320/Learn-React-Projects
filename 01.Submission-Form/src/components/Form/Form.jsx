import Input from "../TextInput/TextInput";
import RadioGroup from "../RadioGroup/RadioGroup";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import FileUpload from "../FileUpload/FileUpload";
import UrlUpload from "../UrlUpload/UrlUpload";
import SelectDropdown from "../SelectDropDown/SelectDropDown";
import selectOptions from "../../data.js";
import { useId, useState } from "react";

function Form() {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const contactId = useId();
  const radioMaleId = useId();
  const radioFemaleId = useId();
  const radioOtherId = useId();
  const subjectEnglishId = useId();
  const subjectMathId = useId();
  const subjectPhysicsId = useId();
  const fileId = useId();
  const urlId = useId();
  const selectId = useId();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState({
    english: true,
    math: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, subject);
  }

  function onSubjectChange(subject) {
    setSubject((prevSubject) => ({
      ...prevSubject,
      [subject]: !prevSubject[subject],
    }));
  }
  return (
    <article className="isolate aspect-video w-200 rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 m-auto mt-20 px-10 py-20">
      <h1 className="text-2xl text-center mb-14 text-blue-500 ">
        Form in React
      </h1>
      <form action="" method="GET" onSubmit={handleSubmit}>
        <Input
          label="First Name*"
          id={firstNameId}
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          name={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <Input
          label="Last Name*"
          id={lastNameId}
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          name={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <Input
          label="Enter Email*"
          id={emailId}
          type="email"
          placeholder="Enter email"
          value={email}
          name={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          label="Contact*"
          id={contactId}
          type="tel"
          placeholder="Enter Mobile Number"
          value={contact}
          name={contact}
          onChange={(e) => setContact(e.currentTarget.value)}
        />
        <div>
          <RadioGroup
            header="Gender*"
            id={radioMaleId}
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.currentTarget.value)}
            label="Male"
          />
          <RadioGroup
            id={radioFemaleId}
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.currentTarget.value)}
            label="Female"
          />
          <RadioGroup
            id={radioOtherId}
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.currentTarget.value)}
            label="Other"
          />
        </div>
        <div>
          <CheckboxGroup
            header="Your best subject*"
            id={subjectEnglishId}
            type="checkbox"
            name="subject"
            value={subject.english}
            onChange={() => onSubjectChange("english")}
            label="English"
          />
          <CheckboxGroup
            id={subjectMathId}
            type="checkbox"
            name="subject"
            value={subject.math}
            onChange={() => onSubjectChange("math")}
            label="Math"
          />
          <CheckboxGroup
            id={subjectPhysicsId}
            type="checkbox"
            name="subject"
            value={subject.physics}
            onChange={() => onSubjectChange("physics")}
            label="Physics"
          />
        </div>
        <FileUpload
          label="Upload File*"
          id={fileId}
          type="file"
          name="file"
          value={resume}
          onChange={(e) => setResume(e.currentTarget.files[0])}
        />
        <UrlUpload
          label="Enter URL*"
          id={urlId}
          type="url"
          name="url"
          value={url}
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.currentTarget.value)}
        />
        <SelectDropdown
          label="Choose your level"
          id={selectId}
          name="select"
          value={selectedOption}
          disabled={true}
          onChange={(e) => setSelectedOption(e.currentTarget.value)}
          options={selectOptions}
        />
      </form>
    </article>
  );
}

export default Form;
