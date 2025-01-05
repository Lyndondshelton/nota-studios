import LandingPageLogo from "./components/landing-page-logo";
import SessionButton from "./components/book-session-button";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-lg w-full mx-auto">
        <LandingPageLogo />
      </div>
      <div className="flex flex-col justify-center px-7 lg:flex-row">
        <div id="pageDesc" className="w-full lg:w-3/4 ">
          <h2 className="mb-8 font-extrabold uppercase text-center">Like none of the above</h2>
          <p className="sqsrte-large my-4 break-words uppercase">
            NONE OF THE ABOVE STUDIOS IS A RECORDING STUDIO LOCATED IN 
            TURTLE CREEK, PA.
          </p>
          <p className="sqsrte-large my-4 break-words uppercase">
          WE SPECIALIZE IN MUSIC PRODUCTION SERVICES LIKE AUDIO RECORDING, 
          BEAT PRODUCTION, MIXING/MASTERING, AND MORE. VISIT OUR SERVICES 
          PAGE FOR MORE INFORMATION.
          </p>
        </div>
        <div id="bookSession" className="w-full pt-[9px] text-center lg:w-1/4 ">
          <SessionButton />
        </div>
      </div>
    </>
  );
}
