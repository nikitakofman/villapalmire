import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faJugDetergent } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
      {/* <h1 className="px-10 text-3xl -mb-8 w-full">Our services</h1> */}
      <div
        className="h-full  ml-5 mr-5 md:ml-10 md:mr-10  flex flex-col md:flex-row text-black"
        style={{ fontFamily: "Open Sans" }}
      >
        <div className="h-full w-full mr-3 ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full h-[100px] md:min-h-[200px] rounded-xl shadow-xl shadow-xl eventsbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66]  text-3xl"
                >
                  Events
                </h1>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>
              <p>
                Villa Palmire can be booked for private events, dinners,
                birthdays and more.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full mr-3 ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full  h-[100px] md:min-h-[200px] rounded-xl shadow-xl breakfastbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66] text-3xl"
                >
                  Breakfast
                </h1>
                <FontAwesomeIcon
                  icon={faMugSaucer}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p>
                Our daily breakfast offers pastries, orange juice, coffee and
                tea.
              </p>

              <p className="text-[13px] italic">
                No gluten and vegan options available
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full mr-3  ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full  h-[100px] md:min-h-[200px] rounded-xl shadow-xl chauffeurbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66] text-3xl"
                >
                  Chauffeur
                </h1>
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p>
                We offer a taxi service between La Turbie and Monaco for a fixed
                50€ fee.
              </p>
              <p className="text-[13px] italic">
                Custom destinations are possible on demand
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full  ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full h-[100px] md:min-h-[200px] rounded-xl shadow-xl laundrybg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66]  text-3xl"
                >
                  Laundry
                </h1>
                <FontAwesomeIcon
                  icon={faJugDetergent}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p>Laundry service is available during your stay.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
