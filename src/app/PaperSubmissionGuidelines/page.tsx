import Link from "next/link";
import React from "react";

const PaperSubmissionGuidelines = () => {
  return (
    <div className="p-14">
      <h1 className="text-4xl font-bold mb-6 text-center">Paper Submission Guidelines</h1>
      <ul className="list-disc px-10">
        <li>The paper submission must be original, previously unpublished work and not under review in any other conference or journal.</li>
        <li>The maximum length of the paper is five pages, including all figures, tables, and references.</li>
        <li>
          The format of the paper must follow the IEEE conference template, which can be found{" "}
          <Link href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn">
            <span className="text-red-500 hover:text-red-700">here</span>
          </Link>
          .
        </li>
        <li>The paper must be submitted in PDF format only.</li>
        <li>The review process will be double-blind, so authors should not include their names or any identifying information in the paper.</li>
        <li>The paper should be written in English, and the language must be of a high standard.</li>
        <li>The similarity index of the paper must not exceed 20%. Papers with a higher similarity index will be rejected without review.</li>
      </ul>
    </div>
  );
};

export default PaperSubmissionGuidelines;
