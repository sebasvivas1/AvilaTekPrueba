import ChannelList from "../components/channel-page/channelList";

const dummy = [
  {
    id: "ch1",
    title: "All About Cats",
    channelBanner:
      "https://image.shutterstock.com/image-photo/banner-kittens-cats-background-animals-260nw-731395711.jpg",
    altChannelBanner: "This is a channel banner",
    channelProfileImg:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    altChannelProfileImg: "this is a channel profile img",
    channelDesc:
      "This channel is all about cats! Here you can talk about anything you want cat related.",
    channelComments: "4",
  },
  {
    id: "ch2",
    title: "All About Dogs",
    channelBanner:
      "https://media.istockphoto.com/photos/various-dogs-horizontal-web-banner-picture-id926026268?k=6&m=926026268&s=170667a&w=0&h=4FNOJ30QVHVTXkaLq9OxFdS5CJ6_UXmc81KCXTcfxdw=",
    altChannelBanner: "This is a channel banner",
    channelProfileImg: "https://image.flaticon.com/icons/png/512/91/91517.png",
    altChannelProfileImg: "this is a channel profile img",
    channelDesc:
      "This channel is all about Dogs! Here you can talk about anything you want dog related.",
    channelComments: "4",
  },
];

function Home(props) {
  return (
    <div>
      <ChannelList channels={props.channels} />
    </div>
  );
}

// export async function getServerSideProps() {
//   const req = context.req;
//   const res = context.res;

//   // Fetch data from an API

//   return {
//     props: {
//       channels: dummy,
//     },
//   };
// }

export async function getStaticProps() {
  // Fetch data from an API or server

  return {
    props: {
      channels: dummy,
    },
    revalidate: 1,
  };
}

export default Home;
