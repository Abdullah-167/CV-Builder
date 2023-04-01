import React, { useState, useRef } from "react";
import ava from "../assets/images/ava.svg";
import history from "../assets/images/history.svg";
import education from "../assets/images/education.svg";
import boook from "../assets/images/boook.svg";
import volunteering from "../assets/images/volunteering.svg";
import awards from "../assets/images/awards.svg";
import publications from "../assets/images/publications.svg";
import membership from "../assets/images/membership.svg";
import patents from "../assets/images/patents.svg";
import skills from "../assets/images/skills.svg";
import coverletter from "../assets/images/coverletter.svg";
import Topbar from "./Topbar";
import PersonalInfo from "./clientInfo/PersonalInfo";
import WorkHistory from "./clientInfo/WorkHistory";
import Skills from "./clientInfo/Skills";
import CoverLetter from "./clientInfo/CoverLetter";
import Accordion from "./clientInfo/Accordion";
import Education from "./clientInfo/Education";
import Certificate from "./clientInfo/Certificate";
import Volunteering from "./clientInfo/Volunteering";
import Awards from "./clientInfo/Awards";
import Publications from "./clientInfo/Publications";
import Membership from "./clientInfo/Membership";
import Patents from "./clientInfo/Patents";
import Sidebar from "./Sidebar";
import ReactToPrint from "react-to-print";

const Client = () => {
  const componentRef = useRef();
  const [personalInfoData, setPersonalInfoData] = useState();
  const [personalInfoDescription, setPersonalInfoDescription] = useState();
  const [workHistoryData, setWorkHistoryData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [certificatesData, setCertificatesData] = useState([]);
  const [volunteeringData, setVolunteeringData] = useState([]);
  const [awardsData, setAwardsData] = useState([]);
  const [publicationsData, setPublicationsData] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [patentsData, setPatentsData] = useState([]);
  const [coverletterData, setCoverletterData] = useState([]);

  const ClientTabs = [
    {
      id: "one",
      title: "Personal Information",
      icon: ava,
      content: (
        <PersonalInfo
          setPersonalInfoData={setPersonalInfoData}
          setPersonalInfoDescription={setPersonalInfoDescription}
        />
      ),
    },
    {
      id: "three",
      title: "Work History",
      icon: history,
      content: <WorkHistory setWorkHistoryData={setWorkHistoryData} />,
    },
    {
      id: "four",
      title: "Education",
      icon: education,
      content: <Education setEducationData={setEducationData} />,
    },
    {
      id: "five",
      title: "Certificates",
      icon: boook,
      content: <Certificate setCertificatesData={setCertificatesData} />,
    },
    {
      id: "six",
      title: "Volunteering",
      icon: volunteering,
      content: <Volunteering setVolunteeringData={setVolunteeringData} />,
    },
    {
      id: "seven",
      title: "Awards",
      icon: awards,
      content: <Awards setAwardsData={setAwardsData} />,
    },
    {
      id: "eight",
      title: "Publications",
      icon: publications,
      content: <Publications setPublicationsData={setPublicationsData} />,
    },
    {
      id: "nine",
      title: "Membership",
      icon: membership,
      content: <Membership setMembershipData={setMembershipData} />,
    },
    {
      id: "ten",
      title: "Patents",
      icon: patents,
      content: <Patents setPatentsData={setPatentsData} />,
    },
    {
      id: "eleven",
      title: "Skills",
      icon: skills,
      content: <Skills setWorkHistoryData={setWorkHistoryData} />,
    },
    {
      id: "thirteeen",
      title: "Cover Letter",
      icon: coverletter,
      content: <CoverLetter setCoverletterData={setCoverletterData} />,
    },
  ];

  return (
    <div className="w-full pb-40">
      <div>
        <div>
          <Sidebar />
        </div>
        <Topbar />
        <div className="ml-[160px]">
          <div className="flex mt-16 gap-28">
            <div>
              {ClientTabs.map((item) => {
                return (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4 mt-4 text-grey">
              <span>Save</span>
              <ReactToPrint
                trigger={() => <button>Download CV</button>}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </div>

        <div className="pl-[160px]" ref={componentRef}>
          <div className="px-10 py-20">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-secondary mb-5">
                {personalInfoData?.firstName ?? ''} {personalInfoData?.lastName ?? ''}
              </h2>
              <p className="text-secondary text-2xl font-medium text-center">
                {personalInfoData?.phone ?? ''} | {personalInfoData?.email ?? ''} |
                {personalInfoData?.location ?? ''} | {personalInfoData?.potfolio ?? ''}
              </p>
            </div>
            <div className="mb-10 ">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">
                Profile Summry
              </h1>
              <div className="text-base font-normal">
                {personalInfoDescription}
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">
                Work History
              </h1>
              {workHistoryData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <div className="max-w-[600px] flex justify-between">
                      <p className="text-lg font-medium text-grey mb-2">
                        {item.timePeriodFromDate} {"-"} {item.timePeriodToDate}
                      </p>
                      <p className="text-lg font-medium text-grey mb-2">
                        {item.jobTitle} {","} {item.companyName}
                      </p>
                    </div>
                    <div className="pl-10">

                      <div
                        className="w-full mb-5"
                        dangerouslySetInnerHTML={{
                          __html: item.responsibilities,
                        }}
                      />

                      <div
                        className="w-full"
                        dangerouslySetInnerHTML={{ __html: item.achievements }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mb-10 ">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">
                Education and Qualifications
              </h1>
              {educationData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-xl font-bold text-secondary mb-4 mr-4">
                      {item.degreeType} {","} {item.fieldofStudy} {","}
                      <span className="font-normal">{item.institute}</span>
                      <span className="font-normal">
                        {item.timePeriodFromDate} {"-"} {item.timePeriodToDate}
                      </span>
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">
                Training and Certification
              </h1>
              {certificatesData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-lg text-secondary font-bold mb-4 mr-4">
                      {item.cartificateTitle} {","}{" "}
                      <span className="font-normal">
                        {item.instituteName} {","} {item.timePeriodFromDate}{" "}
                        {"-"} {item.timePeriodToDate}
                      </span>
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Voluntary Experience</h1>
              {volunteeringData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    {item.timePeriodFromDate} {"-"}
                    <span className="text-sm b">
                      {item.timePeriodToDate}
                    </span>
                    {item.organisationName} {","} {item.volunteeringTitle} {","} {item.city}
                    <div
                      className="w-full mb-5"
                      dangerouslySetInnerHTML={{
                        __html: item.responsibilities,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">
                Awards and Recognitions
              </h1>
              {awardsData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-lg text-secondary font-bold mb-4 mr-4">
                      {item.title} {","}{" "}
                      <span className="font-normal">
                        {item.issuer} {","} {item.timePeriodFromDate} {"-"}{" "}
                        {item.timePeriodToDate}
                      </span>
                    </h4>
                  </div>
                );
              })}
            </div>


            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Publications</h1>
              {publicationsData.map((item, index) => {
                return (
                  <div key={index}>
                    <h4 className="text-lg text-secondary font-bold mb-4 mr-4">
                      {item.title} {","}
                      <span className="font-normal">
                        {item.publisher} {","} {item.timePeriodFromDate} {"-"}
                        {item.timePeriodToDate}
                      </span>
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Membership</h1>
              {membershipData.map((item, index) => {
                return (
                  <div key={index} className="pb-10 ">
                    <h4 className="text-lg font-semibold mb-4 mr-4">
                      {item.membershipName} {","} {item.issuer} {","}
                      <span className="text-sm b">
                        {item.URl} {","}  {item.timePeriodFromDate}
                      </span>
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Patents</h1>
              {patentsData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-lg font-semibold mb-4 mr-4">
                      {item.patentName} {","}
                      <span className=" font-normal">
                        {item.patentNumber} {","} <span className="text-sm"> {item.patentURL} </span>
                      </span>
                      <span className="text-sm b">
                     {","}   {item.timePeriodFromDate} {"-"} {item.timePeriodToDate}
                      </span>
                    </h4>
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Patents</h1>
              {patentsData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-lg font-semibold mb-4 mr-4">
                      {item.patentName} {","}
                      <span className=" font-normal">
                        {item.patentNumber} {","} <span className="text-sm"> {item.patentURL} {","}  {item.timePeriodFromDate} {"-"} {item.timePeriodToDate} </span>
                      </span>
                    </h4>
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mb-10">
              <h1 className="text-2xl text-secondary font-semibold mb-2 border-b border-b-secondary pb-2">Cover Letter</h1>
              {coverletterData.map((item, index) => {
                return (
                  <div key={index} className="pb-10">
                    <h4 className="text-lg font-semibold mb-4 mr-4">
                      {item.targetRole} {","}  {item.specialRequirements}
                    </h4>
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
