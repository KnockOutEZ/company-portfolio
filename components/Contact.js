import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import Projects from "./Projects";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import axios from "axios";

const Contact = () => {
  const smtpTrigger = async (event) => {
    event.preventDefault();

    const result = {
      "EmailTo": "ktowhid20@gmail.com",
      "EmailFrom": "ktowhid20@gmail.com",
      "EmailSub": "test",
      "EmailBody": `First name: ${event.target.firstname.value} \n Last name: ${event.target.lastname.value} \n Email: ${event.target.email.value} \n Body: \n ${event.target.message.value}`,
      "AppPassword": "qxioakzhcspnfcvs",
      "Host": "smtp.gmail.com",
      "Port": "587",
    };

    //  {"EmailTo": "ktowhid20@gmail.com", "EmailFrom": "ktowhid20@gmail.com", "EmailSub":"test2","EmailBody":"asdasdasdasdasd/asdqweasqweasd'asd+++++'_+qwe=asdqwe@!#$@#$@!!##@!##@qwe","AppPassword":"qxioakzhcspnfcvs","Host":"smtp.gmail.com","Port":"587"}
      axios.post('https://go-smtp-client.herokuapp.com/sendmail',result,{headers: {"Access-Control-Allow-Origin": "*"}}).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="projects">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Check Some of Our Beautiful Works{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            These are the projects that we are hyped to share with you!
          </p>
          {/* <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div> */}
          <div className="w-full flex flex-col py-12">
            <Projects />
          </div>
        </div>
        <div className="flex flex-col w-full" id="contact">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Contact Us
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Let's see what you have to say!
          </p>
          <form class="w-full max-w-lg mx-auto" onSubmit={smtpTrigger}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="firstname"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  name="firstname"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="lastname"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  name="lastname"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 h-48 resize-none"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <ButtonOutline
                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </ButtonOutline>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Trusted by Thousands of Happy Customer{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            We have customers all over the globe!
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> */}
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Make a career <br /> in our Company!
                </h5>
                <p>Lets work together!</p>
              </div>
              <a
                href=" https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com"
                target="__blank"
              >
                <ButtonPrimary>Join Us</ButtonPrimary>
              </a>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
