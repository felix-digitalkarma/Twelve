import React, { Fragment, useEffect } from "react";
import { useStories } from "../contexts/stories";
import Card from "../components/Card";

export const Stories = () => {
  const [{ data }, { fetch }] = useStories();

  useEffect(() => {
    if (!data) fetch();
  }, [fetch, data]);

  return (
    <Fragment>
      {data &&
        data.map((story) => (
          <Card key={story._id} {...story} user={story.user} />
        ))}
    </Fragment>
  );
};

export default Stories;
