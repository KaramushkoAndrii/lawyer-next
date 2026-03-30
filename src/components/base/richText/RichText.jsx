"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Heading from "@/components/UI/heading/Heading";

export default function RichText({ content }) {
  if (!content) return null;
  return (
    <div className="rich-text">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children, level }) => {
            const tagLevel = `h${level}`;

            return (
              <Heading
                level={tagLevel}
                align={tagLevel === "h4" ? "center" : "responsive"}
              >
                {children}
              </Heading>
            );
          },
        }}
      />
    </div>
  );
}
