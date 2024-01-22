import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slider() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex">
          <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-600" />
        </div>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <div
              className="  text-3xl w-full  flex pl-1 -mt-2.5 text-[#BB9B66]  "
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              MENU
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex   underline-animation2 flex-col sm:flex-row justify-between text-white  gap-3 items-left text-left text-2xl">
              <div className="flex gap-2 w-full flex-col justify-between">
                <p className="p-1 w-full cursor-pointer">Rooms</p>
                <p className=" p-1 w-full cursor-pointer">Events</p>

                <p className=" p-1 w-full cursor-pointer">Region</p>
                <p className=" p-1 w-full cursor-pointer">Contact</p>
              </div>
              {/* <div className="flex gap-2 w-full flex-col justify-between">
                <p className=" p-1 w-full cursor-pointer">Contact</p>
                <p className=" p-1 w-full cursor-pointer">Terms</p>

                <p className=" p-1 w-full cursor-pointer">RGPD</p>
                <p className=" p-1 w-full cursor-pointer">Support</p>
              </div> */}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Slider;
