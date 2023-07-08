import React from 'react';

export default function RegisterButton({ record }) {
  return (
    <div className="block--gradient" key={record ? record.id : 'register'}>
      <div className="block__text__container">
        <h5 className="block__title">Get started with Lyket today!</h5>
        <p className="block__text">
          Empower your users to provide feedback, engage with your content, and
          create a vibrant community. Take the next step towards enhancing user
          experience and drive meaningful interactions!
        </p>
      </div>
      <div className="block__image">
        <a href={`${process.env.APP_URL}/users/sign_up`} className="button">
          Get started for free
        </a>
      </div>
    </div>
  );
}
