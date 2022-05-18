import MeetupDetails from "../../components/meetups/MeetupDetail";

export default function MeetupDetailsPage() {
  return (
    <MeetupDetails
      title="A third meetup"
      address="some Address"
      image="https://images.unsplash.com/1/bag-and-hands.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80"
      description="Description for the third meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // the params.meetupId is the param set by the URL based on the
  // [meetupId] in the page path.
  const meetupID = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: "m2",
        title: "Second meetup",
        image:
          "https://images.unsplash.com/photo-1598908314766-3e3ce9bd2f48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        address: "Some Address",
        description: "this is a second meetup",
      },
    },
  };
}
