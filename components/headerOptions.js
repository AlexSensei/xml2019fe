import React from "react";
import { USER_TYPES } from "../constants/userTypes";
import Link from "next/link";

const HeaderOptions = ({ type }) => {
  const renderAnonymouseOptions = () => (
    <>
      <Link href="/">Works</Link>
    </>
  );

  const renderWriterOptions = () => (
    <>
      <Link href="/">Works</Link>
      <Link href="/my-articles">My articles</Link>
      <Link href="/publish">Publish article</Link>
    </>
  );

  const renderReviwerOptions = () => (
    <>
      <Link href="/">Works</Link>
      <Link href="/my-articles">My articles</Link>
      <Link href="/review-articles">Articles to review</Link>
      <Link href="/publish">Publish article</Link>
    </>
  );

  const renderPublisherOptions = () => (
    <>
      <Link href="/">Works</Link>
      <Link href="/pending-articles">View pending articles</Link>
    </>
  );

  const renderUserOptions = () => {
    switch (type) {
      case USER_TYPES.ANNONYMOUSE:
        return renderAnonymouseOptions();
      case USER_TYPES.AUTHOR:
        return renderWriterOptions();
      case "reviewer":
        return renderReviwerOptions();
      case "publisher":
        return renderPublisherOptions();
      default:
        return <div></div>;
    }
  };

  return renderUserOptions();
};

export default HeaderOptions;
