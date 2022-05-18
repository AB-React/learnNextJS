import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://images.unsplash.com/1/bag-and-hands.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80",
    address: "Some Address",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.unsplash.com/photo-1598908314766-3e3ce9bd2f48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "Some Address",
    description: "this is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // using revalidate will make the server side re-render a new static
//     // if the request is more than 10 seconds old from the previous request.
//     revalidate: 10,
//   };
// }

// This will make the server-side re-render the page on every request
// and then send a static page back to the client
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
