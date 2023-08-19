import ImageSlider from "../components/ImageSlider";
const App = () => {
  const slides = [
    {
      url: "https://live.staticflickr.com/65535/53116731121_36906cfa41_b.jpg",
      title: "beach",
    },
    {
      url: "https://live.staticflickr.com/65535/53116133937_f0d4057bbf_b.jpg",
      title: "boat",
    },
    {
      url: "https://live.staticflickr.com/65535/53116134097_5e38709e38_b.jpg",
      title: "forest",
    },
    {
      url: "https://live.staticflickr.com/65535/53116932484_0328a736b5_b.jpg",
      title: "city",
    },
    {
      url: "https://live.staticflickr.com/65535/53116133957_1818ee2f3d_b.jpg",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "64rem",
    height: "38rem",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={1024} />
      </div>
    </div>
  );
};

export default App;
