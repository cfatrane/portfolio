"use client";

import kebabCase from "lodash/kebabCase";

import { SimpleLayout } from "@/components/SimpleLayout";

import { JOBS_FR } from "@/constants/jobs/fr";

function ExperienceDetail({ params }: { params: { slug: string } }) {
  const experience = JOBS_FR.find(
    (element) => kebabCase(element.name) === kebabCase(params.slug),
  );

  console.log("params?.slug", params?.slug);
  console.log("experience", experience);
  console.log("fr");

  return (
    <SimpleLayout intro={experience!.title} title={experience!.name}>
      {/* My Post: {params?.slug} */}
      <h3 className="mb-4 text-4xl">Mission</h3>

      {experience?.missions?.map((mission, item) => (
        <p key={item}>{mission}</p>
      ))}
    </SimpleLayout>
  );
}

export default ExperienceDetail;
