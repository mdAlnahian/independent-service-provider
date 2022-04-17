import React from 'react';

const Blogs = () => {
    return (
      <div className="about w-50 mx-auto mt-5">
        <div className="">
          <h2> 1.Difference between authorization and authentication?</h2>
          <p>
            Simply authentication is the process of verifying who someone is,
            whereas authorization is the process of verifying what specific
            applications, files, and data a user has access to
          </p>
        </div>
        <div className="">
          <h2>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            By using firebase it is easy to implement authentication and authorization system ,it is a third party app to control the authorization.So it has more security than custom authentication and authorization system,thats why its more reliable. <br /> Usually, authentication by a server entails the use of
            a user name and password. Other ways to authenticate can be through
            cards, retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div className="">
          <h2>
            3. What other services does firebase provide other than
            authentication?
          </h2>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
      </div>
    );
};

export default Blogs;