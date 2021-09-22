import React from "react";
import { Card, CardBody, CardImage } from "@progress/kendo-react-layout";
import { motion } from "framer-motion";

const Home = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Framer Picture",
    title: "Simple Card App",
    desc:
      "A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams.",
  };
  return (
    <Card>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <CardBody
          style={{
            height: "100vh",
            background: "#e6dfdf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              borderWidth: "1px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #fafafa",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 4 }}
            >
              <CardImage src={property.imageUrl} alt={property.imageAlt} />
            </motion.div>
            <div
              style={{
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <div
                  style={{
                    borderRadius: "15px",
                    background: "rgb(119 220 220)",
                    padding: "0.1rem 0.7rem",
                    fontWeight: "bold",
                    fontSize: ".8rem",
                    textTransform: "uppercase",
                  }}
                >
                  New
                </div>
                <div
                  style={{
                    color: "gray.500",
                    fontWeight: "semibold",
                    letterSpacing: "1px",
                    fontSize: ".8rem",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "#968d86",
                  }}
                >
                  {property.title}
                </div>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                  fontWeight: "400",
                  fontSize: "1.09rem",
                  lineHeight: "1.8",
                  color: "#000",
                }}
              >
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 3, duration: 1.3 }}
                >
                  {property.desc}
                </motion.div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: ".5rem 0",
                }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 1.4 }}
                >
                  <div
                    style={{
                      background: "rgb(255 17 0 / 25%)",
                      borderRadius: "5px",
                      padding: ".2rem 1rem",
                      fontWeight: "bold",
                      fontSize: ".8rem",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                    }}
                  >
                    Animation
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 1.8 }}
                >
                  <div
                    style={{
                      background: "rgb(119 220 220)",
                      borderRadius: "5px",
                      padding: ".2rem 1rem",
                      fontWeight: "bold",
                      fontSize: ".8rem",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                    }}
                  >
                    Framer
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 4, duration: 2.1 }}
                >
                  <div
                    style={{
                      background: "rgb(251 237 116)",
                      borderRadius: "5px",
                      padding: ".2rem 1rem",
                      fontWeight: "bold",
                      fontSize: ".8rem",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                    }}
                  >
                    Interaction
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </CardBody>
      </motion.div>
    </Card>
  );
};

export default Home;
