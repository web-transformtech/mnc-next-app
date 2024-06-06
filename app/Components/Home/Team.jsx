import React from "react";

export default function Team() {
  return (
    <div className=" container mx-auto pb-32">
                        <div className="text-[36px] pb-6 text-center sm:px-2  text-primary font-semibold">Eventful Experiences Shared by Our Guests</div>

      <div className=" grid grid-cols-3 gap-10">
        <div className=" p-3">
          <img
            src={`./assets/Home/noprofile.webp`}
            className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
          />
          <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
            Sathish SKN
          </h2>
          <div className=" text-center pt-2">
            Had my brothers marriage reception at this auditorium, and it was
            fantastic! The space was bright and airy, and the staff went above
            and beyond to make sure everything was set up perfectly. It was a
            hassle-free experience from start to finish.
          </div>
        </div>

        <div className=" p-3">
          <img
            src={`./assets/Home/noprofile.webp`}
            className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
          />
          <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
            Samanue{" "}
          </h2>
          <div className="text-center pt-2">
            I attended a wedding reception at this auditorium, and it was
            fantastic! The venue was beautifully decorated, creating a warm and
            inviting atmosphere. The facilities were excellent, and the staff
            were attentive and accommodating. Overall, it was a wonderful
            experience. I highly recommend it for any event.
          </div>
        </div>
        <div className=" p-3">
          <img
            src={`./assets/Home/noprofilefemale.webp`}
            className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
          />
          <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
            Vidhya Selvaraj{" "}
          </h2>
          <div className="text-center pt-2">
            Very spacious Kalyana Mandapam. Our wedding on February 11 and 12,
            2021, had a large stage where close relatives could witness the
            ceremony. The outdoor space for photoshoots was fantastic, and
            parking made it convenient.
          </div>
        </div>
      </div>
    </div>
  );
}
