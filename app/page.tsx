import React from "react";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const reccentSessionsCompanions = await getRecentSessions(3);

  return (
    <main>
      <h1 className="text-2xl underline">Our top Companions</h1>
      <section className="home-section">
        {companions.map(({ id, subject, name, topic, duration, color }) => (
          <CompanionCard
            key={id}
            id={id}
            subject={subject}
            name={name}
            topic={topic}
            duration={duration}
            color={getSubjectColor(subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={reccentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
