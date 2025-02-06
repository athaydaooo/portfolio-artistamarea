// eslint-disable-next-line camelcase
import React from "react";
import clsx from "@/utils/clsx.ts";
import { OultimoframeRoles } from "../../../../tina/__generated__/types.ts";

interface CreditsSectionProps {
  rolesData: OultimoframeRoles[];
  className?: string;
}

const CreditsSection: React.FC<CreditsSectionProps> = ({
  rolesData,
  className,
}) => {
  if (!rolesData) {
    return null;
  }

  const renderRole = (role: OultimoframeRoles) => {
    return role.members.map((element) => {
      if (role.hasSubtitle)
        return (
          <React.Fragment key={element.name}>
            {element === role.members[0] && (
              <React.Fragment key={`${element.name}-title`}>
                <p className="!text-center font-bold col-span-2 mb-4 ">
                  {role.title}
                </p>
              </React.Fragment>
            )}

            <p className="!text-right font-bold">{element.subtitle}</p>
            <p
              className={
                element === role.members[role.members.length - 1] ? "mb-4" : ""
              }
            >
              {element.name}
            </p>
          </React.Fragment>
        );
      return (
        <React.Fragment key={element.name}>
          <p className="!text-right font-bold">
            {element === role.members[0] ? role.title : ""}
          </p>
          <p
            className={
              element === role.members[role.members.length - 1] ? "mb-4" : ""
            }
          >
            {element.name}
          </p>
        </React.Fragment>
      );
    });
  };

  return (
    <section
      className={clsx(
        className || null,
        "flex w-full h-screen justify-center items-center",
      )}
    >
      <div className="grid grid-cols-2 auto-rows-min gap-x-4 p-8 text-md lg:text-xl">
        {rolesData.map((role) => renderRole(role))}
      </div>
    </section>
  );
};

export default CreditsSection;
