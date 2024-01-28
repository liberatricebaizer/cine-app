import React from "react";
import Layout from "../layout/Layout";
import Head from "../components/Head";

const AboutUs = () => {
  return (
    <Layout>
      <div className="min-height-screen container max-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <div>
                <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                  Welcome to Cineverse, where the cinematic passion meets
                  storytelling excellence
                </h3>
              </div>
              <div className=" text-sm leading-8 text-text">
                <div className="mt-4 bg-dry p-8 rounded-md">
                  <p>
                    At Cineverse, We'are dedicated to bringing you the best of
                    the cinematic world,Our team is comprised of movie
                    enthusiasts who live and breathe the magic of film. From
                    classic masterpieces to the latest blockbursters,we aim to
                    share our love for movies through engaging content,reviews
                    and insightful articles.
                  </p>
                </div>
                <div className="mt-4 bg-dry p-8 rounded-md">
                  <p>
                    Our mission is to create a vibrant community where movie
                    lovers of all kinds can connect, explore,and celebrate the
                    art of filmmaking. Join us on the cinematic journey as we
                    delve into the realms of imagination,entertainment,and
                    creativity.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-dry rounded-lg">
                <span className="text-3xl block text-groon font-extrabold">
                  12K
                </span>
                <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Movies ignite worlds,evoke feelings,and inpire, Embrace their
                  magic.
                </p>
              </div>
              <div className="p-8 bg-dry rounded-lg">
                <span className="text-3xl block text-groon font-extrabold ">
                  10K
                </span>
                <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Completely free, embrace your uniqueness and shine brightly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
