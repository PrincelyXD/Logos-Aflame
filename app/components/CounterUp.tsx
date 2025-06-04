import React from "react";
import CountUp from "react-countup"

const CounterUp = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">
          {" "}
          <CountUp
            enableScrollSpy
            scrollSpyOnce
            end={500}
            delay={500}
            duration={1.5}
          />
          +
        </div>
        <div className="text-blue-200 text-sm">Members</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">  <CountUp
            enableScrollSpy
            scrollSpyOnce
            end={15}
            delay={2000}
            duration={1.5}
          /></div>
        <div className="text-blue-200 text-sm">Years Serving</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">

        <CountUp
            enableScrollSpy
            scrollSpyOnce
            end={3}
            delay={500}
            duration={2}
          />
        </div>
        <div className="text-blue-200 text-sm">Weekly Services</div>
      </div>
    </div>
  );
};

export default CounterUp;
