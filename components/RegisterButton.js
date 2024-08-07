import React from 'react';

export default function RegisterButton() {
  return (
    <div className="block--gradient">
      <div className="block__text__container">
        <h5 className="block__title">Get started with Lyket today!</h5>
        <p className="block__text">
          Empower your users to provide feedback, engage with your content, and
          create a vibrant community. Take the next step towards enhancing user
          experience and drive meaningful interactions!
        </p>
      </div>
      <div className="block__image">
        <a href={`${process.env.appBaseUrl}/signup`} className="button">
          Get started for free
        </a>
      </div>
    </div>
  );
}
