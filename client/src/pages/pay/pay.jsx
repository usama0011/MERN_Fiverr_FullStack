import React, { useState,useEffect } from "react";
import newRequest from "../../assets/newRequest";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./Pay.scss";
import { useParams } from "react-router-dom";
import CheckOutForm from "../../components/CheckoutForm/CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51L2qqILYotytfE9ylMJz4WJhSuC80QkeMCtNGwFmxBszCpjEA0SaxhuQgWE9s1SA344aZX5dZWwYgUzSF7p8aaQD00qREDL4zw"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm/>
        </Elements>
      )}
  </div>;
};

export default Pay;