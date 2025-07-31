import Input from "../Input/Input";
import Fieldset from "../Fieldset/Fieldset";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
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
          id={firstNameId}
          label="First Name*"
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          name={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <Input
          id={lastNameId}
          label="Last Name*"
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          name={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <Input
          id={emailId}
          label="Enter Email*"
          type="email"
          placeholder="Enter email"
          value={email}
          name={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          id={contactId}
          label="Contact*"
          type="tel"
          placeholder="Enter Mobile Number"
          value={contact}
          name={contact}
          onChange={(e) => setContact(e.currentTarget.value)}
        />
        <div>
          <Fieldset
            header="Gender*"
            id={radioMaleId}
            label="Male"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.currentTarget.value)}
          />
          <Fieldset
            id={radioFemaleId}
            label="Female"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "female"}
            onChange={(e) => setGender(e.currentTarget.value)}
          />
          <Fieldset
            id={radioOtherId}
            label="Other"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "other"}
            onChange={(e) => setGender(e.currentTarget.value)}
          />
        </div>
        <div>
          <Fieldset
            header="Your best subject*"
            id={subjectEnglishId}
            label="English"
            type="checkbox"
            name="subject"
            value={subject.english}
            onChange={() => onSubjectChange("english")}
          />
          <Fieldset
            id={subjectMathId}
            label="Math"
            type="checkbox"
            name="subject"
            value={subject.math}
            onChange={() => onSubjectChange("math")}
          />
          <Fieldset
            id={subjectPhysicsId}
            label="Physics"
            type="checkbox"
            name="subject"
            value={subject.physics}
            onChange={() => onSubjectChange("physics")}
          />
        </div>
        <Input
          id={fileId}
          label="Upload File*"
          type="file"
          name="file"
          value={resume}
          onChange={(e) => setResume(e.currentTarget.files[0])}
        />
        <Input
          id={urlId}
          label="Enter URL*"
          type="url"
          name="url"
          value={url}
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.currentTarget.value)}
        />
        <SelectDropDown />
      </form>
    </article>
  );
}

export default Form;
