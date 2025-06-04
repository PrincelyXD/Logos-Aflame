"use client";

import { useState } from "react";

const UserAvatarCircle = ({
  person1,
  person2,
  persnon3,
  group,
}: {
  group: number;
  person1: string;
  person2?: string;
  persnon3?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="left-0 mr-5 flex w-fit"
    >
      <span
        className={` blogAvatarCircle
           ${
            isExpanded ? "mr-0" : "-mr-3"
          } block  ${person1} bg-cover bg-center`}
      ></span>

      {group > 1 && (
        <span
          className={` blogAvatarCircle
             ${
               isExpanded ? "mr-0" : "-mr-3"
             } block  ${person2} bg-cover bg-center`}
        ></span>
      )}

      {group > 2 && (
        <span
          className={`blogAvatarCircle${
              isExpanded ? "mr-0" : "-mr-3"
            } block  ${persnon3} bg-cover bg-center`}
        ></span>
      )}
    </div>
  );
};

export default UserAvatarCircle;
