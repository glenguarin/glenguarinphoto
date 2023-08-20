import { Row, Stack } from "react-bootstrap";

const Reviews = () => {
  return (
    <div>
      <p className="text-center mt-2 pt-5 fs-2 mb-0">Reviews</p>
      <h1 className="text-center mb-5">
        Some feedbacks shared by delighted customers
      </h1>
      <Stack className="text-center text-white">
        <Row className="bg-secondary mb-3">
          <p className="mt-5 fs-2">"The photos are beautiful"</p>
          <p className="mb-5">
            Yay! Thanks for capturing our wedding, Glen! The photos are
            beautiful, and will allow us to look back on this special day for
            the years to come. <br />- Kitty
          </p>
        </Row>
        <Row className="bg-secondary mb-3">
          <p className="fs-2">"Kudos to your expertise and professionalism"</p>
          <p>
            Many thanks Glen for capturing happy, emotional and intimate moments
            on our special day. Kudos to your expertise and professionalism as
            photographer. All the best on your business, for sure not just
            Pinoys but everyone in Auckland will choose you as their
            photographer. 😍😍😍 <br /> - Richelle
          </p>
        </Row>
        <Row className="bg-secondary mb-3">
          <p className="fs-2">"Thank you so much"</p>
          <p>
            Thank you so much. Hope you guys enjoyed your day with us. Blessings
            to you guys ❤ <br /> - Maureen
          </p>
        </Row>
        <Row className="bg-secondary mb-">
          <p className="fs-2">
            "These people will risk their lives to get the perfect shot!!!"
          </p>
          <p>
            These people will risk their lives to get the perfect shot!!! Love
            their work and friendly company 🙂 <br /> - Kevin
          </p>
        </Row>
      </Stack>
    </div>
  );
};

export default Reviews;
