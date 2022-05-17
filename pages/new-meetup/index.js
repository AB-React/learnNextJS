import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const handleAddMeetUp = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return <NewMeetUpForm onAddMeetUp={handleAddMeetUp} />;
};

export default NewMeetUpPage;
